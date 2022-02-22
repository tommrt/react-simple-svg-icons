import { IIconProps } from "../../models/icon-props"
import { SVGWrapper } from "../../svg/svg-wrapper"

export const Close = ({ height, width }: IIconProps) => {
    return (
        <SVGWrapper iconStyle="thin" height={height} width={width} >
            <line x1="3" y1="3" x2="18" y2="18" />
            <line x1="18" y1="3" x2="3" y2="18" />
        </SVGWrapper>
    )
}