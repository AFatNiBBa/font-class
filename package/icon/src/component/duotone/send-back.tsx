
import { Icon, generic } from "../../index";

/**
 * A component that renders the `send-back` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-back?s=duotone send-back}
 * @preview ![send-back](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgMjguNyAyOC43IDAgNjQgMEwxOTIgMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDMyIDAgOTZjMCAzNS4zLTI4LjcgNjQtNjQgNjRsLTMyIDAtOTYgMGMtMzUuMyAwLTY0LTI4LjctNjQtNjRMMCA2NHptNjQgMGwwIDEyOCAxMjggMCAwLTEyOEw2NCA2NHpNMzg0IDMyMGMwLTM1LjMgMjguNy02NCA2NC02NGwzMiAwIDk2IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAxMjhjMCAzNS4zLTI4LjcgNjQtNjQgNjRsLTEyOCAwYy0zNS4zIDAtNjQtMjguNy02NC02NGwwLTMyIDAtOTZ6bTY0IDBsMCAxMjggMTI4IDAgMC0xMjgtMTI4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjAgMzUybDAtOTYgMzIgMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTk2IDE2MCAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgOTYtMzIgMGMtMzUuMyAwLTY0IDI4LjctNjQgNjRsMCA5Ni0xNjAgMGMtMzUuMyAwLTY0LTI4LjctNjQtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const SendBack: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L192 0c35.3 0 64 28.7 64 64l0 32 0 96c0 35.3-28.7 64-64 64l-32 0-96 0c-35.3 0-64-28.7-64-64L0 64zm64 0l0 128 128 0 0-128L64 64zM384 320c0-35.3 28.7-64 64-64l32 0 96 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64l-128 0c-35.3 0-64-28.7-64-64l0-32 0-96zm64 0l0 128 128 0 0-128-128 0z" />
            <path d="M160 352l0-96 32 0c35.3 0 64-28.7 64-64l0-96 160 0c35.3 0 64 28.7 64 64l0 96-32 0c-35.3 0-64 28.7-64 64l0 96-160 0c-35.3 0-64-28.7-64-64z" />
    </Icon>
);

export default SendBack;