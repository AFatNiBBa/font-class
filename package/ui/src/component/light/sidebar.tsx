
import { Icon } from "../../index";

/**
 * A component that renders the `sidebar` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar?s=light sidebar}
 * @preview ![sidebar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sidebar.svg)
 */
const Sidebar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l-224 0 0-384 224 0zM64 64l128 0 0 384L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32zm0-32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM80 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 96zM64 176c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zm16 48c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0z" />
    </Icon>
);

export default Sidebar;