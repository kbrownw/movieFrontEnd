import { HeaderParagraph } from "./HeaderParagraph";
import { HeaderTitle } from "./HeaderTitle";

export const HeaderTextArea = ({ headerTitle, headerParagraph }) => {
  return (
    <header className="grid lg:grid-cols-2 grid-cols-1 lg:justify-items-start text-center items-center lg:text-left justify-items-center pt-11">
      <HeaderTitle headerTitle={headerTitle} />
      <HeaderParagraph headerParagraph={headerParagraph} />
    </header>
  );
};
