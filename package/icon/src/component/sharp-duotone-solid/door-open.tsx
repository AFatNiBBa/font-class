
import { Icon, generic } from "../../index";

/**
 * A component that renders the `door-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-open?s=sharp-duotone-solid door-open}
 * @preview ![door-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/door-open.svg)
 */
const DoorOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 64l0 384 0 64 256 0 0-384 0-64 0-64L64 64zM208 256c0-17.7 10.7-32 24-32s24 14.3 24 32s-10.7 32-24 32s-24-14.3-24-32z" />
        <path d="M320 128l128 0 0 352 0 32 32 0 64 0 32 0 0-64-32 0-32 0 0-352 0-32-32 0L320 64l0 64zM32 448L0 448l0 64 32 0 32 0 0-64-32 0zM232 288c13.3 0 24-14.3 24-32s-10.7-32-24-32s-24 14.3-24 32s10.7 32 24 32z" />
    </Icon>
);

export default DoorOpen;