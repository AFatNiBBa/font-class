
import { Icon, generic } from "../../index";

/**
 * A component that renders the `synagogue` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/synagogue?s=sharp-duotone-solid synagogue}
 * @preview ![synagogue](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI3MkwwIDUxMmwxNjAgMCAwLTI0MEw4MCAxOTIgMCAyNzJ6bTQ4MCAwbDAgMjQwIDE2MCAwIDAtMjQwLTgwLTgwLTgwIDgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDEyOEwzMjAgMCA0ODAgMTI4bDAgMzg0LTEyOCAwIDAtOTZjMC0xNy43LTE0LjMtMzItMzItMzJzLTMyIDE0LjMtMzIgMzJsMCA5Ni0xMjggMCAwLTM4NHptMTYwLTkuOWwtMjEuMyAzNi45LTQyLjcgMEwyNzcuNCAxOTIgMjU2IDIyOC45bDQyLjcgMEwzMjAgMjY1LjlsMjEuMy0zNi45IDQyLjYgMEwzNjIuNyAxOTIgMzg0IDE1NS4xbC00Mi42IDBMMzIwIDExOC4xeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Synagogue: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 272L0 512l160 0 0-240L80 192 0 272zm480 0l0 240 160 0 0-240-80-80-80 80z" />
            <path d="M160 128L320 0 480 128l0 384-128 0 0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96-128 0 0-384zm160-9.9l-21.3 36.9-42.7 0L277.4 192 256 228.9l42.7 0L320 265.9l21.3-36.9 42.6 0L362.7 192 384 155.1l-42.6 0L320 118.1z" />
    </Icon>
);

export default Synagogue;