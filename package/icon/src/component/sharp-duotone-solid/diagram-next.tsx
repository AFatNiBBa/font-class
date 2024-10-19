
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-next` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-next?s=sharp-duotone-solid diagram-next}
 * @preview ![diagram-next](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OEwwIDQ4MGw1MTIgMCAwLTE5Mi0xMjggMCAwIDMyIDAgMTMuMy05LjQgOS40LTk2IDk2TDI1NiA0NjEuM2wtMjIuNi0yMi42LTk2LTk2LTkuNC05LjQgMC0xMy4zIDAtMzJMMCAyODh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTIgMjI0bDAtMTkyTDAgMzIgMCAyMjRsMjMyIDAgMCA2NC03MiAwIDAgMzIgOTYgOTYgOTYtOTYgMC0zMi03MiAwIDAtNjQgMjMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const DiagramNext: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 480l512 0 0-192-128 0 0 32 0 13.3-9.4 9.4-96 96L256 461.3l-22.6-22.6-96-96-9.4-9.4 0-13.3 0-32L0 288z" />
            <path d="M512 224l0-192L0 32 0 224l232 0 0 64-72 0 0 32 96 96 96-96 0-32-72 0 0-64 232 0z" />
    </Icon>
);

export default DiagramNext;