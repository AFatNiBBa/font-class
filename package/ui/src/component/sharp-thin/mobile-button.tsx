
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-button` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-button?s=sharp-thin mobile-button}
 * @preview ![mobile-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mobile-button.svg)
 */
const MobileButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 16l0 480 288 0 0-480L48 16zM32 0L48 0 336 0l16 0 0 16 0 480 0 16-16 0L48 512l-16 0 0-16L32 16 32 0zM176 432a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
    </Icon>
);

export default MobileButton;