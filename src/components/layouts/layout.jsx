import * as React from "react";
import PropTypes from "prop-types";
import { FiFeather, FiBookOpen, FiMonitor, FiMail } from "react-icons/fi";

import Navbar from "../navbar";
import Footer from "../footer";

const routes = [
  {
    name: "About",
    path: "/about",
    icon: <FiBookOpen className="mr-2 inline-block text-xl text-white" />,
  },
  {
    name: "Training",
    path: "/training",
    icon: <FiFeather className="mr-2 inline-block text-xl text-white" />,
  },
  {
    name: "Works",
    path: "/works",
    icon: <FiMonitor className="mr-2 inline-block text-xl text-white" />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <FiMail className="mr-2 inline-block text-xl text-white" />,
  },
];

const MainLayout = ({ children, ...props }) => {
  const pathname = props.path;
  return (
    <div className="flex flex-col h-full" style={{ height: "100vh" }}>
      <Navbar pathname={pathname} routes={routes} />
      <div className="flex-1 z-10">{children}</div>

      <Footer pathname={pathname} routes={routes} />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainLayout;
