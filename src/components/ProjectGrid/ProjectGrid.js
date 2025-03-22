import { useEffect } from "react";
import { ImageSlider } from "../ImageSlider/ImageSlider";
import "./ProjectGrid.css";

export const ProjectGrid = ({ projects }) => {
  useEffect(() => {
    console.log("projects", projects);
  }, [projects]);

  const formatNumberWithDots = (num) => {
    if (typeof num !== "number") return num; 

    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="grid">
      {projects.map((project) => (
        <div key={project._id} className="card">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <ImageSlider images={project.images} />
          <div className="title-price-container">
            <div className="title">{project.generalInfo.name}</div>
            <div className="price">
              ${formatNumberWithDots(project.generalInfo.price)}
            </div>
          </div>
          <div className="location-container">
            <img className="marker" src="/marker.png" alt="Marker" />
            <span>{project.generalInfo.province}</span>
          </div>
          <div className="info-container">
            <span>rooms: {project.generalInfo.rooms}</span>
            <span>area: {project.generalInfo.size} m²</span>
          </div>
        </div>
      ))}
    </div>
  );
};
