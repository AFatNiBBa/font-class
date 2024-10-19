
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pumpkin` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pumpkin?s=sharp-duotone-solid pumpkin}
 * @preview ![pumpkin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyMEMwIDQyNiA2OC4xIDUxMiAxNTIgNTEyYzI0LjQgMCA0Ny41LTcuMyA2OC0yMC4yYzIwLjUgMTIuOSA0My42IDIwLjIgNjggMjAuMnM0Ny41LTcuMyA2OC0yMC4yYzIwLjUgMTIuOSA0My42IDIwLjIgNjggMjAuMmM4My45IDAgMTUyLTg2IDE1Mi0xOTJzLTY4LjEtMTkyLTE1Mi0xOTJjLTEwLjIgMC0yMC4xIDEuMy0yOS44IDMuN2MxNS40IDExLjcgMjguOSAyNS45IDM5LjggNDJDMzkyLjYgMTQ0LjkgMzQyLjMgMTI4IDI4OCAxMjhzLTEwNC42IDE2LjktMTQ2IDQ1LjdjMTAuOS0xNi4xIDI0LjMtMzAuMyAzOS44LTQyYy05LjYtMi40LTE5LjYtMy43LTI5LjgtMy43QzY4LjEgMTI4IDAgMjE0IDAgMzIweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDBMMjM2LjEgMTAzLjhDMjUyLjUgOTguNyAyNjkuOSA5NiAyODggOTZjMjIuNiAwIDQ0LjIgNC4zIDY0IDEybDAtNzZMMjg4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Pumpkin: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 320C0 426 68.1 512 152 512c24.4 0 47.5-7.3 68-20.2c20.5 12.9 43.6 20.2 68 20.2s47.5-7.3 68-20.2c20.5 12.9 43.6 20.2 68 20.2c83.9 0 152-86 152-192s-68.1-192-152-192c-10.2 0-20.1 1.3-29.8 3.7c15.4 11.7 28.9 25.9 39.8 42C392.6 144.9 342.3 128 288 128s-104.6 16.9-146 45.7c10.9-16.1 24.3-30.3 39.8-42c-9.6-2.4-19.6-3.7-29.8-3.7C68.1 128 0 214 0 320z" />
            <path d="M288 0L236.1 103.8C252.5 98.7 269.9 96 288 96c22.6 0 44.2 4.3 64 12l0-76L288 0z" />
    </Icon>
);

export default Pumpkin;