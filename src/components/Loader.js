import React from "react";

const Loader = isLoading => {
  console.log(isLoading);

  if (isLoading === false) {
    return null;
  } else {
    return (
      <div className="loader center">
        <i className="fa fa-cog fa-spin" />
      </div>
    );
  }
};

export default Loader;
