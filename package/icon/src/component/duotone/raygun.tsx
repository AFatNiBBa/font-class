
import { Icon, generic } from "../../index";

/**
 * A component that renders the `raygun` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/raygun?s=duotone raygun}
 * @preview ![raygun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNC42bDAgNTAuMkM3OC41IDY3LjkgOTQuOCA2NCAxMTIgNjRsODAgMEwxMDIuMiA0LjFDOTguMiAxLjQgOTMuNCAwIDg4LjYgMEM3NSAwIDY0IDExIDY0IDI0LjZ6TTI4OCA1NmwwIDggMCAyMzEuNiAwIC40YzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjRsMC0yNDBjMC0xMy4zLTEwLjctMjQtMjQtMjRzLTI0IDEwLjctMjQgMjR6bTgwIDMybDAgMTc2YzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjRsMC01NiAwLTY0IDAtNTZjMC0xMy4zLTEwLjctMjQtMjQtMjRzLTI0IDEwLjctMjQgMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggNjRMMTEyIDY0QzUwLjEgNjQgMCAxMTQuMSAwIDE3NnM1MC4xIDExMiAxMTIgMTEybDguMiAwTDUxLjQgNDI1LjdjLTcuOSAxNS44LTEuNSAzNSAxNC4zIDQyLjlsODAgNDBjMTUuOCA3LjkgMzUgMS41IDQyLjktMTQuM0wyODggMjk1LjYgMjg4IDY0ek00MTYgMjA4bDYwLjkgMCA3Ny4xIDMwLjljNC45IDIgMTAuNSAxLjQgMTQuOS0xLjZzNy03LjkgNy0xMy4ybDAtOTZjMC01LjMtMi42LTEwLjMtNy0xMy4ycy0xMC0zLjYtMTQuOS0xLjZMNDc2LjkgMTQ0IDQxNiAxNDRsMCA2NHpNMTEyIDE1MmEyNCAyNCAwIDEgMSAwIDQ4IDI0IDI0IDAgMSAxIDAtNDh6bTcyIDI0YTI0IDI0IDAgMSAxIDQ4IDAgMjQgMjQgMCAxIDEgLTQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Raygun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 24.6l0 50.2C78.5 67.9 94.8 64 112 64l80 0L102.2 4.1C98.2 1.4 93.4 0 88.6 0C75 0 64 11 64 24.6zM288 56l0 8 0 231.6 0 .4c0 13.3 10.7 24 24 24s24-10.7 24-24l0-240c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 32l0 176c0 13.3 10.7 24 24 24s24-10.7 24-24l0-56 0-64 0-56c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            <path d="M288 64L112 64C50.1 64 0 114.1 0 176s50.1 112 112 112l8.2 0L51.4 425.7c-7.9 15.8-1.5 35 14.3 42.9l80 40c15.8 7.9 35 1.5 42.9-14.3L288 295.6 288 64zM416 208l60.9 0 77.1 30.9c4.9 2 10.5 1.4 14.9-1.6s7-7.9 7-13.2l0-96c0-5.3-2.6-10.3-7-13.2s-10-3.6-14.9-1.6L476.9 144 416 144l0 64zM112 152a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Raygun;