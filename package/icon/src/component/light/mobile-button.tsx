
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-button` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-button?s=light mobile-button}
 * @preview ![mobile-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mobile-button.svg)
 */
const MobileButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M96 32C78.3 32 64 46.3 64 64l0 384c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L96 32zM32 64C32 28.7 60.7 0 96 0L288 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64L32 64zM192 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default MobileButton;