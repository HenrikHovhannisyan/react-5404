import React from "react";

const Form = () => {
  return (
    <div className="container-fluid max_width">
      <div className="banner_form">
        <div className="banner_form">
          <nav>
            <div className="" id="nav-tab" role="tablist">
              <button
                className="btn banner_form_tab-btn banner_form_btn-1 active"
                id="nav-make-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-make"
                type="button"
                role="tab"
                aria-controls="nav-make"
                aria-selected="true"
              >
                Make
              </button>
              <button
                className="btn banner_form_tab-btn banner_form_btn-2"
                id="nav-body_style-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-body_style"
                type="button"
                role="tab"
                aria-controls="nav-body_style"
                aria-selected="false"
              >
                Body style
              </button>
            </div>
          </nav>
          <div className="tab-content banner_form_content" id="nav-tabContent">
            <div
              className="tab-pane fade active show"
              id="nav-make"
              role="tabpanel"
              aria-labelledby="nav-make-tab"
            >
              <form>
                <div className="row">
                  <div className="col-12 col-md-4 banner_form_input banner_form_input-lt">
                    <label className="banner_form-label" htmlFor="usage">
                      Usage
                    </label>
                    <select
                      className="form-control banner_form-control"
                      id="usage"
                      name="make_usage"
                    >
                      <option>New & used</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-4 banner_form_input">
                    <label className="banner_form-label" htmlFor="make">
                      Make
                    </label>
                    <select
                      className="form-control banner_form-control"
                      id="make"
                      name="make_make"
                    >
                      <option>Polestar</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-4 banner_form_input banner_form_input-lb">
                    <label className="banner_form-label" htmlFor="model">
                      Model
                    </label>
                    <select
                      className="form-control banner_form-control"
                      id="model"
                      name="make_model"
                    >
                      <option>All models</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-4 banner_form_input banner_form_input-rt">
                    <label className="banner_form-label" htmlFor="price">
                      Price
                    </label>
                    <select
                      className="form-control banner_form-control"
                      id="price"
                      name="make_price"
                    >
                      <option>Max price $60.000</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-2 banner_form_input banner_form_input-bb">
                    <label className="banner_form-label" htmlFor="distance">
                      Distance
                    </label>
                    <select
                      className="form-control banner_form-control"
                      id="distance"
                      name="make_distance"
                    >
                      <option>20 miles</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-2 banner_form_input banner_form_input-bb">
                    <label className="banner_form-label" htmlFor="make_zip">ZIP</label>
                    <input
                      className="form-control banner_form-control"
                      type="text"
                      name="make_zip"
                      placeholder="ZIP"
                      id="make_zip"
                    />
                  </div>
                  <div className="col-12 col-md-4 banner_form_input banner_form_input-rb p-0">
                    <button className="banner_form_btn-red">Search</button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="tab-pane fade"
              id="nav-body_style"
              role="tabpanel"
              aria-labelledby="nav-body_style-tab"
            >
              <form>
                <div className="row">
                  <div className="col-12 col-md-4 banner_form_input banner_form_input-lt">
                    <label className="banner_form-label" htmlFor="body_style_usage">
                      New/used
                    </label>
                    <select
                      className="form-control banner_form-control"
                      id="body_style_usage"
                      name="body_style_usage"
                    >
                      <option>New & used</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-4 banner_form_input">
                    <label className="banner_form-label" htmlFor="body_style">
                      Body style
                    </label>
                    <select
                      className="form-control banner_form-control"
                      id="body_style"
                      name="body_style"
                    >
                      <option>All body styles</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-4 banner_form_input banner_form_input-lb">
                    <label className="banner_form-label" htmlFor="body_style_price">
                      Price
                    </label>
                    <select
                      className="form-control banner_form-control"
                      id="body_style_price"
                      name="body_style_price"
                    >
                      <option>No max price</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-4 banner_form_input banner_form_input-bb">
                    <label className="banner_form-label" htmlFor="distance">
                      Distance
                    </label>
                    <select
                      className="form-control banner_form-control"
                      id="distance"
                      name="body_style_distance"
                    >
                      <option>20 miles</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-4 banner_form_input banner_form_input-rt">
                    <label className="banner_form-label" htmlFor="body_style_zip">ZIP</label>
                    <input
                      className="form-control banner_form-control"
                      type="text"
                      name="body_style_zip"
                      placeholder="ZIP"
                      id="body_style_zip"
                    />
                  </div>
                  <div className="col-12 col-md-4 banner_form_input banner_form_input-rb p-0">
                    <button className="banner_form_btn-red">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
