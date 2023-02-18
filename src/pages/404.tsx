import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.head.innerHTML = '<meta name="robots" content="noindex" />';
    document.body.innerHTML =
      '<html lang="en"><head><meta name="robots" content="noindex" /></head><body><h1>Page not found :(</h1><p>This page does not exist dumbass. <a href="/">return home</a></p></body></html>';
  }, []);

  return <></>;
}
