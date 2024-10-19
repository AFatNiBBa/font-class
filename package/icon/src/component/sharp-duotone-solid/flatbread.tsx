
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flatbread` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flatbread?s=sharp-duotone-solid flatbread}
 * @preview ![flatbread](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEwMC43LTI3LjNjNDIuNy00Mi43IDg1LjMtODUuMyAxMjgtMTI4bDIyLjYgMjIuNmMtNDIuNyA0Mi43LTg1LjMgODUuMy0xMjggMTI4bC0yMi42LTIyLjZ6bTQ4IDExMmwxOTItMTkyIDIyLjYgMjIuNmMtNjQgNjQtMTI4IDEyOC0xOTIgMTkyYy03LjUtNy41LTE1LjEtMTUuMS0yMi42LTIyLjZ6bTExMiA0OGwxMjgtMTI4IDIyLjYgMjIuNmMtNDIuNyA0Mi43LTg1LjMgODUuMy0xMjggMTI4Yy03LjUtNy41LTE1LjEtMTUuMS0yMi42LTIyLjZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTEuMyAxMjMuM2wtMTI4IDEyOC0yMi42LTIyLjYgMTI4LTEyOCAyMi42IDIyLjZ6bTExMiA0OGwtMTkyIDE5Mi0yMi42LTIyLjYgMTkyLTE5MiAyMi42IDIyLjZ6bS04MCAyNDBsLTIyLjYtMjIuNiAxMjgtMTI4IDIyLjYgMjIuNi0xMjggMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Flatbread: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm100.7-27.3c42.7-42.7 85.3-85.3 128-128l22.6 22.6c-42.7 42.7-85.3 85.3-128 128l-22.6-22.6zm48 112l192-192 22.6 22.6c-64 64-128 128-192 192c-7.5-7.5-15.1-15.1-22.6-22.6zm112 48l128-128 22.6 22.6c-42.7 42.7-85.3 85.3-128 128c-7.5-7.5-15.1-15.1-22.6-22.6z" />
            <path d="M251.3 123.3l-128 128-22.6-22.6 128-128 22.6 22.6zm112 48l-192 192-22.6-22.6 192-192 22.6 22.6zm-80 240l-22.6-22.6 128-128 22.6 22.6-128 128z" />
    </Icon>
);

export default Flatbread;