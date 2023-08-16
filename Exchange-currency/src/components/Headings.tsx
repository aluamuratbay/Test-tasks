interface IHeadings {
  heading: string;
}

export function Headings({ heading } : IHeadings) {
  return (
    <>
      <h1 className="heading">  
        { heading }
      </h1>
      <h2 className="subheading">
        Stay up-to-date with latest currency rates...
      </h2>
    </>
  );
}