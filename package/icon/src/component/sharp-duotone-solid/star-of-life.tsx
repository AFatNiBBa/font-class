
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-of-life` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-of-life?s=sharp-duotone-solid star-of-life}
 * @preview ![star-of-life](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMDggMGw5NiAwIDAgMTcyLjlMNDUzLjcgODYuNGw0OCA4My4xTDM1MiAyNTZsMTQ5LjcgODYuNC00OCA4My4xTDMwNCAzMzkuMSAzMDQgNTEybC05NiAwIDAtMTcyLjlMNTguMyA0MjUuNmwtNDgtODMuMUwxNjAgMjU2IDEwLjMgMTY5LjZsNDgtODMuMUwyMDggMTcyLjkgMjA4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const StarOfLife: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M208 0l96 0 0 172.9L453.7 86.4l48 83.1L352 256l149.7 86.4-48 83.1L304 339.1 304 512l-96 0 0-172.9L58.3 425.6l-48-83.1L160 256 10.3 169.6l48-83.1L208 172.9 208 0z" />
    </Icon>
);

export default StarOfLife;