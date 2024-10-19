
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tree` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree?s=sharp-duotone-solid tree}
 * @preview ![tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmwwIDMyIDE5MiAwIDAtMjI0IDAtMzIgNjQgMCAwIDMyIDAgMjI0IDE5MiAwIDAtMzItODAtOTYgNTYgMCAwLTMyLTgwLTgwIDQ4IDAgMC0zMkwyMjQgMCA1NiAxNzZsMCAzMiA0OCAwTDI0IDI4OGwwIDMyIDU2IDBMMCA0MTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMTkybDAgMzIgMCAyNTYgMCAzMi02NCAwIDAtMzIgMC0yNTYgMC0zMiA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tree: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 32 192 0 0-224 0-32 64 0 0 32 0 224 192 0 0-32-80-96 56 0 0-32-80-80 48 0 0-32L224 0 56 176l0 32 48 0L24 288l0 32 56 0L0 416z" />
            <path d="M256 192l0 32 0 256 0 32-64 0 0-32 0-256 0-32 64 0z" />
    </Icon>
);

export default Tree;