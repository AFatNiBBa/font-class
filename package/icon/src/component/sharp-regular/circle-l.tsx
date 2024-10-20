
import { Icon } from "../../index";

/**
 * A component that renders the `circle-l` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-l?s=sharp-regular circle-l}
 * @preview ![circle-l](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-l.svg)
 */
const CircleL: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208 152l0-24-48 0 0 24 0 208 0 24 24 0 144 0 24 0 0-48-24 0-120 0 0-184z" />
    </Icon>
);

export default CircleL;