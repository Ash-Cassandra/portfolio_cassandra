import React from "react"
import "./ProjectDetails.css"
import dataProjects  from '../../Projects.json'
import BlurredBackground from "../../components/BlurredBackground/BlurredBackground"
import Nav from "../../components/Nav/Nav"
import PageTitle from "../../components/Title/Title"
import { useParams } from "react-router-dom"
import Carousel from "../../components/Carousel/Carousel";




    function ProjectDetails() {
        
        const {id} = useParams()
        const dataId = dataProjects.find(data => data.id === id)

        if (!dataId) {
            return <div>Projet non trouvé</div>;
          }
        
          return (
            <div>
              <BlurredBackground />
              <Nav />
              <PageTitle title={dataId.name} />
              <main>
                <Carousel className="carousel">
                    {dataId.pictures.map((picture, index) =>
                    <div>
                        <img 
                    className="itemPictureId"
                    src={picture}
                    alt={dataId.title}
                    />
                    </div>)}
                </Carousel>
              </main>
                <p className="desc">{dataId.description}</p>
            </div>
          );
      }
      

export default ProjectDetails

    