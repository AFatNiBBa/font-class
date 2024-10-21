
import { Icon } from "../../index";

/**
 * A component that renders the `circle-divide` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-divide?s=sharp-solid circle-divide}
 * @preview ![circle-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-divide.svg)
 */
const CircleDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm32-320l-64 0 0-64 64 0 0 64zM168 232l176 0 24 0 0 48-24 0-176 0-24 0 0-48 24 0zm56 152l0-64 64 0 0 64-64 0z" />
    </Icon>
);

export default CircleDivide;