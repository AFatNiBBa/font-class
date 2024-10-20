
import { Icon } from "../../index";

/**
 * A component that renders the `sidebar` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar?s=sharp-regular sidebar}
 * @preview ![sidebar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sidebar.svg)
 */
const Sidebar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 80l0 352 240 0 0-352L224 80zM0 32l48 0 416 0 48 0 0 48 0 352 0 48-48 0L48 480 0 480l0-48L0 80 0 32zM64 96l0 48 96 0 0-48L64 96zm96 96l-96 0 0 48 96 0 0-48zM64 288l0 48 96 0 0-48-96 0z" />
    </Icon>
);

export default Sidebar;