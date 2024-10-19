
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-long` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-long?s=duotone up-long}
 * @preview ![up-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxOTJjMCA5NiAwIDE5MiAwIDI4OGMwIDE3LjcgMTQuMyAzMiAzMiAzMmw2NCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtMTYwYzAtNDIuNiAwLTg1LjIgMC0xMjcuOGMtNDIuNy0uMi04NS4zLS4yLTEyOC0uMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMxMy40IDE1MS41YzYuNiA3IDguNCAxNy4yIDQuNiAyNnMtMTIuNSAxNC41LTIyIDE0LjVsLTcyIDBMOTYgMTkybC03MiAwYy05LjYgMC0xOC4yLTUuNy0yMi0xNC41cy0yLTE5IDQuNi0yNmwxMzYtMTQ0QzE0Ny4xIDIuNyAxNTMuNCAwIDE2MCAwczEyLjkgMi43IDE3LjQgNy41bDEzNiAxNDR6Ii8+PC9zdmc+|width=32|height=32)
 */
const UpLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M96 192c0 96 0 192 0 288c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-160c0-42.6 0-85.2 0-127.8c-42.7-.2-85.3-.2-128-.2z" />
            <path d="M313.4 151.5c6.6 7 8.4 17.2 4.6 26s-12.5 14.5-22 14.5l-72 0L96 192l-72 0c-9.6 0-18.2-5.7-22-14.5s-2-19 4.6-26l136-144C147.1 2.7 153.4 0 160 0s12.9 2.7 17.4 7.5l136 144z" />
    </Icon>
);

export default UpLong;