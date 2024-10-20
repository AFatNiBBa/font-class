
import { Icon, generic } from "../../index";

/**
 * A component that renders the `objects-align-center-horizontal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-center-horizontal?s=sharp-duotone-solid objects-align-center-horizontal}
 * @preview ![objects-align-center-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/objects-align-center-horizontal.svg)
 */
const ObjectsAlignCenterHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 64l200 0 48 0 200 0 0 160-200 0-48 0L32 224 32 64zM96 288l136 0 48 0 136 0 0 160-136 0-48 0L96 448l0-160z" />
        <path d="M232 0l48 0 0 64-48 0 0-64zm0 224l48 0 0 64-48 0 0-64zm0 224l48 0 0 64-48 0 0-64z" />
    </Icon>
);

export default ObjectsAlignCenterHorizontal;