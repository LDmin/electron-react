import React, { useState } from "react";
import { Input, Divider, Card } from "antd";
import { Link } from "umi";

const Layout: React.FC = (props) => {
  const [url, setUrl] = useState("");
  return (
    <>
      <Card>
        <Input
          style={{ width: 200 }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        >
        </Input>
        <Link to={url}>go to {url}</Link>
      </Card>
      <div>{props.children}</div>
    </>
  );
};

export default React.memo(Layout);
