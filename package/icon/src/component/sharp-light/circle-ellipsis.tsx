
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ellipsis` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis?s=sharp-light circle-ellipsis}
 * @preview ![circle-ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQ4MGEyMjQgMjI0IDAgMSAwIDAtNDQ4IDIyNCAyMjQgMCAxIDAgMCA0NDh6TTI1NiAwYTI1NiAyNTYgMCAxIDEgMCA1MTJBMjU2IDI1NiAwIDEgMSAyNTYgMHpNMTg0IDIzMmwwIDQ4LTQ4IDAgMC00OCA0OCAwem0xOTIgMGwwIDQ4LTQ4IDAgMC00OCA0OCAwem0tMTQ0IDBsNDggMCAwIDQ4LTQ4IDAgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleEllipsis: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM184 232l0 48-48 0 0-48 48 0zm192 0l0 48-48 0 0-48 48 0zm-144 0l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default CircleEllipsis;