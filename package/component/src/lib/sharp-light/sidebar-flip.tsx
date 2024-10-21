
import { Icon } from "../../index";

/**
 * A component that renders the `sidebar-flip` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar-flip?s=sharp-light sidebar-flip}
 * @preview ![sidebar-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sidebar-flip.svg)
 */
const SidebarFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64l0 384 256 0 0-384L32 64zm448 0L320 64l0 384 160 0 0-384zm0-32l32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0 448 0zM352 96l96 0 0 32-96 0 0-32zm96 64l0 32-96 0 0-32 96 0zm-96 64l96 0 0 32-96 0 0-32z" />
    </Icon>
);

export default SidebarFlip;