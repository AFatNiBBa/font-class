
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-middle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle?s=duotone message-middle}
 * @preview ![message-middle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNDMuNSA0MTZMNDQ4IDQxNmMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTI4OGMwLTM1LjMtMjguNy02NC02NC02NEw2NCAwQzI4LjcgMCAwIDI4LjcgMCA2NEwwIDM1MmMwIDM1LjMgMjguNyA2NCA2NCA2NGwxMDQuNSAwIDc1LjIgOTAuMmMzIDMuNiA3LjUgNS44IDEyLjMgNS44czkuMy0yLjEgMTIuMy01LjhMMzQzLjUgNDE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const MessageMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M343.5 416L448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l104.5 0 75.2 90.2c3 3.6 7.5 5.8 12.3 5.8s9.3-2.1 12.3-5.8L343.5 416z" />
    </Icon>
);

export default MessageMiddle;