
import { Icon, generic } from "../../index";

/**
 * A component that renders the `indent` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/indent?s=sharp-duotone-solid indent}
 * @preview ![indent](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgOTZsNDQ4IDAgMC02NEwwIDMyek0wIDQxNmwwIDY0IDQ0OCAwIDAtNjRMMCA0MTZ6TTE5MiAxNjBsMCA2NCAyNTYgMCAwLTY0LTI1NiAwem0wIDEyOGwwIDY0IDI1NiAwIDAtNjQtMjU2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjggMjU2TDAgMzUyVjE2MGwxMjggOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Indent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l448 0 0-64L0 32zM0 416l0 64 448 0 0-64L0 416zM192 160l0 64 256 0 0-64-256 0zm0 128l0 64 256 0 0-64-256 0z" />
            <path d="M128 256L0 352V160l128 96z" />
    </Icon>
);

export default Indent;