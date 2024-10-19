
import { Icon, generic } from "../../index";

/**
 * A component that renders the `u` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/u?s=sharp-duotone-solid u}
 * @preview ![u](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMmwwIDMyIDAgMjI0YzAgNzAuNyA1Ny4zIDEyOCAxMjggMTI4czEyOC01Ny4zIDEyOC0xMjhsMC0yMjQgMC0zMiA2NCAwIDAgMzIgMCAyMjRjMCAxMDYtODYgMTkyLTE5MiAxOTJTMCAzOTQgMCAyODhMMCA2NCAwIDMybDY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const U: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 32l0 32 0 224c0 70.7 57.3 128 128 128s128-57.3 128-128l0-224 0-32 64 0 0 32 0 224c0 106-86 192-192 192S0 394 0 288L0 64 0 32l64 0z" />
    </Icon>
);

export default U;