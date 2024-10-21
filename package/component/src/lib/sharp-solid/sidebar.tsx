
import { Icon } from "../../index";

/**
 * A component that renders the `sidebar` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar?s=sharp-solid sidebar}
 * @preview ![sidebar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sidebar.svg)
 */
const Sidebar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 448L0 480 0 32zM224 96l0 320 224 0 0-320L224 96zm-64 0L64 96l0 48 96 0 0-48zM64 192l0 48 96 0 0-48-96 0zm96 96l-96 0 0 48 96 0 0-48z" />
    </Icon>
);

export default Sidebar;