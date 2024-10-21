
import { Icon } from "../../index";

/**
 * A component that renders the `usb-drive` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/usb-drive?s=sharp-solid usb-drive}
 * @preview ![usb-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/usb-drive.svg)
 */
const UsbDrive: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 96L0 96 0 416l448 0 0-320zm192 32l-160 0 0 256 160 0 0-256zm-56 56l0 48-48 0 0-48 48 0zm-48 96l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default UsbDrive;