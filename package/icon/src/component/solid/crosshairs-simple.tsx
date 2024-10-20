
import { Icon } from "../../index";

/**
 * A component that renders the `crosshairs-simple` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs-simple?s=solid crosshairs-simple}
 * @preview ![crosshairs-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/crosshairs-simple.svg)
 */
const CrosshairsSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M445.3 224L384 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l61.3 0C431.9 368.4 368.4 431.9 288 445.3l0-61.3c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 61.3C143.6 431.9 80.1 368.4 66.7 288l61.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-61.3 0C80.1 143.6 143.6 80.1 224 66.7l0 61.3c0 17.7 14.3 32 32 32s32-14.3 32-32l0-61.3C368.4 80.1 431.9 143.6 445.3 224zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256z" />
    </Icon>
);

export default CrosshairsSimple;