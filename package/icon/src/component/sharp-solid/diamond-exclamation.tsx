
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-exclamation?s=sharp-solid diamond-exclamation}
 * @preview ![diamond-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDBMMCAyNTYgMjU2IDUxMiA1MTIgMjU2IDI1NiAwem0yNCAxMjhsMCAyNCAwIDExMiAwIDI0LTQ4IDAgMC0yNCAwLTExMiAwLTI0IDQ4IDB6TTIzMiAzNjhsMC00OCA0OCAwIDAgNDgtNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiamondExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0L0 256 256 512 512 256 256 0zm24 128l0 24 0 112 0 24-48 0 0-24 0-112 0-24 48 0zM232 368l0-48 48 0 0 48-48 0z" />
    </Icon>
);

export default DiamondExclamation;