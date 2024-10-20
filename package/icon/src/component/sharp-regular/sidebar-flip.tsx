
import { Icon } from "../../index";

/**
 * A component that renders the `sidebar-flip` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar-flip?s=sharp-regular sidebar-flip}
 * @preview ![sidebar-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sidebar-flip.svg)
 */
const SidebarFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 80l0 352L48 432 48 80l240 0zM512 32l-48 0L48 32 0 32 0 80 0 432l0 48 48 0 416 0 48 0 0-48 0-352 0-48zM448 96l0 48-96 0 0-48 96 0zm-96 96l96 0 0 48-96 0 0-48zm96 96l0 48-96 0 0-48 96 0z" />
    </Icon>
);

export default SidebarFlip;