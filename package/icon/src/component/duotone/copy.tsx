
import { Icon, generic } from "../../index";

/**
 * A component that renders the `copy` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/copy?s=duotone copy}
 * @preview ![copy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE3NkwwIDQ2NGMwIDI2LjUgMjEuNSA0OCA0OCA0OGwyMjQgMGMyNi41IDAgNDgtMjEuNSA0OC00OGwwLTQ4LTY0IDAgMCAzMkw2NCA0NDhsMC0yNTYgNjQgMCAwLTY0LTgwIDBjLTI2LjUgMC00OCAyMS41LTQ4IDQ4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDQ4YzAtMjYuNSAyMS41LTQ4IDQ4LTQ4SDMzMi4xYzEyLjcgMCAyNC45IDUuMSAzMy45IDE0LjFsNjcuOSA2Ny45YzkgOSAxNC4xIDIxLjIgMTQuMSAzMy45VjMzNmMwIDI2LjUtMjEuNSA0OC00OCA0OEgyMDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Copy: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 176L0 464c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-48-64 0 0 32L64 448l0-256 64 0 0-64-80 0c-26.5 0-48 21.5-48 48z" />
            <path d="M160 48c0-26.5 21.5-48 48-48H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48z" />
    </Icon>
);

export default Copy;