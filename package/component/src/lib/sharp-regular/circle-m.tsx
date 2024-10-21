
import { Icon } from "../../index";

/**
 * A component that renders the `circle-m` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-m?s=sharp-regular circle-m}
 * @preview ![circle-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-m.svg)
 */
const CircleM: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM128 152l0 208 0 24 48 0 0-24 0-133.8 60.5 83.8L256 337l19.5-26.9L336 226.2 336 360l0 24 48 0 0-24 0-208 0-24-36.3 0-7.2 9.9L256 255 171.5 137.9l-7.2-9.9L128 128l0 24z" />
    </Icon>
);

export default CircleM;