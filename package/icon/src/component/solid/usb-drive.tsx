
import { Icon } from "../../index";

/**
 * A component that renders the `usb-drive` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/usb-drive?s=solid usb-drive}
 * @preview ![usb-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/usb-drive.svg)
 */
const UsbDrive: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 96C28.7 96 0 124.7 0 160L0 352c0 35.3 28.7 64 64 64l352 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32L64 96zm544 32l-128 0 0 256 128 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32zM560 232a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm24 72a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
    </Icon>
);

export default UsbDrive;