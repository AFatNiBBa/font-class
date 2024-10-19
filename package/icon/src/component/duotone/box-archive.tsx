
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-archive` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-archive?s=duotone box-archive}
 * @preview ![box-archive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAxMjhsMCAyODhjMCAzNS4zIDI4LjcgNjQgNjQgNjRsMzIwIDBjMzUuMyAwIDY0LTI4LjcgNjQtNjRsMC0yODhMMzIgMTI4em0xMjggOTZjMC0xNy43IDE0LjMtMzIgMzItMzJsMTI4IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJsLTEyOCAwYy0xNy43IDAtMzItMTQuMy0zMi0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgNjRDMCA0Ni4zIDE0LjMgMzIgMzIgMzJINDgwYzE3LjcgMCAzMiAxNC4zIDMyIDMyVjk2YzAgMTcuNy0xNC4zIDMyLTMyIDMySDMyQzE0LjMgMTI4IDAgMTEzLjcgMCA5NlY2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BoxArchive: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 128l0 288c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-288L32 128zm128 96c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32z" />
            <path d="M0 64C0 46.3 14.3 32 32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64z" />
    </Icon>
);

export default BoxArchive;