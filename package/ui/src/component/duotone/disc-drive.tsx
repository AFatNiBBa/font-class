
import { Icon, generic } from "../../index";

/**
 * A component that renders the `disc-drive` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/disc-drive?s=duotone disc-drive}
 * @preview ![disc-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/disc-drive.svg)
 */
const DiscDrive: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 256a160 160 0 1 0 320 0A160 160 0 1 0 96 256zm192 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M32 96c0-35.3 28.7-64 64-64l320 0c35.3 0 64 28.7 64 64l0 320c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0L96 480l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 96zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192 0A160 160 0 1 0 96 256a160 160 0 1 0 320 0z" />
    </Icon>
);

export default DiscDrive;