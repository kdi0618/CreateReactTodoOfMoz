const App = (props) => {
  const subject = props.subject;

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello {subject} world!
        </p>
      </header>
    </div>
  );
}

export { App };
