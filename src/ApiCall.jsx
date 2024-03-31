
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ApiCall() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="column ">
        {data.map((show) => (
          <div className="col-md-4" key={show.show.id}>
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title">{show.show.name}</h5>
              </div>
              <div className="card-body bg-red-500">
                <img
                  src={show.show.image}
                  alt={show.show.name}
                  className="img-fluid"
                />
                <p className="card-text mt-3">{show.show.summary}</p>
                <Link
                  to={`/show/${show.show.id}`}
                  className="btn btn-primary bg-slate-500 rounded-md m-4 p-2 "
                >
                  View Summary
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApiCall;