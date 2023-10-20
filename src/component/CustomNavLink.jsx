import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const CustomNavLink = ({to,children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive
                    ? "active btn btn-primary normal-case text-lg"
                    : isPending
                        ? "pending"
                        : ""
            }
        >
          {children}
        </NavLink>
    );
};

CustomNavLink.propTypes={
    to: PropTypes.object,
    children: PropTypes.object
}

export default CustomNavLink;