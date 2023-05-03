

export default function Details(props:{id: number, title: string, issueNumber: number, creators: any }) {

  return (
    <>
      <p className="card-title">{props.title}</p>
      <span>Issue:</span>
      <p className="card-issue">{props.issueNumber}</p>
      <p className="publish-date">Published: August 31, 2022</p>
      <span>Creators:</span>
      <div className="card-creators">
        <p key={props.creators.id}>{props.creators}</p>
      </div>         
    </>
  );
}