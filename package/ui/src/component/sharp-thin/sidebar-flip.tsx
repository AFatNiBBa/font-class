
import { Icon } from "../../index";

/**
 * A component that renders the `sidebar-flip` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar-flip?s=sharp-thin sidebar-flip}
 * @preview ![sidebar-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sidebar-flip.svg)
 */
const SidebarFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 48l0 416 272 0 0-416L16 48zm480 0L304 48l0 416 192 0 0-416zm0-16l16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 480 0zM352 96l96 0 0 16-96 0 0-16zm96 64l0 16-96 0 0-16 96 0zm-96 64l96 0 0 16-96 0 0-16z" />
    </Icon>
);

export default SidebarFlip;