
import { Icon } from "../../index";

/**
 * A component that renders the `elevator` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/elevator?s=sharp-solid elevator}
 * @preview ![elevator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgODBsMCAxNiAxNjAgMCAwLTE2TDE0NCAwIDY0IDgwem00NDggNDhMMCAxMjggMCA1MTJsNTEyIDAgMC0zODR6TTE2MCAyMjRhNDggNDggMCAxIDEgMCA5NiA0OCA0OCAwIDEgMSAwLTk2ek04MCA0NDhsMjQtOTYgMTEyIDAgMjQgOTZMODAgNDQ4em0zMjgtOTZsMjQgOTYtMTYwIDAgMjQtOTYgMTEyIDB6TTMwNCAyNzJhNDggNDggMCAxIDEgOTYgMCA0OCA0OCAwIDEgMSAtOTYgMHpNMzY4IDk2bDgwLTgwIDAtMTZMMjg4IDBsMCAxNiA4MCA4MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Elevator: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 80l0 16 160 0 0-16L144 0 64 80zm448 48L0 128 0 512l512 0 0-384zM160 224a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM80 448l24-96 112 0 24 96L80 448zm328-96l24 96-160 0 24-96 112 0zM304 272a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM368 96l80-80 0-16L288 0l0 16 80 80z" />
    </Icon>
);

export default Elevator;