
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-bookmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-bookmark?s=duotone book-bookmark}
 * @preview ![book-bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA0MTZjMC0xNy43IDE0LjMtMzIgMzItMzJsMTYwIDAgOTYgMCA2NCAwIDAgNjQtNjQgMC05NiAwTDk2IDQ0OGMtMTcuNyAwLTMyLTE0LjMtMzItMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAwQzQzIDAgMCA0MyAwIDk2TDAgNDE2YzAgNTMgNDMgOTYgOTYgOTZsMjg4IDAgMzIgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwtNjQgMC05NiAwTDk2IDQ0OGMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmwxNjAgMCA5NiAwIDY0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0zMjBjMC0xNy43LTE0LjMtMzItMzItMzJMMzg0IDAgMzUyIDBsMCAxOTAuN2MwIDEzLjQtMTUuNSAyMC45LTI2IDEyLjVMMjcyIDE2MGwtNTQgNDMuMmMtMTAuNSA4LjQtMjYgLjktMjYtMTIuNUwxOTIgMCA5NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BookBookmark: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 416c0-17.7 14.3-32 32-32l160 0 96 0 64 0 0 64-64 0-96 0L96 448c-17.7 0-32-14.3-32-32z" />
            <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-96 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 96 0 64 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 352 0l0 190.7c0 13.4-15.5 20.9-26 12.5L272 160l-54 43.2c-10.5 8.4-26 .9-26-12.5L192 0 96 0z" />
    </Icon>
);

export default BookBookmark;