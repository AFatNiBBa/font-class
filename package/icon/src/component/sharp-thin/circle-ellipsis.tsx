
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ellipsis` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis?s=sharp-thin circle-ellipsis}
 * @preview ![circle-ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQ5NmEyNDAgMjQwIDAgMSAwIDAtNDgwIDI0MCAyNDAgMCAxIDAgMCA0ODB6TTI1NiAwYTI1NiAyNTYgMCAxIDEgMCA1MTJBMjU2IDI1NiAwIDEgMSAyNTYgMHpNMTc2IDI0MGwwIDMyLTMyIDAgMC0zMiAzMiAwem0xOTIgMGwwIDMyLTMyIDAgMC0zMiAzMiAwem0tMTI4IDBsMzIgMCAwIDMyLTMyIDAgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleEllipsis: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM176 240l0 32-32 0 0-32 32 0zm192 0l0 32-32 0 0-32 32 0zm-128 0l32 0 0 32-32 0 0-32z" />
    </Icon>
);

export default CircleEllipsis;