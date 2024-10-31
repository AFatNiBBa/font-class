
import { Icon } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=sharp-solid door-closed}
 * @preview ![door-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/door-closed.svg)
 */
const DoorClosed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 0L480 0l0 448 64 0 32 0 0 64-32 0-64 0L96 512l-64 0L0 512l0-64 32 0 64 0L96 0zM384 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default DoorClosed;