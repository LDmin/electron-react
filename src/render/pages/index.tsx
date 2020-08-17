import React, { FC, useEffect } from "react";
import "./index.less";
import { Link, history } from "umi";

const Root: FC = (props) => {
  useEffect(() => {
    history.push('/app/case/list')
  }, [])

  return (
    <>
      pathname: {location.pathname}
      <Link to="/login">Go to login</Link>
      <div>{props.children}</div>
    </>
  );
};

export default Root;
