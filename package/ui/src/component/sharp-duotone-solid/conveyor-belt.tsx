
import { Icon, generic } from "../../index";

/**
 * A component that renders the `conveyor-belt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt?s=sharp-duotone-solid conveyor-belt}
 * @preview ![conveyor-belt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/conveyor-belt.svg)
 */
const ConveyorBelt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416c0-53 43-96 96-96l448 0c53 0 96 43 96 96s-43 96-96 96L96 512c-53 0-96-43-96-96zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM256 0L384 0l0 128L320 80l-64 48L256 0zm32 416a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm192 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M256 0L128 0l0 256 384 0L512 0 384 0l0 128L320 80l-64 48L256 0z" />
    </Icon>
);

export default ConveyorBelt;