
import { Icon } from "../../index";

/**
 * A component that renders the `strava` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/strava?s=brands strava}
 * @preview ![strava](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTguNCAwTDcgMjkyaDg5LjJsNjIuMi0xMTYuMUwyMjAuMSAyOTJoODguNXptMTUwLjIgMjkybC00My45IDg4LjItNDQuNi04OC4yaC02Ny42bDExMi4yIDIyMCAxMTEuNS0yMjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Strava: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M158.4 0L7 292h89.2l62.2-116.1L220.1 292h88.5zm150.2 292l-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220z" />
    </Icon>
);

export default Strava;