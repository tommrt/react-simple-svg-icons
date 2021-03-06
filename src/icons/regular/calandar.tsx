import { IIconProps } from "../../models/icon-props"
import { SVGWrapper } from "../../svg/svg-wrapper"
import { CALENDAR_PATH } from "../paths/calendar"

export const Calendar = ({ height, width, iconStyle }: IIconProps) => {
    return (
        <SVGWrapper iconStyle={iconStyle} height={height} width={width}>
            <path d={CALENDAR_PATH} />
        </SVGWrapper>
    )
}