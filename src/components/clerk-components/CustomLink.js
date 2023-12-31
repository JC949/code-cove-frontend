// Component for implementing custom links
function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname;
  
    return (
      <li className={path === href ? "active" : ""}>
        <a href={href} {...props}>
          {children}
        </a>
      </li>
    );
  }
  
  export default CustomLink;