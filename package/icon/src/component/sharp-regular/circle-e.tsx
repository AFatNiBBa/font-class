
import { Icon } from "../../index";

/**
 * A component that renders the `circle-e` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-e?s=sharp-regular circle-e}
 * @preview ![circle-e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-e.svg)
 */
const CircleE: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128l-24 0 0 24 0 104 0 104 0 24 24 0 144 0 24 0 0-48-24 0-120 0 0-56 88 0 24 0 0-48-24 0-88 0 0-56 120 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default CircleE;