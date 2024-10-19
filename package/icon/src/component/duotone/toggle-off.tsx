
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toggle-off` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toggle-off?s=duotone toggle-off}
 * @preview ![toggle-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkMwIDM2MiA4NiA0NDggMTkyIDQ0OGwxOTIgMGMxMDYgMCAxOTItODYgMTkyLTE5MnMtODYtMTkyLTE5Mi0xOTJMMTkyIDY0Qzg2IDY0IDAgMTUwIDAgMjU2em02NCAwYzAtNzAuNyA1Ny4zLTEyOCAxMjgtMTI4bDE5MiAwYzcwLjcgMCAxMjggNTcuMyAxMjggMTI4cy01Ny4zIDEyOC0xMjggMTI4bC0xOTIgMGMtNzAuNyAwLTEyOC01Ny4zLTEyOC0xMjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAyNTZhOTYgOTYgMCAxIDAgMTkyIDBBOTYgOTYgMCAxIDAgOTYgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ToggleOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256C0 362 86 448 192 448l192 0c106 0 192-86 192-192s-86-192-192-192L192 64C86 64 0 150 0 256zm64 0c0-70.7 57.3-128 128-128l192 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-192 0c-70.7 0-128-57.3-128-128z" />
            <path d="M96 256a96 96 0 1 0 192 0A96 96 0 1 0 96 256z" />
    </Icon>
);

export default ToggleOff;