export function ServiceCard({
  index,
  title,
  text,
}: {
  index: string;
  title: string;
  text: string;
}) {
  return (
    <article className="service-card">
      <span className="service-card-index">{index}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
