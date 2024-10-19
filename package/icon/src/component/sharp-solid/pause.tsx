
import { Icon } from "../../index";

/**
 * A component that renders the `pause` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pause?s=sharp-solid pause}
 * @preview ![pause](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDY0TDAgNjQgMCA0NDhsMTI4IDAgMC0zODR6bTE5MiAwTDE5MiA2NGwwIDM4NCAxMjggMCAwLTM4NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Pause: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M128 64L0 64 0 448l128 0 0-384zm192 0L192 64l0 384 128 0 0-384z" />
    </Icon>
);

export default Pause;