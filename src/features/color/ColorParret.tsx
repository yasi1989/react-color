import useColorData from "../../hooks/useColorData";
import ColorList from "./components/ColorList";

const ColorParret = () => {
  const { fetchData, error, loading } = useColorData();

  if (loading) {
    return <p className="text-3xl">...loading</p>;
  }

  if (error) {
    return <p className="text-3xl">データの取得に失敗しました：{error}</p>;
  }

  return <ColorList pallet={fetchData} />;
};

export default ColorParret;
