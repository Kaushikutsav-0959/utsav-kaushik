import ScrollProgress from "@/components/ScrollProgress";
import ChapterMarker from "@/components/ChapterMarker";
import Opening from "@/components/sections/Opening";
import Curiosity from "@/components/sections/Curiosity";
import Principles from "@/components/sections/Principles";
import Thinking from "@/components/sections/Thinking";
import Building from "@/components/sections/Building";
import Learning from "@/components/sections/Learning";
import Notebook from "@/components/sections/Notebook";
import Philosophy from "@/components/sections/Philosophy";
import Future from "@/components/sections/Future";
import Closing from "@/components/sections/Closing";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <ChapterMarker />
      <main id="main">
        <Opening />
        <Curiosity />
        <Principles />
        <Thinking />
        <Building />
        <Learning />
        <Notebook />
        <Philosophy />
        <Future />
        <Closing />
      </main>
    </>
  );
}
