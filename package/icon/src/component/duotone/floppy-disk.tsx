
import { Icon, generic } from "../../index";

/**
 * A component that renders the `floppy-disk` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/floppy-disk?s=duotone floppy-disk}
 * @preview ![floppy-disk](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDMyMCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMjQyLjdjMC0xNy02LjctMzMuMy0xOC43LTQ1LjNMMzUyIDUwLjdDMzQwIDM4LjcgMzIzLjcgMzIgMzA2LjcgMzJMNjQgMzJDMjguNyAzMiAwIDYwLjcgMCA5NnptNjQgMzJjMC0xNy43IDE0LjMtMzIgMzItMzJsMTkyIDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJsMCA2NGMwIDE3LjctMTQuMyAzMi0zMiAzMkw5NiAyMjRjLTE3LjcgMC0zMi0xNC4zLTMyLTMybDAtNjR6TTI4OCAzNTJhNjQgNjQgMCAxIDEgLTEyOCAwIDY0IDY0IDAgMSAxIDEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI0IDI4OGE2NCA2NCAwIDEgMCAwIDEyOCA2NCA2NCAwIDEgMCAwLTEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FloppyDisk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32C28.7 32 0 60.7 0 96zm64 32c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM288 352a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M224 288a64 64 0 1 0 0 128 64 64 0 1 0 0-128z" />
    </Icon>
);

export default FloppyDisk;