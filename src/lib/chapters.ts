export type Chapter = {
  id: string;
  index: string;
  label: string;
};

export const chapters: Chapter[] = [
  { id: "opening", index: "00", label: "Opening" },
  { id: "curiosity", index: "01", label: "Curiosity" },
  { id: "principles", index: "02", label: "Principles" },
  { id: "thinking", index: "03", label: "Thinking" },
  { id: "building", index: "04", label: "Building" },
  { id: "learning", index: "05", label: "Learning" },
  { id: "notebook", index: "06", label: "Notebook" },
  { id: "philosophy", index: "07", label: "Philosophy" },
  { id: "future", index: "08", label: "Future" },
  { id: "closing", index: "09", label: "Closing" },
];
