
import { Icon } from "../../index";

/**
 * A component that renders the `envelope` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope?s=sharp-thin envelope}
 * @preview ![envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMTY3LjZsMjQwIDE2NSAyNDAtMTY1TDQ5NiA4MCAxNiA4MGwwIDg3LjZ6TTQ5NiAxODdMMjU2IDM1MiAxNiAxODdsMCAyNDUgNDgwIDAgMC0yNDV6TTAgNDMyTDAgMTc2IDAgODAgMCA2NGwxNiAwIDQ4MCAwIDE2IDAgMCAxNiAwIDk2IDAgMjU2IDAgMTYtMTYgMEwxNiA0NDggMCA0NDhsMC0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Envelope: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 167.6l240 165 240-165L496 80 16 80l0 87.6zM496 187L256 352 16 187l0 245 480 0 0-245zM0 432L0 176 0 80 0 64l16 0 480 0 16 0 0 16 0 96 0 256 0 16-16 0L16 448 0 448l0-16z" />
    </Icon>
);

export default Envelope;