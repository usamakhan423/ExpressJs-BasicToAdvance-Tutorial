const App = () => {
  const [products, setProducts] = React.useState([]);

  const [form, setForm] = React.useState({
    name: "",
    price: ""
  });

  React.useEffect(() => {
    fetchProduct();
  }, []);

  function fetchProduct() {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.price) {
      return;
    }

    fetch("/api/products", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(data => {
        fetchProduct();
      });
  }

  function updateForm(event, field) {
    if (field === "name") {
      setForm({
        ...form,
        name: event.target.value
      });
    } else if (field === "price") {
      setForm({
        ...form,
        price: event.target.value
      });
    }
  }
  return (
    <>
      <div className="card">
        <div className="card-header">
          <strong className="ms-4">Add Product</strong>
          <div className="card-body">
            <form onClick={handleSubmit}>
              <input
                type="text"
                value={form.name}
                onChange={ () => updateForm(event, "name")}
                placeholder="Product Name..."
                className="form-control mt-3"
              />
              <input
                type="text"
                value={form.price}
                onChange={ () => updateForm(event, "price")}
                placeholder="Product Price..."
                className="form-control mt-3"
              />
              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ul className="list-group mt-4">
        {products.map((product) => {
          return (
            <li
              key={product.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{product.name}: </strong>${product.price}
              </div>
              <button className="border-0 bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash3-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
