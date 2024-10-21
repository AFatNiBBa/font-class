
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-right?s=sharp-thin circle-chevron-right}
 * @preview ![circle-chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-chevron-right.svg)
 */
const CircleChevronRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 1 16 256a240 240 0 1 1 480 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm341.7 5.7l5.7-5.7-5.7-5.7-120-120-5.7-5.7L204.7 136l5.7 5.7L324.7 256 210.3 370.3l-5.7 5.7L216 387.3l5.7-5.7 120-120z" />
    </Icon>
);

export default CircleChevronRight;