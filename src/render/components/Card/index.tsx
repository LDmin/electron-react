import { Card } from "antd";
import * as React from "react";

import style from "./index.less";
import { CardProps } from "antd/lib/card";

const MyCard: React.FC<CardProps> = (props) =>
  <Card className={style["card"]} bordered={false} {...props}>
    {props.children}
  </Card>;

export default MyCard;
