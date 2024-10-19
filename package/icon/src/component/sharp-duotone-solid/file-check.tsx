
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-check?s=sharp-duotone-solid file-check}
 * @preview ![file-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMjI0IDBjMCA1My4zIDAgMTA2LjcgMCAxNjBsMTYwIDAgMCAzNTJMMCA1MTIgMCAwek02Mi4xIDMyOGM1LjcgNS43IDExLjMgMTEuMyAxNyAxN2MyMS4zIDIxLjMgNDIuNyA0Mi43IDY0IDY0YzUuNyA1LjcgMTEuMyAxMS4zIDE3IDE3YzUuNy01LjcgMTEuMy0xMS4zIDE3LTE3YzQyLjctNDIuNyA4NS4zLTg1LjMgMTI4LTEyOGM1LjctNS43IDExLjMtMTEuMyAxNy0xN0wyODggMjMwLjFjLTUuNyA1LjctMTEuMyAxMS4zLTE3IDE3Yy0zNyAzNy03NCA3NC0xMTEgMTExbC00Ny00Ny0xNy0xN0M4NC43IDMwNS40IDczLjQgMzE2LjcgNjIuMSAzMjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMTYwTDIyNCAwbDAgMTYwIDE2MCAwek0zMDUgMjgxbDE3LTE3TDI4OCAyMzAuMWwtMTcgMTctMTExIDExMS00Ny00Ny0xNy0xN0w2Mi4xIDMyOGwxNyAxNyA2NCA2NCAxNyAxNyAxNy0xN0wzMDUgMjgxeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FileCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0c0 53.3 0 106.7 0 160l160 0 0 352L0 512 0 0zM62.1 328c5.7 5.7 11.3 11.3 17 17c21.3 21.3 42.7 42.7 64 64c5.7 5.7 11.3 11.3 17 17c5.7-5.7 11.3-11.3 17-17c42.7-42.7 85.3-85.3 128-128c5.7-5.7 11.3-11.3 17-17L288 230.1c-5.7 5.7-11.3 11.3-17 17c-37 37-74 74-111 111l-47-47-17-17C84.7 305.4 73.4 316.7 62.1 328z" />
            <path d="M384 160L224 0l0 160 160 0zM305 281l17-17L288 230.1l-17 17-111 111-47-47-17-17L62.1 328l17 17 64 64 17 17 17-17L305 281z" />
    </Icon>
);

export default FileCheck;