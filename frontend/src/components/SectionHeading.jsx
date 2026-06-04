export default function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="reveal is-visible">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}
