
import { Icon } from "../../index";

/**
 * A component that renders the `disc-drive` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/disc-drive?s=sharp-regular disc-drive}
 * @preview ![disc-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/disc-drive.svg)
 */
const DiscDrive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M56 32L32 32l0 24 0 376-8 0L0 432l0 48 24 0 32 0 400 0 32 0 24 0 0-48-24 0-8 0 0-376 0-24-24 0L56 32zM432 80l0 352L80 432 80 80l352 0zM400 256a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-176 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default DiscDrive;