export default function ListItem({ name, technology, year, link, onHover }) {
  return (
    <a
      href={link === "NA" ? "#" : link}
      target="_blank"
      rel="noopener noreferrer"
      className="list-item"
      onMouseEnter={() => onHover(link)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="info">
        <strong>{name}</strong>
        <p>{technology}</p>
      </div>
      <span className="year">{year}</span>
    </a>
  );
}
