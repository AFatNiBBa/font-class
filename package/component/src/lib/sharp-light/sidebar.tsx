
import { Icon } from "../../index";

/**
 * A component that renders the `sidebar` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar?s=sharp-light sidebar}
 * @preview ![sidebar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sidebar.svg)
 */
const Sidebar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 64l0 384-256 0 0-384 256 0zM32 64l160 0 0 384L32 448 32 64zm0-32L0 32 0 64 0 448l0 32 32 0 448 0 32 0 0-32 0-384 0-32-32 0L32 32zM160 96L64 96l0 32 96 0 0-32zM64 160l0 32 96 0 0-32-96 0zm96 64l-96 0 0 32 96 0 0-32z" />
    </Icon>
);

export default Sidebar;