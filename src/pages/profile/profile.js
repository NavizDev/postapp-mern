import React from "react";
import FormProfile from "../../components/formProfile/formProfile";

const profile = () => {
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="offset-md-3 col-sm-8">
              <h1>Profile</h1>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="offset-md-3 col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Update profile</h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <FormProfile></FormProfile>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.nav-tabs-custom */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
  );
};

export default profile;
