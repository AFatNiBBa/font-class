
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-bullet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bullet?s=sharp-duotone-solid chart-bullet}
 * @preview ![chart-bullet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgNjRsMCA2NCA4MCAwIDAtNjQtODAgMHptMCA5NmwwIDY0IDgwIDAgMC02NC04MCAwem05NiAxMjhsMCA2NCA4MCAwIDAtNjQtODAgMHptMCA5NmwwIDY0IDgwIDAgMC02NC04MCAwek0yODggNjRsMCA2NCAxNjAgMCAwIDMyLTE2MCAwIDAgNjQgMTYwIDAgNjQgMCAwLTY0IDAtMzIgMC02NC02NCAwTDI4OCA2NHptOTYgMjI0bDAgNjQgNjQgMCAwIDMyLTY0IDAgMCA2NCA2NCAwIDY0IDAgMC02NCAwLTMyIDAtNjQtNjQgMC02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDMybC00OCAwIDAgMjQgMCAxNzYgMCAyNCA0OCAwIDAtMjQgMC0xNzYgMC0yNHpNMTYwIDY0TDAgNjQgMCAyMjRsMTYwIDAgMC0xNjB6bTk2IDIyNEwwIDI4OCAwIDQ0OGwyNTYgMCAwLTE2MHptMTI4LThsMC0yNC00OCAwIDAgMjQgMCAxNzYgMCAyNCA0OCAwIDAtMjQgMC0xNzZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChartBullet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 64l0 64 80 0 0-64-80 0zm0 96l0 64 80 0 0-64-80 0zm96 128l0 64 80 0 0-64-80 0zm0 96l0 64 80 0 0-64-80 0zM288 64l0 64 160 0 0 32-160 0 0 64 160 0 64 0 0-64 0-32 0-64-64 0L288 64zm96 224l0 64 64 0 0 32-64 0 0 64 64 0 64 0 0-64 0-32 0-64-64 0-64 0z" />
            <path d="M288 32l-48 0 0 24 0 176 0 24 48 0 0-24 0-176 0-24zM160 64L0 64 0 224l160 0 0-160zm96 224L0 288 0 448l256 0 0-160zm128-8l0-24-48 0 0 24 0 176 0 24 48 0 0-24 0-176z" />
    </Icon>
);

export default ChartBullet;