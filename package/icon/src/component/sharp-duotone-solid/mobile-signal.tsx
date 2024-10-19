
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mobile-signal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal?s=sharp-duotone-solid mobile-signal}
 * @preview ![mobile-signal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA2NCAwIDQ0OGwwIDY0IDY0IDAgMTYwIDBjMC0yMiAyLjUtNDMuNCA3LjEtNjRMNjQgNDQ4IDY0IDY0bDIyNCAwIDAgMjY3YzE4LjItMjIuNiAzOS44LTQyLjMgNjQtNTguNUwzNTIgNjRsMC02NEwyODggMCA2NCAwIDAgMHpNMTI4IDM4NGwwIDMyIDE2IDAgNjQgMCAxNiAwIDAtMzItMTYgMC02NCAwLTE2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMDQgNTEyYzAtMTE0LjkgOTMuMS0yMDggMjA4LTIwOGwwLTQ4Yy0xNDEuNCAwLTI1NiAxMTQuNi0yNTYgMjU2bDQ4IDB6bTE0NC0zMmEzMiAzMiAwIDEgMCA2NCAwIDMyIDMyIDAgMSAwIC02NCAwem02NC04MGwwLTQ4Yy04OC40IDAtMTYwIDcxLjYtMTYwIDE2MGw0OCAwYzAtNjEuOSA1MC4xLTExMiAxMTItMTEyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MobileSignal: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 64 0 448l0 64 64 0 160 0c0-22 2.5-43.4 7.1-64L64 448 64 64l224 0 0 267c18.2-22.6 39.8-42.3 64-58.5L352 64l0-64L288 0 64 0 0 0zM128 384l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0z" />
            <path d="M304 512c0-114.9 93.1-208 208-208l0-48c-141.4 0-256 114.6-256 256l48 0zm144-32a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-80l0-48c-88.4 0-160 71.6-160 160l48 0c0-61.9 50.1-112 112-112z" />
    </Icon>
);

export default MobileSignal;