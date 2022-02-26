import { IIconProps } from "../../models/icon-props"
import { SVGWrapper } from "../../svg/svg-wrapper"
import { CLOSE_PATH } from "../paths/close"

export const Close = ({ height, width, iconStyle }: IIconProps) => {
    return (
        <SVGWrapper iconStyle={iconStyle} height={height} width={width} >
            <path d={CLOSE_PATH} />
        </SVGWrapper>
    )
}