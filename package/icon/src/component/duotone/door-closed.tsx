
import { Icon, generic } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=duotone door-closed}
 * @preview ![door-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/door-closed.svg)
 */
const DoorClosed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 64l0 384 0 64 384 0 0-64 0-384c0-35.3-28.7-64-64-64L160 0C124.7 0 96 28.7 96 64zM416 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M384 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM0 480c0-17.7 14.3-32 32-32l64 0 0 64-64 0c-17.7 0-32-14.3-32-32zm576 0c0 17.7-14.3 32-32 32l-64 0 0-64 64 0c17.7 0 32 14.3 32 32z" />
    </Icon>
);

export default DoorClosed;