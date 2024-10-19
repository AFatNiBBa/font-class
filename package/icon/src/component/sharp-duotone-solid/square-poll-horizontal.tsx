
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-poll-horizontal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-poll-horizontal?s=sharp-duotone-solid square-poll-horizontal}
 * @preview ![square-poll-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6bTk2IDk2bDE2MCAwIDAgNjRMOTYgMTkybDAtNjR6bTAgOTZsMjU2IDAgMCA2NEw5NiAyODhsMC02NHptMCA5Nmw5NiAwIDAgNjQtOTYgMCAwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDEyOGwwIDY0TDk2IDE5MmwwLTY0IDE2MCAwem05NiA5NmwwIDY0TDk2IDI4OGwwLTY0IDI1NiAwek0xOTIgMzg0bC05NiAwIDAtNjQgOTYgMCAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquarePollHorizontal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm96 96l160 0 0 64L96 192l0-64zm0 96l256 0 0 64L96 288l0-64zm0 96l96 0 0 64-96 0 0-64z" />
            <path d="M256 128l0 64L96 192l0-64 160 0zm96 96l0 64L96 288l0-64 256 0zM192 384l-96 0 0-64 96 0 0 64z" />
    </Icon>
);

export default SquarePollHorizontal;