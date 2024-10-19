
import { Icon } from "../../index";

/**
 * A component that renders the `wifi-weak` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-weak?s=sharp-thin wifi-weak}
 * @preview ![wifi-weak](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIwIDM2OGE0OCA0OCAwIDEgMSAwIDk2IDQ4IDQ4IDAgMSAxIDAtOTZ6bTAgMTEyYTY0IDY0IDAgMSAwIDAtMTI4IDY0IDY0IDAgMSAwIDAgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const WifiWeak: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default WifiWeak;