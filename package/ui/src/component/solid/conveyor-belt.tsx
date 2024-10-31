
import { Icon } from "../../index";

/**
 * A component that renders the `conveyor-belt` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt?s=solid conveyor-belt}
 * @preview ![conveyor-belt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/conveyor-belt.svg)
 */
const ConveyorBelt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 0l80 0 0 112c0 5.9 3.2 11.3 8.5 14.1s11.5 2.5 16.4-.8L320 99.2l39.1 26.1c4.9 3.3 11.2 3.6 16.4 .8s8.5-8.2 8.5-14.1L384 0l80 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-288 0c-26.5 0-48-21.5-48-48l0-160c0-26.5 21.5-48 48-48zM0 416c0-53 43-96 96-96l448 0c53 0 96 43 96 96s-43 96-96 96L96 512c-53 0-96-43-96-96zm160 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm224-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default ConveyorBelt;