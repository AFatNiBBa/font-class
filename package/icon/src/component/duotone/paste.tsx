
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paste` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paste?s=duotone paste}
 * @preview ![paste](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMTc2YzAtMjYuNSAyMS41LTQ4IDQ4LTQ4bDEyNC4xIDBjMTIuNyAwIDI0LjkgNS4xIDMzLjkgMTQuMWw2Ny45IDY3LjljOSA5IDE0LjEgMjEuMiAxNC4xIDMzLjlMNTEyIDQ2NGMwIDI2LjUtMjEuNSA0OC00OCA0OGwtMTkyIDBjLTI2LjUgMC00OC0yMS41LTQ4LTQ4bDAtMjg4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDBjLTIzLjcgMC00NC40IDEyLjktNTUuNCAzMkw0OCAzMkMyMS41IDMyIDAgNTMuNSAwIDgwTDAgNDAwYzAgMjYuNSAyMS41IDQ4IDQ4IDQ4bDE0NCAwIDAtMjcyYzAtNDQuMiAzNS44LTgwIDgwLTgwbDQ4IDAgMC0xNmMwLTI2LjUtMjEuNS00OC00OC00OGwtNTYuNiAwQzIwNC40IDEyLjkgMTgzLjcgMCAxNjAgMHptMCA0MGEyNCAyNCAwIDEgMSAwIDQ4IDI0IDI0IDAgMSAxIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Paste: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 176c0-26.5 21.5-48 48-48l124.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L512 464c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288z" />
            <path d="M160 0c-23.7 0-44.4 12.9-55.4 32L48 32C21.5 32 0 53.5 0 80L0 400c0 26.5 21.5 48 48 48l144 0 0-272c0-44.2 35.8-80 80-80l48 0 0-16c0-26.5-21.5-48-48-48l-56.6 0C204.4 12.9 183.7 0 160 0zm0 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Paste;