
import { Icon } from "../../index";

/**
 * A component that renders the `bacteria` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bacteria?s=light bacteria}
 * @preview ![bacteria](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzEwLjQgMS4zYzguMSAzLjUgMTEuOCAxMi45IDguMyAyMS4xTDMxNCAzMy4xQzMyOS43IDQxIDM0Mi43IDUzLjggMzUwLjkgNzBsMTAuNy00LjdjOC4xLTMuNSAxNy41IC4yIDIxLjEgOC4zcy0uMiAxNy41LTguMyAyMS4xbC0xNC43IDYuNGMxLjcgMjAuMi00IDM5LjgtMTUuMyA1NS42bDYgMy43YzcuNSA0LjcgOS44IDE0LjUgNS4yIDIycy0xNC41IDkuOC0yMiA1LjJsLTEzLjMtOC4yYy03LjYgNC43LTE2LjIgOC4zLTI1LjQgMTAuNWMtNi44IDEuNi0xMy4yIDMuNC0xOS4xIDUuNGwzLjggMTcuM2MxLjkgOC42LTMuNSAxNy4yLTEyLjEgMTkuMXMtMTcuMi0zLjUtMTkuMS0xMi4xTDI0NiAyMDguOGMtMTkuNCAxMS42LTMxLjIgMjUuMy0zOC44IDM3LjJsNy42IDMuNmM4IDMuOCAxMS40IDEzLjMgNy42IDIxLjNzLTEzLjMgMTEuNC0yMS4zIDcuNmwtNy40LTMuNWMtMSAzLjMtMS43IDYuNy0yLjMgMTAuMWMtMS41IDE0LjEtNi41IDI3LjEtMTQgMzguMUwxODcuNiAzMzRjNi4xIDYuNCA1LjggMTYuNi0uNiAyMi42cy0xNi42IDUuOC0yMi42LS42bC05LjYtMTAuMmMtMTUuMyAxMC4yLTM0IDE1LjYtNTMuNyAxMy45bC02LjQgMTQuN2MtMy41IDguMS0xMi45IDExLjgtMjEuMSA4LjNzLTExLjgtMTMtOC4zLTIxLjFMNzAgMzUwLjljLTE2LTguMS0yOC45LTIxLjEtMzYuOS0zNi45bC0xMC43IDQuN2MtOC4xIDMuNS0xNy41LS4yLTIxLjEtOC4zcy4yLTE3LjUgOC4zLTIxLjFMMjQuMyAyODNjLS40LTQuOC0uNC05LjYgLjEtMTQuNmMxLjEtMTIuMSAzLjgtMjQuMiA3LTM1LjljLjItLjkgLjUtMS43IC43LTIuNmwtMTUuMi03LjZjLTcuOS00LTExLjEtMTMuNi03LjItMjEuNXMxMy42LTExLjEgMjEuNS03LjJsMTEuNiA1LjhjNC44LTExLjcgMTEtMjQuMiAxOC44LTM3LjJjMS45LTMuMiAzLjktNi40IDYuMS05LjZsLTUuMS0zLjhjLTcuMS01LjMtOC41LTE1LjMtMy4yLTIyLjRzMTUuMy04LjUgMjIuNC0zLjJsNSAzLjdjMTAuOS0xMy4xIDIzLjUtMjUuOCAzOC4xLTM3LjhMMTE0LjQgNzIuNGMtNC42LTcuNS0yLjMtMTcuNCA1LjItMjJzMTcuNC0yLjMgMjIgNS4ybDkgMTQuN2MxNC41LTkuNCAzMC42LTE4IDQ4LjMtMjUuNWwtMy42LTguNWMtMy41LTguMSAuMy0xNy41IDguNC0yMXMxNy41IC4zIDIxIDguNEwyMjkgMzMuOGM5LTIuOCAxOC4zLTUuNCAyOC4xLTcuNmM4LjctMiAxNy40LTIuNiAyNS44LTEuOWw2LjQtMTQuN2MzLjUtOC4xIDEyLjktMTEuOCAyMS4xLTguM3pNMTkyIDE0NGExNiAxNiAwIDEgMSAzMiAwIDE2IDE2IDAgMSAxIC0zMiAwem0tNjQgNTZhMjQgMjQgMCAxIDEgMCA0OCAyNCAyNCAwIDEgMSAwLTQ4em0zMS43IDgxLjZjLjEtLjUgLjEtLjkgLjItMS40YzIuOC0xOC4yIDEwLjMtMzQuOCAxOC4yLTQ4YzE2LTI2LjcgNDYuNy01OS4xIDEwOS42LTczLjZjMjgtNi41IDQ1LjQtMzQuNCAzOS02Mi40cy0zNC40LTQ1LjQtNjIuNC0zOWMtOTMuMSAyMS41LTE0Ni40IDczLTE3NS40IDEyMS40Qzc0LjggMjAyLjMgNjYuNyAyMjQuNSA2Mi4yIDI0MWMtMi45IDEwLjYtNS4xIDIwLjgtNiAzMC4zYy0yLjYgMjguNiAxOC41IDUzLjggNDcuMSA1Ni40YzI4LjMgMi42IDUzLjMtMTggNTYuNC00Ni4xem0xNjEuNiAyMDhsNC43LTEwLjdjLTE1LjYtNy45LTI4LjctMjAuNy0zNi45LTM2LjlsLTEwLjcgNC43Yy04LjEgMy41LTE3LjUtLjItMjEuMS04LjNzLjItMTcuNSA4LjMtMjEuMWwxNC43LTYuNGMtMS43LTIwLjIgNC0zOS44IDE1LjMtNTUuNmwtNi0zLjdjLTcuNS00LjYtOS44LTE0LjUtNS4yLTIyczE0LjUtOS44IDIyLTUuMmwxMy4zIDguMmM3LjYtNC43IDE2LjItOC4zIDI1LjQtMTAuNWM2LjgtMS42IDEzLjItMy40IDE5LjEtNS40bC0zLjgtMTcuM2MtMS45LTguNiAzLjUtMTcuMiAxMi4xLTE5LjFzMTcuMiAzLjUgMTkuMSAxMi4xbDIuNCAxMC43YzE5LjQtMTEuNiAzMS4yLTI1LjMgMzguOC0zNy4ybC03LjYtMy42Yy04LTMuOC0xMS40LTEzLjMtNy42LTIxLjNzMTMuMy0xMS40IDIxLjMtNy42bDcuNCAzLjVjMS0zLjMgMS43LTYuNyAyLjMtMTAuMWMxLjUtMTQuMSA2LjUtMjcuMSAxNC0zOC4xTDQ1Mi40IDE3OGMtNi4xLTYuNC01LjgtMTYuNiAuNi0yMi42czE2LjYtNS44IDIyLjYgLjZsOS42IDEwLjJjMTUuMy0xMC4yIDM0LTE1LjYgNTMuNy0xMy45bDYuNC0xNC43YzMuNS04LjEgMTIuOS0xMS44IDIxLjEtOC4zczExLjggMTIuOSA4LjMgMjEuMUw1NzAgMTYxLjFjMTYgOC4xIDI4LjkgMjEuMSAzNi45IDM2LjlsMTAuNy00LjdjOC4xLTMuNSAxNy41IC4yIDIxLjEgOC4zcy0uMiAxNy41LTguMyAyMS4xbC0xNC43IDYuNGMuNCA0LjggLjQgOS42LS4xIDE0LjZjLTEuMSAxMi4xLTMuOCAyNC4yLTcgMzUuOWMtLjIgLjktLjUgMS43LS43IDIuNmwxNS4yIDcuNmM3LjkgNCAxMS4xIDEzLjYgNy4yIDIxLjVzLTEzLjYgMTEuMS0yMS41IDcuMmwtMTEuNi01LjhjLTQuOCAxMS43LTExIDI0LjItMTguOCAzNy4yYy0xLjkgMy4yLTMuOSA2LjQtNi4xIDkuNmw1LjEgMy44YzcuMSA1LjMgOC41IDE1LjMgMy4yIDIyLjRzLTE1LjMgOC41LTIyLjQgMy4ybC01LTMuN2MtMTAuOSAxMy4xLTIzLjUgMjUuOC0zOC4xIDM3LjhsMTAuMyAxNi44YzQuNiA3LjUgMi4zIDE3LjQtNS4yIDIycy0xNy40IDIuMy0yMi01LjJsLTktMTQuN2MtMTQuNSA5LjQtMzAuNiAxOC00OC4zIDI1LjVsMy42IDguNWMzLjUgOC4xLS4zIDE3LjUtOC40IDIxcy0xNy41LS4zLTIxLTguNEw0MTEgNDc4LjJjLTkgMi44LTE4LjMgNS40LTI4LjEgNy42Yy04LjcgMi0xNy40IDIuNi0yNS44IDEuOWwtNi40IDE0LjZjLTMuNSA4LjEtMTIuOSAxMS44LTIxLjEgOC4zcy0xMS44LTEzLTguMy0yMS4xek00MTYgNDA4YTI0IDI0IDAgMSAxIDAtNDggMjQgMjQgMCAxIDEgMCA0OHptNjQuMy0xNzcuNmMwIC41LS4xIC45LS4yIDEuNGMtMi44IDE4LjItMTAuMyAzNC44LTE4LjIgNDhjLTE2IDI2LjctNDYuNyA1OS4xLTEwOS42IDczLjZjLTI4IDYuNS00NS40IDM0LjQtMzkgNjIuNHMzNC40IDQ1LjQgNjIuNCAzOWM5My4xLTIxLjUgMTQ2LjQtNzMgMTc1LjQtMTIxLjRjMTQuMi0yMy42IDIyLjItNDUuOCAyNi43LTYyLjNjMi45LTEwLjYgNS4xLTIwLjggNi0zMC4zYzIuNi0yOC42LTE4LjUtNTMuOC00Ny4xLTU2LjRjLTI4LjMtMi42LTUzLjMgMTgtNTYuNCA0Ni4xeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Bacteria: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M310.4 1.3c8.1 3.5 11.8 12.9 8.3 21.1L314 33.1C329.7 41 342.7 53.8 350.9 70l10.7-4.7c8.1-3.5 17.5 .2 21.1 8.3s-.2 17.5-8.3 21.1l-14.7 6.4c1.7 20.2-4 39.8-15.3 55.6l6 3.7c7.5 4.7 9.8 14.5 5.2 22s-14.5 9.8-22 5.2l-13.3-8.2c-7.6 4.7-16.2 8.3-25.4 10.5c-6.8 1.6-13.2 3.4-19.1 5.4l3.8 17.3c1.9 8.6-3.5 17.2-12.1 19.1s-17.2-3.5-19.1-12.1L246 208.8c-19.4 11.6-31.2 25.3-38.8 37.2l7.6 3.6c8 3.8 11.4 13.3 7.6 21.3s-13.3 11.4-21.3 7.6l-7.4-3.5c-1 3.3-1.7 6.7-2.3 10.1c-1.5 14.1-6.5 27.1-14 38.1L187.6 334c6.1 6.4 5.8 16.6-.6 22.6s-16.6 5.8-22.6-.6l-9.6-10.2c-15.3 10.2-34 15.6-53.7 13.9l-6.4 14.7c-3.5 8.1-12.9 11.8-21.1 8.3s-11.8-13-8.3-21.1L70 350.9c-16-8.1-28.9-21.1-36.9-36.9l-10.7 4.7c-8.1 3.5-17.5-.2-21.1-8.3s.2-17.5 8.3-21.1L24.3 283c-.4-4.8-.4-9.6 .1-14.6c1.1-12.1 3.8-24.2 7-35.9c.2-.9 .5-1.7 .7-2.6l-15.2-7.6c-7.9-4-11.1-13.6-7.2-21.5s13.6-11.1 21.5-7.2l11.6 5.8c4.8-11.7 11-24.2 18.8-37.2c1.9-3.2 3.9-6.4 6.1-9.6l-5.1-3.8c-7.1-5.3-8.5-15.3-3.2-22.4s15.3-8.5 22.4-3.2l5 3.7c10.9-13.1 23.5-25.8 38.1-37.8L114.4 72.4c-4.6-7.5-2.3-17.4 5.2-22s17.4-2.3 22 5.2l9 14.7c14.5-9.4 30.6-18 48.3-25.5l-3.6-8.5c-3.5-8.1 .3-17.5 8.4-21s17.5 .3 21 8.4L229 33.8c9-2.8 18.3-5.4 28.1-7.6c8.7-2 17.4-2.6 25.8-1.9l6.4-14.7c3.5-8.1 12.9-11.8 21.1-8.3zM192 144a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-64 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm31.7 81.6c.1-.5 .1-.9 .2-1.4c2.8-18.2 10.3-34.8 18.2-48c16-26.7 46.7-59.1 109.6-73.6c28-6.5 45.4-34.4 39-62.4s-34.4-45.4-62.4-39c-93.1 21.5-146.4 73-175.4 121.4C74.8 202.3 66.7 224.5 62.2 241c-2.9 10.6-5.1 20.8-6 30.3c-2.6 28.6 18.5 53.8 47.1 56.4c28.3 2.6 53.3-18 56.4-46.1zm161.6 208l4.7-10.7c-15.6-7.9-28.7-20.7-36.9-36.9l-10.7 4.7c-8.1 3.5-17.5-.2-21.1-8.3s.2-17.5 8.3-21.1l14.7-6.4c-1.7-20.2 4-39.8 15.3-55.6l-6-3.7c-7.5-4.6-9.8-14.5-5.2-22s14.5-9.8 22-5.2l13.3 8.2c7.6-4.7 16.2-8.3 25.4-10.5c6.8-1.6 13.2-3.4 19.1-5.4l-3.8-17.3c-1.9-8.6 3.5-17.2 12.1-19.1s17.2 3.5 19.1 12.1l2.4 10.7c19.4-11.6 31.2-25.3 38.8-37.2l-7.6-3.6c-8-3.8-11.4-13.3-7.6-21.3s13.3-11.4 21.3-7.6l7.4 3.5c1-3.3 1.7-6.7 2.3-10.1c1.5-14.1 6.5-27.1 14-38.1L452.4 178c-6.1-6.4-5.8-16.6 .6-22.6s16.6-5.8 22.6 .6l9.6 10.2c15.3-10.2 34-15.6 53.7-13.9l6.4-14.7c3.5-8.1 12.9-11.8 21.1-8.3s11.8 12.9 8.3 21.1L570 161.1c16 8.1 28.9 21.1 36.9 36.9l10.7-4.7c8.1-3.5 17.5 .2 21.1 8.3s-.2 17.5-8.3 21.1l-14.7 6.4c.4 4.8 .4 9.6-.1 14.6c-1.1 12.1-3.8 24.2-7 35.9c-.2 .9-.5 1.7-.7 2.6l15.2 7.6c7.9 4 11.1 13.6 7.2 21.5s-13.6 11.1-21.5 7.2l-11.6-5.8c-4.8 11.7-11 24.2-18.8 37.2c-1.9 3.2-3.9 6.4-6.1 9.6l5.1 3.8c7.1 5.3 8.5 15.3 3.2 22.4s-15.3 8.5-22.4 3.2l-5-3.7c-10.9 13.1-23.5 25.8-38.1 37.8l10.3 16.8c4.6 7.5 2.3 17.4-5.2 22s-17.4 2.3-22-5.2l-9-14.7c-14.5 9.4-30.6 18-48.3 25.5l3.6 8.5c3.5 8.1-.3 17.5-8.4 21s-17.5-.3-21-8.4L411 478.2c-9 2.8-18.3 5.4-28.1 7.6c-8.7 2-17.4 2.6-25.8 1.9l-6.4 14.6c-3.5 8.1-12.9 11.8-21.1 8.3s-11.8-13-8.3-21.1zM416 408a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm64.3-177.6c0 .5-.1 .9-.2 1.4c-2.8 18.2-10.3 34.8-18.2 48c-16 26.7-46.7 59.1-109.6 73.6c-28 6.5-45.4 34.4-39 62.4s34.4 45.4 62.4 39c93.1-21.5 146.4-73 175.4-121.4c14.2-23.6 22.2-45.8 26.7-62.3c2.9-10.6 5.1-20.8 6-30.3c2.6-28.6-18.5-53.8-47.1-56.4c-28.3-2.6-53.3 18-56.4 46.1z" />
    </Icon>
);

export default Bacteria;