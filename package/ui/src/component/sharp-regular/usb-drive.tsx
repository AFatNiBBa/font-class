
import { Icon } from "../../index";

/**
 * A component that renders the `usb-drive` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/usb-drive?s=sharp-regular usb-drive}
 * @preview ![usb-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/usb-drive.svg)
 */
const UsbDrive: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 144l0 224 352 0 0-224L48 144zM0 96l48 0 352 0 48 0 0 48 0 224 0 48-48 0L48 416 0 416l0-48L0 144 0 96zm640 32l0 256-160 0 0-256 160 0zm-56 56l-48 0 0 48 48 0 0-48zm-48 96l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default UsbDrive;