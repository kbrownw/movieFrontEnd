import { BackButton } from "./BackButton";
import { Subheading } from "./Subheading";

export const ContactMe = () => {
  return (
    <section className="grid grid-cols-1">
      <Subheading text="Contact Me!" />
      <p className="text-white text-center text-4xl">
        Email Address: <span className="font-thin">kbrownw@gmail.com</span>
      </p>
      <div className="grid grid-cols-1 mx-auto pt-20 min-w-[300px]">
        <BackButton />
      </div>
    </section>
  );
};
