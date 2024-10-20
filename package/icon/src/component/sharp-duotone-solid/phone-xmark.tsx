
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-xmark?s=sharp-duotone-solid phone-xmark}
 * @preview ![phone-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/phone-xmark.svg)
 */
const PhoneXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 32L176 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8L400 288l144 80L512 512l-32 0C232.6 512 32 311.4 32 64l0-32z" />
        <path d="M529 49l17-17L512-1.9 495 15l-47 47L401 15l-17-17L350.1 32l17 17 47 47-47 47-17 17L384 193.9l17-17 47-47 47 47 17 17L545.9 160l-17-17-47-47 47-47z" />
    </Icon>
);

export default PhoneXmark;