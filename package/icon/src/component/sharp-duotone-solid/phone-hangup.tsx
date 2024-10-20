
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-hangup` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-hangup?s=sharp-duotone-solid phone-hangup}
 * @preview ![phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/phone-hangup.svg)
 */
const PhoneHangup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M20.2 285.5c75.5-34 139.6-51.8 203.8-59.8c0 10.8 0 21.5 0 32.3c-59.6 7.9-119.7 24.8-190.8 56.8c-4.3-9.7-8.7-19.5-13-29.2zM416 225.6c64.2 8 128.3 25.8 203.8 59.8c-4.3 9.7-8.7 19.5-13 29.2c-71.2-32.1-131.2-49-190.8-56.8l0-32.3z" />
        <path d="M20.2 285.5L0 240C37.3 192 153.6 96 320 96s282.7 96 320 144l-20.2 45.4c-75.5-34-139.6-51.8-203.8-59.8l0-1.6c-62.3-20.8-129.7-20.8-192 0l0 1.6c-64.2 8-128.3 25.8-203.8 59.8zm13 29.2c71.2-32.1 131.2-49 190.8-56.8l0 94.1L64 384 33.2 314.7zM416 257.9c59.6 7.9 119.7 24.8 190.8 56.8L576 384 416 352l0-94.1z" />
    </Icon>
);

export default PhoneHangup;