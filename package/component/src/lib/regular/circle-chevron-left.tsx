
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-left?s=regular circle-chevron-left}
 * @preview ![circle-chevron-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-chevron-left.svg)
 */
const CircleChevronLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135L167 239c-9.4 9.4-9.4 24.6 0 33.9L271 377c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-87-87 87-87c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z" />
    </Icon>
);

export default CircleChevronLeft;