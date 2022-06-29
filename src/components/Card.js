import Button from "./button";

export function Card(props) {
  const { title, children } = props;
  return (
    <div className="card mb-4">
      {title ? (
        <div className="card-header">
          <i className="fas fa-table me-1"></i>
          <>{title}         <Button/> </>
        </div>
      ) : null}
      <div className="card-body">{children}</div>
    </div>
  );
}