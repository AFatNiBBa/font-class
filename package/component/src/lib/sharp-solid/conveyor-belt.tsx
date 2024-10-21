
import { Icon } from "../../index";

/**
 * A component that renders the `conveyor-belt` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt?s=sharp-solid conveyor-belt}
 * @preview ![conveyor-belt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/conveyor-belt.svg)
 */
const ConveyorBelt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 0L256 0l0 128 64-48 64 48L384 0 512 0l0 256-384 0L128 0zM0 416c0-53 43-96 96-96l448 0c53 0 96 43 96 96s-43 96-96 96L96 512c-53 0-96-43-96-96zm160 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm224-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default ConveyorBelt;