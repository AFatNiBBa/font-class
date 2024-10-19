
import { Icon } from "../../index";

/**
 * A component that renders the `clock-twelve` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-twelve?s=sharp-solid clock-twelve}
 * @preview ![clock-twelve](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6bTI0LTM5MmwwIDEzNiAwIDI0LTQ4IDAgMC0yNCAwLTEzNiAwLTI0IDQ4IDAgMCAyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ClockTwelve: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-392l0 136 0 24-48 0 0-24 0-136 0-24 48 0 0 24z" />
    </Icon>
);

export default ClockTwelve;