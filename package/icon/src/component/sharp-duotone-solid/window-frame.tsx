
import { Icon, generic } from "../../index";

/**
 * A component that renders the `window-frame` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=sharp-duotone-solid window-frame}
 * @preview ![window-frame](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA2NGwwIDE2MCAxMzYgMCAwLTE2MEw5NiA2NHptMCAyMjRsMCAxNjAgMTM2IDAgMC0xNjBMOTYgMjg4ek0yODAgNjRsMCAxNjAgMTM2IDAgMC0xNjBMMjgwIDY0em0wIDIyNGwwIDE2MCAxMzYgMCAwLTE2MC0xMzYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDI1NkwzMiA2NCAzMiAwIDk2IDAgNDE2IDBsNjQgMCAwIDY0IDAgMTkyIDAgMTkyIDMyIDAgMCA2NC0zMiAwLTY0IDBMOTYgNTEybC02NCAwTDAgNTEybDAtNjQgMzIgMCAwLTE5MnptMzg0IDMybC0xMzYgMCAwIDE2MCAxMzYgMCAwLTE2MHptLTE4NCAwTDk2IDI4OGwwIDE2MCAxMzYgMCAwLTE2MHptNDgtNjRsMTM2IDAgMC0xNjBMMjgwIDY0bDAgMTYwek0yMzIgNjRMOTYgNjRsMCAxNjAgMTM2IDAgMC0xNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const WindowFrame: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 64l0 160 136 0 0-160L96 64zm0 224l0 160 136 0 0-160L96 288zM280 64l0 160 136 0 0-160L280 64zm0 224l0 160 136 0 0-160-136 0z" />
            <path d="M32 256L32 64 32 0 96 0 416 0l64 0 0 64 0 192 0 192 32 0 0 64-32 0-64 0L96 512l-64 0L0 512l0-64 32 0 0-192zm384 32l-136 0 0 160 136 0 0-160zm-184 0L96 288l0 160 136 0 0-160zm48-64l136 0 0-160L280 64l0 160zM232 64L96 64l0 160 136 0 0-160z" />
    </Icon>
);

export default WindowFrame;