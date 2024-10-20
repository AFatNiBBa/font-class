
import { Icon, generic } from "../../index";

/**
 * A component that renders the `disc-drive` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/disc-drive?s=sharp-duotone-solid disc-drive}
 * @preview ![disc-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/disc-drive.svg)
 */
const DiscDrive: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 256a160 160 0 1 0 320 0A160 160 0 1 0 96 256zm192 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M32 32l448 0 0 384 32 0 0 64-32 0L32 480 0 480l0-64 32 0L32 32zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192 0A160 160 0 1 0 96 256a160 160 0 1 0 320 0z" />
    </Icon>
);

export default DiscDrive;