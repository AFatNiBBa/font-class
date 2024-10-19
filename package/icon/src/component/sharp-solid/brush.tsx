
import { Icon } from "../../index";

/**
 * A component that renders the `brush` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brush?s=sharp-solid brush}
 * @preview ![brush](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDY0TDE2MCAwIDEyOCAwIDk2IDY0IDY0IDAgMCAwIDAgMjU2bDM4NCAwTDM4NCAwIDIyNCAwIDE5MiA2NHpNMCAyODhsMCA5NiAxMjggMCAwIDEyOCAxMjggMCAwLTEyOCAxMjggMCAwLTk2TDAgMjg4ek0xOTIgNDMyYTE2IDE2IDAgMSAxIDAgMzIgMTYgMTYgMCAxIDEgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Brush: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 64L160 0 128 0 96 64 64 0 0 0 0 256l384 0L384 0 224 0 192 64zM0 288l0 96 128 0 0 128 128 0 0-128 128 0 0-96L0 288zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Brush;