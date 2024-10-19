
import { Icon, generic } from "../../index";

/**
 * A component that renders the `align-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-slash?s=sharp-duotone-solid align-slash}
 * @preview ![align-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMmwwIDE5LjhMMTUzIDk2bDM5MSAwIDAtNjRMOTYgMzJ6bTAgMTM5LjZMOTYgMjI0bDY2LjUgMEw5NiAxNzEuNnpNOTYgMjg4bDAgNjQgMjI4LjkgMC04MS4yLTY0TDk2IDI4OHptMCAxMjhsMCA2NCAzOTEuNCAwLTgxLjItNjRMOTYgNDE2ek0yMzUuNCAxNjBsODIuNCA2NEw1NDQgMjI0bDAtNjQtMzA4LjYgMHpNNDAwLjMgMjg4bDgyLjQgNjQgNjEuMyAwIDAtNjQtMTQzLjcgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI5LjQgLjFsMTkgMTQuN0w2MjAuOSA0NTkuM2wxOSAxNC43LTI5LjQgMzcuOS0xOS0xNC43TDE4LjkgNTIuNyAwIDM4IDI5LjQgLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
const AlignSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 19.8L153 96l391 0 0-64L96 32zm0 139.6L96 224l66.5 0L96 171.6zM96 288l0 64 228.9 0-81.2-64L96 288zm0 128l0 64 391.4 0-81.2-64L96 416zM235.4 160l82.4 64L544 224l0-64-308.6 0zM400.3 288l82.4 64 61.3 0 0-64-143.7 0z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L18.9 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default AlignSlash;