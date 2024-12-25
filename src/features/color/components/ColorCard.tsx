import { ColorData } from "../../../types/types";

type ColorProps = {
  color: ColorData;
  setSelectColor: (color: string) => void;
};

const Color = ({ color, setSelectColor }: ColorProps) => {
  return (
    <li
      key={color.slug}
      className="flex flex-col justify-center items-center gap-1"
    >
      <div className="text-sm px-2 py-1 bg-white rounded-lg">{color.name}</div>
      <button
        style={{ backgroundColor: color.color }}
        className="p-16 rounded-full border"
        onClick={() => setSelectColor(color.color)}
      ></button>
    </li>
  );
};

export default Color;
