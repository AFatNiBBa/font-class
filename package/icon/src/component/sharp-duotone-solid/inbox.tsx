
import { Icon, generic } from "../../index";

/**
 * A component that renders the `inbox` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox?s=sharp-duotone-solid inbox}
 * @preview ![inbox](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik03MyAyODhsNzEgMGMxMC43IDIxLjMgMjEuMyA0Mi43IDMyIDY0bDE2MCAwIDMyLTY0IDcxIDBMMzkxIDk2IDEyMSA5NmMtMTYgNjQtMzIgMTI4LTQ4IDE5MnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDMyTDcxIDMyIDY1IDU2LjIgMSAzMTIuMmwtMSAzLjhMMCAzMjAgMCA0NDhsMCAzMiAzMiAwIDQ0OCAwIDMyIDAgMC0zMiAwLTEyOCAwLTMuOS0xLTMuOC02NC0yNTZMNDQxIDMybC0yNSAwTDk2IDMyek03MyAyODhMMTIxIDk2bDI3MCAwIDQ4IDE5Mi03MSAwLTMyIDY0LTE2MCAwLTMyLTY0LTcxIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Inbox: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M73 288l71 0c10.7 21.3 21.3 42.7 32 64l160 0 32-64 71 0L391 96 121 96c-16 64-32 128-48 192z" />
            <path d="M96 32L71 32 65 56.2 1 312.2l-1 3.8L0 320 0 448l0 32 32 0 448 0 32 0 0-32 0-128 0-3.9-1-3.8-64-256L441 32l-25 0L96 32zM73 288L121 96l270 0 48 192-71 0-32 64-160 0-32-64-71 0z" />
    </Icon>
);

export default Inbox;