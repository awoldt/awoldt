export default function TechUsed({ tech }: { tech: string[] }) {
  return (
    <div class="tech-used-div">
      <span style="color: white; display: block; margin-bottom: 5px;">Tech Used:</span>
      {tech.map((x) => {
        return <img src={`/imgs/tech/${x}.svg`} alt={`${x} logo`} />;
      })}
    </div>
  );
}
