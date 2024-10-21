
import { Icon } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=solid door-closed}
 * @preview ![door-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/door-closed.svg)
 */
const DoorClosed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 64c0-35.3 28.7-64 64-64L416 0c35.3 0 64 28.7 64 64l0 384 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-112 0-288 0L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0L96 64zM384 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default DoorClosed;