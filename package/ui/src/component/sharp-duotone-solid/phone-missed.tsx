
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-missed` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-missed?s=sharp-duotone-solid phone-missed}
 * @preview ![phone-missed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/phone-missed.svg)
 */
const PhoneMissed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 400c37.3-48 153.6-144 320-144s282.7 96 320 144L576 512 416 464l0-80c-62.3-20.8-129.7-20.8-192 0l0 80L64 512 0 400z" />
        <path d="M96 0l0 128 32 32 47-47 88 88 7 7 9.9 0 80 0 9.9 0 7-7L521 57l17-17L504 6.1 487 23l-137 137-60.1 0L209 79l47-47L224 0 96 0z" />
    </Icon>
);

export default PhoneMissed;