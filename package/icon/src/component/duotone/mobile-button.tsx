
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-button` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-button?s=duotone mobile-button}
 * @preview ![mobile-button](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mobile-button.svg)
 */
const MobileButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 384l352 0 0 64c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64l0-64zm144 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V384H16V64z" />
    </Icon>
);

export default MobileButton;