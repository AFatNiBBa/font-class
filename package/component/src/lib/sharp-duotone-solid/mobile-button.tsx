
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-button` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-button?s=sharp-duotone-solid mobile-button}
 * @preview ![mobile-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mobile-button.svg)
 */
const MobileButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 384l352 0 0 128L16 512l0-128zm144 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M16 0H368V384H16V0z" />
    </Icon>
);

export default MobileButton;