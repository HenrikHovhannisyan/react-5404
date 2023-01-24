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
              <p>
                <strong>Make</strong>
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="nav-body_style"
              role="tabpanel"
              aria-labelledby="nav-body_style-tab"
            >
              <p>
                <strong>Body style form</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
