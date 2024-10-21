
import { Icon } from "../../index";

/**
 * A component that renders the `circle-m` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-m?s=sharp-solid circle-m}
 * @preview ![circle-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-m.svg)
 */
const CircleM: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM128 152l0-24 36.3 0 7.2 9.9L256 255l84.5-117.1 7.2-9.9 36.3 0 0 24 0 208 0 24-48 0 0-24 0-133.8-60.5 83.8L256 337l-19.5-26.9L176 226.2 176 360l0 24-48 0 0-24 0-208z" />
    </Icon>
);

export default CircleM;