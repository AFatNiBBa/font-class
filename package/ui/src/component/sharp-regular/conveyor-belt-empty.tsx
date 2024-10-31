
import { Icon } from "../../index";

/**
 * A component that renders the `conveyor-belt-empty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt-empty?s=sharp-regular conveyor-belt-empty}
 * @preview ![conveyor-belt-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/conveyor-belt-empty.svg)
 */
const ConveyorBeltEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 336c-35.3 0-64 28.7-64 64s28.7 64 64 64l416 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-416 0zM0 400c0-61.9 50.1-112 112-112l416 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-416 0C50.1 512 0 461.9 0 400zm128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm160 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm224-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default ConveyorBeltEmpty;