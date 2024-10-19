
import { Icon } from "../../index";

/**
 * A component that renders the `frame` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=sharp-solid frame}
 * @preview ![frame](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDE2MGwwLTY0LTY0IDAgMC02NC02NCAwIDAgNjRMMTI4IDk2bDAtNjRMNjQgMzJsMCA2NEwwIDk2bDAgNjQgNjQgMCAwIDE5MkwwIDM1MmwwIDY0IDY0IDAgMCA2NCA2NCAwIDAtNjQgMTkyIDAgMCA2NCA2NCAwIDAtNjQgNjQgMCAwLTY0LTY0IDAgMC0xOTIgNjQgMHpNMTI4IDM1MmwwLTE5MiAxOTIgMCAwIDE5Mi0xOTIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 160l0-64-64 0 0-64-64 0 0 64L128 96l0-64L64 32l0 64L0 96l0 64 64 0 0 192L0 352l0 64 64 0 0 64 64 0 0-64 192 0 0 64 64 0 0-64 64 0 0-64-64 0 0-192 64 0zM128 352l0-192 192 0 0 192-192 0z" />
    </Icon>
);

export default Frame;