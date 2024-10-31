
import { Icon } from "../../index";

/**
 * A component that renders the `circle-v` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-v?s=sharp-regular circle-v}
 * @preview ![circle-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-v.svg)
 */
const CircleV: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM383.9 144l-52.4 0L256 316.2 180.5 144l-52.4 0L234 385.6l6.3 14.4 31.4 0 6.3-14.4L383.9 144z" />
    </Icon>
);

export default CircleV;