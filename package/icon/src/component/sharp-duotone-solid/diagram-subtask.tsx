
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-subtask` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-subtask?s=sharp-duotone-solid diagram-subtask}
 * @preview ![diagram-subtask](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAyMjRsMCAxNjAgMCAzMiAzMiAwIDk2IDAgMC02NC02NCAwIDAtMTI4LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTIgMzJMMCAzMiAwIDIyNGw1MTIgMCAwLTE5MnptMCAyNTZsLTI4OCAwIDAgMTkyIDI4OCAwIDAtMTkyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DiagramSubtask: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 224l0 160 0 32 32 0 96 0 0-64-64 0 0-128-64 0z" />
            <path d="M512 32L0 32 0 224l512 0 0-192zm0 256l-288 0 0 192 288 0 0-192z" />
    </Icon>
);

export default DiagramSubtask;