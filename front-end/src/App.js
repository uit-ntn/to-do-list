import './App.css';

function App() {

  
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>todolist</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <main id="todolist">
        <h1>
          Danh sách
          <span>Việc hôm nay không để ngày mai.</span>
        </h1>
        <li className="done">
          <span className="label">123</span>
          <div className="actions">
            <button className="btn-picto" type="button">
              <i className="fas fa-edit" />
            </button>
            <button
              className="btn-picto"
              type="button"
              aria-label="Delete"
              title="Delete"
            >
              <i className="fas fa-trash" />
            </button>
          </div>
        </li>
        <li>
          <span className="label">123</span>
          <div className="actions">
            <button className="btn-picto" type="button">
              <i className="fas fa-user-edit" />
            </button>
            <button
              className="btn-picto"
              type="button"
              aria-label="Delete"
              title="Delete"
            >
              <i className="fas fa-trash" />
            </button>
          </div>
        </li>
        <p>Danh sách nhiệm vụ trống.</p>
        <form>
          <label htmlFor="name">Thêm nhiệm vụ mới</label>
          <input type="text" name="name" id="name" />
          <input type="text" name="id" id="id" />
          <button type="button">Thêm mới</button>
        </form>
      </main>
    </>
  );
}

export default App;
