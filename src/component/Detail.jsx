
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Detail() {
  const [show, setShow] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const json = await response.json();
      setShow(json);
    };

    fetchData();
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title">{show.name}</h5>
            </div>
            <div className="card-body">
              <p className="card-text">{show.summary}</p>
              <Link
                to={`/book/${show.id}`}
                className="btn btn-primary"
              >
                Book Ticket
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;