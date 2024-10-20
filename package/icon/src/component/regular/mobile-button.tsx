
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-button` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-button?s=regular mobile-button}
 * @preview ![mobile-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mobile-button.svg)
 */
const MobileButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M80 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l224 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L80 48zM16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM192 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default MobileButton;