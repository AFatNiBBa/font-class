
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop?s=duotone laptop}
 * @preview ![laptop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQwMy4yQzAgNDQ1LjYgMzQuNCA0ODAgNzYuOCA0ODBsNDg2LjQgMGM0Mi40IDAgNzYuOC0zNC40IDc2LjgtNzYuOGMwLTEwLjYtOC42LTE5LjItMTkuMi0xOS4yTDE5LjIgMzg0QzguNiAzODQgMCAzOTIuNiAwIDQwMy4yek02NCA5NmwwIDI1NiA2NCAwIDAtMjU2IDM4NCAwIDAgMjU2IDY0IDAgMC0yNTZjMC0zNS4zLTI4LjctNjQtNjQtNjRMMTI4IDMyQzkyLjcgMzIgNjQgNjAuNyA2NCA5NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCA5Nkg1MTJWMzUySDEyOFY5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Laptop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384C8.6 384 0 392.6 0 403.2zM64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32C92.7 32 64 60.7 64 96z" />
            <path d="M128 96H512V352H128V96z" />
    </Icon>
);

export default Laptop;