
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fill` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fill?s=sharp-duotone-solid fill}
 * @preview ![fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMDYuNSAyODhMMjQwIDQyMS41IDM3My41IDI4OGwtMjY3IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDI3Mmw0NS4zIDQ1LjNMMTk0LjcgNDY2LjcgMjQwIDUxMmw0NS4zLTQ1LjNMNDY2LjcgMjg1LjMgNTEyIDI0MGwtNDUuMy00NS4zTDMxNy4zIDQ1LjMgMjcyIDAgMjI2LjcgNDUuM2wtNjAuMSA2MC4xLTgwLTgwTDY0IDIuNyAxOC43IDQ4IDQxLjQgNzAuNmw4MCA4MEw0NS4zIDIyNi43IDAgMjcyem0xNjYuNi03Ni4xbDE4LjcgMTguN0wyMDggMjM3LjMgMjUzLjMgMTkybC0yMi42LTIyLjYtMTguNy0xOC43TDI3MiA5MC41IDQyMS41IDI0MCAyNDAgNDIxLjUgOTAuNSAyNzJsNzYuMS03Ni4xeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Fill: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M106.5 288L240 421.5 373.5 288l-267 0z" />
            <path d="M0 272l45.3 45.3L194.7 466.7 240 512l45.3-45.3L466.7 285.3 512 240l-45.3-45.3L317.3 45.3 272 0 226.7 45.3l-60.1 60.1-80-80L64 2.7 18.7 48 41.4 70.6l80 80L45.3 226.7 0 272zm166.6-76.1l18.7 18.7L208 237.3 253.3 192l-22.6-22.6-18.7-18.7L272 90.5 421.5 240 240 421.5 90.5 272l76.1-76.1z" />
    </Icon>
);

export default Fill;