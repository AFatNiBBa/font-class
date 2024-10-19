
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fish-cooked` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish-cooked?s=duotone fish-cooked}
 * @preview ![fish-cooked](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0uNSAxMzEuOUwzMC41IDI1Mi4xYy42IDIuNSAuNiA1LjIgMCA3LjhMLjUgMzgwLjFjLTEuNyA2LjcgMS4xIDEzLjcgNi45IDE3LjRzMTMuMyAzLjMgMTguNy0xLjFsNjUuMS01Mi45YzYuNy01LjUgMTYuNS00LjYgMjIuNSAxLjdDMTY0LjEgMzk4LjIgMjQ1LjIgNDQ4IDMyMCA0NDhjMTIwIDAgMjU2LTEyOCAyNTYtMTkycy0xMzYtMTkyLTI1Ni0xOTJjLTcyLjYgMC0xNTEuMSA0Ni45LTIwMS44IDk4LjFjLTUuNiA1LjctMTQuNSA2LjgtMjEuMSAyLjJsLTcyLTQ5LjVjLTUuNS0zLjgtMTIuNy0zLjgtMTguMiAwcy04IDEwLjYtNi40IDE3ek0yMjQgMjI0YzAtNC4xIDEuNi04LjIgNC43LTExLjNjMjEuMy0yMS4zIDQyLjctNDIuNyA2NC02NGMzLjEtMy4xIDcuMi00LjcgMTEuMy00LjdzOC4yIDEuNiAxMS4zIDQuN2M2LjIgNi4yIDYuMiAxNi40IDAgMjIuNmMtMjEuMyAyMS4zLTQyLjcgNDIuNy02NCA2NGMtNi4yIDYuMi0xNi40IDYuMi0yMi42IDBjLTMuMS0zLjEtNC43LTcuMi00LjctMTEuM3ptMjAuNyAxMDAuN2M1My4zLTUzLjMgMTA2LjctMTA2LjcgMTYwLTE2MGM2LjItNi4yIDE2LjQtNi4yIDIyLjYgMHM2LjIgMTYuNCAwIDIyLjZjLTUzLjMgNTMuMy0xMDYuNyAxMDYuNy0xNjAgMTYwYy02LjIgNi4yLTE2LjQgNi4yLTIyLjYgMHMtNi4yLTE2LjQgMC0yMi42em0xMTIgMTZjMjEuMy0yMS4zIDQyLjctNDIuNyA2NC02NGM2LjItNi4yIDE2LjQtNi4yIDIyLjYgMGMzLjEgMy4xIDQuNyA3LjIgNC43IDExLjNzLTEuNiA4LjItNC43IDExLjNsLTY0IDY0Yy0zLjEgMy4xLTcuMiA0LjctMTEuMyA0LjdzLTguMi0xLjYtMTEuMy00LjdjLTYuMi02LjItNi4yLTE2LjQgMC0yMi42eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzE1LjMgMTQ4LjdjNi4yIDYuMiA2LjIgMTYuNCAwIDIyLjZsLTY0IDY0Yy02LjIgNi4yLTE2LjQgNi4yLTIyLjYgMHMtNi4yLTE2LjQgMC0yMi42bDY0LTY0YzYuMi02LjIgMTYuNC02LjIgMjIuNiAwem0xMTIgMTZjNi4yIDYuMiA2LjIgMTYuNCAwIDIyLjZsLTE2MCAxNjBjLTYuMiA2LjItMTYuNCA2LjItMjIuNiAwcy02LjItMTYuNCAwLTIyLjZsMTYwLTE2MGM2LjItNi4yIDE2LjQtNi4yIDIyLjYgMHptMTYgMTEyYzYuMiA2LjIgNi4yIDE2LjQgMCAyMi42bC02NCA2NGMtNi4yIDYuMi0xNi40IDYuMi0yMi42IDBzLTYuMi0xNi40IDAtMjIuNmw2NC02NGM2LjItNi4yIDE2LjQtNi4yIDIyLjYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const FishCooked: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M.5 131.9L30.5 252.1c.6 2.5 .6 5.2 0 7.8L.5 380.1c-1.7 6.7 1.1 13.7 6.9 17.4s13.3 3.3 18.7-1.1l65.1-52.9c6.7-5.5 16.5-4.6 22.5 1.7C164.1 398.2 245.2 448 320 448c120 0 256-128 256-192s-136-192-256-192c-72.6 0-151.1 46.9-201.8 98.1c-5.6 5.7-14.5 6.8-21.1 2.2l-72-49.5c-5.5-3.8-12.7-3.8-18.2 0s-8 10.6-6.4 17zM224 224c0-4.1 1.6-8.2 4.7-11.3c21.3-21.3 42.7-42.7 64-64c3.1-3.1 7.2-4.7 11.3-4.7s8.2 1.6 11.3 4.7c6.2 6.2 6.2 16.4 0 22.6c-21.3 21.3-42.7 42.7-64 64c-6.2 6.2-16.4 6.2-22.6 0c-3.1-3.1-4.7-7.2-4.7-11.3zm20.7 100.7c53.3-53.3 106.7-106.7 160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6c-53.3 53.3-106.7 106.7-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zm112 16c21.3-21.3 42.7-42.7 64-64c6.2-6.2 16.4-6.2 22.6 0c3.1 3.1 4.7 7.2 4.7 11.3s-1.6 8.2-4.7 11.3l-64 64c-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7c-6.2-6.2-6.2-16.4 0-22.6z" />
            <path d="M315.3 148.7c6.2 6.2 6.2 16.4 0 22.6l-64 64c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l64-64c6.2-6.2 16.4-6.2 22.6 0zm112 16c6.2 6.2 6.2 16.4 0 22.6l-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160c6.2-6.2 16.4-6.2 22.6 0zm16 112c6.2 6.2 6.2 16.4 0 22.6l-64 64c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l64-64c6.2-6.2 16.4-6.2 22.6 0z" />
    </Icon>
);

export default FishCooked;