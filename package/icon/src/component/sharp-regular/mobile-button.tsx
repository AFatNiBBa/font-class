
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-button` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-button?s=sharp-regular mobile-button}
 * @preview ![mobile-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mobile-button.svg)
 */
const MobileButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 48l0 416 256 0 0-416L64 48zM16 0L64 0 320 0l48 0 0 48 0 416 0 48-48 0L64 512l-48 0 0-48L16 48 16 0zM192 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default MobileButton;