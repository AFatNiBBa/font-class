
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-down?s=sharp-solid circle-arrow-down}
 * @preview ![circle-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-arrow-down.svg)
 */
const CircleArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512zm17-103L385 297l17-17L368 246.1l-17 17-71 71L280 120l0-24-48 0 0 24 0 214.1-71-71-17-17L110.1 280l17 17L239 409l17 17 17-17z" />
    </Icon>
);

export default CircleArrowDown;