
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-left?s=sharp-thin circle-arrow-left}
 * @preview ![circle-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-arrow-left.svg)
 */
const CircleArrowLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 1 480 0A240 240 0 1 1 16 256zm496 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zm-381.7-5.7l-5.7 5.7 5.7 5.7 104 104 5.7 5.7L251.3 360l-5.7-5.7L155.3 264 376 264l8 0 0-16-8 0-220.7 0 90.3-90.3 5.7-5.7L240 140.7l-5.7 5.7-104 104z" />
    </Icon>
);

export default CircleArrowLeft;