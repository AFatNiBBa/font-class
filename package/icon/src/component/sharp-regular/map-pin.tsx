
import { Icon } from "../../index";

/**
 * A component that renders the `map-pin` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-pin?s=sharp-regular map-pin}
 * @preview ![map-pin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMTQ0YTk2IDk2IDAgMSAxIDE5MiAwQTk2IDk2IDAgMSAxIDY0IDE0NHpNMTg0IDI4NmM2OC4xLTExLjQgMTIwLTcwLjcgMTIwLTE0MkMzMDQgNjQuNSAyMzkuNSAwIDE2MCAwUzE2IDY0LjUgMTYgMTQ0YzAgNzEuNCA1MS45IDEzMC42IDEyMCAxNDJsMCAyMDIgMCAyNCA0OCAwIDAtMjQgMC0yMDJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const MapPin: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 144a96 96 0 1 1 192 0A96 96 0 1 1 64 144zM184 286c68.1-11.4 120-70.7 120-142C304 64.5 239.5 0 160 0S16 64.5 16 144c0 71.4 51.9 130.6 120 142l0 202 0 24 48 0 0-24 0-202z" />
    </Icon>
);

export default MapPin;