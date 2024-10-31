
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down?s=sharp-regular circle-arrow-down}
 * @preview ![circle-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-arrow-down.svg)
 */
const CircleArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM239 393l17 17 17-17 88-88 17-17L344 254.1l-17 17-47 47L280 136l0-24-48 0 0 24 0 182.1-47-47-17-17L134.1 288l17 17 88 88z" />
    </Icon>
);

export default CircleArrowDown;