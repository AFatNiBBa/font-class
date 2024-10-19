
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-down-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-right?s=duotone turn-down-right}
 * @preview ![turn-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgMjI0YzAgNjEuOSA1MC4xIDExMiAxMTIgMTEybDIwOCAwIDAtOTYtMjA4IDBjLTguOCAwLTE2LTcuMi0xNi0xNkw5NiA2NGMwLTE3LjctMTQuMy0zMi0zMi0zMkwzMiAzMkMxNC4zIDMyIDAgNDYuMyAwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzYwLjUgNDQxLjRjLTcgNi42LTE3LjIgOC40LTI2IDQuNnMtMTQuNS0xMi41LTE0LjUtMjJsMC0yNzJjMC05LjYgNS43LTE4LjIgMTQuNS0yMnMxOS0yIDI2IDQuNmwxNDQgMTM2YzQuOCA0LjUgNy41IDEwLjggNy41IDE3LjRzLTIuNyAxMi45LTcuNSAxNy40bC0xNDQgMTM2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 224c0 61.9 50.1 112 112 112l208 0 0-96-208 0c-8.8 0-16-7.2-16-16L96 64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64z" />
            <path d="M360.5 441.4c-7 6.6-17.2 8.4-26 4.6s-14.5-12.5-14.5-22l0-272c0-9.6 5.7-18.2 14.5-22s19-2 26 4.6l144 136c4.8 4.5 7.5 10.8 7.5 17.4s-2.7 12.9-7.5 17.4l-144 136z" />
    </Icon>
);

export default TurnDownRight;