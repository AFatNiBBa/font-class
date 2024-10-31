
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-right?s=light circle-chevron-right}
 * @preview ![circle-chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-chevron-right.svg)
 */
const CircleChevronRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 1 32 256a224 224 0 1 1 448 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM235.3 379.3l112-112c6.2-6.2 6.2-16.4 0-22.6l-112-112c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L313.4 256 212.7 356.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0z" />
    </Icon>
);

export default CircleChevronRight;