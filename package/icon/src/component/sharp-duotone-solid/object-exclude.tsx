
import { Icon, generic } from "../../index";

/**
 * A component that renders the `object-exclude` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-exclude?s=sharp-duotone-solid object-exclude}
 * @preview ![object-exclude](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNTIgMTYwbC0xOTIgMCAwIDE5MiAxOTIgMCAwLTE5MnptLTQ4IDQ4bDAgOTYtOTYgMCAwLTk2IDk2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNTIgMEwwIDAgMCAzNTJsMTYwIDAgMCAxNjAgMzUyIDAgMC0zNTItMTYwIDBMMzUyIDB6bTAgMTYwbDAgMTkyLTE5MiAwIDAtMTkyIDE5MiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ObjectExclude: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M352 160l-192 0 0 192 192 0 0-192zm-48 48l0 96-96 0 0-96 96 0z" />
            <path d="M352 0L0 0 0 352l160 0 0 160 352 0 0-352-160 0L352 0zm0 160l0 192-192 0 0-192 192 0z" />
    </Icon>
);

export default ObjectExclude;