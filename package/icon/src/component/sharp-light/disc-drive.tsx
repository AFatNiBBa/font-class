
import { Icon } from "../../index";

/**
 * A component that renders the `disc-drive` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/disc-drive?s=sharp-light disc-drive}
 * @preview ![disc-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/disc-drive.svg)
 */
const DiscDrive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l16 0 416 0 16 0 0 16 0 400 16 0 16 0 0 32-16 0-32 0L48 480l-32 0L0 480l0-32 16 0 16 0L32 48l0-16zM64 448l384 0 0-384L64 64l0 384zM256 128a128 128 0 1 0 0 256 128 128 0 1 0 0-256zM416 256A160 160 0 1 1 96 256a160 160 0 1 1 320 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default DiscDrive;