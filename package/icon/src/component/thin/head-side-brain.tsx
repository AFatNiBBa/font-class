
import { Icon } from "../../index";

/**
 * A component that renders the `head-side-brain` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-brain?s=thin head-side-brain}
 * @preview ![head-side-brain](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMjIyLjlDMTYgMTA4LjYgMTA4LjYgMTYgMjIyLjkgMTZsMTYuOCAwYzcxLjYgMCAxMzcuNSA0My4zIDE2Ni40IDEwNWMzLjUgNy40IDYuOSAxNS4xIDEwLjQgMjIuOWM2LjQgMTQuMyAxMi45IDI4LjkgMjAuMSA0Mi43YzExLjMgMjEuNiAyNC44IDQyLjIgNDMuNSA1OC45bDMuOCAzLjRjNy43IDYuOSAxMi4xIDE2LjcgMTIuMSAyN2MwIDIwLTE2LjIgMzYuMi0zNi4yIDM2LjJMNDQwIDMxMmMtNC40IDAtOCAzLjYtOCA4bDAgNzJjMCAyMi4xLTE3LjkgNDAtNDAgNDBsLTgwIDBjLTQuNCAwLTggMy42LTggOGwwIDY0YzAgNC40IDMuNiA4IDggOHM4LTMuNiA4LThsMC01NiA3MiAwYzMwLjkgMCA1Ni0yNS4xIDU2LTU2bDAtNjQgMTEuOCAwYzI4LjggMCA1Mi4yLTIzLjQgNTIuMi01Mi4yYzAtMTQuOS02LjQtMjkuMS0xNy41LTM5bC0zLjgtMy40Yy0xNi43LTE0LjktMjkuMi0zMy42LTQwLTU0LjRjLTctMTMuNC0xMy4xLTI3LjEtMTkuMy00MWMtMy41LTcuOS03LjEtMTUuOS0xMC44LTIzLjlDMzg5LjEgNDYuOSAzMTcuNiAwIDIzOS43IDBMMjIyLjkgMEM5OS44IDAgMCA5OS44IDAgMjIyLjljMCA1Mi44IDE2LjkgMTAxLjUgNDcuNCAxMzkuOUM1Ny41IDM3NS41IDY0IDM5MC4yIDY0IDQwNS4zTDY0IDUwNGMwIDQuNCAzLjYgOCA4IDhzOC0zLjYgOC04bDAtOTguN2MwLTE5LjgtOC41LTM3LjgtMjAuMS01Mi40QzMxLjggMzE3LjUgMTYgMjcyLjMgMTYgMjIyLjl6TTE5NCAxMTMuOGM2LTEwLjcgMTcuMi0xNy44IDMwLTE3LjhzMjQuMSA3LjEgMzAgMTcuOGMyLjEgMy44IDcgNS4yIDEwLjggMy4xYzQuMy0yLjQgOS4yLTMuNyAxNC40LTMuN2MxMC42IDAgMTkuOSA1LjUgMjUuNCAxNGMxLjcgMi42IDQuOCA0LjEgNy45IDMuNmMxLjYtLjIgMy4zLS40IDUtLjRjMTkgMCAzNC41IDE1LjYgMzQuNSAzNS4xcy0xNS41IDM1LjEtMzQuNSAzNS4xbC00NiAwYy0yLjcgMC01LjIgMS40LTYuNyAzLjZzLTEuNyA1LjEtLjcgNy42YzEuOSA0LjMgMi45IDkgMi45IDE0LjFjMCAxNy0xMS45IDMxLjItMjcuNiAzNC40Yy00LjMgLjktNy4xIDUuMS02LjIgOS40czUuMSA3LjEgOS40IDYuMmMyMy4xLTQuOCA0MC40LTI1LjQgNDAuNC01MC4xYzAtMy4xLS4zLTYuMi0uOC05LjJsMzUuMyAwYzI4IDAgNTAuNS0yMyA1MC41LTUxLjFzLTIyLjUtNTEuMS01MC41LTUxLjFjLS44IDAtMS42IDAtMi4zIC4xYy04LjUtMTAuNS0yMS40LTE3LjMtMzUuOS0xNy4zYy01LjQgMC0xMC41IC45LTE1LjMgMi42Yy05LjItMTItMjMuNy0xOS44LTQwLTE5LjhzLTMwLjcgNy44LTQwIDE5LjhjLTQuOC0xLjctOS45LTIuNi0xNS4zLTIuNmMtMjEuNiAwLTM5LjUgMTQuOS00NC43IDM0LjljLTI0LjkgMy4yLTQ0IDI0LjgtNDQgNTAuN2MwIDE5IDEwLjMgMzUuNiAyNS41IDQ0LjRjLjcgMjcuNSAyMi45IDQ5LjggNTAuNSA0OS44YzMuMSAwIDYuMS0uMyA5LS44bDAgMzUuOWMwIDQuNCAzLjYgOCA4IDhzOC0zLjYgOC04bDAtNDYuN2MwLTIuNy0xLjQtNS4yLTMuNi02LjdzLTUuMS0xLjctNy42LS42Yy00LjIgMS45LTguOSAyLjktMTMuOCAyLjljLTE5IDAtMzQuNS0xNS42LTM0LjUtMzUuMWMwLTEgMC0xLjkgLjEtMi45Yy4zLTMuNC0xLjYtNi42LTQuOC04QzEwNC42IDIwOS42IDk2IDE5Ny4yIDk2IDE4Mi44YzAtMTkuNSAxNS41LTM1LjEgMzQuNS0zNS4xbC4yIDBjNC4xIDAgNy41LTMuMSA4LTcuMWMxLjctMTUuNSAxNC42LTI3LjMgMzAuMS0yNy4zYzUuMiAwIDEwLjEgMS4zIDE0LjQgMy43YzMuOSAyLjEgOC43IC43IDEwLjgtMy4xeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HeadSideBrain: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 222.9C16 108.6 108.6 16 222.9 16l16.8 0c71.6 0 137.5 43.3 166.4 105c3.5 7.4 6.9 15.1 10.4 22.9c6.4 14.3 12.9 28.9 20.1 42.7c11.3 21.6 24.8 42.2 43.5 58.9l3.8 3.4c7.7 6.9 12.1 16.7 12.1 27c0 20-16.2 36.2-36.2 36.2L440 312c-4.4 0-8 3.6-8 8l0 72c0 22.1-17.9 40-40 40l-80 0c-4.4 0-8 3.6-8 8l0 64c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 72 0c30.9 0 56-25.1 56-56l0-64 11.8 0c28.8 0 52.2-23.4 52.2-52.2c0-14.9-6.4-29.1-17.5-39l-3.8-3.4c-16.7-14.9-29.2-33.6-40-54.4c-7-13.4-13.1-27.1-19.3-41c-3.5-7.9-7.1-15.9-10.8-23.9C389.1 46.9 317.6 0 239.7 0L222.9 0C99.8 0 0 99.8 0 222.9c0 52.8 16.9 101.5 47.4 139.9C57.5 375.5 64 390.2 64 405.3L64 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-98.7c0-19.8-8.5-37.8-20.1-52.4C31.8 317.5 16 272.3 16 222.9zM194 113.8c6-10.7 17.2-17.8 30-17.8s24.1 7.1 30 17.8c2.1 3.8 7 5.2 10.8 3.1c4.3-2.4 9.2-3.7 14.4-3.7c10.6 0 19.9 5.5 25.4 14c1.7 2.6 4.8 4.1 7.9 3.6c1.6-.2 3.3-.4 5-.4c19 0 34.5 15.6 34.5 35.1s-15.5 35.1-34.5 35.1l-46 0c-2.7 0-5.2 1.4-6.7 3.6s-1.7 5.1-.7 7.6c1.9 4.3 2.9 9 2.9 14.1c0 17-11.9 31.2-27.6 34.4c-4.3 .9-7.1 5.1-6.2 9.4s5.1 7.1 9.4 6.2c23.1-4.8 40.4-25.4 40.4-50.1c0-3.1-.3-6.2-.8-9.2l35.3 0c28 0 50.5-23 50.5-51.1s-22.5-51.1-50.5-51.1c-.8 0-1.6 0-2.3 .1c-8.5-10.5-21.4-17.3-35.9-17.3c-5.4 0-10.5 .9-15.3 2.6c-9.2-12-23.7-19.8-40-19.8s-30.7 7.8-40 19.8c-4.8-1.7-9.9-2.6-15.3-2.6c-21.6 0-39.5 14.9-44.7 34.9c-24.9 3.2-44 24.8-44 50.7c0 19 10.3 35.6 25.5 44.4c.7 27.5 22.9 49.8 50.5 49.8c3.1 0 6.1-.3 9-.8l0 35.9c0 4.4 3.6 8 8 8s8-3.6 8-8l0-46.7c0-2.7-1.4-5.2-3.6-6.7s-5.1-1.7-7.6-.6c-4.2 1.9-8.9 2.9-13.8 2.9c-19 0-34.5-15.6-34.5-35.1c0-1 0-1.9 .1-2.9c.3-3.4-1.6-6.6-4.8-8C104.6 209.6 96 197.2 96 182.8c0-19.5 15.5-35.1 34.5-35.1l.2 0c4.1 0 7.5-3.1 8-7.1c1.7-15.5 14.6-27.3 30.1-27.3c5.2 0 10.1 1.3 14.4 3.7c3.9 2.1 8.7 .7 10.8-3.1z" />
    </Icon>
);

export default HeadSideBrain;