
import { Icon, generic } from "../../index";

/**
 * A component that renders the `server` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/server?s=sharp-duotone-solid server}
 * @preview ![server](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OEwwIDQ4MGw1MTIgMCAwLTE5MkwwIDI4OHptMzY4IDk2YTI0IDI0IDAgMSAxIC00OCAwIDI0IDI0IDAgMSAxIDQ4IDB6bTI0LTI1NmEyNCAyNCAwIDEgMCA0OCAwIDI0IDI0IDAgMSAwIC00OCAwem01NiAyNTZhMjQgMjQgMCAxIDEgLTQ4IDAgMjQgMjQgMCAxIDEgNDggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUxMiAzMkwwIDMyIDAgMjI0bDUxMiAwIDAtMTkyek0zNDQgMTA0YTI0IDI0IDAgMSAxIDAgNDggMjQgMjQgMCAxIDEgMC00OHptNDggMjRhMjQgMjQgMCAxIDEgNDggMCAyNCAyNCAwIDEgMSAtNDggMHptMzIgMjgwYTI0IDI0IDAgMSAwIDAtNDggMjQgMjQgMCAxIDAgMCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Server: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 480l512 0 0-192L0 288zm368 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm24-256a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm56 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
            <path d="M512 32L0 32 0 224l512 0 0-192zM344 104a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm32 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Server;