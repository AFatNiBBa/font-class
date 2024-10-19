
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ellipsis` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ellipsis?s=thin circle-ellipsis}
 * @preview ![circle-ellipsis](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQ5NmEyNDAgMjQwIDAgMSAwIDAtNDgwIDI0MCAyNDAgMCAxIDAgMCA0ODB6TTI1NiAwYTI1NiAyNTYgMCAxIDEgMCA1MTJBMjU2IDI1NiAwIDEgMSAyNTYgMHptMTYgMjU2YTE2IDE2IDAgMSAxIC0zMiAwIDE2IDE2IDAgMSAxIDMyIDB6bTgwLTE2YTE2IDE2IDAgMSAxIDAgMzIgMTYgMTYgMCAxIDEgMC0zMnpNMTc2IDI1NmExNiAxNiAwIDEgMSAtMzIgMCAxNiAxNiAwIDEgMSAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleEllipsis: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm16 256a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM176 256a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
    </Icon>
);

export default CircleEllipsis;