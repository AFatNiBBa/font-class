
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bookmark-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bookmark-slash?s=duotone bookmark-slash}
 * @preview ![bookmark-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggNDhsMCAyN0MyNTYgMTc1LjQgMzg0IDI3NS43IDUxMiAzNzZsMC0zMjhjMC0yNi41LTIxLjUtNDgtNDgtNDhMMTc2IDBjLTI2LjUgMC00OCAyMS41LTQ4IDQ4em0wIDE0OC44bDAgMjkwLjhjMCAxMy40IDEwLjkgMjQuMyAyNC4zIDI0LjNjNSAwIDkuOS0xLjUgMTQtNC40TDMyMCA0MDAgNDczLjcgNTA3LjZjNC4xIDIuOSA5IDQuNCAxNCA0LjRjOS45IDAgMTguNC01LjkgMjIuMi0xNC4zTDEyOCAxOTYuOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTUuMSA5LjJDMTMuMy0xLjIgMjguNC0zLjEgMzguOCA1LjFsNTkyIDQ2NGMxMC40IDguMiAxMi4zIDIzLjMgNC4xIDMzLjdzLTIzLjMgMTIuMy0zMy43IDQuMUw5LjIgNDIuOUMtMS4yIDM0LjctMy4xIDE5LjYgNS4xIDkuMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BookmarkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 48l0 27C256 175.4 384 275.7 512 376l0-328c0-26.5-21.5-48-48-48L176 0c-26.5 0-48 21.5-48 48zm0 148.8l0 290.8c0 13.4 10.9 24.3 24.3 24.3c5 0 9.9-1.5 14-4.4L320 400 473.7 507.6c4.1 2.9 9 4.4 14 4.4c9.9 0 18.4-5.9 22.2-14.3L128 196.8z" />
            <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default BookmarkSlash;