
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-screen` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen?s=sharp-light mobile-screen}
 * @preview ![mobile-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mobile-screen.svg)
 */
const MobileScreen: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 32l0 288L64 320 64 32l256 0zm0 320l0 128L64 480l0-128 256 0zM64 0L32 0l0 32 0 448 0 32 32 0 256 0 32 0 0-32 0-448 0-32L320 0 64 0zm80 400l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0z" />
    </Icon>
);

export default MobileScreen;