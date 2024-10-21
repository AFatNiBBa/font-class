
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-left?s=regular circle-arrow-left}
 * @preview ![circle-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-arrow-left.svg)
 */
const CircleArrowLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM207 151l-88 88c-9.4 9.4-9.4 24.6 0 33.9l88 88c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47L376 280c13.3 0 24-10.7 24-24s-10.7-24-24-24l-182.1 0 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z" />
    </Icon>
);

export default CircleArrowLeft;