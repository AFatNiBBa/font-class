
import { Icon, generic } from "../../index";

/**
 * A component that renders the `archway` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/archway?s=duotone archway}
 * @preview ![archway](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGMwIDE3LjcgMTQuMyAzMiAzMiAzMmw5NiAwIDMyIDAgMC02NCAwLTY0YzAtNTMgNDMtOTYgOTYtOTZzOTYgNDMgOTYgOTZsMCA2NCAwIDY0IDMyIDAgOTYgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwwLTIyNEwzMiAxOTJsMCAyMjRjLTE3LjcgMC0zMiAxNC4zLTMyIDMyek0zMiA5NmwwIDY0IDQ0OCAwIDAtNjRMMzIgOTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAzMkMxNC4zIDMyIDAgNDYuMyAwIDY0UzE0LjMgOTYgMzIgOTZsNDQ4IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJMMzIgMzJ6TTQ4MCAxNjBMMzIgMTYwbDAgMzIgNDQ4IDAgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Archway: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448c0 17.7 14.3 32 32 32l96 0 32 0 0-64 0-64c0-53 43-96 96-96s96 43 96 96l0 64 0 64 32 0 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-224L32 192l0 224c-17.7 0-32 14.3-32 32zM32 96l0 64 448 0 0-64L32 96z" />
            <path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zM480 160L32 160l0 32 448 0 0-32z" />
    </Icon>
);

export default Archway;