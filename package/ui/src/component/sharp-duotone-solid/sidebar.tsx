
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sidebar` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar?s=sharp-duotone-solid sidebar}
 * @preview ![sidebar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sidebar.svg)
 */
const Sidebar: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 32l0 448 288 0 0-448L224 32z" />
        <path d="M224 32L0 32 0 480l224 0 0-448zM160 96l0 48-96 0 0-48 96 0zM64 192l96 0 0 48-96 0 0-48zm96 96l0 48-96 0 0-48 96 0z" />
    </Icon>
);

export default Sidebar;