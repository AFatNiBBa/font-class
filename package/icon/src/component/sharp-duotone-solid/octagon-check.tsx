
import { Icon, generic } from "../../index";

/**
 * A component that renders the `octagon-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-check?s=sharp-duotone-solid octagon-check}
 * @preview ![octagon-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MEwxNjAgMCAzNTIgMCA1MTIgMTYwbDAgMTkyTDM1MiA1MTJsLTE5MiAwTDAgMzUyIDAgMTYwem0xMjYuMSA5NmMuMyAuMyAuNiAuNiAxIDFjNS4zIDUuMyAxMC43IDEwLjcgMTYgMTZjMjEuMyAyMS4zIDQyLjcgNDIuNyA2NCA2NGwxNyAxNyAxNy0xN2M0Mi43LTQyLjcgODUuMy04NS4zIDEyOC0xMjhjNS4zLTUuMyAxMC43LTEwLjcgMTYtMTZjLjMtLjMgLjYtLjYgMS0xTDM1MiAxNTguMWwtMSAxYy01LjMgNS4zLTEwLjcgMTAuNy0xNiAxNmMtMzcgMzctNzQgNzQtMTExIDExMWMtMTUuNy0xNS43LTMxLjQtMzEuMy00Ny00N2MtNS4zLTUuMy0xMC43LTEwLjctMTYtMTZjLS4zLS4zLS42LS42LTEtMUwxMjYuMSAyNTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODUgMTkzTDI0MSAzMzdsLTE3IDE3LTE3LTE3LTgwLTgwTDE2MSAyMjNsNjMgNjNMMzUxIDE1OSAzODUgMTkzeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const OctagonCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160L160 0 352 0 512 160l0 192L352 512l-192 0L0 352 0 160zm126.1 96c.3 .3 .6 .6 1 1c5.3 5.3 10.7 10.7 16 16c21.3 21.3 42.7 42.7 64 64l17 17 17-17c42.7-42.7 85.3-85.3 128-128c5.3-5.3 10.7-10.7 16-16c.3-.3 .6-.6 1-1L352 158.1l-1 1c-5.3 5.3-10.7 10.7-16 16c-37 37-74 74-111 111c-15.7-15.7-31.4-31.3-47-47c-5.3-5.3-10.7-10.7-16-16c-.3-.3-.6-.6-1-1L126.1 256z" />
            <path d="M385 193L241 337l-17 17-17-17-80-80L161 223l63 63L351 159 385 193z" />
    </Icon>
);

export default OctagonCheck;