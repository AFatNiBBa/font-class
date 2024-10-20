
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up?s=sharp-solid circle-arrow-up}
 * @preview ![circle-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-arrow-up.svg)
 */
const CircleArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm17-409L385 215l17 17L368 265.9l-17-17-71-71L280 392l0 24-48 0 0-24 0-214.1-71 71-17 17L110.1 232l17-17L239 103l17-17 17 17z" />
    </Icon>
);

export default CircleArrowUp;