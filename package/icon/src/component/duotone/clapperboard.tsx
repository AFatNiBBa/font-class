
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clapperboard` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clapperboard?s=duotone clapperboard}
 * @preview ![clapperboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGw2LjEgMCA2Ny45IDAgOTIuMSAwIDY3LjkgMCA5Mi4xIDAgNjcuOSAwTDUxMiAxNjBsMCAyNTZjMCAzNS4zLTI4LjcgNjQtNjQgNjRMNjQgNDgwYy0zNS4zIDAtNjQtMjguNy02NC02NEwwIDE2MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ1My44IDMyLjNMMzI3IDE1OWwtMSAxLTkyLjEgMEwzNjEgMzNsMS0xTDQ0OCAzMmMyIDAgMy45IC4xIDUuOCAuM3pNMzkzLjkgMTYwTDQ5OCA1NmM4LjggMTEgMTQgMjQuOSAxNCA0MGwwIDY0LTExOC4xIDB6TTIwMS45IDMybDkyLjEgMEwxNjcgMTU5bC0xIDEtOTIuMSAwTDIwMSAzM2wxLTF6bS02Ny45IDBMNyAxNTlsLTEgMUwwIDE2MCAwIDk2QzAgNjAuNyAyOC43IDMyIDY0IDMybDcwLjEgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Clapperboard: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160l6.1 0 67.9 0 92.1 0 67.9 0 92.1 0 67.9 0L512 160l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 160z" />
            <path d="M453.8 32.3L327 159l-1 1-92.1 0L361 33l1-1L448 32c2 0 3.9 .1 5.8 .3zM393.9 160L498 56c8.8 11 14 24.9 14 40l0 64-118.1 0zM201.9 32l92.1 0L167 159l-1 1-92.1 0L201 33l1-1zm-67.9 0L7 159l-1 1L0 160 0 96C0 60.7 28.7 32 64 32l70.1 0z" />
    </Icon>
);

export default Clapperboard;