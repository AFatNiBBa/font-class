
import { Icon } from "../../index";

/**
 * A component that renders the `compass` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass?s=sharp-light compass}
 * @preview ![compass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDMyYTIyNCAyMjQgMCAxIDEgMCA0NDggMjI0IDIyNCAwIDEgMSAwLTQ0OHptMCA0ODBBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyem0zOC43LTIxNy4zTDE3OC42IDMzMy40bDM4LjctMTE2LjEgMTE2LjEtMzguN0wyOTQuNyAyOTQuN3ptNTEuMy0xNTQuMUwxOTIgMTkyIDE0MC42IDM0Ni4xIDEyOCAzODRsMzcuOS0xMi42TDMyMCAzMjBsNTEuNC0xNTQuMUwzODQgMTI4bC0zNy45IDEyLjZ6TTI1NiAyODBhMjQgMjQgMCAxIDAgMC00OCAyNCAyNCAwIDEgMCAwIDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Compass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm38.7-217.3L178.6 333.4l38.7-116.1 116.1-38.7L294.7 294.7zm51.3-154.1L192 192 140.6 346.1 128 384l37.9-12.6L320 320l51.4-154.1L384 128l-37.9 12.6zM256 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Compass;