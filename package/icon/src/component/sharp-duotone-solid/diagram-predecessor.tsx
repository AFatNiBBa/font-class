
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-predecessor` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-predecessor?s=sharp-duotone-solid diagram-predecessor}
 * @preview ![diagram-predecessor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diagram-predecessor.svg)
 */
const DiagramPredecessor: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 480l512 0 0-192L0 288z" />
        <path d="M288 224l0-128 96 0 0 32-64 0 0 32 96 96 96-96 0-32-64 0 0-64 0-32-32 0L288 32l-80 0L0 32 0 224l288 0z" />
    </Icon>
);

export default DiagramPredecessor;