
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shelves` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves?s=duotone shelves}
 * @preview ![shelves](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shelves.svg)
 */
const Shelves: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 192 0 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l512 0c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 0-256 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 160 64 32C64 14.3 49.7 0 32 0S0 14.3 0 32zM64 224l512 0 0 192L64 416l0-192z" />
        <path d="M384 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L384 0zM96 288l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zm160 0l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32z" />
    </Icon>
);

export default Shelves;