import { useState } from "react";
import { Pallet } from "../../../types/types";
import ColorCard from "./ColorCard";

type ColorListProps = {
  pallet: Pallet | null;
};
const ColorList = ({ pallet }: ColorListProps) => {
  const [selectColor, setSelectColor] = useState<string>("#FFFFFF");
  return (
    <div className="p-10 rounded-lg" style={{ backgroundColor: selectColor }}>
      {pallet ? (
        <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {pallet.palette.map((p) => (
            <ColorCard color={p} setSelectColor={setSelectColor} />
          ))}
        </ul>
      ) : (
        <div>色彩情報がありません。</div>
      )}
    </div>
  );
};

export default ColorList;
