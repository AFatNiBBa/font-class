
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hard-drive` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hard-drive?s=sharp-duotone-solid hard-drive}
 * @preview ![hard-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hard-drive.svg)
 */
const HardDrive: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l512 0 0 256L0 288 0 32zM352 384a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M0 288l512 0 0 192L0 480 0 288zm352 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default HardDrive;