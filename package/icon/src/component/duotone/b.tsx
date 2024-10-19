
import { Icon, generic } from "../../index";

/**
 * A component that renders the `b` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/b?s=duotone b}
 * @preview ![b](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMkMyOC43IDMyIDAgNjAuNyAwIDk2TDAgMjU2IDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDEyOCAwYzcwLjcgMCAxMjgtNTcuMyAxMjgtMTI4YzAtNDYuNS0yNC44LTg3LjMtNjItMTA5LjdjMTguNy0yMi4zIDMwLTUxIDMwLTgyLjNjMC03MC43LTU3LjMtMTI4LTEyOC0xMjhMNjQgMzJ6bTk2IDE5MmwtOTYgMEw2NCA5Nmw5NiAwYzM1LjMgMCA2NCAyOC43IDY0IDY0cy0yOC43IDY0LTY0IDY0ek02NCAyODhsOTYgMCAzMiAwYzM1LjMgMCA2NCAyOC43IDY0IDY0cy0yOC43IDY0LTY0IDY0TDY0IDQxNmwwLTEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iIi8+PC9zdmc+|width=32|height=32)
 */
const B: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M64 32C28.7 32 0 60.7 0 96L0 256 0 416c0 35.3 28.7 64 64 64l128 0c70.7 0 128-57.3 128-128c0-46.5-24.8-87.3-62-109.7c18.7-22.3 30-51 30-82.3c0-70.7-57.3-128-128-128L64 32zm96 192l-96 0L64 96l96 0c35.3 0 64 28.7 64 64s-28.7 64-64 64zM64 288l96 0 32 0c35.3 0 64 28.7 64 64s-28.7 64-64 64L64 416l0-128z" />
    </Icon>
);

export default B;