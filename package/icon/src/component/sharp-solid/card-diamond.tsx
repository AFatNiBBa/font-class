
import { Icon } from "../../index";

/**
 * A component that renders the `card-diamond` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-diamond?s=sharp-solid card-diamond}
 * @preview ![card-diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzg0IDBMMCAwIDAgNTEybDM4NCAwTDM4NCAwek04MCAyNTZMMTkyIDE0NCAzMDQgMjU2IDE5MiAzNjggODAgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CardDiamond: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 0L0 0 0 512l384 0L384 0zM80 256L192 144 304 256 192 368 80 256z" />
    </Icon>
);

export default CardDiamond;