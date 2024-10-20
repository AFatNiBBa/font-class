
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=sharp-solid mobile-notch}
 * @preview ![mobile-notch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mobile-notch.svg)
 */
const MobileNotch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 64l0 32 128 0 0-32 48 0 0 384L80 448 80 64l48 0zM80 0L16 0l0 64 0 384 0 64 64 0 224 0 64 0 0-64 0-384 0-64L304 0 80 0zm48 384l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0z" />
    </Icon>
);

export default MobileNotch;