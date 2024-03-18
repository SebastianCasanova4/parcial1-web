import React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./estilo.css";

const Perfil = () => {
    const [imageURL, setImageUrl] = useState(null);
    const [data, setData] = useState({});
    const { t, i18n } = useTranslation();


    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((imagen) => {
            setImageUrl(imagen.message);
          });
      }, []);


      useEffect(() => {
        fetch("../data/data.json")
          .then((data) => data.json())
          .then((data) => {
            setData(data[0]);
          });
    
      }, []);

      useEffect(() => {
        //const lng = navigator.language;
        //i18n.changeLanguage(lng);
      }, []);
    

    return (
        <header className="row wrapper" >
            <Link to={"/perfil"} className="col-sm-4">
                <img className="profile-img" src={imageURL} alt="Foto de perfil" />
            </Link>
            <div className="col-sm-8 info-container__description-container">
                <h1>{data.username}</h1>
                <p><b>{data.nombre}</b></p>
                <p>{data.descripcion}</p>
                <a href={data.url} target="_blanck">{data.url}</a>
                <div style={{ marginTop: "30px" }} className="row">
                <p className="col-sm"><b>{data.post}</b> {t('post')} </p>
                <p className="col-sm"><b>{data.seguidores}</b> {t('seguidores')} </p>
                <p className="col-sm"><b>{data.seguidos}</b> {t('seguidos')} </p>
                </div>
                {console.log(data)}
            </div>
        </header>
        
    );
};

export default Perfil;
