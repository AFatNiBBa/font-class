
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-right?s=sharp-duotone-solid objects-align-right}
 * @preview ![objects-align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/objects-align-right.svg)
 */
const ObjectsAlignRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 224l384 0 0-160L0 64zM128 288l0 160 256 0 0-160-256 0z" />
        <path d="M512 0l0 512-48 0L464 0l48 0z" />
    </Icon>
);

export default ObjectsAlignRight;