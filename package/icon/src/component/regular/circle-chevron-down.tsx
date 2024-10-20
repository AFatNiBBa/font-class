
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-down?s=regular circle-chevron-down}
 * @preview ![circle-chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-chevron-down.svg)
 */
const CircleChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241L239 345c9.4 9.4 24.6 9.4 33.9 0L377 241c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-87 87-87-87c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
    </Icon>
);

export default CircleChevronDown;