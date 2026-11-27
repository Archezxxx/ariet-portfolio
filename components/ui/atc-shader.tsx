"use client";
import { useEffect, useRef } from "react";

const vertSrc = `#version 300 es
precision highp float;
layout(location=0) in vec2 a_pos;
void main(){ gl_Position = vec4(a_pos,0.0,1.0); }`;
const fragSrc = `#version 300 es
precision mediump float;
out vec4 fragColor;
uniform vec2 u_res;
uniform float u_time;
float tanh1(float x){ float e = exp(2.0*x); return (e-1.0)/(e+1.0); }
vec4 tanh4(vec4 v){ return vec4(tanh1(v.x),tanh1(v.y),tanh1(v.z),tanh1(v.w)); }
void main(){
  vec3 FC=vec3(gl_FragCoord.xy,0.0);
  vec3 r=vec3(u_res,max(u_res.x,u_res.y));
  float t=u_time;
  vec4 o=vec4(0.0);
  vec3 p=vec3(0.0);
  vec3 v=vec3(1.0,2.0,6.0);
  float i=0.0,z=1.0,d=1.0,f=1.0;
  for(;i++<36.0;o.rgb+=(cos((p.x+z+v)*0.1)+1.0)/d/f/z){
    p=z*normalize(FC*2.0-r.xyy);
    vec4 m=cos((p+sin(p)).y*0.4+vec4(0.0,33.0,11.0,0.0));
    p.xz=mat2(m)*p.xz;
    p.x+=t/0.2;
    z+=(d=length(cos(p/v)*v+v.zxx/7.0)/(f=2.0+d/exp(p.y*0.2)));
  }
  o=tanh4(0.2*o);o.a=1.0;fragColor=o;
}`;

export default function ShaderDemo_ATC() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current!;
    const gl = canvas.getContext("webgl2", {
      premultipliedAlpha: false,
      antialias: false,
    });
    if (!gl) {
      canvas.dataset.status = "unavailable";
      return;
    }
    const shaders: WebGLShader[] = [];
    const compile = (type: number, src: string) => {
      const shader = gl.createShader(type)!;
      shaders.push(shader);
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        throw new Error(gl.getShaderInfoLog(shader) || "Shader compile error");
      return shader;
    };
    let program: WebGLProgram | null = null;
    try {
      program = gl.createProgram()!;
      gl.attachShader(program, compile(gl.VERTEX_SHADER, vertSrc));
      gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragSrc));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        throw new Error(gl.getProgramInfoLog(program) || "Shader link error");
    } catch (error) {
      canvas.dataset.status = "error";
      canvas.dataset.error =
        error instanceof Error ? error.message : String(error);
      shaders.forEach((shader) => gl.deleteShader(shader));
      if (program) gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(program, "u_res"),
      uTime = gl.getUniformLocation(program, "u_time");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0,
      visible = false,
      last = 0,
      time = 0,
      disposed = false;
    const paused = () =>
      reduced.matches ||
      window.portfolio.getPaused() ||
      document.hidden ||
      !visible;
    const resize = () => {
      const w = canvas.clientWidth || innerWidth,
        h = canvas.clientHeight || innerHeight;
      const pixelBudget = w < 760 ? 75000 : 140000;
      const scale = Math.min(
        1,
        Math.sqrt(pixelBudget / (w * h)),
      );
      canvas.width = Math.max(1, Math.floor(w * scale));
      canvas.height = Math.max(1, Math.floor(h * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      if (visible) sync();
    };
    const render = (now: number) => {
      raf = 0;
      if (disposed) return;
      if (now && now - last < 50) {
        if (!paused()) raf = requestAnimationFrame(render);
        return;
      }
      if (now && last && !paused()) time += Math.min((now - last) / 1000, 0.1);
      last = now;
      gl.uniform1f(uTime, time);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      canvas.dataset.status = "ready";
      canvas.dataset.paused = String(paused());
      if (!paused()) raf = requestAnimationFrame(render);
    };
    const sync = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      last = 0;
      if (visible && !document.hidden) raf = requestAnimationFrame(render);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(canvas);
    document.addEventListener("visibilitychange", sync);
    document.addEventListener("portfolio:motion", sync);
    reduced.addEventListener("change", sync);
    resize();
    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      document.removeEventListener("portfolio:motion", sync);
      reduced.removeEventListener("change", sync);
      gl.deleteBuffer(buffer);
      shaders.forEach((shader) => gl.deleteShader(shader));
      gl.deleteProgram(program);
    };
  }, []);
  return <canvas ref={ref} className="atc-canvas" aria-hidden="true" />;
}
