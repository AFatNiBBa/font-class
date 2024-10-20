
import { Icon } from "../../index";

/**
 * A component that renders the `hard-drive` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hard-drive?s=sharp-regular hard-drive}
 * @preview ![hard-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/hard-drive.svg)
 */
const HardDrive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 80l0 176 416 0 0-176L48 80zm0 224l0 128 416 0 0-128L48 304zM0 256L0 80 0 32l48 0 416 0 48 0 0 48 0 176 0 48 0 128 0 48-48 0L48 480 0 480l0-48L0 304l0-48zM280 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default HardDrive;