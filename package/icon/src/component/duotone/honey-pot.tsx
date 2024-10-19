
import { Icon, generic } from "../../index";

/**
 * A component that renders the `honey-pot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/honey-pot?s=duotone honey-pot}
 * @preview ![honey-pot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGw0NDggMGMwIDUwLjQtMTAuNSA5My0yNS41IDEyOGwtMzk3IDBDMTAuNSAzMTcgMCAyNzQuNCAwIDIyNHpNMTI4IDMybDQ4IDAgMCAxMDRjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRsMC0xMDR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02NCAzMmw2NCAwIDAgMTA0YzAgMTMuMyAxMC43IDI0IDI0IDI0czI0LTEwLjcgMjQtMjRsMC0xMDQgMjA4IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJjMzguOSAyOS4yIDY0IDc1LjcgNjQgMTI4TDAgMjI0YzAtNTIuMyAyNS4xLTk4LjggNjQtMTI4QzQ2LjMgOTYgMzIgODEuNyAzMiA2NHMxNC4zLTMyIDMyLTMyek0yNS41IDM1MmwzOTcgMGMtMjYuMyA2MS40LTY2LjQgOTkuOC04Ny44IDExNy4xYy05LjMgNy41LTIxLjEgMTAuOS0zMy4xIDEwLjlsLTE1NS4zIDBjLTEyIDAtMjMuNy0zLjMtMzMuMS0xMC45QzkxLjkgNDUxLjggNTEuOCA0MTMuNCAyNS41IDM1MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const HoneyPot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224l448 0c0 50.4-10.5 93-25.5 128l-397 0C10.5 317 0 274.4 0 224zM128 32l48 0 0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104z" />
            <path d="M64 32l64 0 0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104 208 0c17.7 0 32 14.3 32 32s-14.3 32-32 32c38.9 29.2 64 75.7 64 128L0 224c0-52.3 25.1-98.8 64-128C46.3 96 32 81.7 32 64s14.3-32 32-32zM25.5 352l397 0c-26.3 61.4-66.4 99.8-87.8 117.1c-9.3 7.5-21.1 10.9-33.1 10.9l-155.3 0c-12 0-23.7-3.3-33.1-10.9C91.9 451.8 51.8 413.4 25.5 352z" />
    </Icon>
);

export default HoneyPot;