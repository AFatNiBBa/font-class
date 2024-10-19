
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house?s=duotone house}
 * @preview ![house](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNzAuNWM3NC43LTY1LjMgMTQ5LjMtMTMwLjYgMjI0LTE5Nkw1MTIuMSAyNzAuNmwuNCAyMDEuM2MwIDIyLjEtMTcuOSA0MC4xLTQwIDQwLjFMMzkyIDUxMmMtMjIuMSAwLTQwLTE3LjktNDAtNDBsMC04OC4zYzAtMTcuNy0xNC4zLTMyLTMyLTMybC02NCAwYy0xNy43IDAtMzIgMTQuMy0zMiAzMmwwIDg4LjNjMCAyMi4xLTE3LjkgNDAtNDAgNDBsLTc5LjkgMGMtMjIuMSAwLTQwLTE3LjktNDAtNDBMNjQgMjcwLjV6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNjYuOSA3LjlDMjc5LTIuNiAyOTctMi42IDMwOS4xIDcuOWwyNTYgMjI0YzEzLjMgMTEuNiAxNC42IDMxLjkgMyA0NS4ycy0zMS45IDE0LjYtNDUuMiAzTDI4OCA3NC41IDUzLjEgMjgwLjFjLTEzLjMgMTEuNi0zMy41IDEwLjMtNDUuMi0zcy0xMC4zLTMzLjUgMy00NS4ybDI1Ni0yMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const House: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 270.5c74.7-65.3 149.3-130.6 224-196L512.1 270.6l.4 201.3c0 22.1-17.9 40.1-40 40.1L392 512c-22.1 0-40-17.9-40-40l0-88.3c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 88.3c0 22.1-17.9 40-40 40l-79.9 0c-22.1 0-40-17.9-40-40L64 270.5z" />
            <path d="M266.9 7.9C279-2.6 297-2.6 309.1 7.9l256 224c13.3 11.6 14.6 31.9 3 45.2s-31.9 14.6-45.2 3L288 74.5 53.1 280.1c-13.3 11.6-33.5 10.3-45.2-3s-10.3-33.5 3-45.2l256-224z" />
    </Icon>
);

export default House;