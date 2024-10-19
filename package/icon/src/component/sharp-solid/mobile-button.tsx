
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-button` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-button?s=sharp-solid mobile-button}
 * @preview ![mobile-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzY4IDBMMTYgMGwwIDUxMiAzNTIgMEwzNjggMHpNMTkyIDQwMGEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const MobileButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M368 0L16 0l0 512 352 0L368 0zM192 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default MobileButton;