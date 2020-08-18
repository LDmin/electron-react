import React, { useState, useEffect } from "react";
import { Input, Drawer, Card } from "antd";
import { Link } from "umi";
import { usePersistFn } from "ahooks";
import Mousetrap from "mousetrap";
import { remote } from "electron";

const Layout: React.FC = (props) => {
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState("");

  const onClose = usePersistFn(() => {
    setVisible(!visible);
  });

  useEffect(() => {
    Mousetrap.bind(["command+t", "ctrl+t"], () => {
      setVisible((v) => !v);
      return false;
    });
    Mousetrap.bind(["command+r", "ctrl+r"], () => {
      location.reload();
      return false;
    });
    Mousetrap.bind(["command+p", "ctrl+p"], () => {
      remote.getCurrentWindow().webContents.openDevTools();
      return false;
    });
  }, []);
  return (
    <>
      <Drawer placement="top" visible={visible} onClose={onClose}>
        <Input
          style={{ width: 200 }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        >
        </Input>
        <Link to={url}>go to {url}</Link>
      </Drawer>
      {props.children}
    </>
  );
};

export default React.memo(Layout);
