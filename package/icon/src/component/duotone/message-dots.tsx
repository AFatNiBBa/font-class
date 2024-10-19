
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-dots` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-dots?s=duotone message-dots}
 * @preview ![message-dots](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgMjguNyAyOC43IDAgNjQgMEw0NDggMGMzNS4zIDAgNjQgMjguNyA2NCA2NGwwIDI4OGMwIDM1LjMtMjguNyA2NC02NCA2NGwtMTM4LjcgMEwxODUuNiA1MDguOGMtNC44IDMuNi0xMS4zIDQuMi0xNi44IDEuNXMtOC44LTguMi04LjgtMTQuM2wwLTgwLTk2IDBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgNjR6TTk2IDIwOGEzMiAzMiAwIDEgMCA2NCAwIDMyIDMyIDAgMSAwIC02NCAwem0xMjggMGEzMiAzMiAwIDEgMCA2NCAwIDMyIDMyIDAgMSAwIC02NCAwem0xMjggMGEzMiAzMiAwIDEgMCA2NCAwIDMyIDMyIDAgMSAwIC02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMjA4YTMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAxIDEgLTY0IDB6bTEyOCAwYTMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAxIDEgLTY0IDB6bTE2MC0zMmEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const MessageDots: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64L0 64zM96 208a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm128 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm128 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
            <path d="M96 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default MessageDots;