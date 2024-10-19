
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-king` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king?s=duotone chess-king}
 * @preview ![chess-king](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0ODkuNEMzMiA1MDEuOSA0Mi4xIDUxMiA1NC42IDUxMmwzMzguNyAwYzEyLjUgMCAyMi42LTEwLjEgMjIuNi0yMi42YzAtNi0yLjQtMTEuOC02LjYtMTZMMzY4IDQzMiA4MCA0MzIgMzguNiA0NzMuNGMtNC4yIDQuMi02LjYgMTAtNi42IDE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDMyYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMybDAgMTYtMTYgMGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJzMTQuMyAzMiAzMiAzMmwxNiAwIDAgNDhMNDAuOSAxNjBDMTguMyAxNjAgMCAxNzguMyAwIDIwMC45YzAgNC43IC44IDkuMyAyLjQgMTMuOEw4MCA0MzJsMjg4IDAgNzcuNi0yMTcuM2MxLjYtNC40IDIuNC05LjEgMi40LTEzLjhjMC0yMi42LTE4LjMtNDAuOS00MC45LTQwLjlMMjU2IDE2MGwwLTQ4IDE2IDBjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJsLTE2IDAgMC0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ChessKing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 489.4C32 501.9 42.1 512 54.6 512l338.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L368 432 80 432 38.6 473.4c-4.2 4.2-6.6 10-6.6 16z" />
            <path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 16-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0 0 48L40.9 160C18.3 160 0 178.3 0 200.9c0 4.7 .8 9.3 2.4 13.8L80 432l288 0 77.6-217.3c1.6-4.4 2.4-9.1 2.4-13.8c0-22.6-18.3-40.9-40.9-40.9L256 160l0-48 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-16 0 0-16z" />
    </Icon>
);

export default ChessKing;