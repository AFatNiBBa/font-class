
import { Icon, generic } from "../../index";

/**
 * A component that renders the `usb-drive` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/usb-drive?s=sharp-duotone-solid usb-drive}
 * @preview ![usb-drive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00ODAgMTI4bDE2MCAwIDAgMjU2LTE2MCAwIDAtMjU2em01NiA1NmwwIDQ4IDQ4IDAgMC00OC00OCAwem0wIDk2bDAgNDggNDggMCAwLTQ4LTQ4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDk2SDQ4MFY0MTZIMFY5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const UsbDrive: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M480 128l160 0 0 256-160 0 0-256zm56 56l0 48 48 0 0-48-48 0zm0 96l0 48 48 0 0-48-48 0z" />
            <path d="M0 96H480V416H0V96z" />
    </Icon>
);

export default UsbDrive;