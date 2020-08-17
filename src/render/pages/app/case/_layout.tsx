import React from "react";

interface IProps {
}

const AppLayout: React.SFC<IProps> = (props) => {
  return (
    <>
      this is case layout
      <div>{props.children}</div>
    </>
  );
};

export default React.memo(AppLayout);
