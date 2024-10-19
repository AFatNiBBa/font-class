
import { Icon } from "../../index";

/**
 * A component that renders the `map` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map?s=sharp-solid map}
 * @preview ![map](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA5NkwwIDQ4MGwxNjAtNjQgMC0zODRMMCA5NnptNDE2IDBsMCAzODQgMTYwLTY0IDAtMzg0TDQxNiA5NnpNMzg0IDQ4MGwwLTM4NEwxOTIgMzJsMCAzODQgMTkyIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Map: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 96L0 480l160-64 0-384L0 96zm416 0l0 384 160-64 0-384L416 96zM384 480l0-384L192 32l0 384 192 64z" />
    </Icon>
);

export default Map;