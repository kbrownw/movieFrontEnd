import cityscape from "../assets/large-cityscape.jpg";

export const LargeImage = () => {
  return (
    <div className="flex bg-red rounded-b-[10rem] max-h-[700px] mb-8">
      <img
        className="object-cover grayscale mix-blend-luminosity overflow-hidden rounded-b-[10rem]"
        src={cityscape}
        alt="City skyline viewed from the water."
      />
    </div>
  );
};
