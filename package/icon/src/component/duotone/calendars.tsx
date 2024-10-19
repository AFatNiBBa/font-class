
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendars` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendars?s=duotone calendars}
 * @preview ![calendars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxOTJsNDE2IDAgMCAxNzZjMCAyNi41LTIxLjUgNDgtNDggNDhsLTMyMCAwYy0yNi41IDAtNDgtMjEuNS00OC00OGwwLTE3NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAwYy0xNy43IDAtMzIgMTQuMy0zMiAzMmwwIDMyLTQ4IDBjLTI2LjUgMC00OCAyMS41LTQ4IDQ4bDAgODAgNDE2IDAgMC04MGMwLTI2LjUtMjEuNS00OC00OC00OGwtNDggMCAwLTMyYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMybDAgMzItOTYgMCAwLTMyYzAtMTcuNy0xNC4zLTMyLTMyLTMyek00OCAxODRjMC0xMy4zLTEwLjctMjQtMjQtMjRzLTI0IDEwLjctMjQgMjRMMCAzOTJjMCA2Ni4zIDUzLjcgMTIwIDEyMCAxMjBsMjcyIDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRsLTI3MiAwYy0zOS44IDAtNzItMzIuMi03Mi03MmwwLTIwOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Calendars: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 192l416 0 0 176c0 26.5-21.5 48-48 48l-320 0c-26.5 0-48-21.5-48-48l0-176z" />
            <path d="M224 0c-17.7 0-32 14.3-32 32l0 32-48 0c-26.5 0-48 21.5-48 48l0 80 416 0 0-80c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-96 0 0-32c0-17.7-14.3-32-32-32zM48 184c0-13.3-10.7-24-24-24s-24 10.7-24 24L0 392c0 66.3 53.7 120 120 120l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-272 0c-39.8 0-72-32.2-72-72l0-208z" />
    </Icon>
);

export default Calendars;