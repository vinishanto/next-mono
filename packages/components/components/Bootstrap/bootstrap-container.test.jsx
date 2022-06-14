import { render, screen } from '@testing-library/react'
import {Container} from '../Bootstrap'

describe('Custom Container', () => {
    it('should render the container with the children', () => {
        let result = render(<Container><h1>Hello World</h1></Container>);
        expect(result.container.querySelector('.container')).toBeInTheDocument();
        expect(result.getByText("Hello World")).toBeInTheDocument();
    });

    it('should render the small container when small is passed as props', () => {
        let result = render(<Container small><h1>Hello World</h1></Container>);
        expect(result.container.querySelector('.container-small')).toBeInTheDocument();
        expect(result.getByText("Hello World")).toBeInTheDocument();
    });
});