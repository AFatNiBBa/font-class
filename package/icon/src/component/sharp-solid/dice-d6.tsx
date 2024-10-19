
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d6` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d6?s=sharp-solid dice-d6}
 * @preview ![dice-d6](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDMyIDExMkwyMjQgMjQwIDE2IDExMiAyMjQgMCA0MzIgMTEyek0yMDggMjcybDAgMjQwTDAgMzg0IDAgMTQ0IDIwOCAyNzJ6TTQ0OCAxNDRsMCAyNDBMMjQwIDUxMmwwLTI0MEw0NDggMTQ0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DiceD6: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 112L224 240 16 112 224 0 432 112zM208 272l0 240L0 384 0 144 208 272zM448 144l0 240L240 512l0-240L448 144z" />
    </Icon>
);

export default DiceD6;