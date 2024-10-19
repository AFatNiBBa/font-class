
import { Icon } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=sharp-thin flag-pennant}
 * @preview ![flag-pennant](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgOGwwLThMMCAwIDAgOCAwIDMyIDAgNDggMCAzMzZsMCAxNkwwIDUwNGwwIDggMTYgMCAwLTggMC0xNTJMNDI1IDIwMC41bDIzLTguNS0yMy04LjVMMTYgMzIgMTYgOHptMCA0MS4xTDQwMS45IDE5MiAxNiAzMzQuOSAxNiA0OS4xeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FlagPennant: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 8l0-8L0 0 0 8 0 32 0 48 0 336l0 16L0 504l0 8 16 0 0-8 0-152L425 200.5l23-8.5-23-8.5L16 32 16 8zm0 41.1L401.9 192 16 334.9 16 49.1z" />
    </Icon>
);

export default FlagPennant;