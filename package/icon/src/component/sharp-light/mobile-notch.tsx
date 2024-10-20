
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=sharp-light mobile-notch}
 * @preview ![mobile-notch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mobile-notch.svg)
 */
const MobileNotch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 32l0 32 0 16-16 0-96 0-16 0 0-16 0-32L64 32l0 448 256 0 0-448-64 0zm-32 0l-64 0 0 16 64 0 0-16zM32 0L64 0 320 0l32 0 0 32 0 448 0 32-32 0L64 512l-32 0 0-32L32 32 32 0z" />
    </Icon>
);

export default MobileNotch;