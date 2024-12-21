import { useState } from "react";
import useColorData from "../hooks/useColorData";

const ColorParret = () => {
  const { fetchData, error, loading } = useColorData();
  const [selectColor, setSelectColor] = useState<string>("#FFFFFF");

  if (loading) {
    return <p className="text-3xl">...loading</p>;
  }

  if (error) {
    return <p className="text-3xl">データの取得に失敗しました：{error}</p>;
  }

  return (
    <div className="p-10 rounded-lg" style={{ backgroundColor: selectColor }}>
      {fetchData ? (
        <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {fetchData.palette.map((p) => (
            <li
              key={p.slug}
              className="flex flex-col justify-center items-center gap-1"
            >
              <div className="text-sm px-2 py-1 bg-white rounded-lg">
                {p.name}
              </div>
              <button
                style={{ backgroundColor: p.color }}
                className="p-16 rounded-full border"
                onClick={() => setSelectColor(p.color)}
              ></button>
            </li>
          ))}
        </ul>
      ) : (
        <div>色彩情報がありません。</div>
      )}
    </div>
  );
};

export default ColorParret;
