
import { Icon } from "../../index";

/**
 * A component that renders the `gauge-low` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gauge-low?s=sharp-solid gauge-low}
 * @preview ![gauge-low](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/gauge-low.svg)
 */
const GaugeLow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64s-28.7-64-64-64c-.6 0-1.3 0-1.9 0L190 142.3l-9.7-22-43.9 19.3 9.7 22 64.1 145.7C198.9 318.9 192 334.6 192 352c0 35.3 28.7 64 64 64zM128 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default GaugeLow;