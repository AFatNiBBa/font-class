
import { Icon } from "../../index";

/**
 * A component that renders the `circle-t` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-t?s=sharp-regular circle-t}
 * @preview ![circle-t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-t.svg)
 */
const CircleT: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM152 144l-24 0 0 48 24 0 80 0 0 168 0 24 48 0 0-24 0-168 80 0 24 0 0-48-24 0-104 0-104 0z" />
    </Icon>
);

export default CircleT;