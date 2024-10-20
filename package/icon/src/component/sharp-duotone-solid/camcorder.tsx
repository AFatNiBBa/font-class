
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camcorder` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camcorder?s=sharp-duotone-solid camcorder}
 * @preview ![camcorder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/camcorder.svg)
 */
const Camcorder: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 480l384 0 0-96 0-128 0-96L96 160l0-64 192 0 32 0 0-64-32 0L64 32 32 32l0 32 0 96L0 160zm64 64l16 0 224 0 16 0 0 32-16 0L80 256l-16 0 0-32z" />
        <path d="M576 160l0 320L384 384l0-128 192-96zM80 224l224 0 16 0 0 32-16 0L80 256l-16 0 0-32 16 0z" />
    </Icon>
);

export default Camcorder;