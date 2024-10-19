
import { Icon } from "../../index";

/**
 * A component that renders the `corner` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corner?s=solid corner}
 * @preview ![corner](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxOTJjMC0xNy43IDE0LjMtMzIgMzItMzJsMzUyIDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAxMjhjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0xMjhMMzIgMjI0Yy0xNy43IDAtMzItMTQuMy0zMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Corner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 192c0-17.7 14.3-32 32-32l352 0c35.3 0 64 28.7 64 64l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128L32 224c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default Corner;