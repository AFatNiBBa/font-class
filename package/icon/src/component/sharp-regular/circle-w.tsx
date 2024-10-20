
import { Icon } from "../../index";

/**
 * A component that renders the `circle-w` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-w?s=sharp-regular circle-w}
 * @preview ![circle-w](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-w.svg)
 */
const CircleW: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM409.5 152l-50 0L318.8 293.5 278.9 168.7 273.5 152l-35 0-5.3 16.7L193.2 293.5 152.5 152l-50 0 66.4 230.6 5 17.4 35.6 0 5.3-16.7L256 254.7l41.1 128.6 5.3 16.7 35.6 0 5-17.4L409.5 152z" />
    </Icon>
);

export default CircleW;