
import { Icon } from "../../index";

/**
 * A component that renders the `crosshairs-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs-simple?s=sharp-solid crosshairs-simple}
 * @preview ![crosshairs-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/crosshairs-simple.svg)
 */
const CrosshairsSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M445.3 224L384 224l-32 0 0 64 32 0 61.3 0C431.9 368.4 368.4 431.9 288 445.3l0-61.3 0-32-64 0 0 32 0 61.3C143.6 431.9 80.1 368.4 66.7 288l61.3 0 32 0 0-64-32 0-61.3 0C80.1 143.6 143.6 80.1 224 66.7l0 7.3 0 54.1 0 32 64 0 0-32 0-54.1 0-7.3C368.4 80.1 431.9 143.6 445.3 224zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default CrosshairsSimple;