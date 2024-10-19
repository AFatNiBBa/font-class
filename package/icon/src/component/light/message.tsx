
import { Icon } from "../../index";

/**
 * A component that renders the `message` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message?s=light message}
 * @preview ![message](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYwIDM4NGMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDQ4IDk4LjEtNzMuNmM1LjUtNC4yIDEyLjMtNi40IDE5LjItNi40TDQ0OCAzODRjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0yODhjMC0xNy43LTE0LjMtMzItMzItMzJMNjQgMzJDNDYuMyAzMiAzMiA0Ni4zIDMyIDY0bDAgMjg4YzAgMTcuNyAxNC4zIDMyIDMyIDMybDk2IDB6TTAgNjRDMCAyOC43IDI4LjcgMCA2NCAwTDQ0OCAwYzM1LjMgMCA2NCAyOC43IDY0IDY0bDAgMjg4YzAgMzUuMy0yOC43IDY0LTY0IDY0bC0xMzguNyAwTDE4NS42IDUwOC44Yy00LjggMy42LTExLjMgNC4yLTE2LjggMS41cy04LjgtOC4yLTguOC0xNC4zbDAtNDggMC0zMi0zMiAwLTY0IDBjLTM1LjMgMC02NC0yOC43LTY0LTY0TDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Message: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 384c17.7 0 32 14.3 32 32l0 48 98.1-73.6c5.5-4.2 12.3-6.4 19.2-6.4L448 384c17.7 0 32-14.3 32-32l0-288c0-17.7-14.3-32-32-32L64 32C46.3 32 32 46.3 32 64l0 288c0 17.7 14.3 32 32 32l96 0zM0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-48 0-32-32 0-64 0c-35.3 0-64-28.7-64-64L0 64z" />
    </Icon>
);

export default Message;