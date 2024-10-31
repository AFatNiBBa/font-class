
import { Icon, generic } from "../../index";

/**
 * A component that renders the `usb-drive` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/usb-drive?s=sharp-duotone-solid usb-drive}
 * @preview ![usb-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/usb-drive.svg)
 */
const UsbDrive: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M480 128l160 0 0 256-160 0 0-256zm56 56l0 48 48 0 0-48-48 0zm0 96l0 48 48 0 0-48-48 0z" />
        <path d="M0 96H480V416H0V96z" />
    </Icon>
);

export default UsbDrive;