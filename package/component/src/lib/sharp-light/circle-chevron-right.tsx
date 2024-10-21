
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-right?s=sharp-light circle-chevron-right}
 * @preview ![circle-chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-chevron-right.svg)
 */
const CircleChevronRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm347.3 11.3L358.6 256l-11.3-11.3-112-112L224 121.4 201.4 144l11.3 11.3L313.4 256 212.7 356.7 201.4 368 224 390.6l11.3-11.3 112-112z" />
    </Icon>
);

export default CircleChevronRight;