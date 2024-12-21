const fetchColorData = async () => {
  const res = await fetch("http://localhost:3000/color");
  if (!res.ok) {
    throw new Error(`色彩情報の取得に失敗しました:${res.status}`);
  }
  const data = await res.json();
  return data;
};
export default fetchColorData;
