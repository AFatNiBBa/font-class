
import { Icon, generic } from "../../index";

/**
 * A component that renders the `greater-than-equal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than-equal?s=sharp-duotone-solid greater-than-equal}
 * @preview ![greater-than-equal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzMi45bDIuNyAxIDM2MCAxMjggMjEuMyA3LjYgMCA0NS4yLTIxLjMgNy42LTM2MCAxMjgtMi43IDEgMC02Ny45TDI4OC41IDE5MiAzMiAxMDAuOGwwLTY3Ljl6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggNDE2bC0zMiAwTDMyIDQxNiAwIDQxNmwwIDY0IDMyIDAgMzg0IDAgMzIgMCAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const GreaterThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 32.9l2.7 1 360 128 21.3 7.6 0 45.2-21.3 7.6-360 128-2.7 1 0-67.9L288.5 192 32 100.8l0-67.9z" />
            <path d="M448 416l-32 0L32 416 0 416l0 64 32 0 384 0 32 0 0-64z" />
    </Icon>
);

export default GreaterThanEqual;