
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=sharp-thin mobile-notch}
 * @preview ![mobile-notch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mobile-notch.svg)
 */
const MobileNotch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 16l0 40 0 8-8 0L136 64l-8 0 0-8 0-40L48 16l0 480 288 0 0-480-80 0zm-16 0l-96 0 0 32 96 0 0-32zM32 0L48 0 336 0l16 0 0 16 0 480 0 16-16 0L48 512l-16 0 0-16L32 16 32 0z" />
    </Icon>
);

export default MobileNotch;