import { DEFAULT_ICON_SIZE } from "../constants/default-icon-size"
import { getPathByName } from "../helpers/get-path-by-name"
import { TIconName } from "../models/icon-name"
import SVGWrapper from "../svg/svg-wrapper"

interface IIconProps {
    name: TIconName;
    height?: number;
    width?: number;
}

/**
 * This is kind of gross to use <Icon name="foo" /> instead of <Foo /> but it may result in a smaller bundle
 * @param param0 
 * @returns 
 */
export const Icon = ({ name, height, width }: IIconProps) => {
    return (
        <SVGWrapper height={height || DEFAULT_ICON_SIZE} width={width || DEFAULT_ICON_SIZE} viewBox="0 0 24 24">
            <path d={getPathByName(name)} />
        </SVGWrapper>
    )
}