
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sandwich` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sandwich?s=sharp-duotone-solid sandwich}
 * @preview ![sandwich](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xLjIgMjQwLjdsMTUuNSA2Mi4xIDMxLTcuOCA4OC0yMiAxMTIgMjkuOSA4LjIgMi4yIDguMi0yLjIgMTEyLTI5LjkgODggMjIgMzEgNy44IDE1LjUtNjIuMS0zMS03LjgtOTYtMjQtOC0yLTggMi4xTDI1NiAyMzguOSAxNDQuMiAyMDkuMWwtOC0yLjEtOCAyLTk2IDI0LTMxIDcuOHpNMjI0IDMzNmMzMiAxNiA2NCAzMiA5NiA0OGMzMi0xNiA2NC0zMiA5Ni00OGwtMTkyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTIgNjRMMCA2NCAwIDE3Nmw1MTIgMCAwLTExMnpNMjI0IDMzNmwtMzIgMEwwIDMzNiAwIDQ0OGw1MTIgMCAwLTExMi02NCAwLTMyIDAtOTYgNDgtOTYtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Sandwich: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1.2 240.7l15.5 62.1 31-7.8 88-22 112 29.9 8.2 2.2 8.2-2.2 112-29.9 88 22 31 7.8 15.5-62.1-31-7.8-96-24-8-2-8 2.1L256 238.9 144.2 209.1l-8-2.1-8 2-96 24-31 7.8zM224 336c32 16 64 32 96 48c32-16 64-32 96-48l-192 0z" />
            <path d="M512 64L0 64 0 176l512 0 0-112zM224 336l-32 0L0 336 0 448l512 0 0-112-64 0-32 0-96 48-96-48z" />
    </Icon>
);

export default Sandwich;