
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-heart?s=sharp-duotone-solid book-heart}
 * @preview ![book-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA0MTZjMC0xNy43IDE0LjMtMzIgMzItMzJsMTYwIDAgOTYgMCA2NCAwIDAgNjQtNjQgMC05NiAwTDk2IDQ0OGMtMTcuNyAwLTMyLTE0LjMtMzItMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik05NiAwQzQzIDAgMCA0MyAwIDk2TDAgNDE2YzAgNTMgNDMgOTYgOTYgOTZsMjg4IDAgMzIgMCAzMiAwIDAtNjQtMzIgMC02NCAwLTk2IDBMOTYgNDQ4Yy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMybDE2MCAwIDk2IDAgNjQgMCAzMiAwTDQ0OCAwIDQxNiAwIDM4NCAwIDk2IDB6bTMyIDE1NS4yYzAtMzIuNyAyNi41LTU5LjIgNTkuMi01OS4ybDIuNCAwYzE1LjkgMCAzMS4yIDYuMiA0Mi43IDE3LjJsNy43IDcuNCA3LjctNy40YzExLjUtMTEgMjYuOC0xNy4yIDQyLjctMTcuMmwyLjQgMGMzMi43IDAgNTkuMiAyNi41IDU5LjIgNTkuMmMwIDE2LjEtNi42IDMxLjUtMTguMiA0Mi43bC04Mi44IDc5LjZMMjQwIDI4OC4xbC0xMS4xLTEwLjctODIuOC03OS42Yy0xMS42LTExLjItMTguMi0yNi42LTE4LjItNDIuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const BookHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 416c0-17.7 14.3-32 32-32l160 0 96 0 64 0 0 64-64 0-96 0L96 448c-17.7 0-32-14.3-32-32z" />
            <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0 32 0 0-64-32 0-64 0-96 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 96 0 64 0 32 0L448 0 416 0 384 0 96 0zm32 155.2c0-32.7 26.5-59.2 59.2-59.2l2.4 0c15.9 0 31.2 6.2 42.7 17.2l7.7 7.4 7.7-7.4c11.5-11 26.8-17.2 42.7-17.2l2.4 0c32.7 0 59.2 26.5 59.2 59.2c0 16.1-6.6 31.5-18.2 42.7l-82.8 79.6L240 288.1l-11.1-10.7-82.8-79.6c-11.6-11.2-18.2-26.6-18.2-42.7z" />
    </Icon>
);

export default BookHeart;