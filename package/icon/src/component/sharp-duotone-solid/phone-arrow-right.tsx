
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-arrow-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-arrow-right?s=sharp-duotone-solid phone-arrow-right}
 * @preview ![phone-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/phone-arrow-right.svg)
 */
const PhoneArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L144 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8L368 288l144 80L480 512l-32 0C200.6 512 0 311.4 0 64L0 32z" />
        <path d="M396.8 6.1l17 17 80 80 17 17-17 17-80 80-17 17L362.9 200l17-17 39-39L312 144l-24 0 0-48 24 0 106.9 0-39-39-17-17L396.8 6.1z" />
    </Icon>
);

export default PhoneArrowRight;