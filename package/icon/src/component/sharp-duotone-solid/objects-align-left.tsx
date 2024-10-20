
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-left?s=sharp-duotone-solid objects-align-left}
 * @preview ![objects-align-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/objects-align-left.svg)
 */
const ObjectsAlignLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 64l0 160 384 0 0-160L128 64zm0 224l0 160 256 0 0-160-256 0z" />
        <path d="M0 0L0 512l48 0L48 0 0 0z" />
    </Icon>
);

export default ObjectsAlignLeft;