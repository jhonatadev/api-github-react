import React from 'react';

const Profile = ({ user }) => (
  <div>
    <div className="row">
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={user.avatar_url} />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Repositórios: <span className="badge badge-success">{ user.public_repos }</span></li>
            <li className="list-group-item">Seguidores: <span className="badge badge-primary">{ user.followers }</span></li>
            <li className="list-group-item">Seguindo: <span className="badge badge-info">{ user.following }</span></li>
          </ul>
          <div className="card-body">
            <a href="user.html_url" className="btn btn-info btn-block">Ver perfil</a>
          </div>
        </div>
      </div>
    </div>  
  </div>
);

export default Profile;