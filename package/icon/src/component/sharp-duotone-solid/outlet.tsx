
import { Icon, generic } from "../../index";

/**
 * A component that renders the `outlet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outlet?s=sharp-duotone-solid outlet}
 * @preview ![outlet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNTZjMCA4OCA2NCAxMjggNjQgMTI4bDE5MiAwczY0LTQwIDY0LTEyOHMtNjQtMTI4LTY0LTEyOGwtMTkyIDBzLTY0IDQwLTY0IDEyOHptODAtNjRsMzIgMCAwIDE2IDAgNDggMCAxNi0zMiAwIDAtMTYgMC00OCAwLTE2em01NiAxMjBjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNGwwIDI0LTQ4IDAgMC0yNHptNzItMTIwbDMyIDAgMCAxNiAwIDQ4IDAgMTYtMzIgMCAwLTE2IDAtNDggMC0xNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ0OCAzMkwwIDMyIDAgNDgwbDQ0OCAwIDAtNDQ4ek02NCAyNTZjMC04OCA2NC0xMjggNjQtMTI4bDE5MiAwczY0IDQwIDY0IDEyOHMtNjQgMTI4LTY0IDEyOGwtMTkyIDBzLTY0LTQwLTY0LTEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Outlet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 256c0 88 64 128 64 128l192 0s64-40 64-128s-64-128-64-128l-192 0s-64 40-64 128zm80-64l32 0 0 16 0 48 0 16-32 0 0-16 0-48 0-16zm56 120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 24-48 0 0-24zm72-120l32 0 0 16 0 48 0 16-32 0 0-16 0-48 0-16z" />
            <path d="M448 32L0 32 0 480l448 0 0-448zM64 256c0-88 64-128 64-128l192 0s64 40 64 128s-64 128-64 128l-192 0s-64-40-64-128z" />
    </Icon>
);

export default Outlet;