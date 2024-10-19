
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-button` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-button?s=sharp-regular mobile-button}
 * @preview ![mobile-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgNDhsMCA0MTYgMjU2IDAgMC00MTZMNjQgNDh6TTE2IDBMNjQgMCAzMjAgMGw0OCAwIDAgNDggMCA0MTYgMCA0OC00OCAwTDY0IDUxMmwtNDggMCAwLTQ4TDE2IDQ4IDE2IDB6TTE5MiAzOTJhMjQgMjQgMCAxIDEgMCA0OCAyNCAyNCAwIDEgMSAwLTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MobileButton: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 48l0 416 256 0 0-416L64 48zM16 0L64 0 320 0l48 0 0 48 0 416 0 48-48 0L64 512l-48 0 0-48L16 48 16 0zM192 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default MobileButton;