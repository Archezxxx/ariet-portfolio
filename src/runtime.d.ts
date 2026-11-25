interface PortfolioRuntime {
  getLanguage(): string;
  translate(key: string, vars?: Record<string, string | number>): string;
  setLanguage(lang: string): void;
  getPaused(): boolean;
  setPaused(value: boolean): void;
  getTheme(): string;
  setTheme(value: string): void;
  openProject(id: string): void;
  mountGallery(root:HTMLElement,images:Array<{id:string;src:string}>):{setGlobalPaused(value:boolean):void;destroy():void};
}
interface Window {
  portfolio: PortfolioRuntime;
}
declare module "virtual:portfolio-runtime" {
  export const portfolio: PortfolioRuntime;
}
