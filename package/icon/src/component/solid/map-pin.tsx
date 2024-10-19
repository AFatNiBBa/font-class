
import { Icon } from "../../index";

/**
 * A component that renders the `map-pin` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-pin?s=solid map-pin}
 * @preview ![map-pin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMTQ0YTE0NCAxNDQgMCAxIDEgMjg4IDBBMTQ0IDE0NCAwIDEgMSAxNiAxNDR6TTE2MCA4MGM4LjggMCAxNi03LjIgMTYtMTZzLTcuMi0xNi0xNi0xNmMtNTMgMC05NiA0My05NiA5NmMwIDguOCA3LjIgMTYgMTYgMTZzMTYtNy4yIDE2LTE2YzAtMzUuMyAyOC43LTY0IDY0LTY0ek0xMjggNDgwbDAtMTYyLjljMTAuNCAxLjkgMjEuMSAyLjkgMzIgMi45czIxLjYtMSAzMi0yLjlMMTkyIDQ4MGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const MapPin: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480l0-162.9c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9L192 480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
    </Icon>
);

export default MapPin;