import { basicSetup, EditorView } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

const generateBookmarklet = (code: string) => {
  const output = document.getElementById("output");
  if (!output) return;
  code = replaceSingleQuotesWithDoubleQuotes(code);
  const bk = `javascript:(function(){${code}})();`;
  output.innerHTML = `<a href='${bk}'>Drag me to your bookmarks bar</a>`;
};

function replaceSingleQuotesWithDoubleQuotes(code: string) {
  return code.replace(/'/g, '"');
}
// function to insert a sample code into the textarea that randomly changes the background color of the page
const insertSampleCode = () => {
  return `const randomColor = Math.floor(Math.random()*16777215).toString(16);
document.body.style.backgroundColor = "#" + randomColor;`;
};

const handleForm = () => {
  const editor = setupEditor();
  const form = document.getElementById("form");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const code = editor?.state.doc.toString() || "";
    generateBookmarklet(code);
  });
};

const setupEditor = () => {
  const code = document.getElementById("code") as HTMLTextAreaElement;
  if (!code) return;
  return new EditorView({
    parent: document.getElementById("code-editor") || undefined,
    extensions: [basicSetup, javascript()],
    doc: insertSampleCode(),
  });
};

export default handleForm;
