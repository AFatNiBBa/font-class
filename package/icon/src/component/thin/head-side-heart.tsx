
import { Icon } from "../../index";

/**
 * A component that renders the `head-side-heart` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-heart?s=thin head-side-heart}
 * @preview ![head-side-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMjIyLjlDMTYgMTA4LjYgMTA4LjYgMTYgMjIyLjkgMTZsMTYuOCAwYzcxLjYgMCAxMzcuNSA0My4zIDE2Ni40IDEwNWMzLjUgNy40IDYuOSAxNS4xIDEwLjQgMjIuOWM2LjQgMTQuMyAxMi45IDI4LjkgMjAuMSA0Mi43YzExLjMgMjEuNiAyNC44IDQyLjIgNDMuNSA1OC45bDMuOCAzLjRjNy43IDYuOSAxMi4xIDE2LjcgMTIuMSAyN2MwIDIwLTE2LjIgMzYuMi0zNi4yIDM2LjJMNDQwIDMxMmMtNC40IDAtOCAzLjYtOCA4bDAgNzJjMCAyMi4xLTE3LjkgNDAtNDAgNDBsLTgwIDBjLTQuNCAwLTggMy42LTggOGwwIDY0YzAgNC40IDMuNiA4IDggOHM4LTMuNiA4LThsMC01NiA3MiAwYzMwLjkgMCA1Ni0yNS4xIDU2LTU2bDAtNjQgMTEuOCAwYzI4LjggMCA1Mi4yLTIzLjQgNTIuMi01Mi4yYzAtMTQuOS02LjQtMjkuMS0xNy41LTM5bC0zLjgtMy40Yy0xNi43LTE0LjktMjkuMi0zMy42LTQwLTU0LjRjLTctMTMuNC0xMy4xLTI3LjEtMTkuMy00MWMtMy41LTcuOS03LjEtMTUuOS0xMC44LTIzLjlDMzg5LjEgNDYuOSAzMTcuNiAwIDIzOS43IDBMMjIyLjkgMEM5OS44IDAgMCA5OS44IDAgMjIyLjljMCA1Mi44IDE2LjkgMTAxLjUgNDcuNCAxMzkuOUM1Ny41IDM3NS41IDY0IDM5MC4yIDY0IDQwNS4zTDY0IDUwNGMwIDQuNCAzLjYgOCA4IDhzOC0zLjYgOC04bDAtOTguN2MwLTE5LjgtOC41LTM3LjgtMjAuMS01Mi40QzMxLjggMzE3LjUgMTYgMjcyLjMgMTYgMjIyLjl6bTExMi0zN2MwLTIzLjIgMTguOC00MS45IDQxLjktNDEuOWMxMS4xIDAgMjEuOCA0LjQgMjkuNyAxMi4zTDIxOC4zIDE3NWMxLjUgMS41IDMuNSAyLjMgNS43IDIuM3M0LjItLjggNS43LTIuM2wxOC43LTE4LjdjNy45LTcuOSAxOC41LTEyLjMgMjkuNy0xMi4zYzIzLjIgMCA0MS45IDE4LjggNDEuOSA0MS45bDAgLjZjMCAxMC42LTQgMjAuOS0xMS4yIDI4LjhsLTc4LjkgODYuMWMtMS41IDEuNy0zLjcgMi42LTUuOSAyLjZzLTQuNC0uOS01LjktMi42bC03OC45LTg2LjFjLTcuMi03LjgtMTEuMi0xOC4xLTExLjItMjguOGwwLS42ek0xNjkuOSAxMjhjLTMyIDAtNTcuOSAyNS45LTU3LjkgNTcuOWwwIC42YzAgMTQuNyA1LjUgMjguOCAxNS40IDM5LjZsNzguOSA4Ni4xYzQuNSA1IDExIDcuOCAxNy43IDcuOHMxMy4xLTIuOCAxNy43LTcuOGw3OC45LTg2LjFjOS45LTEwLjggMTUuNC0yNC45IDE1LjQtMzkuNmwwLS42YzAtMzItMjUuOS01Ny45LTU3LjktNTcuOWMtMTUuNCAwLTMwLjEgNi4xLTQxIDE3TDIyNCAxNTguMSAyMTAuOSAxNDVjLTEwLjktMTAuOS0yNS42LTE3LTQxLTE3eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HeadSideHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 222.9C16 108.6 108.6 16 222.9 16l16.8 0c71.6 0 137.5 43.3 166.4 105c3.5 7.4 6.9 15.1 10.4 22.9c6.4 14.3 12.9 28.9 20.1 42.7c11.3 21.6 24.8 42.2 43.5 58.9l3.8 3.4c7.7 6.9 12.1 16.7 12.1 27c0 20-16.2 36.2-36.2 36.2L440 312c-4.4 0-8 3.6-8 8l0 72c0 22.1-17.9 40-40 40l-80 0c-4.4 0-8 3.6-8 8l0 64c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 72 0c30.9 0 56-25.1 56-56l0-64 11.8 0c28.8 0 52.2-23.4 52.2-52.2c0-14.9-6.4-29.1-17.5-39l-3.8-3.4c-16.7-14.9-29.2-33.6-40-54.4c-7-13.4-13.1-27.1-19.3-41c-3.5-7.9-7.1-15.9-10.8-23.9C389.1 46.9 317.6 0 239.7 0L222.9 0C99.8 0 0 99.8 0 222.9c0 52.8 16.9 101.5 47.4 139.9C57.5 375.5 64 390.2 64 405.3L64 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-98.7c0-19.8-8.5-37.8-20.1-52.4C31.8 317.5 16 272.3 16 222.9zm112-37c0-23.2 18.8-41.9 41.9-41.9c11.1 0 21.8 4.4 29.7 12.3L218.3 175c1.5 1.5 3.5 2.3 5.7 2.3s4.2-.8 5.7-2.3l18.7-18.7c7.9-7.9 18.5-12.3 29.7-12.3c23.2 0 41.9 18.8 41.9 41.9l0 .6c0 10.6-4 20.9-11.2 28.8l-78.9 86.1c-1.5 1.7-3.7 2.6-5.9 2.6s-4.4-.9-5.9-2.6l-78.9-86.1c-7.2-7.8-11.2-18.1-11.2-28.8l0-.6zM169.9 128c-32 0-57.9 25.9-57.9 57.9l0 .6c0 14.7 5.5 28.8 15.4 39.6l78.9 86.1c4.5 5 11 7.8 17.7 7.8s13.1-2.8 17.7-7.8l78.9-86.1c9.9-10.8 15.4-24.9 15.4-39.6l0-.6c0-32-25.9-57.9-57.9-57.9c-15.4 0-30.1 6.1-41 17L224 158.1 210.9 145c-10.9-10.9-25.6-17-41-17z" />
    </Icon>
);

export default HeadSideHeart;