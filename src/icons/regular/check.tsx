import { IIconProps } from "../../models/icon-props"
import { SVGWrapper } from "../../svg/svg-wrapper"
import { CHECKMARK_PATH } from "../paths/checkmark"

export const Check = ({ height, width, iconStyle }: IIconProps) => {
    return (
        <SVGWrapper iconStyle={iconStyle} height={height} width={width} >
            <path d={CHECKMARK_PATH} />
        </SVGWrapper>
    )
}