
import { Icon, generic } from "../../index";

/**
 * A component that renders the `boxes-stacked` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boxes-stacked?s=sharp-duotone-solid boxes-stacked}
 * @preview ![boxes-stacked](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMDQgMjU2bDgwIDAgMCA5Ni04MCAwIDAtOTZ6TTI0OCAwbDgwIDAgMCA5Ni04MCAwIDAtOTZ6TTM5MiAyNTZsODAgMCAwIDk2LTgwIDAgMC05NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI0OCAwTDE2MCAwbDAgMjI0IDI1NiAwTDQxNiAwIDMyOCAwbDAgOTYtODAgMCAwLTk2ek0xMDQgMjU2TDAgMjU2IDAgNTEybDI4OCAwIDAtMjU2LTEwNCAwIDAgOTYtODAgMCAwLTk2ek01NzYgNTEybDAtMjU2LTEwNCAwIDAgOTYtODAgMCAwLTk2LTcyIDAgMCAyNTYgMjU2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const BoxesStacked: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M104 256l80 0 0 96-80 0 0-96zM248 0l80 0 0 96-80 0 0-96zM392 256l80 0 0 96-80 0 0-96z" />
            <path d="M248 0L160 0l0 224 256 0L416 0 328 0l0 96-80 0 0-96zM104 256L0 256 0 512l288 0 0-256-104 0 0 96-80 0 0-96zM576 512l0-256-104 0 0 96-80 0 0-96-72 0 0 256 256 0z" />
    </Icon>
);

export default BoxesStacked;