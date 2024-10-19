
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hourglass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass?s=duotone hourglass}
 * @preview ![hourglass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA2NGwwIDExYzAgNDIuNCAxNi45IDgzLjEgNDYuOSAxMTMuMUwxNDYuNyAyNTYgNzguOSAzMjMuOUM0OC45IDM1My45IDMyIDM5NC42IDMyIDQzN2wwIDExIDMyIDAgMzIgMCAxOTIgMCAzMiAwIDMyIDAgMC0xMWMwLTQyLjQtMTYuOS04My4xLTQ2LjktMTEzLjFMMjM3LjMgMjU2bDY3LjktNjcuOWMzMC0zMCA0Ni45LTcwLjcgNDYuOS0xMTMuMWwwLTExLTMyIDBMNjQgNjQgMzIgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAwQzE0LjMgMCAwIDE0LjMgMCAzMlMxNC4zIDY0IDMyIDY0bDMyMCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyTDMyIDB6bTAgNDQ4Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnMxNC4zIDMyIDMyIDMybDMyMCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyTDMyIDQ0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Hourglass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 64l0 11c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437l0 11 32 0 32 0 192 0 32 0 32 0 0-11c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1l0-11-32 0L64 64 32 64z" />
            <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 0zm0 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" />
    </Icon>
);

export default Hourglass;