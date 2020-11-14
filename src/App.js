import getTweets from './Api'

function test (res) {
  console.log(res)
}

function App() {
  getTweets('trump', false)
    .then(test)

  return (
    <div className="App">
      <header className="App-header">
        <div>

        </div>
        <p>
          Edit <code>src/Ahtwehdhtdgpp.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;