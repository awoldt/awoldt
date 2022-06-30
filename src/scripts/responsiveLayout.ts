export default (
  a: React.RefObject<HTMLHeadingElement>,
  d: React.RefObject<HTMLParagraphElement>,
  p1: React.RefObject<HTMLParagraphElement>,
  p2: React.RefObject<HTMLParagraphElement>,
  p3: React.RefObject<HTMLParagraphElement>,
  p4: React.RefObject<HTMLParagraphElement>,
  c1: React.RefObject<HTMLDivElement>,
  changeBackgroundImg: React.Dispatch<React.SetStateAction<string>>,
  projectHeader: React.RefObject<HTMLHeadingElement>
) => {
  window.onresize = () => {
    const w = window.innerWidth;

    if (w >= 992) {
      console.log("LG OR BIGGER SCREEN");
      changeBackgroundImg("url(/waves.svg)");

      if (
        p1.current! &&
        p2.current! &&
        p3.current! &&
        p4.current! &&
        a.current! &&
        d.current! &&
        c1.current! &&
        projectHeader.current!
      ) {
        a.current.style.fontSize = "150px";
        d.current.style.fontSize = "40px";
        p1.current.style.fontSize = "22px";
        p2.current.style.fontSize = "22px";
        p3.current.style.fontSize = "22px";
        p4.current.style.fontSize = "22px";
        c1.current.style.paddingLeft = "150px";
        c1.current.style.paddingRight = "150px";
        projectHeader.current.style.lineHeight = "318px";
        projectHeader.current.style.margin = "0px";
      }
    } else if (w >= 768) {
      console.log("MD SCREEN");
      changeBackgroundImg("url(/waves.svg)");

      if (
        p1.current! &&
        p2.current! &&
        p3.current! &&
        p4.current! &&
        a.current! &&
        d.current! &&
        c1.current! &&
        projectHeader.current!
      ) {
        a.current.style.fontSize = "100px";
        a.current.style.marginTop = "25px";
        d.current.style.fontSize = "30px";
        p1.current.style.fontSize = "18px";
        p2.current.style.fontSize = "18px";
        p3.current.style.fontSize = "18px";
        p4.current.style.fontSize = "18px";
        c1.current.style.paddingLeft = "50px";
        c1.current.style.paddingRight = "50px";
        projectHeader.current.style.lineHeight = "318px";
        projectHeader.current.style.margin = "0px";

      }
    } else {
      console.log("SM OR SMALLER SCREEN");
      changeBackgroundImg("url(/waves-sm.svg)");

      if (
        p1.current! &&
        p2.current! &&
        p3.current! &&
        p4.current! &&
        a.current! &&
        d.current! &&
        c1.current! &&
        projectHeader.current!
      ) {
        a.current.style.fontSize = "60px";
        a.current.style.marginTop = "-250px";
        d.current.style.fontSize = "25px";
        p1.current.style.fontSize = "16px";
        p2.current.style.fontSize = "16px";
        p3.current.style.fontSize = "16px";
        p4.current.style.fontSize = "16px";
        c1.current.style.paddingLeft = "25px";
        c1.current.style.paddingRight = "25px";
        projectHeader.current.style.lineHeight = "0px";
        projectHeader.current.style.margin = "25px";

      }
    }
  };
};
