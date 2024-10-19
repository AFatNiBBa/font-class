
import { Icon } from "../../index";

/**
 * A component that renders the `bilibili` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bilibili?s=brands bilibili}
 * @preview ![bilibili](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDg4LjYgMTA0LjFDNTA1LjMgMTIyLjIgNTEzIDE0My44IDUxMS45IDE2OS44VjM3Mi4yQzUxMS41IDM5OC42IDUwMi43IDQyMC4zIDQ4NS40IDQzNy4zQzQ2OC4yIDQ1NC4zIDQ0Ni4zIDQ2My4yIDQxOS45IDQ2NEg5Mi4wMkM2NS41NyA0NjMuMiA0My44MSA0NTQuMiAyNi43NCA0MzYuOEM5LjY4MiA0MTkuNCAuNzY2NyAzOTYuNSAwIDM2OC4yVjE2OS44Qy43NjY3IDE0My44IDkuNjgyIDEyMi4yIDI2Ljc0IDEwNC4xQzQzLjgxIDg3Ljc1IDY1LjU3IDc4Ljc3IDkyLjAyIDc4SDEyMS40TDk2LjA1IDUyLjE5QzkwLjMgNDYuNDYgODcuNDIgMzkuMTkgODcuNDIgMzAuNEM4Ny40MiAyMS42IDkwLjMgMTQuMzQgOTYuMDUgOC42MDNDMTAxLjggMi44NjggMTA5LjEgMCAxMTcuOSAwQzEyNi43IDAgMTM0IDIuODY4IDEzOS44IDguNjAzTDIxMy4xIDc4SDMwMS4xTDM3NS42IDguNjAzQzM4MS43IDIuODY4IDM4OS4yIDAgMzk4IDBDNDA2LjggMCA0MTQuMSAyLjg2OCA0MTkuOSA4LjYwM0M0MjUuNiAxNC4zNCA0MjguNSAyMS42IDQyOC41IDMwLjRDNDI4LjUgMzkuMTkgNDI1LjYgNDYuNDYgNDE5LjkgNTIuMTlMMzk0LjYgNzhMNDIzLjkgNzhDNDUwLjMgNzguNzcgNDcxLjkgODcuNzUgNDg4LjYgMTA0LjFINDg4LjZ6TTQ0OS44IDE3My44QzQ0OS40IDE2NC4yIDQ0Ni4xIDE1Ni40IDQzOS4xIDE1MC4zQzQzMy45IDE0NC4yIDQyNS4xIDE0MC45IDQxNi40IDE0MC41SDk2LjA1Qzg2LjQ2IDE0MC45IDc4LjYgMTQ0LjIgNzIuNDcgMTUwLjNDNjYuMzMgMTU2LjQgNjMuMDcgMTY0LjIgNjIuNjkgMTczLjhWMzY4LjJDNjIuNjkgMzc3LjQgNjUuOTUgMzg1LjIgNzIuNDcgMzkxLjdDNzguOTkgMzk4LjIgODYuODUgNDAxLjUgOTYuMDUgNDAxLjVINDE2LjRDNDI1LjYgNDAxLjUgNDMzLjQgMzk4LjIgNDM5LjcgMzkxLjdDNDQ2IDM4NS4yIDQ0OS40IDM3Ny40IDQ0OS44IDM2OC4yTDQ0OS44IDE3My44ek0xODUuNSAyMTYuNUMxOTEuOCAyMjIuOCAxOTUuMiAyMzAuNiAxOTUuNiAyMzkuN1YyNzNDMTk1LjIgMjgyLjIgMTkxLjkgMjg5LjkgMTg1LjggMjk2LjJDMTc5LjYgMzAyLjUgMTcxLjggMzA1LjcgMTYyLjIgMzA1LjdDMTUyLjYgMzA1LjcgMTQ0LjcgMzAyLjUgMTM4LjYgMjk2LjJDMTMyLjUgMjg5LjkgMTI5LjIgMjgyLjIgMTI4LjggMjczVjIzOS43QzEyOS4yIDIzMC42IDEzMi42IDIyMi44IDEzOC45IDIxNi41QzE0NS4yIDIxMC4yIDE1Mi4xIDIwNi45IDE2Mi4yIDIwNi41QzE3MS40IDIwNi45IDE3OS4yIDIxMC4yIDE4NS41IDIxNi41SDE4NS41ek0zNzcgMjE2LjVDMzgzLjMgMjIyLjggMzg2LjcgMjMwLjYgMzg3LjEgMjM5LjdWMjczQzM4Ni43IDI4Mi4yIDM4My40IDI4OS45IDM3Ny4zIDI5Ni4yQzM3MS4yIDMwMi41IDM2My4zIDMwNS43IDM1My43IDMwNS43QzM0NC4xIDMwNS43IDMzNi4zIDMwMi41IDMzMC4xIDI5Ni4yQzMyMy4xIDI4OS45IDMyMC43IDI4Mi4yIDMyMC40IDI3M1YyMzkuN0MzMjAuNyAyMzAuNiAzMjQuMSAyMjIuOCAzMzAuNCAyMTYuNUMzMzYuNyAyMTAuMiAzNDQuNSAyMDYuOSAzNTMuNyAyMDYuNUMzNjIuOSAyMDYuOSAzNzAuNyAyMTAuMiAzNzcgMjE2LjVIMzc3eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Bilibili: typeof Icon = x => (
    <Icon {...x}>
        <path d="M488.6 104.1C505.3 122.2 513 143.8 511.9 169.8V372.2C511.5 398.6 502.7 420.3 485.4 437.3C468.2 454.3 446.3 463.2 419.9 464H92.02C65.57 463.2 43.81 454.2 26.74 436.8C9.682 419.4 .7667 396.5 0 368.2V169.8C.7667 143.8 9.682 122.2 26.74 104.1C43.81 87.75 65.57 78.77 92.02 78H121.4L96.05 52.19C90.3 46.46 87.42 39.19 87.42 30.4C87.42 21.6 90.3 14.34 96.05 8.603C101.8 2.868 109.1 0 117.9 0C126.7 0 134 2.868 139.8 8.603L213.1 78H301.1L375.6 8.603C381.7 2.868 389.2 0 398 0C406.8 0 414.1 2.868 419.9 8.603C425.6 14.34 428.5 21.6 428.5 30.4C428.5 39.19 425.6 46.46 419.9 52.19L394.6 78L423.9 78C450.3 78.77 471.9 87.75 488.6 104.1H488.6zM449.8 173.8C449.4 164.2 446.1 156.4 439.1 150.3C433.9 144.2 425.1 140.9 416.4 140.5H96.05C86.46 140.9 78.6 144.2 72.47 150.3C66.33 156.4 63.07 164.2 62.69 173.8V368.2C62.69 377.4 65.95 385.2 72.47 391.7C78.99 398.2 86.85 401.5 96.05 401.5H416.4C425.6 401.5 433.4 398.2 439.7 391.7C446 385.2 449.4 377.4 449.8 368.2L449.8 173.8zM185.5 216.5C191.8 222.8 195.2 230.6 195.6 239.7V273C195.2 282.2 191.9 289.9 185.8 296.2C179.6 302.5 171.8 305.7 162.2 305.7C152.6 305.7 144.7 302.5 138.6 296.2C132.5 289.9 129.2 282.2 128.8 273V239.7C129.2 230.6 132.6 222.8 138.9 216.5C145.2 210.2 152.1 206.9 162.2 206.5C171.4 206.9 179.2 210.2 185.5 216.5H185.5zM377 216.5C383.3 222.8 386.7 230.6 387.1 239.7V273C386.7 282.2 383.4 289.9 377.3 296.2C371.2 302.5 363.3 305.7 353.7 305.7C344.1 305.7 336.3 302.5 330.1 296.2C323.1 289.9 320.7 282.2 320.4 273V239.7C320.7 230.6 324.1 222.8 330.4 216.5C336.7 210.2 344.5 206.9 353.7 206.5C362.9 206.9 370.7 210.2 377 216.5H377z" />
    </Icon>
);

export default Bilibili;