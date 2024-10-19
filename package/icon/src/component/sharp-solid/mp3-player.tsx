
import { Icon } from "../../index";

/**
 * A component that renders the `mp3-player` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mp3-player?s=sharp-solid mp3-player}
 * @preview ![mp3-player](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAwTDM4NCAwbDAgNTEyTDAgNTEyIDAgMHpNMTkyIDMyMGEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6bTAgMTI4YTk2IDk2IDAgMSAwIDAtMTkyIDk2IDk2IDAgMSAwIDAgMTkyek0zMjAgNjRMNjQgNjRsMCAxMjggMjU2IDAgMC0xMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Mp3Player: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L384 0l0 512L0 512 0 0zM192 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 128a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM320 64L64 64l0 128 256 0 0-128z" />
    </Icon>
);

export default Mp3Player;