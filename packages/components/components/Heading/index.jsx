import PropTypes from "prop-types";

/**
 * Headings are used to display titles in the application.
 * We can use them to dynamically pick the level of the heading.
 * and also without changing the level we can change the style of the heading.
 * to different sizes
 * @param {string} level - The size of the heading.
 * @param {string} className - The custom class name of the heading.
 * @param {string} children - The content of the heading.
 * @param {string} style - The pseudo class name of the heading.
 */
export function Heading({
  level = 1,
  style = 0,
  className = "",
  children,
  ...props
} = {}) {
  // define the tag names and style class names
  let Tag = `h${level}`;
  let styleClass = style ? `h${style}` : "";

  return (
    <Tag {...props} className={`${className} ${styleClass}`}>
      {children}
    </Tag>
  );
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  style: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  className: PropTypes.string,
  children: PropTypes.node,
};

