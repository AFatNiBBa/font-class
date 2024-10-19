
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message?s=duotone message}
 * @preview ![message](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAwQzI4LjcgMCAwIDI4LjcgMCA2NEwwIDM1MmMwIDM1LjMgMjguNyA2NCA2NCA2NGw5NiAwIDAgODBjMCA2LjEgMy40IDExLjYgOC44IDE0LjNzMTEuOSAyLjEgMTYuOC0xLjVMMzA5LjMgNDE2IDQ0OCA0MTZjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0yODhjMC0zNS4zLTI4LjctNjQtNjQtNjRMNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const Message: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z" />
    </Icon>
);

export default Message;