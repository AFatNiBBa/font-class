
import { Icon } from "../../index";

/**
 * A component that renders the `cross` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=solid cross}
 * @preview ![cross](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTc2IDBjLTI2LjUgMC00OCAyMS41LTQ4IDQ4bDAgODAtODAgMGMtMjYuNSAwLTQ4IDIxLjUtNDggNDhsMCAzMmMwIDI2LjUgMjEuNSA0OCA0OCA0OGw4MCAwIDAgMjA4YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4bDMyIDBjMjYuNSAwIDQ4LTIxLjUgNDgtNDhsMC0yMDggODAgMGMyNi41IDAgNDgtMjEuNSA0OC00OGwwLTMyYzAtMjYuNS0yMS41LTQ4LTQ4LTQ4bC04MCAwIDAtODBjMC0yNi41LTIxLjUtNDgtNDgtNDhMMTc2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Cross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M176 0c-26.5 0-48 21.5-48 48l0 80-80 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l80 0 0 208c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-208 80 0c26.5 0 48-21.5 48-48l0-32c0-26.5-21.5-48-48-48l-80 0 0-80c0-26.5-21.5-48-48-48L176 0z" />
    </Icon>
);

export default Cross;