
import { Icon } from "../../index";

/**
 * A component that renders the `box-archive` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-archive?s=sharp-light box-archive}
 * @preview ![box-archive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/box-archive.svg)
 */
const BoxArchive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 64L32 64l0 64 32 0 384 0 32 0 0-64zm0 96l-32 0L64 160l-32 0L0 160l0-32L0 64 0 32l32 0 448 0 32 0 0 32 0 64 0 32-32 0zM160 224l16 0 160 0 16 0 0 32-16 0-160 0-16 0 0-32zm288-32l32 0 0 256 0 32-32 0L64 480l-32 0 0-32 0-256 32 0 0 256 384 0 0-256z" />
    </Icon>
);

export default BoxArchive;