
import { Icon } from "../../index";

/**
 * A component that renders the `conveyor-belt` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt?s=sharp-regular conveyor-belt}
 * @preview ![conveyor-belt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/conveyor-belt.svg)
 */
const ConveyorBelt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 48l0 160-288 0 0-160 80 0 0 96 64-48 64 48 0-96 80 0zm0-48L384 0 256 0 176 0 128 0l0 48 0 160 0 48 48 0 288 0 48 0 0-48 0-160 0-48L464 0zM592 400c0 35.3-28.7 64-64 64l-416 0c-35.3 0-64-28.7-64-64s28.7-64 64-64l416 0c35.3 0 64 28.7 64 64zM112 288C50.1 288 0 338.1 0 400s50.1 112 112 112l416 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-416 0zm48 112a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm224-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default ConveyorBelt;