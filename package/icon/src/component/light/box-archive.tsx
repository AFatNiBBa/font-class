
import { Icon } from "../../index";

/**
 * A component that renders the `box-archive` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-archive?s=light box-archive}
 * @preview ![box-archive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/box-archive.svg)
 */
const BoxArchive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 64L32 64l0 64 32 0 384 0 32 0 0-64zm0 96l-32 0L64 160l-32 0c-17.7 0-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32zM160 240c0-8.8 7.2-16 16-16l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16zm288-48l32 0 0 224c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-224 32 0 0 224c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-224z" />
    </Icon>
);

export default BoxArchive;