

export default function Details(props:{ title: string, issueNumber: number, creators: any }) {

  return (
    <>
      <p className="card-title" data-testid="title">{props.title}</p>
      <span>Issue:</span>
      <p className="card-issue" data-testid="issue">{props.issueNumber}</p>
      <p className="publish-date" data-testid="published">Published: August 31, 2022</p>
      <span>Creators:</span>
      <div className="card-creators" data-testid="creators">
        <p key={props.creators}>{props.creators}</p>
      </div>         
    </>
  );
}