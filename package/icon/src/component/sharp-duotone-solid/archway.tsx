
import { Icon, generic } from "../../index";

/**
 * A component that renders the `archway` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/archway?s=sharp-duotone-solid archway}
 * @preview ![archway](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmwwIDY0IDMyIDAgOTYgMCAzMiAwIDAtNjQgMC02NGMwLTUzIDQzLTk2IDk2LTk2czk2IDQzIDk2IDk2bDAgNjQgMCA2NCAzMiAwIDk2IDAgMzIgMCAwLTY0LTMyIDAgMC0yMjRMMzIgMTkybDAgMjI0TDAgNDE2ek0zMiA5NmwwIDY0IDQ0OCAwIDAtNjRMMzIgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAzMkwwIDMyIDAgOTZsMzIgMCA0NDggMCAzMiAwIDAtNjQtMzIgMEwzMiAzMnpNNDgwIDE2MEwzMiAxNjBsMCAzMiA0NDggMCAwLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Archway: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416l0 64 32 0 96 0 32 0 0-64 0-64c0-53 43-96 96-96s96 43 96 96l0 64 0 64 32 0 96 0 32 0 0-64-32 0 0-224L32 192l0 224L0 416zM32 96l0 64 448 0 0-64L32 96z" />
            <path d="M32 32L0 32 0 96l32 0 448 0 32 0 0-64-32 0L32 32zM480 160L32 160l0 32 448 0 0-32z" />
    </Icon>
);

export default Archway;