
import { Icon } from "../../index";

/**
 * A component that renders the `crosshairs-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs-simple?s=sharp-light crosshairs-simple}
 * @preview ![crosshairs-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/crosshairs-simple.svg)
 */
const CrosshairsSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M479.4 240L384 240l-16 0 0 32 16 0 95.4 0C471.6 383 383 471.6 272 479.4l0-95.4 0-16-32 0 0 16 0 95.4C129 471.6 40.4 383 32.6 272l95.4 0 16 0 0-32-16 0-95.4 0C40.4 129 129 40.4 240 32.6l0 95.4 0 16 32 0 0-16 0-95.4C383 40.4 471.6 129 479.4 240zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default CrosshairsSimple;