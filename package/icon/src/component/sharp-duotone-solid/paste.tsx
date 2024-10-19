
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paste` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paste?s=sharp-duotone-solid paste}
 * @preview ![paste](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMTI4bDE5MiAwIDk2IDk2IDAgMjg4LTI4OCAwIDAtMzg0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDBjLTIzLjcgMC00NC40IDEyLjktNTUuNCAzMkwwIDMyIDAgNDQ4bDE5MiAwIDAtMzIwIDAtMzIgMzIgMCA5NiAwIDAtNjRMMjE1LjQgMzJDMjA0LjQgMTIuOSAxODMuNyAwIDE2MCAwem0wIDQwYTI0IDI0IDAgMSAxIDAgNDggMjQgMjQgMCAxIDEgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Paste: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 128l192 0 96 96 0 288-288 0 0-384z" />
            <path d="M160 0c-23.7 0-44.4 12.9-55.4 32L0 32 0 448l192 0 0-320 0-32 32 0 96 0 0-64L215.4 32C204.4 12.9 183.7 0 160 0zm0 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Paste;