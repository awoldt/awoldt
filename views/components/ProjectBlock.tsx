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
      <div class="project-wrapper">
        <div style="margin: 10px">
          <div style="display: flex; justify-content:space-between; margin-bottom: 10px;">
            <img src={`/imgs/icons/${props.icon}`} alt={`${props.name} icon`} />
            <span style="display: inline-block; margin-left: 10px">
              {props.name}
            </span>

            <div style="display: flex; flex-direction: row">
              <div style="margin-right: 10px">
                <a href={props.websiteUrl} target="_blank" rel="noopener noreferrer">
                  Visit
                </a>
              </div>
              <div>
                <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
