import { BlockLibraryType } from "../supported";

import Paragraph from "./paragraph";
import Heading from "./heading";
import More from "./more";
import Separator from "./separator";
import List from "./list";
import Pre from "./pre";
import Verse from "./verse";
import Image from "./image";

const library: BlockLibraryType = {
  "core/paragraph": Paragraph,
  "core/heading": Heading,
  "core/more": More,
  "core/separator": Separator,
  "core/list": List,
  "core/preformatted": Pre,
  "core/verse": Verse,
  "core/image": Image,
};

export default library;

// Expose modules.
export { default as Paragraph } from "./paragraph";
export { default as Heading } from "./heading";
