import React from "react";

import NavbarTemplate from "../../components/Navbar";

const NavbarPreview = ({ entry }) => {
    const data = entry.getIn(["data"]).toJS();
    console.log(data);
    return <NavbarTemplate data={data} />;
};

export default NavbarPreview;
