
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-woozy` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-woozy?s=duotone face-woozy}
 * @preview ![face-woozy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTk2LTgwYzAtNi43IDQuMi0xMi45IDEwLjktMTUuMmMxMy40LTQuNSA0OC41LTIyLjkgNzEuNy01Ny43YzMuMS00LjYgOC4yLTcuMSAxMy4zLTcuMWMzIDAgNi4xIC45IDguOSAyLjdjNy40IDQuOSA5LjMgMTQuOCA0LjQgMjIuMmMtMjggNDItNjkuNiA2NC4xLTg4LjMgNzAuM2MtOC40IDIuOC0xNy40LTEuNy0yMC4yLTEwLjFjLS42LTEuNy0uOC0zLjQtLjgtNS4xem0yLjcgMTY3LjFjNC45LTcuNCAxNC44LTkuMyAyMi4yLTQuNGwxMS41IDcuN2MxOC41IDEyLjMgNDEuOCAxNC43IDYyLjQgNi41YzI5LjQtMTEuOCA2Mi43LTguOCA4OS42IDhsMTQuMiA4LjljNi41IDQuMSAxNC4xIDYuMiAyMS44IDYuMmMxMC45IDAgMjEuMy00LjMgMjktMTJsMzkuMy0zOS4zYzYuMi02LjIgMTYuNC02LjIgMjIuNiAwczYuMiAxNi40IDAgMjIuNkwzNzIgMzg2LjZjLTEzLjcgMTMuNy0zMi4zIDIxLjQtNTEuNyAyMS40Yy0xMy43IDAtMjcuMS0zLjgtMzguNy0xMS4xTDI2Ny40IDM4OGMtMTguMi0xMS40LTQwLjgtMTMuNC02MC43LTUuNGMtMzAuNCAxMi4yLTY0LjggOC42LTkyLTkuNmwtMTEuNS03LjdjLTcuNC00LjktOS4zLTE0LjgtNC40LTIyLjJ6bTI5LjgtOTkuMmMtMi4xLTguNiAzLjEtMTcuMyAxMS42LTE5LjRjMjEuMy01LjMgNDIuNy0xMC43IDY0LTE2YzguNi0yLjEgMTcuMyAzLjEgMTkuNCAxMS42cy0zLjEgMTcuMy0xMS42IDE5LjRjLTIxLjMgNS4zLTQyLjcgMTAuNy02NCAxNmMtOC42IDIuMS0xNy4zLTMuMS0xOS40LTExLjZ6TTMwNCAyMDhjMC0zNS4zIDE0LjMtNjQgMzItNjRzMzIgMjguNyAzMiA2NHMtMTQuMyA2NC0zMiA2NHMtMzItMjguNy0zMi02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIwNS4zIDEyMC45YzQuOS03LjQgMi45LTE3LjMtNC40LTIyLjJzLTE3LjMtMi45LTIyLjIgNC40Yy0yMy4yIDM0LjgtNTguNCA1My4yLTcxLjcgNTcuN2MtOC40IDIuOC0xMi45IDExLjktMTAuMSAyMC4yczExLjkgMTIuOSAyMC4yIDEwLjFjMTguNi02LjIgNjAuMy0yOC4zIDg4LjMtNzAuM3ptNi42IDExOC42YzguNi0yLjEgMTMuOC0xMC44IDExLjYtMTkuNHMtMTAuOC0xMy44LTE5LjQtMTEuNmwtNjQgMTZjLTguNiAyLjEtMTMuOCAxMC44LTExLjYgMTkuNHMxMC44IDEzLjggMTkuNCAxMS42bDY0LTE2ek0zMzYgMjcyYzE3LjcgMCAzMi0yOC43IDMyLTY0cy0xNC4zLTY0LTMyLTY0cy0zMiAyOC43LTMyIDY0czE0LjMgNjQgMzIgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const FaceWoozy: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96-80c0-6.7 4.2-12.9 10.9-15.2c13.4-4.5 48.5-22.9 71.7-57.7c3.1-4.6 8.2-7.1 13.3-7.1c3 0 6.1 .9 8.9 2.7c7.4 4.9 9.3 14.8 4.4 22.2c-28 42-69.6 64.1-88.3 70.3c-8.4 2.8-17.4-1.7-20.2-10.1c-.6-1.7-.8-3.4-.8-5.1zm2.7 167.1c4.9-7.4 14.8-9.3 22.2-4.4l11.5 7.7c18.5 12.3 41.8 14.7 62.4 6.5c29.4-11.8 62.7-8.8 89.6 8l14.2 8.9c6.5 4.1 14.1 6.2 21.8 6.2c10.9 0 21.3-4.3 29-12l39.3-39.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L372 386.6c-13.7 13.7-32.3 21.4-51.7 21.4c-13.7 0-27.1-3.8-38.7-11.1L267.4 388c-18.2-11.4-40.8-13.4-60.7-5.4c-30.4 12.2-64.8 8.6-92-9.6l-11.5-7.7c-7.4-4.9-9.3-14.8-4.4-22.2zm29.8-99.2c-2.1-8.6 3.1-17.3 11.6-19.4c21.3-5.3 42.7-10.7 64-16c8.6-2.1 17.3 3.1 19.4 11.6s-3.1 17.3-11.6 19.4c-21.3 5.3-42.7 10.7-64 16c-8.6 2.1-17.3-3.1-19.4-11.6zM304 208c0-35.3 14.3-64 32-64s32 28.7 32 64s-14.3 64-32 64s-32-28.7-32-64z" />
            <path d="M205.3 120.9c4.9-7.4 2.9-17.3-4.4-22.2s-17.3-2.9-22.2 4.4c-23.2 34.8-58.4 53.2-71.7 57.7c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1c18.6-6.2 60.3-28.3 88.3-70.3zm6.6 118.6c8.6-2.1 13.8-10.8 11.6-19.4s-10.8-13.8-19.4-11.6l-64 16c-8.6 2.1-13.8 10.8-11.6 19.4s10.8 13.8 19.4 11.6l64-16zM336 272c17.7 0 32-28.7 32-64s-14.3-64-32-64s-32 28.7-32 64s14.3 64 32 64z" />
    </Icon>
);

export default FaceWoozy;