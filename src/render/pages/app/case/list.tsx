import React from "react";

interface IProps {
}

const CaseList: React.SFC<IProps> = () => {
  return (
    <div>
      this is case list
    </div>
  );
};

export default React.memo(CaseList);
