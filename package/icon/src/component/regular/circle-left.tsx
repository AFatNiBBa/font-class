
import { Icon } from "../../index";

/**
 * A component that renders the `circle-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-left?s=regular circle-left}
 * @preview ![circle-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDggMjU2YTIwOCAyMDggMCAxIDEgNDE2IDBBMjA4IDIwOCAwIDEgMSA0OCAyNTZ6bTQ2NCAwQTI1NiAyNTYgMCAxIDAgMCAyNTZhMjU2IDI1NiAwIDEgMCA1MTIgMHpNMjU2IDEyOGwtMzIgMEw5NiAyNTYgMjI0IDM4NGwzMiAwIDAtODAgMTI4IDAgMC05Ni0xMjggMCAwLTgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM256 128l-32 0L96 256 224 384l32 0 0-80 128 0 0-96-128 0 0-80z" />
    </Icon>
);

export default CircleLeft;