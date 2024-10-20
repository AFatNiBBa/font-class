
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-top` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-top?s=sharp-duotone-solid objects-align-top}
 * @preview ![objects-align-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/objects-align-top.svg)
 */
const ObjectsAlignTop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 128l0 384 160 0 0-384L64 128zm224 0l0 256 160 0 0-256-160 0z" />
        <path d="M0 0H512V48H0V0z" />
    </Icon>
);

export default ObjectsAlignTop;