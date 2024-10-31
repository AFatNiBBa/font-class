
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-right?s=thin circle-chevron-right}
 * @preview ![circle-chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-chevron-right.svg)
 */
const CircleChevronRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 1 16 256a240 240 0 1 1 480 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM221.7 381.7l120-120c3.1-3.1 3.1-8.2 0-11.3l-120-120c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L324.7 256 210.3 370.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0z" />
    </Icon>
);

export default CircleChevronRight;