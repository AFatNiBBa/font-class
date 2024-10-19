
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-open-reader` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-reader?s=sharp-duotone-solid book-open-reader}
 * @preview ![book-open-reader](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgOTZhOTYgOTYgMCAxIDAgMTkyIDBBOTYgOTYgMCAxIDAgMTYwIDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjQwIDUxMmwwLTI2NC0yMS4zLTEyLjRDMTY5LjggMjA3IDExNC4xIDE5MiA1Ny41IDE5MkwwIDE5MiAwIDQ1NmwxMTYuNyAxM2MxOC4xIDIgMzUuOCA2LjYgNTIuNiAxMy42TDI0MCA1MTJ6bTMyIDBsNDguNC0yNC4yYzIwLjktMTAuNCA0My41LTE3IDY2LjgtMTkuM0w1MTIgNDU2bDAtMjY0LTYyLjMgMGMtNjMuNiAwLTEyNS42IDE5LjYtMTc3LjcgNTZsMCAyNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const BookOpenReader: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 96a96 96 0 1 0 192 0A96 96 0 1 0 160 96z" />
            <path d="M240 512l0-264-21.3-12.4C169.8 207 114.1 192 57.5 192L0 192 0 456l116.7 13c18.1 2 35.8 6.6 52.6 13.6L240 512zm32 0l48.4-24.2c20.9-10.4 43.5-17 66.8-19.3L512 456l0-264-62.3 0c-63.6 0-125.6 19.6-177.7 56l0 264z" />
    </Icon>
);

export default BookOpenReader;