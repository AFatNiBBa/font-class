
import { Icon, generic } from "../../index";

/**
 * A component that renders the `conveyor-belt-empty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt-empty?s=duotone conveyor-belt-empty}
 * @preview ![conveyor-belt-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/conveyor-belt-empty.svg)
 */
const ConveyorBeltEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 320c-53 0-96 43-96 96s43 96 96 96l448 0c53 0 96-43 96-96s-43-96-96-96L96 320zm32 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm160 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default ConveyorBeltEmpty;