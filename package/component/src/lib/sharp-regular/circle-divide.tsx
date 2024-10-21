
import { Icon } from "../../index";

/**
 * A component that renders the `circle-divide` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-divide?s=sharp-regular circle-divide}
 * @preview ![circle-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-divide.svg)
 */
const CircleDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm32-320l0-64-64 0 0 64 64 0zM168 232l-24 0 0 48 24 0 176 0 24 0 0-48-24 0-176 0zm56 152l64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default CircleDivide;