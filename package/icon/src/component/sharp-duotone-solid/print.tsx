
import { Icon, generic } from "../../index";

/**
 * A component that renders the `print` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print?s=sharp-duotone-solid print}
 * @preview ![print](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAwbDAgMTkyIDM4NCAwIDAtMTI4TDM4NCAwIDY0IDB6TTk2IDM1MmwwIDMyIDAgMTI4IDMyMCAwIDAtMTI4IDAtMzJMOTYgMzUyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAxOTJsNTEyIDAgMCAxOTItOTYgMCAwLTMyTDk2IDM1MmwwIDMyTDAgMzg0IDAgMTkyem00MDggNTZsMCA0OCA0OCAwIDAtNDgtNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Print: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 0l0 192 384 0 0-128L384 0 64 0zM96 352l0 32 0 128 320 0 0-128 0-32L96 352z" />
            <path d="M0 192l512 0 0 192-96 0 0-32L96 352l0 32L0 384 0 192zm408 56l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default Print;