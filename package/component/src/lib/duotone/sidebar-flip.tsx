
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sidebar-flip` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar-flip?s=duotone sidebar-flip}
 * @preview ![sidebar-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sidebar-flip.svg)
 */
const SidebarFlip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l224 0 0 448L64 480c-35.3 0-64-28.7-64-64L0 96z" />
        <path d="M448 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-160 0 0-448 160 0zM424 96l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24zm24 120c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24zm-24 72l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24z" />
    </Icon>
);

export default SidebarFlip;