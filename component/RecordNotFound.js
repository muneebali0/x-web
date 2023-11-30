import React from "react";
export default function RecordNotFound(props) {
  return (
    <>
      <div className="no-access-string">
        <img className="mx-auto" src="/images/no_data_found.png" />
        <p className="mt-3">{props.title}</p>
      </div>
    </>
  );
}
