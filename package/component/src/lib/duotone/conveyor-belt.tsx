
import { Icon, generic } from "../../index";

/**
 * A component that renders the `conveyor-belt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt?s=duotone conveyor-belt}
 * @preview ![conveyor-belt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/conveyor-belt.svg)
 */
const ConveyorBelt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416c0-53 43-96 96-96l448 0c53 0 96 43 96 96s-43 96-96 96L96 512c-53 0-96-43-96-96zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM256 0l16 0 96 0 16 0 0 16 0 96c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L320 99.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4 .8s-8.5-8.2-8.5-14.1l0-96 0-16zm32 416a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm192 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M256 0L176 0c-26.5 0-48 21.5-48 48l0 160c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48L384 0l0 112c0 5.9-3.2 11.3-8.5 14.1s-11.5 2.5-16.4-.8L320 99.2l-39.1 26.1c-4.9 3.3-11.2 3.6-16.4 .8s-8.5-8.2-8.5-14.1L256 0z" />
    </Icon>
);

export default ConveyorBelt;