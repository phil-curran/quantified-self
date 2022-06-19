const Sidebar = () => {
  const sideBarMenu = document
    .getElementById("sidebar-menu")
    .addEventListener("click", (e) => {
      handleClick(e);
    });

  const handleClick = (e) => {
    e.preventDefault();
    sideBarMenu.toggle("toggle");
  };
  return (
    <>
      <div className="ui button" onClick={handleClick}>
        TOGGLE
      </div>
      <div
        id="sidebar-menu"
        className="ui left demo vertical inverted sidebar labeled icon menu"
      >
        <a href="/" className="item">
          <i href="/" className="home icon"></i>
          Home
        </a>
        <a href="/" className="item">
          <i href="/" className="block layout icon"></i>
          Topics
        </a>
        <a href="/" className="item">
          <i href="/" className="smile icon"></i>
          Friends
        </a>
      </div>
    </>
  );
};

export default Sidebar;
