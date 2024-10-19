
import { Icon, generic } from "../../index";

/**
 * A component that renders the `h` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h?s=sharp-duotone-solid h}
 * @preview ![h](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMjAgMjU2bDAgMTkyIDAgMzIgNjQgMCAwLTMyIDAtMTkyIDAtMzIgMC0zMiAwLTEyOCAwLTMyLTY0IDAgMCAzMiAwIDEyOEw2NCAxOTIgNjQgNjRsMC0zMkwwIDMyIDAgNjQgMCAxOTJsMCA2NEwwIDQ0OGwwIDMyIDY0IDAgMC0zMiAwLTE5MiAyNTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const H: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M320 256l0 192 0 32 64 0 0-32 0-192 0-32 0-32 0-128 0-32-64 0 0 32 0 128L64 192 64 64l0-32L0 32 0 64 0 192l0 64L0 448l0 32 64 0 0-32 0-192 256 0z" />
    </Icon>
);

export default H;