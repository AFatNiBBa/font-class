
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame?s=sharp-solid window-frame}
 * @preview ![window-frame](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMjU2TDMyIDY0IDMyIDAgOTYgMCA0MTYgMGw2NCAwIDAgNjQgMCAxOTIgMCAxOTIgMzIgMCAwIDY0LTMyIDAtNjQgMEw5NiA1MTJsLTY0IDBMMCA1MTJsMC02NCAzMiAwIDAtMTkyem0zODQgMzJsLTEzNiAwIDAgMTYwIDEzNiAwIDAtMTYwem0tMTg0IDBMOTYgMjg4bDAgMTYwIDEzNiAwIDAtMTYwem00OC02NGwxMzYgMCAwLTE2MEwyODAgNjRsMCAxNjB6TTIzMiA2NEw5NiA2NGwwIDE2MCAxMzYgMCAwLTE2MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const WindowFrame: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256L32 64 32 0 96 0 416 0l64 0 0 64 0 192 0 192 32 0 0 64-32 0-64 0L96 512l-64 0L0 512l0-64 32 0 0-192zm384 32l-136 0 0 160 136 0 0-160zm-184 0L96 288l0 160 136 0 0-160zm48-64l136 0 0-160L280 64l0 160zM232 64L96 64l0 160 136 0 0-160z" />
    </Icon>
);

export default WindowFrame;