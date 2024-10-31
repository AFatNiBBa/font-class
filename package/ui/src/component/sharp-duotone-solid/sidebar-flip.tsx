
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sidebar-flip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar-flip?s=sharp-duotone-solid sidebar-flip}
 * @preview ![sidebar-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sidebar-flip.svg)
 */
const SidebarFlip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l288 0 0 448L0 480 0 32z" />
        <path d="M288 32l224 0 0 448-224 0 0-448zm64 64l0 48 96 0 0-48-96 0zm96 96l-96 0 0 48 96 0 0-48zm-96 96l0 48 96 0 0-48-96 0z" />
    </Icon>
);

export default SidebarFlip;