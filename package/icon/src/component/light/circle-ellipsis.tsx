
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ellipsis` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis?s=light circle-ellipsis}
 * @preview ![circle-ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQ4MGEyMjQgMjI0IDAgMSAwIDAtNDQ4IDIyNCAyMjQgMCAxIDAgMCA0NDh6TTI1NiAwYTI1NiAyNTYgMCAxIDEgMCA1MTJBMjU2IDI1NiAwIDEgMSAyNTYgMHptMjQgMjU2YTI0IDI0IDAgMSAxIC00OCAwIDI0IDI0IDAgMSAxIDQ4IDB6bTcyLTI0YTI0IDI0IDAgMSAxIDAgNDggMjQgMjQgMCAxIDEgMC00OHpNMTg0IDI1NmEyNCAyNCAwIDEgMSAtNDggMCAyNCAyNCAwIDEgMSA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleEllipsis: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm24 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm72-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM184 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
    </Icon>
);

export default CircleEllipsis;