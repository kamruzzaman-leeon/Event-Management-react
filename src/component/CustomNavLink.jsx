import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const CustomNavLink = ({to,children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive
                    ? "active btn btn-primary normal-case text-xl"
                    : isPending
                        ? "pending"
                        : "p-4"
            }
        >
          {children}
        </NavLink>
    );
};

CustomNavLink.propTypes={
    to: PropTypes.string,
    children: PropTypes.string
}

export default CustomNavLink;