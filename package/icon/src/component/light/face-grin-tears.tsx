
import { Icon } from "../../index";

/**
 * A component that renders the `face-grin-tears` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-tears?s=light face-grin-tears}
 * @preview ![face-grin-tears](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTEwLjkgMTc1LjRDMTQzLjMgOTEuNSAyMjQuNyAzMiAzMjAgMzJzMTc2LjcgNTkuNSAyMDkuMSAxNDMuNGMzLjIgOC4yIDEyLjQgMTIuNCAyMC43IDkuMnMxMi40LTEyLjQgOS4yLTIwLjdDNTIyIDY4IDQyOC45IDAgMzIwIDBTMTE4IDY4IDgxLjEgMTYzLjljLTMuMiA4LjIgLjkgMTcuNSA5LjIgMjAuN3MxNy41LS45IDIwLjctOS4yem0xOS41IDIwMGMtNC43LTcuNS0xNC42LTkuNy0yMi4xLTVzLTkuNyAxNC42LTUgMjIuMUMxNDguNyA0NjQuMyAyMjguOCA1MTIgMzIwIDUxMnMxNzEuMy00Ny43IDIxNi42LTExOS41YzQuNy03LjUgMi41LTE3LjQtNS0yMi4xcy0xNy40LTIuNS0yMi4xIDVDNDY5LjggNDM4LjMgMzk5LjggNDgwIDMyMCA0ODBzLTE0OS44LTQxLjctMTg5LjUtMTA0LjV6TTMyMCAzNTQuMWMzMS4yIDAgNjEuNC0yLjkgODkuOS04LjNjLTIyLjYgMjMuNi01NC41IDM4LjMtODkuOSAzOC4zcy02Ny4zLTE0LjctODkuOS0zOC4zYzI4LjUgNS40IDU4LjcgOC4zIDg5LjkgOC4zem0xNDIuOC0zMC43YzUuMi0xMS43LTYuOC0yMi40LTE5LjEtMTguN2MtMzcuMyAxMS4xLTc5LjMgMTcuNC0xMjMuOCAxNy40cy04Ni40LTYuMy0xMjMuOC0xNy40Yy0xMi4zLTMuNy0yNC4yIDctMTkuMSAxOC43YzI0LjEgNTQuNiA3OSA5Mi43IDE0Mi44IDkyLjdzMTE4LjctMzguMSAxNDIuOC05Mi43em0tMjQyLjQtMTI5YzYuMi03LjEgMTIuOC0xMC41IDE5LjUtMTAuNXMxMy40IDMuNCAxOS41IDEwLjVjNi4yIDcuMiAxMC44IDE2LjggMTIuOSAyNS40YzIuMSA4LjYgMTAuOCAxMy44IDE5LjQgMTEuNnMxMy44LTEwLjggMTEuNi0xOS40Yy0zLjItMTIuNy05LjgtMjcuMS0xOS45LTM4LjZDMjczLjYgMTYxLjkgMjU4LjggMTUyIDI0MCAxNTJzLTMzLjYgOS45LTQzLjcgMjEuNWMtMTAgMTEuNS0xNi43IDI1LjktMTkuOSAzOC42Yy0yLjEgOC42IDMuMSAxNy4zIDExLjYgMTkuNHMxNy4zLTMuMSAxOS40LTExLjZjMi4xLTguNiA2LjctMTguMiAxMi45LTI1LjR6bTE0Ny4xIDI1LjRjMi4xLTguNiA2LjctMTguMiAxMi45LTI1LjRjNi4yLTcuMSAxMi44LTEwLjUgMTkuNS0xMC41czEzLjQgMy40IDE5LjUgMTAuNWM2LjIgNy4yIDEwLjggMTYuOCAxMi45IDI1LjRjMi4xIDguNiAxMC44IDEzLjggMTkuNCAxMS42czEzLjgtMTAuOCAxMS42LTE5LjRjLTMuMi0xMi43LTkuOC0yNy4xLTE5LjktMzguNkM0MzMuNiAxNjEuOSA0MTguOCAxNTIgNDAwIDE1MnMtMzMuNiA5LjktNDMuNyAyMS41Yy0xMCAxMS41LTE2LjcgMjUuOS0xOS45IDM4LjZjLTIuMSA4LjYgMy4xIDE3LjMgMTEuNiAxOS40czE3LjMtMy4xIDE5LjQtMTEuNnptMTgwLjEgMzkuN2M3LjUgMS4yIDE1LjQgMi43IDIzIDQuNGM5LjIgMi4xIDE3LjMgNC40IDIzLjUgNi44YzUgMS45IDcuMyAzLjMgOCAzLjdjLjEgLjEgLjIgLjEgLjIgLjFsMCAwYzcuMiA3LjMgOS4yIDIzLjQtMy42IDM2LjJjLTEyLjggMTIuOC0yOC44IDEwLjgtMzYuMiAzLjZjMCAwIDAgMCAwIDBzMC0uMS0uMS0uMmMtLjQtLjYtMS44LTIuOS0zLjctNy45Yy0yLjQtNi4zLTQuNy0xNC40LTYuNy0yMy42Yy0xLjctNy42LTMuMi0xNS41LTQuNC0yMy4xem0tMzUuNS0yNC4yYzIuOSAyNiAxMS4xIDg0LjggMjcuNyAxMDEuNGMyMS42IDIxLjYgNTguMSAxOS45IDgxLjUtMy41czI1LjEtNjAgMy41LTgxLjVjLTE2LjYtMTYuNi03NS4zLTI0LjktMTAxLjQtMjcuN2MtNi41LS44LTEyLjEgNC45LTExLjMgMTEuM3pNODggMjgyLjZjLTIuMSA5LjItNC4zIDE3LjMtNi43IDIzLjZjLTEuOSA1LTMuMyA3LjMtMy43IDcuOWMtLjEgLjEtLjEgLjItLjEgLjJzMCAwIDAgMGMtNy4zIDcuMi0yMy40IDkuMS0zNi4yLTMuNnMtMTAuOC0yOC44LTMuNi0zNi4yYzAgMCAwIDAgMCAwczAgMCAwIDBzLjEgMCAuMi0uMWMuNi0uNCAyLjktMS44IDgtMy43YzYuMy0yLjQgMTQuNC00LjcgMjMuNS02LjhjNy42LTEuNyAxNS41LTMuMiAyMy00LjRjLTEuMiA3LjUtMi43IDE1LjQtNC40IDIzLjF6bTEyLjIgNTQuMmMxNi42LTE2LjYgMjQuOC03NS40IDI3LjctMTAxLjRjLjgtNi41LTQuOS0xMi4xLTExLjMtMTEuM2MtMjYuMSAyLjgtODQuOCAxMS4xLTEwMS40IDI3LjdjLTIxLjYgMjEuNi0xOS45IDU4LjEgMy41IDgxLjVzNjAgMjUuMSA4MS41IDMuNXoiLz48L3N2Zz4=|width=32|height=32)
 */
const FaceGrinTears: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M110.9 175.4C143.3 91.5 224.7 32 320 32s176.7 59.5 209.1 143.4c3.2 8.2 12.4 12.4 20.7 9.2s12.4-12.4 9.2-20.7C522 68 428.9 0 320 0S118 68 81.1 163.9c-3.2 8.2 .9 17.5 9.2 20.7s17.5-.9 20.7-9.2zm19.5 200c-4.7-7.5-14.6-9.7-22.1-5s-9.7 14.6-5 22.1C148.7 464.3 228.8 512 320 512s171.3-47.7 216.6-119.5c4.7-7.5 2.5-17.4-5-22.1s-17.4-2.5-22.1 5C469.8 438.3 399.8 480 320 480s-149.8-41.7-189.5-104.5zM320 354.1c31.2 0 61.4-2.9 89.9-8.3c-22.6 23.6-54.5 38.3-89.9 38.3s-67.3-14.7-89.9-38.3c28.5 5.4 58.7 8.3 89.9 8.3zm142.8-30.7c5.2-11.7-6.8-22.4-19.1-18.7c-37.3 11.1-79.3 17.4-123.8 17.4s-86.4-6.3-123.8-17.4c-12.3-3.7-24.2 7-19.1 18.7c24.1 54.6 79 92.7 142.8 92.7s118.7-38.1 142.8-92.7zm-242.4-129c6.2-7.1 12.8-10.5 19.5-10.5s13.4 3.4 19.5 10.5c6.2 7.2 10.8 16.8 12.9 25.4c2.1 8.6 10.8 13.8 19.4 11.6s13.8-10.8 11.6-19.4c-3.2-12.7-9.8-27.1-19.9-38.6C273.6 161.9 258.8 152 240 152s-33.6 9.9-43.7 21.5c-10 11.5-16.7 25.9-19.9 38.6c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6c2.1-8.6 6.7-18.2 12.9-25.4zm147.1 25.4c2.1-8.6 6.7-18.2 12.9-25.4c6.2-7.1 12.8-10.5 19.5-10.5s13.4 3.4 19.5 10.5c6.2 7.2 10.8 16.8 12.9 25.4c2.1 8.6 10.8 13.8 19.4 11.6s13.8-10.8 11.6-19.4c-3.2-12.7-9.8-27.1-19.9-38.6C433.6 161.9 418.8 152 400 152s-33.6 9.9-43.7 21.5c-10 11.5-16.7 25.9-19.9 38.6c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6zm180.1 39.7c7.5 1.2 15.4 2.7 23 4.4c9.2 2.1 17.3 4.4 23.5 6.8c5 1.9 7.3 3.3 8 3.7c.1 .1 .2 .1 .2 .1l0 0c7.2 7.3 9.2 23.4-3.6 36.2c-12.8 12.8-28.8 10.8-36.2 3.6c0 0 0 0 0 0s0-.1-.1-.2c-.4-.6-1.8-2.9-3.7-7.9c-2.4-6.3-4.7-14.4-6.7-23.6c-1.7-7.6-3.2-15.5-4.4-23.1zm-35.5-24.2c2.9 26 11.1 84.8 27.7 101.4c21.6 21.6 58.1 19.9 81.5-3.5s25.1-60 3.5-81.5c-16.6-16.6-75.3-24.9-101.4-27.7c-6.5-.8-12.1 4.9-11.3 11.3zM88 282.6c-2.1 9.2-4.3 17.3-6.7 23.6c-1.9 5-3.3 7.3-3.7 7.9c-.1 .1-.1 .2-.1 .2s0 0 0 0c-7.3 7.2-23.4 9.1-36.2-3.6s-10.8-28.8-3.6-36.2c0 0 0 0 0 0s0 0 0 0s.1 0 .2-.1c.6-.4 2.9-1.8 8-3.7c6.3-2.4 14.4-4.7 23.5-6.8c7.6-1.7 15.5-3.2 23-4.4c-1.2 7.5-2.7 15.4-4.4 23.1zm12.2 54.2c16.6-16.6 24.8-75.4 27.7-101.4c.8-6.5-4.9-12.1-11.3-11.3c-26.1 2.8-84.8 11.1-101.4 27.7c-21.6 21.6-19.9 58.1 3.5 81.5s60 25.1 81.5 3.5z" />
    </Icon>
);

export default FaceGrinTears;