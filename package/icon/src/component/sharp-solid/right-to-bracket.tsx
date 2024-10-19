
import { Icon } from "../../index";

/**
 * A component that renders the `right-to-bracket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-bracket?s=sharp-solid right-to-bracket}
 * @preview ![right-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDk2TDM1MiAyNTYgMTkyIDQxNmwtMzIgMCAwLTk2TDAgMzIwIDAgMTkybDE2MCAwIDAtOTYgMzIgMHpNMzUyIDQxNmw5NiAwIDAtMzIwLTk2IDAtMzIgMCAwLTY0IDMyIDAgMTI4IDAgMzIgMCAwIDMyIDAgMzg0IDAgMzItMzIgMC0xMjggMC0zMiAwIDAtNjQgMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const RightToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 96L352 256 192 416l-32 0 0-96L0 320 0 192l160 0 0-96 32 0zM352 416l96 0 0-320-96 0-32 0 0-64 32 0 128 0 32 0 0 32 0 384 0 32-32 0-128 0-32 0 0-64 32 0z" />
    </Icon>
);

export default RightToBracket;