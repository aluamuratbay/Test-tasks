interface IContent {
  children?: React.ReactNode;
}

export function Content({ children }: IContent) {
  return (
    <main className="main">
      {children}
    </main>
  );
}