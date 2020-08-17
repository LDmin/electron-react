import React from "react";

interface IProps {
}

const LoginLayout: React.SFC<IProps> = (props) => {
  return (
    <>
      this is login layout
      <div>{props.children}</div>
    </>
  );
};

export default React.memo(LoginLayout);
