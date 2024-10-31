
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-notch` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-notch?s=sharp-duotone-solid mobile-notch}
 * @preview ![mobile-notch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mobile-notch.svg)
 */
const MobileNotch: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 0L80 0 304 0l64 0 0 64 0 384 0 64-64 0L80 512l-64 0 0-64L16 64 16 0zM80 64l0 384 224 0 0-384-48 0 0 32L128 96l0-32L80 64z" />
        <path d="M80 64V448H304V64H256V96H128V64H80z" />
    </Icon>
);

export default MobileNotch;