
import { Icon } from "../../index";

/**
 * A component that renders the `sidebar-flip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar-flip?s=sharp-solid sidebar-flip}
 * @preview ![sidebar-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sidebar-flip.svg)
 */
const SidebarFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32L0 32 0 480l512 0 0-448zM288 96l0 320L64 416 64 96l224 0zm64 0l96 0 0 48-96 0 0-48zm96 96l0 48-96 0 0-48 96 0zm-96 96l96 0 0 48-96 0 0-48z" />
    </Icon>
);

export default SidebarFlip;