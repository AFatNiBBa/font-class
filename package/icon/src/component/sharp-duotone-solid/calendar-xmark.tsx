
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-xmark?s=sharp-duotone-solid calendar-xmark}
 * @preview ![calendar-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MkwwIDUxMmw0NDggMCAwLTMyMEwwIDE5MnptMTI2LjEgOTZMMTYwIDI1NC4xbDE3IDE3IDQ3IDQ3IDQ3LTQ3IDE3LTE3TDMyMS45IDI4OGwtMTcgMTctNDcgNDcgNDcgNDcgMTcgMTdMMjg4IDQ0OS45bC0xNy0xNy00Ny00Ny00NyA0Ny0xNyAxN0wxMjYuMSA0MTZsMTctMTcgNDctNDctNDctNDctMTctMTd6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMEw5NiAwbDAgNjRMMCA2NCAwIDE5Mmw0NDggMCAwLTEyOC05NiAwIDAtNjRMMjg4IDBsMCA2NEwxNjAgNjRsMC02NHpNMzA1IDMwNWwxNy0xN0wyODggMjU0LjFsLTE3IDE3LTQ3IDQ3LTQ3LTQ3LTE3LTE3TDEyNi4xIDI4OGwxNyAxNyA0NyA0Ny00NyA0Ny0xNyAxN0wxNjAgNDQ5LjlsMTctMTcgNDctNDcgNDcgNDcgMTcgMTdMMzIxLjkgNDE2bC0xNy0xNy00Ny00NyA0Ny00N3oiLz48L3N2Zz4=|width=32|height=32)
 */
const CalendarXmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 512l448 0 0-320L0 192zm126.1 96L160 254.1l17 17 47 47 47-47 17-17L321.9 288l-17 17-47 47 47 47 17 17L288 449.9l-17-17-47-47-47 47-17 17L126.1 416l17-17 47-47-47-47-17-17z" />
            <path d="M160 0L96 0l0 64L0 64 0 192l448 0 0-128-96 0 0-64L288 0l0 64L160 64l0-64zM305 305l17-17L288 254.1l-17 17-47 47-47-47-17-17L126.1 288l17 17 47 47-47 47-17 17L160 449.9l17-17 47-47 47 47 17 17L321.9 416l-17-17-47-47 47-47z" />
    </Icon>
);

export default CalendarXmark;