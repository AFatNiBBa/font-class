
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-z` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-z?s=sharp-duotone-solid circle-z}
 * @preview ![circle-z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-z.svg)
 */
const CircleZ: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 128l24 0 144 0 24 0 0 31.5-4.3 6.2L229.8 336l98.2 0 24 0 0 48-24 0-144 0-24 0 0-31.5 4.3-6.2L282.2 176 184 176l-24 0 0-48z" />
        <path d="M352 128l0 31.5-4.3 6.2L229.8 336l98.2 0 24 0 0 48-24 0-144 0-24 0 0-31.5 4.3-6.2L282.2 176 184 176l-24 0 0-48 24 0 144 0 24 0z" />
    </Icon>
);

export default CircleZ;