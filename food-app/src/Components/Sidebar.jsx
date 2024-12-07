import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Sidebar({ links, close }) {
  return (
    <div className="sidebar" onClick={close}>
      {links.map((link) => (
        <a key={link.name} href="#!" className="sidebar-link">
          <FontAwesomeIcon icon={link.icon}></FontAwesomeIcon>
          {link.name}
        </a>
      ))}
    </div>
  );
}

export default Sidebar;
