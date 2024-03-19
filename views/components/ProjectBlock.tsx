import TechUsed from "./TechUsed";

interface Data {
  icon: string;
  name: string;
  description: string;
  websiteUrl: string;
  githubUrl: string;
}

export default function ProjectBlock(props: Data) {
  return (
    <div class="col-xl-4 project-div">
      <div class="project-wrapper"><div style="margin: 10px">
        <div style="display: flex; align-items: center; justify-content:center; margin-bottom: 10px">
          <img src={`/imgs/icons/${props.icon}`} alt={`${props.name} icon`} />
          <span style="display: inline-block; margin-left: 10px">
            {props.name}
          </span>
        </div>

        <p>{props.description}</p>
        <div class="project-btn-links">
          <div>
            <a href={props.websiteUrl} target="_blank">
              Visit
            </a>
          </div>
          <div>
            <a href={props.githubUrl} target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div></div>
      
    </div>
  );
}
