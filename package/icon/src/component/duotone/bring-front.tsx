
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bring-front` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-front?s=duotone bring-front}
 * @preview ![bring-front](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgMTkyYzAgMzUuMyAyOC43IDY0IDY0IDY0bDk2IDAgMC02NC05NiAwTDY0IDY0bDEyOCAwIDAgNDAuNmM5LjQtNS40IDIwLjMtOC42IDMyLTguNmwzMiAwIDAtMzJjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMEMyOC43IDAgMCAyOC43IDAgNjR6TTM4NCA0MTZsMCAzMmMwIDM1LjMgMjguNyA2NCA2NCA2NGwxMjggMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTEyOGMwLTM1LjMtMjguNy02NC02NC02NGwtOTYgMCAwIDY0IDk2IDAgMCAxMjgtMTI4IDAgMC00MC42Yy05LjQgNS40LTIwLjMgOC42LTMyIDguNmwtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCA5NmMtMzUuMyAwLTY0IDI4LjctNjQgNjRsMCAxOTJjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMTkyIDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0xOTJjMC0zNS4zLTI4LjctNjQtNjQtNjRMMjI0IDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BringFront: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 192c0 35.3 28.7 64 64 64l96 0 0-64-96 0L64 64l128 0 0 40.6c9.4-5.4 20.3-8.6 32-8.6l32 0 0-32c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zM384 416l0 32c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-128c0-35.3-28.7-64-64-64l-96 0 0 64 96 0 0 128-128 0 0-40.6c-9.4 5.4-20.3 8.6-32 8.6l-32 0z" />
            <path d="M224 96c-35.3 0-64 28.7-64 64l0 192c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L224 96z" />
    </Icon>
);

export default BringFront;