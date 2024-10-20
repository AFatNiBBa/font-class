
import { Icon, generic } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=sharp-duotone-solid door-closed}
 * @preview ![door-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/door-closed.svg)
 */
const DoorClosed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 0l0 448 0 64 384 0 0-64L480 0 96 0zM416 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M384 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM0 448l32 0 64 0 0 64-64 0L0 512l0-64zm576 64l-32 0-64 0 0-64 64 0 32 0 0 64z" />
    </Icon>
);

export default DoorClosed;