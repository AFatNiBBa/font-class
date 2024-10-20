
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-successor` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-successor?s=sharp-duotone-solid diagram-successor}
 * @preview ![diagram-successor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/diagram-successor.svg)
 */
const DiagramSuccessor: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 224l288 0 0-128 96 0 0 32-64 0 0 32 96 96 96-96 0-32-64 0 0-64 0-32-32 0L288 32l-80 0L0 32z" />
        <path d="M512 480l0-192L0 288 0 480l512 0z" />
    </Icon>
);

export default DiagramSuccessor;