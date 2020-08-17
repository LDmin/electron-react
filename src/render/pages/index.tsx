import React, { FC } from "react";
import "./index.less";
import { Button, message } from "antd";
import Store from "electron-store";
import { useLocation, Link } from "umi";

const store = new Store();

const Root: FC = (props) => {
  const location = useLocation();
  const getLocalStoreData = () => {
    message.info(store.get("LOCAL_ELECTRON_STORE"));
  };
  return (
    <div>
      pathname: {location.pathname}
      <Link to="/login">Go to login</Link>
      <div>{props.children}</div>
    </div>
  );
};

export default Root;
