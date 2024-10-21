
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-right?s=regular circle-chevron-right}
 * @preview ![circle-chevron-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-chevron-right.svg)
 */
const CircleChevronRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377L345 273c9.4-9.4 9.4-24.6 0-33.9L241 135c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l87 87-87 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z" />
    </Icon>
);

export default CircleChevronRight;