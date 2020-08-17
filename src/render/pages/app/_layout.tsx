import React from "react";
import { useModel } from "umi";
import style from "./_layout.less";
import { Space, Input, Row, Col } from "antd";
import { HomeFilled, UserOutlined, MoreOutlined } from "@ant-design/icons";

const { Search } = Input;

interface IProps {
}

const AppLayout: React.SFC<IProps> = (props) => {
  const { user } = useModel("auth", (model) => ({ user: model.user }));
  return (
    <div className={style["wrapper"]}>
      <header className={style["header"]}>
        <Row>
          <Col flex="auto">
            <Space align="center" size="large">
              <HomeFilled />
              <Search
                placeholder="搜索案件"
                onSearch={(value) => console.log(value)}
                className={style.search}
              />
            </Space>
          </Col>
          <Col flex="160px" className="t-r">
            <Space align="center">
              <UserOutlined />
              <MoreOutlined />
            </Space>
          </Col>
        </Row>
      </header>
      <section className={style["section"]}>{props.children}</section>
    </div>
  );
};

export default React.memo(AppLayout);
