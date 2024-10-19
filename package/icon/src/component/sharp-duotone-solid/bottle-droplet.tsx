
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bottle-droplet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bottle-droplet?s=sharp-duotone-solid bottle-droplet}
 * @preview ![bottle-droplet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyNTZsMCAyNTYgMjU2IDAgMC0yNTZjMC01MC42LTI5LjQtOTQuNC03Mi0xMTUuMUwyMTYgNDhjLTM3LjMgMC03NC43IDAtMTEyIDBsMCA5Mi45QzYxLjQgMTYxLjYgMzIgMjA1LjQgMzIgMjU2em04MCA4MGMwLTMyIDQ4LTgwIDQ4LTgwczQ4IDQ4IDQ4IDgwcy0yMS41IDQ4LTQ4IDQ4cy00OC0yMS41LTQ4LTQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMEw3MiAwbDAgNDggMjQgMCAxMjggMCAyNCAwIDAtNDhMMjI0IDAgOTYgMHptNjQgMzg0YzI2LjUgMCA0OC0xNiA0OC00OHMtNDgtODAtNDgtODBzLTQ4IDQ4LTQ4IDgwYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BottleDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M32 256l0 256 256 0 0-256c0-50.6-29.4-94.4-72-115.1L216 48c-37.3 0-74.7 0-112 0l0 92.9C61.4 161.6 32 205.4 32 256zm80 80c0-32 48-80 48-80s48 48 48 80s-21.5 48-48 48s-48-21.5-48-48z" />
            <path d="M96 0L72 0l0 48 24 0 128 0 24 0 0-48L224 0 96 0zm64 384c26.5 0 48-16 48-48s-48-80-48-80s-48 48-48 80c0 26.5 21.5 48 48 48z" />
    </Icon>
);

export default BottleDroplet;