
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-middle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle?s=sharp-duotone-solid message-middle}
 * @preview ![message-middle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMzguMyA0MTZMNTEyIDQxNiA1MTIgMCAwIDAgMCA0MTZsMTczLjcgMEwyNTYgNTEybDgyLjMtOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MessageMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M338.3 416L512 416 512 0 0 0 0 416l173.7 0L256 512l82.3-96z" />
    </Icon>
);

export default MessageMiddle;