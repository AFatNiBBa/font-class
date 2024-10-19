
import { Icon, generic } from "../../index";

/**
 * A component that renders the `usb-drive` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/usb-drive?s=duotone usb-drive}
 * @preview ![usb-drive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00ODAgMTI4bDEyOCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgMTkyYzAgMTcuNy0xNC4zIDMyLTMyIDMybC0xMjggMCAwLTI1NnptNTYgODBhMjQgMjQgMCAxIDAgNDggMCAyNCAyNCAwIDEgMCAtNDggMHptMCA5NmEyNCAyNCAwIDEgMCA0OCAwIDI0IDI0IDAgMSAwIC00OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAxNjBjMC0zNS4zIDI4LjctNjQgNjQtNjRINDQ4YzE3LjcgMCAzMiAxNC4zIDMyIDMyVjM4NGMwIDE3LjctMTQuMyAzMi0zMiAzMkg2NGMtMzUuMyAwLTY0LTI4LjctNjQtNjRWMTYweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UsbDrive: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M480 128l128 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-128 0 0-256zm56 80a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 96a24 24 0 1 0 48 0 24 24 0 1 0 -48 0z" />
            <path d="M0 160c0-35.3 28.7-64 64-64H448c17.7 0 32 14.3 32 32V384c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64V160z" />
    </Icon>
);

export default UsbDrive;