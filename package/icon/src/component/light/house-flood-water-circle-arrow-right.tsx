
import { Icon } from "../../index";

/**
 * A component that renders the `house-flood-water-circle-arrow-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-flood-water-circle-arrow-right?s=light house-flood-water-circle-arrow-right}
 * @preview ![house-flood-water-circle-arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzEwLjQgODYuNGMtMy42LTEwLjMtOC4xLTIwLjItMTMuNC0yOS42bDc4LTU0YzUuNS0zLjggMTIuNy0zLjggMTguMiAwbDIwOCAxNDRjNy4zIDUgOS4xIDE1IDQgMjIuM3MtMTUgOS4xLTIyLjMgNEw1NjAgMTU3LjNsMCAxMTkuM2MtMi40LTEuNi00LjYtMy4zLTYuOC01LjFjLTcuNS02LjMtMTYuMi0xMC43LTI1LjItMTNsMC0xMjMuM0wzODQgMzUuNWwtNzMuNiA1MXpNMjI0IDM2OGMyMC45IDAgNDEuNi05LjkgNTguMi0yMS4yYzkuOC02LjcgMTgtMTQgMjUuOS0yMS45YzYuNi02LjUgMTcuMi02LjUgMjMuNyAwYzcuOSA3LjkgMTYuMiAxNS4yIDI2IDIxLjlDMzc0LjMgMzU4IDM5NS4xIDM2OCA0MTYgMzY4czQxLjYtOS45IDU4LjItMjEuMmM5LjgtNi43IDE4LTE0IDI1LjktMjEuOWM2LjYtNi41IDE3LjItNi41IDIzLjcgMGM3LjkgNy45IDE2LjIgMTUuMiAyNiAyMS45YzEyLjggOC43IDI4LjEgMTYuNiA0NC4xIDE5LjhjNy43IDEuNSAxNC4xIDcuOCAxNC4xIDE1LjdjMCA5LjgtOCAxNy45LTE3LjcgMTYuMmMtMjMuMS00LTQzLjYtMTUtNTguNS0yNS4yYy03LjktNS40LTE0LjctMTAuOC0xOS44LTE1LjNjLTUuMSA0LjUtMTEuOCA5LjktMTkuOCAxNS4zQzQ3My41IDM4NS45IDQ0Ni4zIDQwMCA0MTYgNDAwcy01Ny42LTE0LjEtNzYuMi0yNi44Yy03LjktNS40LTE0LjYtMTAuOC0xOS44LTE1LjNjLTUuMSA0LjUtMTEuOCA5LjktMTkuOCAxNS4zQzI4MS41IDM4NS45IDI1NC4zIDQwMCAyMjQgNDAwcy01Ny42LTE0LjEtNzYuMi0yNi44Yy03LjktNS40LTE0LjYtMTAuOC0xOS44LTE1LjNjLTUuMSA0LjUtMTEuOCA5LjktMTkuOCAxNS4zYy0xNC45IDEwLjItMzUuNCAyMS4yLTU4LjUgMjUuMkM0MCA0MDAuMSAzMiAzOTIgMzIgMzgyLjJjMC03LjkgNi40LTE0LjEgMTQuMS0xNS43YzE1LjktMy4xIDMxLjMtMTEuMSA0NC0xOS44YzkuOC02LjcgMTgtMTQgMjUuOS0yMS45YzYuNi02LjUgMTcuMi02LjYgMjMuOCAwYzcuOSA3LjkgMTYuMiAxNS4yIDI1LjkgMjEuOUMxODIuMyAzNTggMjAzLjEgMzY4IDIyNCAzNjh6bS01OC4yIDkwLjhDMTgyLjMgNDcwIDIwMy4xIDQ4MCAyMjQgNDgwczQxLjYtOS45IDU4LjItMjEuMmM5LjgtNi43IDE4LTE0IDI1LjktMjEuOWM2LjYtNi41IDE3LjItNi41IDIzLjcgMGM3LjkgNy45IDE2LjIgMTUuMiAyNiAyMS45QzM3NC4zIDQ3MCAzOTUuMSA0ODAgNDE2IDQ4MHM0MS42LTkuOSA1OC4yLTIxLjJjOS44LTYuNyAxOC0xNCAyNS45LTIxLjljNi42LTYuNSAxNy4yLTYuNiAyMy43IDBjNy45IDcuOSAxNi4yIDE1LjIgMjYgMjEuOWMxMi44IDguNyAyOC4xIDE2LjYgNDQuMSAxOS44YzcuNyAxLjUgMTQuMSA3LjggMTQuMSAxNS43YzAgOS44LTggMTcuOS0xNy43IDE2LjJjLTIzLjEtNC00My42LTE1LTU4LjUtMjUuMmMtNy45LTUuNC0xNC43LTEwLjgtMTkuOC0xNS4zYy01LjEgNC41LTExLjggOS45LTE5LjggMTUuM0M0NzMuNSA0OTcuOSA0NDYuMyA1MTIgNDE2IDUxMnMtNTcuNi0xNC4xLTc2LjItMjYuOGMtNy45LTUuNC0xNC42LTEwLjgtMTkuOC0xNS4zYy01LjEgNC41LTExLjggOS45LTE5LjggMTUuM0MyODEuNSA0OTcuOSAyNTQuMyA1MTIgMjI0IDUxMnMtNTcuNi0xNC4xLTc2LjItMjYuOGMtNy45LTUuNC0xNC42LTEwLjgtMTkuOC0xNS4zYy01LjEgNC41LTExLjggOS45LTE5LjggMTUuM2MtMTQuOSAxMC4yLTM1LjQgMjEuMi01OC41IDI1LjJDNDAgNTEyLjEgMzIgNTA0IDMyIDQ5NC4yYzAtNy45IDYuNC0xNC4xIDE0LjEtMTUuN2MxNS45LTMuMSAzMS4zLTExLjEgNDQtMTkuOGM5LjgtNi43IDE4LTE0IDI1LjktMjEuOWM2LjYtNi41IDE3LjItNi42IDIzLjggMGM3LjkgNy45IDE2LjIgMTUuMiAyNS45IDIxLjl6TTE0NCAyNTZhMTEyIDExMiAwIDEgMCAwLTIyNCAxMTIgMTEyIDAgMSAwIDAgMjI0ek0xNDQgMGExNDQgMTQ0IDAgMSAxIDAgMjg4QTE0NCAxNDQgMCAxIDEgMTQ0IDB6bS0zLjMgNzYuN2M2LjItNi4yIDE2LjQtNi4yIDIyLjYgMGw1NiA1NmM2LjIgNi4yIDYuMiAxNi40IDAgMjIuNmwtNTYgNTZjLTYuMiA2LjItMTYuNCA2LjItMjIuNiAwcy02LjItMTYuNCAwLTIyLjZMMTY5LjQgMTYwIDgwIDE2MGMtOC44IDAtMTYtNy4yLTE2LTE2czcuMi0xNiAxNi0xNmw4OS40IDBMMTQwLjcgOTkuM2MtNi4yLTYuMi02LjItMTYuNCAwLTIyLjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const HouseFloodWaterCircleArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M310.4 86.4c-3.6-10.3-8.1-20.2-13.4-29.6l78-54c5.5-3.8 12.7-3.8 18.2 0l208 144c7.3 5 9.1 15 4 22.3s-15 9.1-22.3 4L560 157.3l0 119.3c-2.4-1.6-4.6-3.3-6.8-5.1c-7.5-6.3-16.2-10.7-25.2-13l0-123.3L384 35.5l-73.6 51zM224 368c20.9 0 41.6-9.9 58.2-21.2c9.8-6.7 18-14 25.9-21.9c6.6-6.5 17.2-6.5 23.7 0c7.9 7.9 16.2 15.2 26 21.9C374.3 358 395.1 368 416 368s41.6-9.9 58.2-21.2c9.8-6.7 18-14 25.9-21.9c6.6-6.5 17.2-6.5 23.7 0c7.9 7.9 16.2 15.2 26 21.9c12.8 8.7 28.1 16.6 44.1 19.8c7.7 1.5 14.1 7.8 14.1 15.7c0 9.8-8 17.9-17.7 16.2c-23.1-4-43.6-15-58.5-25.2c-7.9-5.4-14.7-10.8-19.8-15.3c-5.1 4.5-11.8 9.9-19.8 15.3C473.5 385.9 446.3 400 416 400s-57.6-14.1-76.2-26.8c-7.9-5.4-14.6-10.8-19.8-15.3c-5.1 4.5-11.8 9.9-19.8 15.3C281.5 385.9 254.3 400 224 400s-57.6-14.1-76.2-26.8c-7.9-5.4-14.6-10.8-19.8-15.3c-5.1 4.5-11.8 9.9-19.8 15.3c-14.9 10.2-35.4 21.2-58.5 25.2C40 400.1 32 392 32 382.2c0-7.9 6.4-14.1 14.1-15.7c15.9-3.1 31.3-11.1 44-19.8c9.8-6.7 18-14 25.9-21.9c6.6-6.5 17.2-6.6 23.8 0c7.9 7.9 16.2 15.2 25.9 21.9C182.3 358 203.1 368 224 368zm-58.2 90.8C182.3 470 203.1 480 224 480s41.6-9.9 58.2-21.2c9.8-6.7 18-14 25.9-21.9c6.6-6.5 17.2-6.5 23.7 0c7.9 7.9 16.2 15.2 26 21.9C374.3 470 395.1 480 416 480s41.6-9.9 58.2-21.2c9.8-6.7 18-14 25.9-21.9c6.6-6.5 17.2-6.6 23.7 0c7.9 7.9 16.2 15.2 26 21.9c12.8 8.7 28.1 16.6 44.1 19.8c7.7 1.5 14.1 7.8 14.1 15.7c0 9.8-8 17.9-17.7 16.2c-23.1-4-43.6-15-58.5-25.2c-7.9-5.4-14.7-10.8-19.8-15.3c-5.1 4.5-11.8 9.9-19.8 15.3C473.5 497.9 446.3 512 416 512s-57.6-14.1-76.2-26.8c-7.9-5.4-14.6-10.8-19.8-15.3c-5.1 4.5-11.8 9.9-19.8 15.3C281.5 497.9 254.3 512 224 512s-57.6-14.1-76.2-26.8c-7.9-5.4-14.6-10.8-19.8-15.3c-5.1 4.5-11.8 9.9-19.8 15.3c-14.9 10.2-35.4 21.2-58.5 25.2C40 512.1 32 504 32 494.2c0-7.9 6.4-14.1 14.1-15.7c15.9-3.1 31.3-11.1 44-19.8c9.8-6.7 18-14 25.9-21.9c6.6-6.5 17.2-6.6 23.8 0c7.9 7.9 16.2 15.2 25.9 21.9zM144 256a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM144 0a144 144 0 1 1 0 288A144 144 0 1 1 144 0zm-3.3 76.7c6.2-6.2 16.4-6.2 22.6 0l56 56c6.2 6.2 6.2 16.4 0 22.6l-56 56c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L169.4 160 80 160c-8.8 0-16-7.2-16-16s7.2-16 16-16l89.4 0L140.7 99.3c-6.2-6.2-6.2-16.4 0-22.6z" />
    </Icon>
);

export default HouseFloodWaterCircleArrowRight;