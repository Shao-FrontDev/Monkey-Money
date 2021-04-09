import { useState } from "react";

const useTags = () => {
  const [tags, setTags] = useState<string[]>([
    "衣",
    "事",
    "住",
    "行",
  ]);

  return {
    tags,
    setTags,
  };
};

export { useTags };
