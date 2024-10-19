
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-check?s=duotone message-check}
 * @preview ![message-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgMjguNyAyOC43IDAgNjQgMEw0NDggMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDI4OGMwIDM1LjMtMjguNyA2NC02NCA2NGwtMTM4LjcgMEwxODUuNiA1MDguOGMtNC44IDMuNi0xMS4zIDQuMi0xNi44IDEuNXMtOC44LTguMi04LjgtMTQuM2wwLTgwLTk2IDBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNjkgMTE5YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDI0MSAyODFjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwbC02NC02NGMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlzMjQuNi05LjQgMzMuOSAwbDQ3IDQ3TDMzNSAxMTljOS40LTkuNCAyNC42LTkuNCAzMy45IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const MessageCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64L0 64z" />
            <path d="M369 119c9.4 9.4 9.4 24.6 0 33.9L241 281c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 119c9.4-9.4 24.6-9.4 33.9 0z" />
    </Icon>
);

export default MessageCheck;