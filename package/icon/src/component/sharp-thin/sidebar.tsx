
import { Icon } from "../../index";

/**
 * A component that renders the `sidebar` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar?s=sharp-thin sidebar}
 * @preview ![sidebar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sidebar.svg)
 */
const Sidebar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 48l0 416-272 0 0-416 272 0zM16 48l192 0 0 416L16 464 16 48zm0-16L0 32 0 48 0 464l0 16 16 0 480 0 16 0 0-16 0-416 0-16-16 0L16 32zM160 96L64 96l0 16 96 0 0-16zM64 160l0 16 96 0 0-16-96 0zm96 64l-96 0 0 16 96 0 0-16z" />
    </Icon>
);

export default Sidebar;