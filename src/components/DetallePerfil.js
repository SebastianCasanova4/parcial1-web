import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Detail(props) {
  const selection = Math.round(Math.random());
  const { t, i18n } = useTranslation();
  const [dataApi, setDataApi] = useState({});

  const fetchUser = () => {
    fetch("../data/data.json")
      .then((data) => data.json())
      .then((data) => {
        setDataApi(data[0]);
      });
  };

  useEffect(() => {
    fetchUser();
    //const lng = navigator.language;
    //i18n.changeLanguage(lng);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
      <div style={{ backgroundColor: "rgb(56, 56, 56)", width: "400px", padding: "30px", transform: "translateY(-60px)", display: "flex", flexDirection: "column" }}>
        <img className="mx-auto" style={{ width: "100px", borderRadius: "50%", marginBottom: "20px" }} src={dataApi.picture} alt="user-profile" />
        <div style={{ color: "white" }}>
          <p><b>{t('username')}</b></p>
          {selection === 0 ? <p>{dataApi.username}</p> : <input type="text" style={{ marginBottom: "20px" }} placeholder={dataApi.username} />}
          <p><b>{t('nombre')}</b></p>
          {selection === 0 ? <p>{dataApi.nombre}</p> : <input type="text" style={{ marginBottom: "20px" }} placeholder={`${dataApi.nombre} `} />}
          <p><b>{t('descripcion')}</b></p>
          {selection === 0 ? <p>{dataApi.descripcion}</p> : <input type="text" style={{ marginBottom: "20px" }} placeholder={dataApi.descripcion} />}
          <p><b>{t('url')}</b></p>
          {selection === 0 ? <a href={dataApi.url}>{dataApi.url}</a> : <input type="text" style={{ marginBottom: "20px" }} placeholder={dataApi.url} />}
          {selection === 1 && <button>{t('saveChanges')}</button>}
        </div>
      </div>
    </div>
  );
}
