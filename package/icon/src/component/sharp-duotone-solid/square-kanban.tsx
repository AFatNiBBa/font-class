
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-kanban` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-kanban?s=sharp-duotone-solid square-kanban}
 * @preview ![square-kanban](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDQ0OCAwIDAtNDQ4TDAgMzJ6bTk2IDk2bDY0IDAgMCAxOTItNjQgMCAwLTE5MnptOTYgMGw2NCAwIDAgMTI4LTY0IDAgMC0xMjh6bTk2IDBsNjQgMCAwIDI1Ni02NCAwIDAtMjU2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDM4NGw2NCAwIDAtMjU2LTY0IDAgMCAyNTZ6TTk2IDMyMGw2NCAwIDAtMTkyLTY0IDAgMCAxOTJ6bTE2MC02NGwwLTEyOC02NCAwIDAgMTI4IDY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm96 96l64 0 0 192-64 0 0-192zm96 0l64 0 0 128-64 0 0-128zm96 0l64 0 0 256-64 0 0-256z" />
            <path d="M288 384l64 0 0-256-64 0 0 256zM96 320l64 0 0-192-64 0 0 192zm160-64l0-128-64 0 0 128 64 0z" />
    </Icon>
);

export default SquareKanban;