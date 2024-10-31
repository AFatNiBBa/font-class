
import { Icon, generic } from "../../index";

/**
 * A component that renders the `microscope` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microscope?s=sharp-duotone-solid microscope}
 * @preview ![microscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/microscope.svg)
 */
const Microscope: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 384l0 32 16 0 192 0 16 0 0-32-16 0-192 0-16 0zM160 0l0 32 96 0 0-32L160 0z" />
        <path d="M128 32l160 0 0 288-32 0 0 32-96 0 0-32-32 0 0-288zM512 320c0 49.2-18.5 94-48.9 128l16.9 0 32 0 0 64-32 0-160 0L32 512 0 512l0-64 32 0 288 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l0-64c106 0 192 86 192 192z" />
    </Icon>
);

export default Microscope;