
import { Icon, generic } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=duotone door-closed}
 * @preview ![door-closed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA2NGwwIDM4NCAwIDY0IDM4NCAwIDAtNjQgMC0zODRjMC0zNS4zLTI4LjctNjQtNjQtNjRMMTYwIDBDMTI0LjcgMCA5NiAyOC43IDk2IDY0ek00MTYgMjU2YTMyIDMyIDAgMSAxIC02NCAwIDMyIDMyIDAgMSAxIDY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zODQgMjI0YTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHpNMCA0ODBjMC0xNy43IDE0LjMtMzIgMzItMzJsNjQgMCAwIDY0LTY0IDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyem01NzYgMGMwIDE3LjctMTQuMyAzMi0zMiAzMmwtNjQgMCAwLTY0IDY0IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const DoorClosed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 64l0 384 0 64 384 0 0-64 0-384c0-35.3-28.7-64-64-64L160 0C124.7 0 96 28.7 96 64zM416 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
            <path d="M384 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM0 480c0-17.7 14.3-32 32-32l64 0 0 64-64 0c-17.7 0-32-14.3-32-32zm576 0c0 17.7-14.3 32-32 32l-64 0 0-64 64 0c17.7 0 32 14.3 32 32z" />
    </Icon>
);

export default DoorClosed;