
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-left?s=sharp-thin circle-chevron-left}
 * @preview ![circle-chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-chevron-left.svg)
 */
const CircleChevronLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 1 480 0A240 240 0 1 1 16 256zm496 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zm-341.7-5.7l-5.7 5.7 5.7 5.7 120 120 5.7 5.7L307.3 376l-5.7-5.7L187.3 256 301.7 141.7l5.7-5.7L296 124.7l-5.7 5.7-120 120z" />
    </Icon>
);

export default CircleChevronLeft;