export {
    Row,
    Col,
    Button,
    Form,
} from 'react-bootstrap';

import PropTypes from 'prop-types';

import { Container as BootstrapContainer } from 'react-bootstrap';

/**
 * The small version of the container. 
 * The smallContainer will be called from BootrapContainer with props.
 */
export function SmallContainer({ children, className, ...props }) {

    return (
        <div className = {`${className} container-small`} {...props}>
            {children}
        </div>
    )
}

/**
 * Custom container component that handles the small version
 */
export function Container ({small, ...props}) {
    
    // Use default bootstrap element
    let as = 'div';
    
    // If small is true, use the small version
    if (small) {
        // Rendetring the BootsrapContainer as SmallContainer
        as = SmallContainer;
    }

    return (
        <BootstrapContainer as={as} {...props}>
            {props.children}
        </BootstrapContainer>
    );
}

Container.propTypes = {
    /**
   * Allow to use small version of the custom Bootstrap Container
   * @type {Boolean}
   */
    small: PropTypes.bool
}
