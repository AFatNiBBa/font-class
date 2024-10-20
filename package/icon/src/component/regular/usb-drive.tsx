
import { Icon } from "../../index";

/**
 * A component that renders the `usb-drive` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/usb-drive?s=regular usb-drive}
 * @preview ![usb-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/usb-drive.svg)
 */
const UsbDrive: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 144c-8.8 0-16 7.2-16 16l0 192c0 8.8 7.2 16 16 16l336 0 0-224L64 144zM0 160c0-35.3 28.7-64 64-64l352 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32L64 416c-35.3 0-64-28.7-64-64L0 160zm608-32c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-128 0 0-256 128 0zm-48 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM536 304a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
    </Icon>
);

export default UsbDrive;