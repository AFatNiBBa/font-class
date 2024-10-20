
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-bottom` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-bottom?s=sharp-duotone-solid objects-align-bottom}
 * @preview ![objects-align-bottom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/objects-align-bottom.svg)
 */
const ObjectsAlignBottom: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 0l0 384 160 0L224 0 64 0zM288 128l0 256 160 0 0-256-160 0z" />
        <path d="M0 512l512 0 0-48L0 464l0 48z" />
    </Icon>
);

export default ObjectsAlignBottom;