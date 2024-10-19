
import { Icon } from "../../index";

/**
 * A component that renders the `tick` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tick?s=sharp-regular tick}
 * @preview ![tick](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNzIgMTA4TDk2IDI1MmwyNC0xNDQgMC0yOEw3MiA4MGwwIDI4em00OC03Nmw0OCAwIDAgNDggMCAzMkwxMzYgMzA0bC04MCAwTDI0IDExMmwwLTMyIDAtNDggNDggMCA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tick: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M72 108L96 252l24-144 0-28L72 80l0 28zm48-76l48 0 0 48 0 32L136 304l-80 0L24 112l0-32 0-48 48 0 48 0z" />
    </Icon>
);

export default Tick;