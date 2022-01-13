import CardContainer from "../CardContainer";

const Layout = ({ children, name }) => {
  name = "otro valor";
  return (
    <div>
      Este es el LAYOUT
      <div style={{ color: "red" }}>{children}</div>
      <CardContainer name={name} />
    </div>
  );
};

export default Layout;
