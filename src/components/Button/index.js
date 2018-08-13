import React from 'react';

const Button = ({
  children,
  kind,
  className,
  tag,
  href,
  type,
  outline,
}) => {
  switch (tag) {
    case 'a':
      return (
        <a className={`${getButtonClassName(kind, outline)} ${className}`} href={href} role="button">{children}</a>
      );
    default:
      return (
        <button className={`${getButtonClassName(kind, outline)} ${className}`} type={type}>{children}</button>
      );
  }
}

function getButtonClassName(className, outline) {
  let clazz;
  switch (className) {
    case 'primary':
      clazz = 'btn btn-primary';
      break;
    case 'secondary':
      clazz = 'btn btn-secondary';
      break;
    case 'success':
      clazz = 'btn btn-success';
      break;
    case 'danger':
      clazz = 'btn btn-danger';
      break;
    case 'warning':
      clazz = 'btn btn-warning';
      break;
    case 'info':
      clazz = 'btn btn-info';
      break;
    case 'dark':
      clazz = 'btn btn-dark';
      break;
    default:
      clazz = 'btn btn-light';
      break;
  }

  return outline ? clazz.replace('btn-', 'btn-outline-') : clazz;
}

export default Button;
