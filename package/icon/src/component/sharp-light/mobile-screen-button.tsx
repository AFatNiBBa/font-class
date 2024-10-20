
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-screen-button` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-screen-button?s=sharp-light mobile-screen-button}
 * @preview ![mobile-screen-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mobile-screen-button.svg)
 */
const MobileScreenButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 32l0 288L64 320 64 32l256 0zm0 320l0 128L64 480l0-128 256 0zM64 0L32 0l0 32 0 448 0 32 32 0 256 0 32 0 0-32 0-448 0-32L320 0 64 0zM216 416a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default MobileScreenButton;