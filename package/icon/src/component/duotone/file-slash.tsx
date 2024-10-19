
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-slash?s=duotone file-slash}
 * @preview ![file-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggNjRsMCAxMUMyNTYgMTc1LjQgMzg0IDI3NS43IDUxMiAzNzZsMC0yMTYtMTI4IDBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyTDM1MiAwIDE5MiAwYy0zNS4zIDAtNjQgMjguNy02NCA2NHptMCAxMzIuOEwxMjggNDQ4YzAgMzUuMyAyOC43IDY0IDY0IDY0bDI1NiAwYzIwLjEgMCAzOC4xLTkuMyA0OS44LTIzLjhMMTI4IDE5Ni44ek0zODQgMGwwIDEyOCAxMjggMEwzODQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUuMSA5LjJDMTMuMy0xLjIgMjguNC0zLjEgMzguOCA1LjFsNTkyIDQ2NGMxMC40IDguMiAxMi4zIDIzLjMgNC4xIDMzLjdzLTIzLjMgMTIuMy0zMy43IDQuMUw5LjIgNDIuOUMtMS4yIDM0LjctMy4xIDE5LjYgNS4xIDkuMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const FileSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 64l0 11C256 175.4 384 275.7 512 376l0-216-128 0c-17.7 0-32-14.3-32-32L352 0 192 0c-35.3 0-64 28.7-64 64zm0 132.8L128 448c0 35.3 28.7 64 64 64l256 0c20.1 0 38.1-9.3 49.8-23.8L128 196.8zM384 0l0 128 128 0L384 0z" />
            <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default FileSlash;