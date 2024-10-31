
import { Icon } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=sharp-regular door-closed}
 * @preview ![door-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/door-closed.svg)
 */
const DoorClosed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M432 48l0 416-288 0 0-416 288 0zm48 416l0-416 0-48L432 0 144 0 96 0l0 48 0 416-72 0L0 464l0 48 24 0 72 0 48 0 288 0 48 0 72 0 24 0 0-48-24 0-72 0zM368 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default DoorClosed;