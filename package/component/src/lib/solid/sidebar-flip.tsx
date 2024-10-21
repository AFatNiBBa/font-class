
import { Icon } from "../../index";

/**
 * A component that renders the `sidebar-flip` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar-flip?s=solid sidebar-flip}
 * @preview ![sidebar-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sidebar-flip.svg)
 */
const SidebarFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320zM288 96l0 320L64 416 64 96l224 0zm136 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0zm24 120c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24zm-24 72c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0z" />
    </Icon>
);

export default SidebarFlip;