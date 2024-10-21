
import { Icon } from "../../index";

/**
 * A component that renders the `usb-drive` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/usb-drive?s=sharp-thin usb-drive}
 * @preview ![usb-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/usb-drive.svg)
 */
const UsbDrive: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 112l0 288 416 0 0-288L16 112zM0 96l16 0 416 0 16 0 0 16 0 288 0 16-16 0L16 416 0 416l0-16L0 112 0 96zM624 384l-144 0 0-16 144 0 0-224-144 0 0-16 144 0 16 0 0 16 0 224 0 16-16 0zm-48-96l-32 0 0 32 32 0 0-32zm-32-16l32 0 16 0 0 16 0 32 0 16-16 0-32 0-16 0 0-16 0-32 0-16 16 0zm0-80l0 32 32 0 0-32-32 0zm-16-16l16 0 32 0 16 0 0 16 0 32 0 16-16 0-32 0-16 0 0-16 0-32 0-16z" />
    </Icon>
);

export default UsbDrive;