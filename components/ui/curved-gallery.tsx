import {useEffect,useRef} from 'react';
import {usePortfolioLanguage,usePortfolioPaused} from '@/src/use-portfolio';
const images=[
 {id:'ocr'},
 {id:'exam'},
 {id:'cosmic'},
 {id:'consult'},
 {id:'cargo'}
];
export default function CurvedGallery(){
 const root=useRef<HTMLDivElement>(null);const controller=useRef<ReturnType<PortfolioRuntime['mountGallery']>|null>(null);
 const language=usePortfolioLanguage(),paused=usePortfolioPaused();
 useEffect(()=>{controller.current=window.portfolio.mountGallery(root.current!,images);return()=>{controller.current?.destroy();controller.current=null}},[]);
 useEffect(()=>{controller.current?.setGlobalPaused(paused)},[paused,language]);
 return <div className="curved-showcase"><div ref={root} className="curved-reel" data-ready="false" data-paused="true"><div className="reel-band" aria-hidden="true"/></div><div className="reel-toolbar"><span>{window.portfolio.translate('reel_note')}</span><button id="reel-toggle" className="reel-toggle metal-button" aria-pressed="false"><svg viewBox="0 0 20 20" aria-hidden="true"/><span/></button></div></div>;
}
