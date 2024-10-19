
import { Icon } from "../../index";

/**
 * A component that renders the `hockey-puck` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-puck?s=solid hockey-puck}
 * @preview ![hockey-puck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDI1NkMxMTQuNiAyNTYgMCAyMTMgMCAxNjBzMTE0LjYtOTYgMjU2LTk2czI1NiA0MyAyNTYgOTZzLTExNC42IDk2LTI1NiA5NnptMTkyLjMgMS44YzI0LjctOS4zIDQ2LjktMjEgNjMuNy0zNS42TDUxMiAzNTJjMCA1My0xMTQuNiA5Ni0yNTYgOTZTMCA0MDUgMCAzNTJMMCAyMjIuM2MxNi44IDE0LjYgMzkgMjYuMyA2My43IDM1LjZDMTE0LjUgMjc2LjkgMTgyLjUgMjg4IDI1NiAyODhzMTQxLjUtMTEuMSAxOTIuMy0zMC4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HockeyPuck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 256C114.6 256 0 213 0 160s114.6-96 256-96s256 43 256 96s-114.6 96-256 96zm192.3 1.8c24.7-9.3 46.9-21 63.7-35.6L512 352c0 53-114.6 96-256 96S0 405 0 352L0 222.3c16.8 14.6 39 26.3 63.7 35.6C114.5 276.9 182.5 288 256 288s141.5-11.1 192.3-30.2z" />
    </Icon>
);

export default HockeyPuck;