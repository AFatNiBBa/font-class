
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-a-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-a-lock?s=sharp-duotone-solid square-a-lock}
 * @preview ![square-a-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgNDgwbDMyMCAwIDAtOTYtMTMuNiAwLTIyLjUtNDgtMTE5LjcgMC0yMi41IDQ4LTUzIDBMMjAyLjMgMTQxLjhsNi41LTEzLjggMzAuNSAwIDYuNSAxMy44TDMxNC4zIDI4OGw1LjcgMCAzMiAwIDAtMTZjMC01Ni40IDQxLjctMTAzLjEgOTYtMTEwLjlMNDQ4IDMyIDAgMzJ6TTE4Ni43IDI4OGw3NC42IDBMMjI0IDIwOC41IDE4Ni43IDI4OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQzMiAyNzJsMCA0OCA2NCAwIDAtNDhjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJ6bS00OCA0OGwwLTQ4YzAtNDQuMiAzNS44LTgwIDgwLTgwczgwIDM1LjggODAgODBsMCA0OCAzMiAwIDAgMTkyLTIyNCAwIDAtMTkyIDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareALock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l320 0 0-96-13.6 0-22.5-48-119.7 0-22.5 48-53 0L202.3 141.8l6.5-13.8 30.5 0 6.5 13.8L314.3 288l5.7 0 32 0 0-16c0-56.4 41.7-103.1 96-110.9L448 32 0 32zM186.7 288l74.6 0L224 208.5 186.7 288z" />
            <path d="M432 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default SquareALock;