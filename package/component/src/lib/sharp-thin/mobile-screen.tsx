
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-screen` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen?s=sharp-thin mobile-screen}
 * @preview ![mobile-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mobile-screen.svg)
 */
const MobileScreen: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 16l0 368L48 384 48 16l288 0zm0 384l0 96L48 496l0-96 288 0zM48 0L32 0l0 16 0 480 0 16 16 0 288 0 16 0 0-16 0-480 0-16L336 0 48 0zm88 440l0 16 8 0 96 0 8 0 0-16-8 0-96 0-8 0z" />
    </Icon>
);

export default MobileScreen;