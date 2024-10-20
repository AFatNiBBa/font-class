
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=solid mobile-notch}
 * @preview ![mobile-notch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/mobile-notch.svg)
 */
const MobileNotch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 64l0 16c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-16 32 0c8.8 0 16 7.2 16 16l0 352c0 8.8-7.2 16-16 16L96 448c-8.8 0-16-7.2-16-16L80 80c0-8.8 7.2-16 16-16l32 0zM96 0C51.8 0 16 35.8 16 80l0 352c0 44.2 35.8 80 80 80l192 0c44.2 0 80-35.8 80-80l0-352c0-44.2-35.8-80-80-80L96 0zm32 400c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default MobileNotch;