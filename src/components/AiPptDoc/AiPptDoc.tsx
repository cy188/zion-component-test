import { genAiPptDocSrc } from "./aiPptDocSrc";

const iframeInlineStyle: React.CSSProperties = {
  border: "0px solid",
  height: "100%",
  width: "100%",
};

export function AiPptDoc() {
  return <iframe style={iframeInlineStyle} srcDoc={genAiPptDocSrc()} />;
}
