import { useContext } from "react";
import { Context as MyContext } from "contexts/Context";
import { Link } from "react-router-dom";

import { Layout, Menu, Divider, List, Space } from "antd";

const ChildrenList = () => {
  const { children } = useContext(MyContext);
  return (
    <div>
      {children.map((item) => (
        <Link to={`/children/${item.id}`}>
          {item.name}
        </Link>
      ))}


    </div>
  );
};

export default ChildrenList;
