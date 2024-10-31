
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-screen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen?s=sharp-duotone-solid mobile-screen}
 * @preview ![mobile-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mobile-screen.svg)
 */
const MobileScreen: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 0L368 0l0 512L16 512 16 0zM80 64l0 320 224 0 0-320L80 64zm64 368l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0z" />
        <path d="M80 64H304V384H80V64z" />
    </Icon>
);

export default MobileScreen;