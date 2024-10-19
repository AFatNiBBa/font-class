
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-up-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-up-down?s=duotone arrows-up-down}
 * @preview ![arrows-up-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzODRjMCA4LjIgMy4xIDE2LjQgOS40IDIyLjZsOTYgOTZjNi4yIDYuMiAxNC40IDkuNCAyMi42IDkuNHMxNi40LTMuMSAyMi42LTkuNGw5Ni05NmM2LjItNi4yIDkuNC0xNC40IDkuNC0yMi42cy0zLjEtMTYuNC05LjQtMjIuNmMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBMMTkyIDQwMi43IDE5MiAyNTZsLTY0IDAgMCAxNDYuN0w4Ni42IDM2MS40Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMEMzNS4xIDM2Ny42IDMyIDM3NS44IDMyIDM4NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE4Mi42IDkuNGMtMTIuNS0xMi41LTMyLjgtMTIuNS00NS4zIDBsLTk2IDk2Yy0xMi41IDEyLjUtMTIuNSAzMi44IDAgNDUuM3MzMi44IDEyLjUgNDUuMyAwTDEyOCAxMDkuMyAxMjggMjU2bDY0IDAgMC0xNDYuNyA0MS40IDQxLjRjMTIuNSAxMi41IDMyLjggMTIuNSA0NS4zIDBzMTIuNS0zMi44IDAtNDUuM2wtOTYtOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowsUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M32 384c0 8.2 3.1 16.4 9.4 22.6l96 96c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l96-96c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6c-12.5-12.5-32.8-12.5-45.3 0L192 402.7 192 256l-64 0 0 146.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0C35.1 367.6 32 375.8 32 384z" />
            <path d="M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3 128 256l64 0 0-146.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z" />
    </Icon>
);

export default ArrowsUpDown;