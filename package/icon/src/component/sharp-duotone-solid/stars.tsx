
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stars` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stars?s=sharp-duotone-solid stars}
 * @preview ![stars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgODBsNjAgMjAgMjAgNjAgMjAtNjAgNjAtMjBMMzU2IDYwIDMzNiAwIDMxNiA2MCAyNTYgODB6TTM4NCAyMjRsNDggMTYgMTYgNDggMTYtNDggNDgtMTYtNDgtMTYtMTYtNDgtMTYgNDgtNDggMTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xOTMuNSAxNDRsNTkuOCAxMjEuMSAxMzMuNyAxOS40LTk2LjcgOTQuM0wzMTMgNTEyIDE5My41IDQ0OS4xIDczLjkgNTEyIDk2LjcgMzc4LjkgMCAyODQuNmwxMzMuNy0xOS40TDE5My41IDE0NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Stars: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 80l60 20 20 60 20-60 60-20L356 60 336 0 316 60 256 80zM384 224l48 16 16 48 16-48 48-16-48-16-16-48-16 48-48 16z" />
            <path d="M193.5 144l59.8 121.1 133.7 19.4-96.7 94.3L313 512 193.5 449.1 73.9 512 96.7 378.9 0 284.6l133.7-19.4L193.5 144z" />
    </Icon>
);

export default Stars;