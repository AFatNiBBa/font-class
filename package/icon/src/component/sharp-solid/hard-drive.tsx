
import { Icon } from "../../index";

/**
 * A component that renders the `hard-drive` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hard-drive?s=sharp-solid hard-drive}
 * @preview ![hard-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hard-drive.svg)
 */
const HardDrive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32l512 0 0 224L0 256 0 32zM512 288l0 192L0 480 0 288l512 0zM320 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default HardDrive;