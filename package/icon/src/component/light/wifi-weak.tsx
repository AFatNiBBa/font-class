
import { Icon } from "../../index";

/**
 * A component that renders the `wifi-weak` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-weak?s=light wifi-weak}
 * @preview ![wifi-weak](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIwIDM4NGEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6bTAgOTZhNjQgNjQgMCAxIDAgMC0xMjggNjQgNjQgMCAxIDAgMCAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const WifiWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 384a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default WifiWeak;