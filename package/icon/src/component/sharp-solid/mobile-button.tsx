
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-button` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-button?s=sharp-solid mobile-button}
 * @preview ![mobile-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/mobile-button.svg)
 */
const MobileButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 0L16 0l0 512 352 0L368 0zM192 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default MobileButton;