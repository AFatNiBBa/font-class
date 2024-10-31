
import { Icon } from "../../index";

/**
 * A component that renders the `sidebar-flip` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar-flip?s=thin sidebar-flip}
 * @preview ![sidebar-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sidebar-flip.svg)
 */
const SidebarFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l224 0 0-416L64 48zm384 0L304 48l0 416 144 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48zm0-16c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l384 0zm-8 64c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l80 0zm8 72c0 4.4-3.6 8-8 8l-80 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l80 0c4.4 0 8 3.6 8 8zm-8 56c4.4 0 8 3.6 8 8s-3.6 8-8 8l-80 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l80 0z" />
    </Icon>
);

export default SidebarFlip;