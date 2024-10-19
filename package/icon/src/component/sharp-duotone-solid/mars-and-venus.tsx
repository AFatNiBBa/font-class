
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mars-and-venus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-and-venus?s=sharp-duotone-solid mars-and-venus}
 * @preview ![mars-and-venus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMjI0YTY0IDY0IDAgMSAwIDEyOCAwIDY0IDY0IDAgMSAwIC0xMjggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM2OCAwTDQ5NiAwbDAgMTI4LTMyIDMyLTQ3LTQ3LTI1LjYgMjUuNkM0MDcgMTYzLjMgNDE2IDE5Mi42IDQxNiAyMjRjMCA4MC4yLTU5IDE0Ni42LTEzNiAxNTguMmwwIDEuOCAwIDI0IDI0IDAgMjQgMCAwIDQ4LTI0IDAtMjQgMCAwIDMyIDAgMjQtNDggMCAwLTI0IDAtMzItMjQgMC0yNCAwIDAtNDggMjQgMCAyNCAwIDAtMjQgMC0xLjhDMTU1IDM3MC42IDk2IDMwNC4yIDk2IDIyNGMwLTg4LjQgNzEuNi0xNjAgMTYwLTE2MGMzOS42IDAgNzUuOSAxNC40IDEwMy44IDM4LjJMMzgzIDc5IDMzNiAzMiAzNjggMHpNMzUyIDIyNGE5NiA5NiAwIDEgMCAtMTkyIDAgOTYgOTYgMCAxIDAgMTkyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const MarsAndVenus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 224a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
            <path d="M368 0L496 0l0 128-32 32-47-47-25.6 25.6C407 163.3 416 192.6 416 224c0 80.2-59 146.6-136 158.2l0 1.8 0 24 24 0 24 0 0 48-24 0-24 0 0 32 0 24-48 0 0-24 0-32-24 0-24 0 0-48 24 0 24 0 0-24 0-1.8C155 370.6 96 304.2 96 224c0-88.4 71.6-160 160-160c39.6 0 75.9 14.4 103.8 38.2L383 79 336 32 368 0zM352 224a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
    </Icon>
);

export default MarsAndVenus;