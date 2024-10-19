
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ellipsis` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis?s=sharp-regular circle-ellipsis}
 * @preview ![circle-ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQ2NGEyMDggMjA4IDAgMSAwIDAtNDE2IDIwOCAyMDggMCAxIDAgMCA0MTZ6TTI1NiAwYTI1NiAyNTYgMCAxIDEgMCA1MTJBMjU2IDI1NiAwIDEgMSAyNTYgMHpNMTkyIDIyNGwwIDY0LTY0IDAgMC02NCA2NCAwem0xOTIgMGwwIDY0LTY0IDAgMC02NCA2NCAwem0tMTYwIDBsNjQgMCAwIDY0LTY0IDAgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleEllipsis: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 0 0-416 208 208 0 1 0 0 416zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM192 224l0 64-64 0 0-64 64 0zm192 0l0 64-64 0 0-64 64 0zm-160 0l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default CircleEllipsis;