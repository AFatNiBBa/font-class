
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-down?s=sharp-regular circle-chevron-down}
 * @preview ![circle-chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-chevron-down.svg)
 */
const CircleChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM239 345l17 17 17-17L377 241l17-17L360 190.1l-17 17-87 87-87-87-17-17L118.1 224l17 17L239 345z" />
    </Icon>
);

export default CircleChevronDown;