
import { Icon } from "../../index";

/**
 * A component that renders the `hard-drive` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hard-drive?s=sharp-light hard-drive}
 * @preview ![hard-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hard-drive.svg)
 */
const HardDrive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 64l0 192 448 0 0-192L32 64zm0 224l0 160 448 0 0-160L32 288zM0 256L0 64 0 32l32 0 448 0 32 0 0 32 0 192 0 32 0 160 0 32-32 0L32 480 0 480l0-32L0 288l0-32zm320 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default HardDrive;