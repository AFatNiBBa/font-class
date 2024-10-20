
import { Icon } from "../../index";

/**
 * A component that renders the `conveyor-belt-empty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt-empty?s=sharp-light conveyor-belt-empty}
 * @preview ![conveyor-belt-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/conveyor-belt-empty.svg)
 */
const ConveyorBeltEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 352c-35.3 0-64 28.7-64 64s28.7 64 64 64l448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64L96 352zM0 416c0-53 43-96 96-96l448 0c53 0 96 43 96 96s-43 96-96 96L96 512c-53 0-96-43-96-96zm128-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm168 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm216-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default ConveyorBeltEmpty;