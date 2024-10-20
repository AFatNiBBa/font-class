
import { Icon } from "../../index";

/**
 * A component that renders the `circle-n` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-n?s=sharp-solid circle-n}
 * @preview ![circle-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-n.svg)
 */
const CircleN: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm48-384l48 0 0 24 0 208 0 24-36.6 0-7.2-10.3L208 228.8 208 360l0 24-48 0 0-24 0-208 0-24 36.6 0 7.2 10.3L304 283.2 304 152l0-24z" />
    </Icon>
);

export default CircleN;