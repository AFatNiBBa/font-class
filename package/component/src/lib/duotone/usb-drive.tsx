
import { Icon, generic } from "../../index";

/**
 * A component that renders the `usb-drive` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/usb-drive?s=duotone usb-drive}
 * @preview ![usb-drive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/usb-drive.svg)
 */
const UsbDrive: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M480 128l128 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-128 0 0-256zm56 80a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 96a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
        <path d="M0 160c0-35.3 28.7-64 64-64H448c17.7 0 32 14.3 32 32V384c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64V160z" />
    </Icon>
);

export default UsbDrive;