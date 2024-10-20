
import { Icon, generic } from "../../index";

/**
 * A component that renders the `palette` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/palette?s=sharp-duotone-solid palette}
 * @preview ![palette](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/palette.svg)
 */
const Palette: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512l64-64-12.1-12.1c-12.7-12.7-19.9-30-19.9-48c0-37.5 30.4-67.9 67.9-67.9L512 320l0-64C512 114.6 397.4 0 256 0S0 114.6 0 256zm128 32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm32-128a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm128 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M224 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-96 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM96 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM384 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Palette;