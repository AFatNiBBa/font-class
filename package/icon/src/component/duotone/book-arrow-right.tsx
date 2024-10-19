
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-arrow-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-arrow-right?s=duotone book-arrow-right}
 * @preview ![book-arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA0MTZjMCAxNy43IDE0LjMgMzIgMzIgMzJsMTYwIDAgOTYgMCA2NCAwIDAtNjQtNjQgMC05NiAwTDk2IDM4NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ6TTIyNCAyMDhjMCAxMy4zIDEwLjcgMjQgMjQgMjRsMjAwIDAgMTEwLjEgMC0zOSAzOWMtOS40IDkuNC05LjQgMjQuNiAwIDMzLjlzMjQuNiA5LjQgMzMuOSAwbDgwLTgwYzQuNy00LjcgNy0xMC44IDctMTdzLTIuMy0xMi4zLTctMTdsLTgwLTgwYy00LjctNC43LTEwLjgtNy0xNy03cy0xMi4zIDIuMy0xNyA3Yy05LjQgOS40LTkuNCAyNC42IDAgMzMuOWwzOSAzOUw0NDggMTg0bC0yMDAgMGMtMTMuMyAwLTI0IDEwLjctMjQgMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAwQzQzIDAgMCA0MyAwIDk2TDAgNDE2YzAgNTMgNDMgOTYgOTYgOTZsMjg4IDAgMzIgMGMxNy43IDAgMzItMTQuMyAzMi0zMnMtMTQuMy0zMi0zMi0zMmwtNjQgMC05NiAwTDk2IDQ0OGMtMTcuNyAwLTMyLTE0LjMtMzItMzJzMTQuMy0zMiAzMi0zMmwxNjAgMCA5NiAwIDY0IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC0xMjAtMjAwIDBjLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjRsMjAwIDAgMC0xNTJjMC0xNy43LTE0LjMtMzItMzItMzJMMzg0IDAgOTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BookArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 416c0 17.7 14.3 32 32 32l160 0 96 0 64 0 0-64-64 0-96 0L96 384c-17.7 0-32 14.3-32 32zM224 208c0 13.3 10.7 24 24 24l200 0 110.1 0-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c4.7-4.7 7-10.8 7-17s-2.3-12.3-7-17l-80-80c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7c-9.4 9.4-9.4 24.6 0 33.9l39 39L448 184l-200 0c-13.3 0-24 10.7-24 24z" />
            <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-96 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 96 0 64 0c17.7 0 32-14.3 32-32l0-120-200 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l200 0 0-152c0-17.7-14.3-32-32-32L384 0 96 0z" />
    </Icon>
);

export default BookArrowRight;