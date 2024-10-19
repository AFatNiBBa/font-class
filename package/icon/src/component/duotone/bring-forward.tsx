
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bring-forward` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-forward?s=duotone bring-forward}
 * @preview ![bring-forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMzUybDAgOTZjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMjI0IDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0yMjRjMC0zNS4zLTI4LjctNjQtNjQtNjRsLTk2IDAgMCA2NCA5NiAwIDAgMjI0LTIyNCAwIDAtOTYtNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMjg4YzAgMzUuMyAyOC43IDY0IDY0IDY0SDI4OGMzNS4zIDAgNjQtMjguNyA2NC02NFY2NGMwLTM1LjMtMjguNy02NC02NC02NEg2NEMyOC43IDAgMCAyOC43IDAgNjRWMjg4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BringForward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 352l0 96c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-96 0 0 64 96 0 0 224-224 0 0-96-64 0z" />
            <path d="M0 288c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V288z" />
    </Icon>
);

export default BringForward;