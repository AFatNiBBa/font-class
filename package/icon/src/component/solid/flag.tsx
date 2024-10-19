
import { Icon } from "../../index";

/**
 * A component that renders the `flag` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag?s=solid flag}
 * @preview ![flag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMzJDNjQgMTQuMyA0OS43IDAgMzIgMFMwIDE0LjMgMCAzMkwwIDY0IDAgMzY4IDAgNDgwYzAgMTcuNyAxNC4zIDMyIDMyIDMyczMyLTE0LjMgMzItMzJsMC0xMjggNjQuMy0xNi4xYzQxLjEtMTAuMyA4NC42LTUuNSAxMjIuNSAxMy40YzQ0LjIgMjIuMSA5NS41IDI0LjggMTQxLjcgNy40bDM0LjctMTNjMTIuNS00LjcgMjAuOC0xNi42IDIwLjgtMzBsMC0yNDcuN2MwLTIzLTI0LjItMzgtNDQuOC0yNy43bC05LjYgNC44Yy00Ni4zIDIzLjItMTAwLjggMjMuMi0xNDcuMSAwYy0zNS4xLTE3LjYtNzUuNC0yMi0xMTMuNS0xMi41TDY0IDQ4bDAtMTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Flag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 64 0 368 0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48l0-16z" />
    </Icon>
);

export default Flag;