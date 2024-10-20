
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-right?s=regular circle-arrow-right}
 * @preview ![circle-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-arrow-right.svg)
 */
const CircleArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM305 361l88-88c9.4-9.4 9.4-24.6 0-33.9l-88-88c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47L136 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l182.1 0-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0z" />
    </Icon>
);

export default CircleArrowRight;