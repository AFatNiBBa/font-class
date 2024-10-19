
import { Icon } from "../../index";

/**
 * A component that renders the `phone-rotary` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-rotary?s=sharp-solid phone-rotary}
 * @preview ![phone-rotary](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAxMjhzOTYtOTYgMjU2LTk2czI1NiA5NiAyNTYgOTZsMCA4MC05NiAwLTMyLTgwcy00OC0yNC0xMjgtMjRzLTEyOCAyNC0xMjggMjRMOTYgMjA4IDAgMjA4bDAtODB6TTMyIDQ4MGwwLTk2TDE2MCAxNjBsMTkyIDBMNDgwIDM4NGwwIDk2TDMyIDQ4MHpNMzI4IDMxMmE3MiA3MiAwIDEgMCAtMTQ0IDAgNzIgNzIgMCAxIDAgMTQ0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const PhoneRotary: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 128s96-96 256-96s256 96 256 96l0 80-96 0-32-80s-48-24-128-24s-128 24-128 24L96 208 0 208l0-80zM32 480l0-96L160 160l192 0L480 384l0 96L32 480zM328 312a72 72 0 1 0 -144 0 72 72 0 1 0 144 0z" />
    </Icon>
);

export default PhoneRotary;