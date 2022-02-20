import styled from 'styled-components';
import { DEFAULT_ICON_SIZE } from '../constants/default-icon-size';
import { TReactChildren } from '../models/react-children';

/**
 * The common svg styles
 */
const SVGWrapperStyle = styled.svg((props) => (
    {
        stroke: 'currentcolor',
        strokeWidth: '2px',
        fill: 'none',
        strokeLinejoin: 'round',
        strokeLinecap: 'round',
        // width: `${props.width || DEFAULT_ICON_SIZE}px`,
        // height: `${props.height || DEFAULT_ICON_SIZE}px`,
    })
);

interface IProps {
    height?: number;
    width?: number;
}

export const SVGWrapper = ({ height, width, children }: IProps & TReactChildren) => {
    return (
        <SVGWrapperStyle height={height || DEFAULT_ICON_SIZE} width={width || DEFAULT_ICON_SIZE} viewBox='0 0 24 24'>
            {children}
        </SVGWrapperStyle>
    )
};