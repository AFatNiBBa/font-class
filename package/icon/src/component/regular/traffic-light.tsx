
import { Icon } from "../../index";

/**
 * A component that renders the `traffic-light` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light?s=regular traffic-light}
 * @preview ![traffic-light](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgNDhjLTguOCAwLTE2IDcuMi0xNiAxNmwwIDI4OGMwIDYxLjkgNTAuMSAxMTIgMTEyIDExMnMxMTItNTAuMSAxMTItMTEybDAtMjg4YzAtOC44LTcuMi0xNi0xNi0xNkw2NCA0OHpNMCA2NEMwIDI4LjcgMjguNyAwIDY0IDBMMjU2IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAyODhjMCA4OC40LTcxLjYgMTYwLTE2MCAxNjBTMCA0NDAuNCAwIDM1MkwwIDY0ek0xNjAgNDI0YTQ4IDQ4IDAgMSAxIDAtOTYgNDggNDggMCAxIDEgMCA5NnptNDgtMTY4YTQ4IDQ4IDAgMSAxIC05NiAwIDQ4IDQ4IDAgMSAxIDk2IDB6bS00OC03MmE0OCA0OCAwIDEgMSAwLTk2IDQ4IDQ4IDAgMSAxIDAgOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const TrafficLight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M64 48c-8.8 0-16 7.2-16 16l0 288c0 61.9 50.1 112 112 112s112-50.1 112-112l0-288c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L256 0c35.3 0 64 28.7 64 64l0 288c0 88.4-71.6 160-160 160S0 440.4 0 352L0 64zM160 424a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm48-168a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-48-72a48 48 0 1 1 0-96 48 48 0 1 1 0 96z" />
    </Icon>
);

export default TrafficLight;