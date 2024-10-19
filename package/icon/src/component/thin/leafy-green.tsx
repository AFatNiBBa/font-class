
import { Icon } from "../../index";

/**
 * A component that renders the `leafy-green` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leafy-green?s=thin leafy-green}
 * @preview ![leafy-green](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjMzLjggMjdjLTMuMyA0LjMtNi4zIDguOS05IDEzLjZsLS44LS45Yy0zMS43LTMxLjctODMtMzEuNy0xMTQuNyAwYy01IDUtOS4xIDEwLjQtMTIuNSAxNi4xYy0xNC4yIDI0LTM1IDQ1LjctNTUuNyA2Mi41Yy0xLjggMS41LTMuNiAzLjEtNS4zIDQuOGMtMjAuOCAyMC44LTI1LjIgNTItMTIuOSA3Ny4xYzUuOCAxMS44IDEyLjYgMjcuMSAxMi42IDQ0LjJsMCAzNS43YzAgMTAuNSA0LjIgMjAuNSAxMS42IDI3LjlsMjYuMyAyNi4zYzEzLjQgMTMuNCAyMC45IDMxLjYgMjAuOSA1MC41bDAgMS42Yy0xLjYgNC42LTQuMiA4LjktNy43IDEyLjRMNzkgNDA2LjVjLS41LTIuOS0uNy01LjgtLjctOC43bDAtMTIuOWMwLTE0LjctNS44LTI4LjgtMTYuMy0zOS4yTDM1LjcgMzE5LjNjLTEwLjQtMTAuNC0xNi4zLTI0LjUtMTYuMy0zOS4ybDAtMzUuN2MwLTEzLjEtNS4zLTI1LjQtMTEtMzcuMWMtMTUuMi0zMS4xLTkuOS02OS42IDE1LjktOTUuNGMyLjEtMi4xIDQuMy00LjEgNi41LTUuOUM1MC42IDg5LjkgNzAgNjkuNiA4MyA0Ny43YzQuMS02LjkgOS4xLTEzLjQgMTUtMTkuM0MxMzUuNC05IDE5NS43LTkuNSAyMzMuOCAyN3pNNTU3IDEzNmMyLTcuNiAzLTE1LjcgMy0yNGMwLTUzLTQzLTk2LTk2LTk2Yy04LjMgMC0xNi4zIDEtMjQgM2MtMzAuNyA3LjktNjUuMSA4LjYtOTUuNiA1LjRjLTIuOC0uMy01LjYtLjQtOC41LS40Yy0zNS4xIDAtNjQuOSAyMi42LTc1LjcgNTRjLTQuOSAxNC4zLTExLjYgMzEuOS0yNS4xIDQ1LjRsLTI5LjEgMjkuMWMtOSA5LTE0LjEgMjEuMi0xNC4xIDMzLjlsMCA0M2MwIDIxLjItOC40IDQxLjYtMjMuNCA1Ni42bC0xMC41IDEwLjVjLTkgOS0xNC4xIDIxLjItMTQuMSAzMy45bDAgNzkuN2MwIDMuOC0uMyA3LjYtLjggMTEuM0wyNTYgMzA4LjcgMjU2IDIwMGMwLTQuNCAzLjYtOCA4LThzOCAzLjYgOCA4bDAgOTIuN0w0MzQuMyAxMzAuM2MzLjEtMy4xIDguMi0zLjEgMTEuMyAwczMuMSA4LjIgMCAxMS4zTDM0Ny4zIDI0MGw5Mi43IDBjNC40IDAgOCAzLjYgOCA4cy0zLjYgOC04IDhsLTEwOC43IDBMMTU0LjUgNDMyLjhjMy43LS41IDcuNS0uOCAxMS4zLS44bDc5LjcgMGMxMi43IDAgMjQuOS01LjEgMzMuOS0xNC4xbDEwLjUtMTAuNWMxNS0xNSAzNS40LTIzLjQgNTYuNi0yMy40bDQzIDBjMTIuNyAwIDI0LjktNS4xIDMzLjktMTQuMWwyOS4xLTI5LjFjMTMuNS0xMy41IDMxLjEtMjAuMiA0NS40LTI1LjFjMzEuNS0xMC44IDU0LTQwLjYgNTQtNzUuN2MwLTIuOS0uMi01LjctLjQtOC41Yy0zLjItMzAuNC0yLjUtNjQuOCA1LjQtOTUuNnpNMTIwLjYgNDY2LjdMNzcuNyA1MDkuN2MtMy4xIDMuMS04LjIgMy4xLTExLjMgMHMtMy4xLTguMiAwLTExLjNsNDIuOS00Mi45YzEyLTEyIDE4LjctMjguMyAxOC43LTQ1LjNsMC03OS43YzAtMTcgNi43LTMzLjMgMTguNy00NS4zbDEwLjUtMTAuNWMxMi0xMiAxOC43LTI4LjMgMTguNy00NS4zbDAtNDNjMC0xNyA2LjctMzMuMyAxOC43LTQ1LjNsMjkuMS0yOS4xYzEwLjctMTAuNyAxNi40LTI1IDIxLjMtMzkuM0MyNTguMSAzNS4xIDI5My45IDggMzM2IDhjMy40IDAgNi44IC4yIDEwLjEgLjVjMjkuMSAzLjEgNjEuNSAyLjMgODkuOS01QzQ0NSAxLjIgNDU0LjMgMCA0NjQgMGM2MS45IDAgMTEyIDUwLjEgMTEyIDExMmMwIDkuNy0xLjIgMTktMy41IDI4Yy03LjMgMjguNC04LjEgNjAuOC01IDg5LjljLjMgMy4zIC41IDYuNyAuNSAxMC4xYzAgNDIuMS0yNy4xIDc3LjktNjQuOSA5MC44Yy0xNC4zIDQuOS0yOC42IDEwLjYtMzkuMyAyMS4zbC0yOS4xIDI5LjFjLTEyIDEyLTI4LjMgMTguNy00NS4zIDE4LjdsLTQzIDBjLTE3IDAtMzMuMyA2LjctNDUuMyAxOC43bC0xMC41IDEwLjVjLTEyIDEyLTI4LjMgMTguNy00NS4zIDE4LjdsLTc5LjcgMGMtMTcgMC0zMy4zIDYuNy00NS4zIDE4Ljd6Ii8+PC9zdmc+|width=32|height=32)
 */
const LeafyGreen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M233.8 27c-3.3 4.3-6.3 8.9-9 13.6l-.8-.9c-31.7-31.7-83-31.7-114.7 0c-5 5-9.1 10.4-12.5 16.1c-14.2 24-35 45.7-55.7 62.5c-1.8 1.5-3.6 3.1-5.3 4.8c-20.8 20.8-25.2 52-12.9 77.1c5.8 11.8 12.6 27.1 12.6 44.2l0 35.7c0 10.5 4.2 20.5 11.6 27.9l26.3 26.3c13.4 13.4 20.9 31.6 20.9 50.5l0 1.6c-1.6 4.6-4.2 8.9-7.7 12.4L79 406.5c-.5-2.9-.7-5.8-.7-8.7l0-12.9c0-14.7-5.8-28.8-16.3-39.2L35.7 319.3c-10.4-10.4-16.3-24.5-16.3-39.2l0-35.7c0-13.1-5.3-25.4-11-37.1c-15.2-31.1-9.9-69.6 15.9-95.4c2.1-2.1 4.3-4.1 6.5-5.9C50.6 89.9 70 69.6 83 47.7c4.1-6.9 9.1-13.4 15-19.3C135.4-9 195.7-9.5 233.8 27zM557 136c2-7.6 3-15.7 3-24c0-53-43-96-96-96c-8.3 0-16.3 1-24 3c-30.7 7.9-65.1 8.6-95.6 5.4c-2.8-.3-5.6-.4-8.5-.4c-35.1 0-64.9 22.6-75.7 54c-4.9 14.3-11.6 31.9-25.1 45.4l-29.1 29.1c-9 9-14.1 21.2-14.1 33.9l0 43c0 21.2-8.4 41.6-23.4 56.6l-10.5 10.5c-9 9-14.1 21.2-14.1 33.9l0 79.7c0 3.8-.3 7.6-.8 11.3L256 308.7 256 200c0-4.4 3.6-8 8-8s8 3.6 8 8l0 92.7L434.3 130.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L347.3 240l92.7 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-108.7 0L154.5 432.8c3.7-.5 7.5-.8 11.3-.8l79.7 0c12.7 0 24.9-5.1 33.9-14.1l10.5-10.5c15-15 35.4-23.4 56.6-23.4l43 0c12.7 0 24.9-5.1 33.9-14.1l29.1-29.1c13.5-13.5 31.1-20.2 45.4-25.1c31.5-10.8 54-40.6 54-75.7c0-2.9-.2-5.7-.4-8.5c-3.2-30.4-2.5-64.8 5.4-95.6zM120.6 466.7L77.7 509.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l42.9-42.9c12-12 18.7-28.3 18.7-45.3l0-79.7c0-17 6.7-33.3 18.7-45.3l10.5-10.5c12-12 18.7-28.3 18.7-45.3l0-43c0-17 6.7-33.3 18.7-45.3l29.1-29.1c10.7-10.7 16.4-25 21.3-39.3C258.1 35.1 293.9 8 336 8c3.4 0 6.8 .2 10.1 .5c29.1 3.1 61.5 2.3 89.9-5C445 1.2 454.3 0 464 0c61.9 0 112 50.1 112 112c0 9.7-1.2 19-3.5 28c-7.3 28.4-8.1 60.8-5 89.9c.3 3.3 .5 6.7 .5 10.1c0 42.1-27.1 77.9-64.9 90.8c-14.3 4.9-28.6 10.6-39.3 21.3l-29.1 29.1c-12 12-28.3 18.7-45.3 18.7l-43 0c-17 0-33.3 6.7-45.3 18.7l-10.5 10.5c-12 12-28.3 18.7-45.3 18.7l-79.7 0c-17 0-33.3 6.7-45.3 18.7z" />
    </Icon>
);

export default LeafyGreen;