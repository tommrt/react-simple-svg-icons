import { getPathByName } from "../helpers/get-path-by-name"
import { TIconName } from "../models/icon-name"
import { SVGWrapper } from "../svg/svg-wrapper"

interface IIconProps {
    name: TIconName;
    height?: number;
    width?: number;
}

/**
 * This is kind of gross to use <Icon name="foo" /> instead of <Foo /> but it may result in a smaller bundle
 * After some thought I think this way will bloat the package more as it dpeends on getPathByName which will grow massively
 * @deprecated - use the specific icon
 */
export const Icon = ({ name, height, width }: IIconProps) => {
    return (
        <SVGWrapper height={height} width={width} >
            <path d={getPathByName(name)} />
        </SVGWrapper>
    )
}