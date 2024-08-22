import { useState, useCallback, ChangeEvent } from "react";

import {
  upperCase,
  lowerCase,
  sentenceCase,
  titleCase,
  alternateCase,
  inverseCase,
} from "./utils/helper";

const App = () => {
  const [text, setText] = useState("");

  const onChangeText = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value),
    []
  );
  const onUpperCaseClick = useCallback(
    () => setText((prev) => upperCase(prev)),
    []
  );
  const onLowerCaseClick = useCallback(
    () => setText((prev) => lowerCase(prev)),
    []
  );
  const onSentenceCaseClick = useCallback(
    () => setText((prev) => sentenceCase(prev)),
    []
  );
  const onTitleCaseClick = useCallback(
    () => setText((prev) => titleCase(prev)),
    []
  );
  const onAlternatingCaseClick = useCallback(
    () => setText((prev) => alternateCase(prev)),
    []
  );
  const onInverseCaseClick = useCallback(
    () => setText((prev) => inverseCase(prev)),
    []
  );
  const onCopyClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copy text successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to copy text");
    }
  }, [text]);
  const onResetClick = useCallback(() => setText(""), []);
  const onDownloadClick = useCallback(() => {
    const a = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    a.href = URL.createObjectURL(file);
    a.download = "data.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, [text]);

  return (
    <div className="content">
      <textarea
        placeholder="Enter your text here"
        value={text}
        onChange={onChangeText}
      />
      <div className="button-group">
        <button onClick={onUpperCaseClick}>Upper Case</button>
        <button onClick={onLowerCaseClick}>Lower Case</button>
        <button onClick={onSentenceCaseClick}>Sentence Case</button>
        <button onClick={onTitleCaseClick}>Title Case</button>
        <button onClick={onAlternatingCaseClick}>Alternating Case</button>
        <button onClick={onInverseCaseClick}>Inverse Case</button>
        <button onClick={onCopyClick}>Copy</button>
        <button onClick={onDownloadClick}>Download</button>
        <button onClick={onResetClick}>Reset</button>
      </div>
    </div>
  );
};

export default App;
