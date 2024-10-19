
import { Icon, generic } from "../../index";

/**
 * A component that renders the `refrigerator` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/refrigerator?s=sharp-duotone-solid refrigerator}
 * @preview ![refrigerator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGwwIDMyIDI4OCAwIDAtMzJMMCAxNjB6bTMyMCAwbDAgMzIgNjQgMCAwLTMyLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMEwwIDAgMCAxNjBsMjg4IDAgMC00OCAwLTE2IDMyIDAgMCAxNiAwIDQ4IDY0IDBMMzg0IDB6bTAgMTkybC02NCAwIDAgMTc2IDAgMTYtMzIgMCAwLTE2IDAtMTc2TDAgMTkyIDAgNTEybDM4NCAwIDAtMzIweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Refrigerator: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 160l0 32 288 0 0-32L0 160zm320 0l0 32 64 0 0-32-64 0z" />
            <path d="M384 0L0 0 0 160l288 0 0-48 0-16 32 0 0 16 0 48 64 0L384 0zm0 192l-64 0 0 176 0 16-32 0 0-16 0-176L0 192 0 512l384 0 0-320z" />
    </Icon>
);

export default Refrigerator;