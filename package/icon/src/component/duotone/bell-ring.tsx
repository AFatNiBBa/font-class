
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-ring` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-ring?s=duotone bell-ring}
 * @preview ![bell-ring](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAzODRjMCA0LjQgLjkgOC45IDIuOCAxMy4xQzQwIDQwOC42IDUxLjQgNDE2IDY0IDQxNmwzODQgMGMxMi42IDAgMjQtNy40IDI5LjItMTguOWMxLjktNC4yIDIuOC04LjcgMi44LTEzLjFjMC03LjctMi44LTE1LjMtOC4xLTIxLjNsLTcuNC04LjNDNDMzLjMgMzE5LjIgNDE2IDI3My45IDQxNiAyMjYuOGwwLTE4LjhjMC03Ny40LTU1LTE0Mi0xMjgtMTU2LjhMMjg4IDMyYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMybDAgMTkuMkMxNTEgNjYgOTYgMTMwLjYgOTYgMjA4bDAgMTguOGMwIDQ3LTE3LjMgOTIuNC00OC41IDEyNy42bC03LjQgOC4zYy01LjMgNi04LjEgMTMuNi04LjEgMjEuM3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTExMy40IDE1LjRjOS4xIDkuNiA4LjggMjQuOC0uOCAzMy45QzcyLjggODcuMyA0OCAxNDAuNyA0OCAyMDBjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRDMCAxMjcuMSAzMC41IDYxLjIgNzkuNCAxNC42YzkuNi05LjEgMjQuOC04LjggMzMuOSAuOHpNMzIwIDQ0OGMwIDE3LTYuNyAzMy4zLTE4LjcgNDUuM3MtMjguMyAxOC43LTQ1LjMgMTguN3MtMzMuMy02LjctNDUuMy0xOC43cy0xOC43LTI4LjMtMTguNy00NS4zbDY0IDAgNjQgMHpNMzk5LjQgNDkuNGMtOS42LTkuMS0xMC0yNC4zLS44LTMzLjlzMjQuMy0xMCAzMy45LS44QzQ4MS41IDYxLjIgNTEyIDEyNy4xIDUxMiAyMDBjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRjMC01OS4zLTI0LjgtMTEyLjctNjQuNi0xNTAuNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BellRing: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 384c0 4.4 .9 8.9 2.8 13.1C40 408.6 51.4 416 64 416l384 0c12.6 0 24-7.4 29.2-18.9c1.9-4.2 2.8-8.7 2.8-13.1c0-7.7-2.8-15.3-8.1-21.3l-7.4-8.3C433.3 319.2 416 273.9 416 226.8l0-18.8c0-77.4-55-142-128-156.8L288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 19.2C151 66 96 130.6 96 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-5.3 6-8.1 13.6-8.1 21.3z" />
            <path d="M113.4 15.4c9.1 9.6 8.8 24.8-.8 33.9C72.8 87.3 48 140.7 48 200c0 13.3-10.7 24-24 24s-24-10.7-24-24C0 127.1 30.5 61.2 79.4 14.6c9.6-9.1 24.8-8.8 33.9 .8zM320 448c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3l64 0 64 0zM399.4 49.4c-9.6-9.1-10-24.3-.8-33.9s24.3-10 33.9-.8C481.5 61.2 512 127.1 512 200c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-59.3-24.8-112.7-64.6-150.6z" />
    </Icon>
);

export default BellRing;