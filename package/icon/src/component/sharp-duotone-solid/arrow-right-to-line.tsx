
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-line?s=sharp-duotone-solid arrow-right-to-line}
 * @preview ![arrow-right-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zODQgNjRsMCAzMiAwIDMyMCAwIDMyIDY0IDAgMC0zMiAwLTMyMCAwLTMyLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMzMuMyAyNTZsLTIyLjYgMjIuNi0xMjggMTI4TDE2MCA0MjkuMyAxMTQuNyAzODRsMjIuNi0yMi42TDIxMC43IDI4OCAzMiAyODggMCAyODhsMC02NCAzMiAwIDE3OC43IDAtNzMuNC03My40TDExNC43IDEyOCAxNjAgODIuN2wyMi42IDIyLjYgMTI4IDEyOEwzMzMuMyAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowRightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M384 64l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0z" />
            <path d="M333.3 256l-22.6 22.6-128 128L160 429.3 114.7 384l22.6-22.6L210.7 288 32 288 0 288l0-64 32 0 178.7 0-73.4-73.4L114.7 128 160 82.7l22.6 22.6 128 128L333.3 256z" />
    </Icon>
);

export default ArrowRightToLine;