
import { Icon } from "../../index";

/**
 * A component that renders the `circle-f` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-f?s=sharp-regular circle-f}
 * @preview ![circle-f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-f.svg)
 */
const CircleF: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128l-24 0 0 24 0 112 0 96 0 24 48 0 0-24 0-72 88 0 24 0 0-48-24 0-88 0 0-64 120 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default CircleF;