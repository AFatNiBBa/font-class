
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-info` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-info?s=sharp-duotone-solid circle-info}
 * @preview ![circle-info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-info.svg)
 */
const CircleInfo: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm192-32l24 0 48 0 24 0 0 24 0 88 8 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0 24 0 0-64-24 0-24 0 0-48zm32-96l64 0 0 64-64 0 0-64z" />
        <path d="M288 128l0 64-64 0 0-64 64 0zm-96 96l24 0 48 0 24 0 0 24 0 88 8 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0 24 0 0-64-24 0-24 0 0-48z" />
    </Icon>
);

export default CircleInfo;