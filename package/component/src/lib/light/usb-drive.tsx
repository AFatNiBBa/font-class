
import { Icon } from "../../index";

/**
 * A component that renders the `usb-drive` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/usb-drive?s=light usb-drive}
 * @preview ![usb-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/usb-drive.svg)
 */
const UsbDrive: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 128c-17.7 0-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32l352 0 0-256L64 128zM0 160c0-35.3 28.7-64 64-64l352 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32L64 416c-35.3 0-64-28.7-64-64L0 160zM480 384l0-32 128 0 0-192-128 0 0-32 128 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-128 0zm96-176a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM560 320a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
    </Icon>
);

export default UsbDrive;