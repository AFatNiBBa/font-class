
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-screen-button` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen-button?s=sharp-duotone-solid mobile-screen-button}
 * @preview ![mobile-screen-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mobile-screen-button.svg)
 */
const MobileScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 0L368 0l0 512L16 512 16 0zM80 64l0 320 224 0 0-320L80 64zm80 384a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M80 64H304V384H80V64z" />
    </Icon>
);

export default MobileScreenButton;