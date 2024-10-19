
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-dashed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed?s=duotone square-dashed}
 * @preview ![square-dashed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOGwwIDMyIDY0IDAgMC0zMmMwLTE3LjcgMTQuMy0zMiAzMi0zMmwzMiAwIDAtNjRMOTYgMzJDNDMgMzIgMCA3NSAwIDEyOHpNMCAzNTJsMCAzMmMwIDUzIDQzIDk2IDk2IDk2bDMyIDAgMC02NC0zMiAwYy0xNy43IDAtMzItMTQuMy0zMi0zMmwwLTMyTDAgMzUyek0zMjAgMzJsMCA2NCAzMiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgMzIgNjQgMCAwLTMyYzAtNTMtNDMtOTYtOTYtOTZsLTMyIDB6bTAgMzg0bDAgNjQgMzIgMGM1MyAwIDk2LTQzIDk2LTk2bDAtMzItNjQgMCAwIDMyYzAgMTcuNy0xNC4zIDMyLTMyIDMybC0zMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAxOTJMMCAzMjBsNjQgMCAwLTEyOEwwIDE5MnptMzg0IDBsMCAxMjggNjQgMCAwLTEyOC02NCAwek0xNjAgNDgwbDEyOCAwIDAtNjQtMTI4IDAgMCA2NHptMC0zODRsMTI4IDAgMC02NEwxNjAgMzJsMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SquareDashed: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 128l0 32 64 0 0-32c0-17.7 14.3-32 32-32l32 0 0-64L96 32C43 32 0 75 0 128zM0 352l0 32c0 53 43 96 96 96l32 0 0-64-32 0c-17.7 0-32-14.3-32-32l0-32L0 352zM320 32l0 64 32 0c17.7 0 32 14.3 32 32l0 32 64 0 0-32c0-53-43-96-96-96l-32 0zm0 384l0 64 32 0c53 0 96-43 96-96l0-32-64 0 0 32c0 17.7-14.3 32-32 32l-32 0z" />
            <path d="M0 192L0 320l64 0 0-128L0 192zm384 0l0 128 64 0 0-128-64 0zM160 480l128 0 0-64-128 0 0 64zm0-384l128 0 0-64L160 32l0 64z" />
    </Icon>
);

export default SquareDashed;