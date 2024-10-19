
import { Icon, generic } from "../../index";

/**
 * A component that renders the `font-awesome` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-awesome?s=sharp-duotone-solid font-awesome}
 * @preview ![font-awesome](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA5NmwwIDM1MiA0MDAgMCAwLTMyTDQzMiAyNzJsNjQtMTQ0IDAtMzJMOTYgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiA5M2MxMi4yLTkuNSAyMC0yNC4zIDIwLTQxQzExNiAyMy4zIDkyLjcgMCA2NCAwUzEyIDIzLjMgMTIgNTJjMCAxNi43IDcuOCAzMS41IDIwIDQxbDAgNDE5IDY0IDBMOTYgOTN6Ii8+PC9zdmc+|width=32|height=32)
 */
const FontAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 96l0 352 400 0 0-32L432 272l64-144 0-32L96 96z" />
            <path d="M96 93c12.2-9.5 20-24.3 20-41C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 419 64 0L96 93z" />
    </Icon>
);

export default FontAwesome;