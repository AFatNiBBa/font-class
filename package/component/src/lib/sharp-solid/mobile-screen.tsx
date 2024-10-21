
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-screen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen?s=sharp-solid mobile-screen}
 * @preview ![mobile-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mobile-screen.svg)
 */
const MobileScreen: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 0L368 0l0 512L16 512 16 0zM144 432l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zM304 64L80 64l0 320 224 0 0-320z" />
    </Icon>
);

export default MobileScreen;