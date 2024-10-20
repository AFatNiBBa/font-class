
import { Icon, generic } from "../../index";

/**
 * A component that renders the `conveyor-belt-boxes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt-boxes?s=sharp-duotone-solid conveyor-belt-boxes}
 * @preview ![conveyor-belt-boxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/conveyor-belt-boxes.svg)
 */
const ConveyorBeltBoxes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416c0 53 43 96 96 96l448 0c53 0 96-43 96-96s-43-96-96-96L96 320c-53 0-96 43-96 96zm160 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm192 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm192 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M320 0L64 0l0 256 256 0L320 0zM576 64L384 64l0 192 192 0 0-192z" />
    </Icon>
);

export default ConveyorBeltBoxes;