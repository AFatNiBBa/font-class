
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-barcode` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-barcode?s=sharp-duotone-solid rectangle-barcode}
 * @preview ![rectangle-barcode](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDU3NiAwIDAtNDQ4TDAgMzJ6bTk2IDk2bDQ4IDAgMCAyNTYtNDggMCAwLTI1NnptODAgMGwzMiAwIDAgMjU2LTMyIDAgMC0yNTZ6bTY0IDBsNDggMCAwIDI1Ni00OCAwIDAtMjU2em0xMTIgMGw0OCAwIDAgMjU2LTQ4IDAgMC0yNTZ6bTk2IDBsMzIgMCAwIDI1Ni0zMiAwIDAtMjU2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMTI4bDQ4IDAgMCAyNTYtNDggMCAwLTI1NnptODAgMGwzMiAwIDAgMjU2LTMyIDAgMC0yNTZ6bTExMiAwbDAgMjU2LTQ4IDAgMC0yNTYgNDggMHptNjQgMGw0OCAwIDAgMjU2LTQ4IDAgMC0yNTZ6bTEyOCAwbDAgMjU2LTMyIDAgMC0yNTYgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const RectangleBarcode: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l576 0 0-448L0 32zm96 96l48 0 0 256-48 0 0-256zm80 0l32 0 0 256-32 0 0-256zm64 0l48 0 0 256-48 0 0-256zm112 0l48 0 0 256-48 0 0-256zm96 0l32 0 0 256-32 0 0-256z" />
            <path d="M96 128l48 0 0 256-48 0 0-256zm80 0l32 0 0 256-32 0 0-256zm112 0l0 256-48 0 0-256 48 0zm64 0l48 0 0 256-48 0 0-256zm128 0l0 256-32 0 0-256 32 0z" />
    </Icon>
);

export default RectangleBarcode;