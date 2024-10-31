
import { Icon } from "../../index";

/**
 * A component that renders the `disc-drive` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/disc-drive?s=regular disc-drive}
 * @preview ![disc-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/disc-drive.svg)
 */
const DiscDrive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 96l0 336 352 0 0-336c0-8.8-7.2-16-16-16L96 80c-8.8 0-16 7.2-16 16zm400 0l0 336 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0L56 480l-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l8 0L32 96c0-35.3 28.7-64 64-64l320 0c35.3 0 64 28.7 64 64zM112 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm176 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default DiscDrive;