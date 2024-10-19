
import { Icon, generic } from "../../index";

/**
 * A component that renders the `castle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/castle?s=sharp-duotone-solid castle}
 * @preview ![castle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMGw2NCAwIDAgNjQgNDggMCAwLTY0IDY0IDAgMCA2NCAzMiAwIDAtNjQgNjQgMCAwIDY0IDQ4IDAgMC02NCA2NCAwIDAgMTEyIDAgNjQgMCA0OC00OCAwLTE2IDAtMjU2IDAtMTYgMC00OCAwIDAtNDggMC02NEwxMjggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMTYwbDY0IDAgMCA2NCA1MTIgMCAwLTY0IDY0IDAgMCA2NCAwIDY0IDAgMjI0LTI1NiAwIDAtMTI4YzAtMzUuMy0yOC43LTY0LTY0LTY0cy02NCAyOC43LTY0IDY0bDAgMTI4TDAgNTEyIDAgMjg4bDAtNjQgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Castle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 0l64 0 0 64 48 0 0-64 64 0 0 64 32 0 0-64 64 0 0 64 48 0 0-64 64 0 0 112 0 64 0 48-48 0-16 0-256 0-16 0-48 0 0-48 0-64L128 0z" />
            <path d="M0 160l64 0 0 64 512 0 0-64 64 0 0 64 0 64 0 224-256 0 0-128c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 128L0 512 0 288l0-64 0-64z" />
    </Icon>
);

export default Castle;