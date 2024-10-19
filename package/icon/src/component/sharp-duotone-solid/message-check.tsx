
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-check?s=sharp-duotone-solid message-check}
 * @preview ![message-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNTEyIDBsMCA0MTYtMjA4IDBMMTYwIDUxMmwwLTk2TDAgNDE2IDAgMHpNMTI2LjEgMjAwYy4zIC4zIC42IC42IDEgMWM1LjMgNS4zIDEwLjcgMTAuNyAxNiAxNmMyMS4zIDIxLjMgNDIuNyA0Mi43IDY0IDY0bDE3IDE3IDE3LTE3YzQyLjctNDIuNyA4NS4zLTg1LjMgMTI4LTEyOGM1LjMtNS4zIDEwLjctMTAuNyAxNi0xNmMuMy0uMyAuNi0uNiAxLTFMMzUyIDEwMi4xYy0uMyAuMy0uNiAuNi0xIDFjLTUuMyA1LjMtMTAuNyAxMC43LTE2IDE2Yy0zNyAzNy03NCA3NC0xMTEgMTExYy0xNS43LTE1LjctMzEuNC0zMS40LTQ3LTQ3Yy01LjMtNS4zLTEwLjctMTAuNy0xNi0xNmMtLjMtLjMtLjYtLjYtMS0xTDEyNi4xIDIwMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NSAxMzdMMjQxIDI4MWwtMTcgMTctMTctMTctODAtODBMMTYxIDE2N2w2MyA2M0wzNTEgMTAzIDM4NSAxMzd6Ii8+PC9zdmc+|width=32|height=32)
 */
const MessageCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM126.1 200c.3 .3 .6 .6 1 1c5.3 5.3 10.7 10.7 16 16c21.3 21.3 42.7 42.7 64 64l17 17 17-17c42.7-42.7 85.3-85.3 128-128c5.3-5.3 10.7-10.7 16-16c.3-.3 .6-.6 1-1L352 102.1c-.3 .3-.6 .6-1 1c-5.3 5.3-10.7 10.7-16 16c-37 37-74 74-111 111c-15.7-15.7-31.4-31.4-47-47c-5.3-5.3-10.7-10.7-16-16c-.3-.3-.6-.6-1-1L126.1 200z" />
            <path d="M385 137L241 281l-17 17-17-17-80-80L161 167l63 63L351 103 385 137z" />
    </Icon>
);

export default MessageCheck;