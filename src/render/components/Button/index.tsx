import React from "react";
import { ButtonProps } from "antd/es/button";
import style from "./index.less";
import { Button } from "antd";

interface IProps extends ButtonProps {}

const RedButton: React.SFC<IProps> = (props) => {
  return <Button className={style["button"]} {...props} type="primary">
  </Button>;
};

export default React.memo(RedButton);
