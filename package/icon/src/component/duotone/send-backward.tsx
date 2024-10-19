
import { Icon, generic } from "../../index";

/**
 * A component that renders the `send-backward` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-backward?s=duotone send-backward}
 * @preview ![send-backward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMjI0bDAgMTI4IDAgOTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMjI0IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0yMjRjMC0zNS4zLTI4LjctNjQtNjQtNjRsLTk2IDAtMTI4IDBjLTM1LjMgMC02NCAyOC43LTY0IDY0em02NCAwbDIyNCAwIDAgMjI0LTIyNCAwIDAtMjI0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA2NEMwIDI4LjcgMjguNyAwIDY0IDBMMjg4IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCA5Ni0xMjggMGMtMzUuMyAwLTY0IDI4LjctNjQgNjRsMCAxMjgtOTYgMGMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SendBackward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 224l0 128 0 96c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-96 0-128 0c-35.3 0-64 28.7-64 64zm64 0l224 0 0 224-224 0 0-224z" />
            <path d="M0 64C0 28.7 28.7 0 64 0L288 0c35.3 0 64 28.7 64 64l0 96-128 0c-35.3 0-64 28.7-64 64l0 128-96 0c-35.3 0-64-28.7-64-64L0 64z" />
    </Icon>
);

export default SendBackward;