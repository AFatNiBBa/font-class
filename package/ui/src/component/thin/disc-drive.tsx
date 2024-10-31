
import { Icon } from "../../index";

/**
 * A component that renders the `disc-drive` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/disc-drive?s=thin disc-drive}
 * @preview ![disc-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/disc-drive.svg)
 */
const DiscDrive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M104 48l304 0c30.9 0 56 25.1 56 56l0 360L48 464l0-360c0-30.9 25.1-56 56-56zM480 464l0-360c0-39.8-32.2-72-72-72L104 32c-39.8 0-72 32.2-72 72l0 360L8 464c-4.4 0-8 3.6-8 8s3.6 8 8 8l32 0 432 0 32 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0zM416 256A160 160 0 1 0 96 256a160 160 0 1 0 320 0zM256 112a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM240 256a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default DiscDrive;