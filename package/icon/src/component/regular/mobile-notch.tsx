
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=regular mobile-notch}
 * @preview ![mobile-notch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mobile-notch.svg)
 */
const MobileNotch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 48l0 16c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-16L96 48C78.3 48 64 62.3 64 80l0 352c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-352c0-17.7-14.3-32-32-32l-32 0zM16 80C16 35.8 51.8 0 96 0L288 0c44.2 0 80 35.8 80 80l0 352c0 44.2-35.8 80-80 80L96 512c-44.2 0-80-35.8-80-80L16 80z" />
    </Icon>
);

export default MobileNotch;