import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
};

export default function Typewriter({ phrases }: Props) {
  const [text, setText] = useState("");
  const [state, setState] = useState<"typing" | "waiting" | "deleting">(
    "typing"
  );
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    let timeout: ReturnType<typeof setTimeout> | undefined = undefined;
    switch (state) {
      case "typing":
        if (text === phrase) setState("waiting");
        else
          timeout = setTimeout(() => {
            setText((old) => old + phrase[old.length]);
          }, 100);
        break;
      case "waiting":
        timeout = setTimeout(() => {
          setState("deleting");
        }, 2000);
        break;
      case "deleting":
        if (text.length === 0) {
          setState("typing");
          setCurrentPhrase((old) => (old + 1) % phrases.length);
        } else {
          timeout = setTimeout(() => {
            setText((old) => old.substring(0, old.length - 1));
          }, 20);
        }
        break;
    }
    if (timeout != undefined) {
      return () => clearTimeout(timeout);
    }
  }, [state, currentPhrase, text]);

  return (
    <>
      <div className="text-7xl max-sm:text-5xl font-bold max-md:h-24 max-xsm:h-36">
        {text}
        <span className={state === "waiting" ? "animate-blink" : ""}>_</span>
      </div>
    </>
  );
}
