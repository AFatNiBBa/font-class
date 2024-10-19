
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-down-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-left?s=duotone turn-down-left}
 * @preview ![turn-down-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgMjQwbDIwOCAwYzguOCAwIDE2LTcuMiAxNi0xNmwwLTE2MGMwLTE3LjcgMTQuMy0zMiAzMi0zMmwzMiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgMTYwYzAgNjEuOS01MC4xIDExMi0xMTIgMTEybC0yMDggMCAwLTk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTUxLjUgNDQxLjRjNyA2LjYgMTcuMiA4LjQgMjYgNC42czE0LjUtMTIuNSAxNC41LTIybDAtMjcyYzAtOS42LTUuNy0xOC4yLTE0LjUtMjJzLTE5LTItMjYgNC42bC0xNDQgMTM2QzIuNyAyNzUuMSAwIDI4MS40IDAgMjg4czIuNyAxMi45IDcuNSAxNy40bDE0NCAxMzZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const TurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 240l208 0c8.8 0 16-7.2 16-16l0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160c0 61.9-50.1 112-112 112l-208 0 0-96z" />
            <path d="M151.5 441.4c7 6.6 17.2 8.4 26 4.6s14.5-12.5 14.5-22l0-272c0-9.6-5.7-18.2-14.5-22s-19-2-26 4.6l-144 136C2.7 275.1 0 281.4 0 288s2.7 12.9 7.5 17.4l144 136z" />
    </Icon>
);

export default TurnDownLeft;