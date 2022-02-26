import styled from 'styled-components';
import { DEFAULT_ICON_SIZE } from '../constants/default-icon-size';
import { TIconStyle } from '../models/icon-style';
import { TReactChildren } from '../models/react-children';

/**
 * The common svg styles
 */
const SVGWrapperStyle = styled.svg<{ iconStyle?: TIconStyle }>((props) => (
    {
        stroke: 'currentcolor',
        strokeWidth: `${props.iconStyle === 'thin' ? 1 : 2}px`,
        fill: 'none',
        strokeLinejoin: 'round',
        strokeLinecap: 'round',
    })
);

interface IProps {
    height?: number;
    width?: number;
    iconStyle?: TIconStyle
}

export const SVGWrapper = ({ height, width, iconStyle, children }: IProps & TReactChildren) => {
    return (
        <SVGWrapperStyle iconStyle={iconStyle} height={height || DEFAULT_ICON_SIZE} width={width || DEFAULT_ICON_SIZE} viewBox='0 0 24 24'>
            {children}
        </SVGWrapperStyle>
    )
};