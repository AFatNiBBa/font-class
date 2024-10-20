
import { Icon } from "../../index";

/**
 * A component that renders the `circle-n` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-n?s=sharp-regular circle-n}
 * @preview ![circle-n](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-n.svg)
 */
const CircleN: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm48-384l0 24 0 131.2L203.7 138.3 196.6 128 160 128l0 24 0 208 0 24 48 0 0-24 0-131.2L308.3 373.7l7.2 10.3 36.6 0 0-24 0-208 0-24-48 0z" />
    </Icon>
);

export default CircleN;