
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-divide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-divide?s=sharp-duotone-solid circle-divide}
 * @preview ![circle-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-divide.svg)
 */
const CircleDivide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm144-24l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48zm80-104l64 0 0 64-64 0 0-64zm0 192l64 0 0 64-64 0 0-64z" />
        <path d="M224 128l64 0 0 64-64 0 0-64zM144 232l24 0 176 0 24 0 0 48-24 0-176 0-24 0 0-48zm144 88l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default CircleDivide;