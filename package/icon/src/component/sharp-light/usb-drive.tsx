
import { Icon } from "../../index";

/**
 * A component that renders the `usb-drive` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/usb-drive?s=sharp-light usb-drive}
 * @preview ![usb-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/usb-drive.svg)
 */
const UsbDrive: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 128l0 256 384 0 0-256L32 128zM0 96l32 0 384 0 32 0 0 32 0 256 0 32-32 0L32 416 0 416l0-32L0 128 0 96zM480 384l0-32 128 0 0-192-128 0 0-32 128 0 32 0 0 32 0 192 0 32-32 0-128 0zm64-192l32 0 0 32-32 0 0-32zm32 96l0 32-32 0 0-32 32 0z" />
    </Icon>
);

export default UsbDrive;