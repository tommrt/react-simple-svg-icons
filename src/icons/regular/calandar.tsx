import { DEFAULT_ICON_SIZE } from "../../constants/default-icon-size"
import { Icon } from "../../icon/icon"
import { IIconProps } from "../../models/icon-props"
import { SVGWrapper } from "../../svg/svg-wrapper"



export const Calendar = ({ height, width }: IIconProps) => {
    return (
        <SVGWrapper height={height} width={width}>
            <path
                d="
                M 4 4
                h 16
                a 2 2 0 0 1 2 2
                v 14
                a 2 2 0 0 1 -2 2
                h -16
                a 2 2 0 0 1 -2 -2
                v -14
                a 2 2 0 0 1 2 -2
                M 8 2
                v 4
                m 8 0
                v -4
                M 2 10
                h 20
                "
            />
        </SVGWrapper>
    )
}