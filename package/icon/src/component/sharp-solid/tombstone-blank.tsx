
import { Icon } from "../../index";

/**
 * A component that renders the `tombstone-blank` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tombstone-blank?s=sharp-solid tombstone-blank}
 * @preview ![tombstone-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDBDMTE4IDAgMzIgODYgMzIgMTkybDAgMjI0IDM4NCAwIDAtMjI0QzQxNiA4NiAzMzAgMCAyMjQgMHpNMzIgNDQ4TDAgNDQ4bDAgNjQgMzIgMCAzODQgMCAzMiAwIDAtNjQtMzIgMEwzMiA0NDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const TombstoneBlank: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0C118 0 32 86 32 192l0 224 384 0 0-224C416 86 330 0 224 0zM32 448L0 448l0 64 32 0 384 0 32 0 0-64-32 0L32 448z" />
    </Icon>
);

export default TombstoneBlank;