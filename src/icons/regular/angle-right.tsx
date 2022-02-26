import { IIconProps } from "../../models/icon-props"
import { SVGWrapper } from "../../svg/svg-wrapper"
import { ANGLE_RIGHT_PATH } from "../paths/angle-right"

export const AngleRight = ({ height, width, iconStyle }: IIconProps) => {
    return (
        <SVGWrapper iconStyle={iconStyle} height={height} width={width}>
            <path d={ANGLE_RIGHT_PATH} />
        </SVGWrapper>
    )
}