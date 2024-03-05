import Image from "next/image";
import styles from "./page.module.css";
import "./page.css";
async function GetNecesities(necesities) {
  const dataSearch = await fetch(
    `http://localhost:3000/api/necesities/${necesities}`
  );
  if (!dataSearch.ok) {
    return {};
  }
  return dataSearch.json();
}
export default async function Home(props: any) {
  const {
    params: { search },
  } = props;

  const foundData = await GetNecesities(search);

  console.log({ foundData });

  return (
    <div className="grid">
      {foundData.map(({ title, cost, info, likes }) => (
        // eslint-disable-next-line react/jsx-key
        <div key={title} className="grid-item">
          <h2 className="title">{title}</h2>
          <p className="cost">{cost}</p>
          <p className="info">{info}</p>
          <p className="likes">{likes.length}</p>
        </div>
      ))}
    </div>
  );
}
