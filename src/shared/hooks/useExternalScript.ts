import { useEffect } from "react";

export function useExternalScript(src: string) {
  useEffect(() => {
    if (document.querySelector(`script[src="${src}"]`)) return;

    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.defer = true;
    document.head.appendChild(s);
  }, [src]);
}
