
import { Icon } from "../../index";

/**
 * A component that renders the `frame` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=sharp-regular frame}
 * @preview ![frame](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDE0NGwwLTQ4LTY0IDAgMC02NC00OCAwIDAgNjRMMTEyIDk2bDAtNjRMNjQgMzJsMCA2NEwwIDk2bDAgNDggNjQgMCAwIDIyNEwwIDM2OGwwIDQ4IDY0IDAgMCA2NCA0OCAwIDAtNjQgMjI0IDAgMCA2NCA0OCAwIDAtNjQgNjQgMCAwLTQ4LTY0IDAgMC0yMjQgNjQgMHpNMTEyIDM2OGwwLTIyNCAyMjQgMCAwIDIyNC0yMjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 144l0-48-64 0 0-64-48 0 0 64L112 96l0-64L64 32l0 64L0 96l0 48 64 0 0 224L0 368l0 48 64 0 0 64 48 0 0-64 224 0 0 64 48 0 0-64 64 0 0-48-64 0 0-224 64 0zM112 368l0-224 224 0 0 224-224 0z" />
    </Icon>
);

export default Frame;