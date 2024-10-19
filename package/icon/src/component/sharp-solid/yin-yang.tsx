
import { Icon } from "../../index";

/**
 * A component that renders the `yin-yang` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yin-yang?s=sharp-solid yin-yang}
 * @preview ![yin-yang](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDY0YzUzIDAgOTYgNDMgOTYgOTZzLTQzIDk2LTk2IDk2cy05NiA0My05NiA5NnM0MyA5NiA5NiA5NkMxNTAgNDQ4IDY0IDM2MiA2NCAyNTZTMTUwIDY0IDI1NiA2NHptMCA0NDhBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyek0yMTYgMTYwbDQwIDQwIDQwLTQwLTQwLTQwLTQwIDQwem0wIDE5Mmw0MC00MCA0MCA0MC00MCA0MC00MC00MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const YinYang: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 64c53 0 96 43 96 96s-43 96-96 96s-96 43-96 96s43 96 96 96C150 448 64 362 64 256S150 64 256 64zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 160l40 40 40-40-40-40-40 40zm0 192l40-40 40 40-40 40-40-40z" />
    </Icon>
);

export default YinYang;