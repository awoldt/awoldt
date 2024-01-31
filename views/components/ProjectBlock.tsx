import type { FC } from "hono/jsx";

export const ProjectBlock: FC<{
  icon: string;
  name: string;
  description: string;
  websiteUrl: string;
  githubUrl: string;
}> = (props) => {
  return (
    <div class="project-block">
      <img src={props.icon} alt="typing icon" />
      <h2 style="display: inline-block; color: white">{props.name}</h2>
      <p style="color: white">{props.description}</p>
      <hr />

      <a
        href={props.websiteUrl}
        target="blank"
        rel="noreferrer"
        class="proj-card-link"
      >
        Visit
      </a>

      <a
        class="proj-card-link"
        href={props.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  );
};
