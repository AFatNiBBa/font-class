
import { Icon } from "../../index";

/**
 * A component that renders the `circle-chevron-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-down?s=sharp-solid circle-chevron-down}
 * @preview ![circle-chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-chevron-down.svg)
 */
const CircleChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM239 345L135 241l-17-17L152 190.1l17 17 87 87 87-87 17-17L393.9 224l-17 17L273 345l-17 17-17-17z" />
    </Icon>
);

export default CircleChevronDown;