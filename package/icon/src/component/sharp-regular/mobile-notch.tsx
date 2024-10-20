
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=sharp-regular mobile-notch}
 * @preview ![mobile-notch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mobile-notch.svg)
 */
const MobileNotch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 48l0 32L128 80l0-32L64 48l0 416 256 0 0-416-64 0zM16 0L64 0 320 0l48 0 0 48 0 416 0 48-48 0L64 512l-48 0 0-48L16 48 16 0z" />
    </Icon>
);

export default MobileNotch;