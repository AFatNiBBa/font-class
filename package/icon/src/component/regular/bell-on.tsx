
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bell-on` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bell-on?s=regular bell-on}
 * @preview ![bell-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjEgMTAyLjU3N0M1MjUuMTI1IDEwMi41NzcgNTI5LjI1IDEwMS40NTUgNTMzIDk5LjMzNEw1ODguMzc1IDY3LjM5NkM1OTkuNjI1IDYwLjY1OSA2MDMuMjUgNDYuMTg4IDU5Ni43NSAzNC45NTlDNTkwLjI1IDIzLjYwNyA1NzUuNzUgMTkuNjE0IDU2NC4zNzUgMjUuOTc3TDUwOSA1Ny45MTVDNDk5LjUgNjMuMjc5IDQ5NSA3NC4zODIgNDk3Ljc1IDg0Ljg2MkM1MDAuNjI1IDk1LjM0MiA1MTAuMTI1IDEwMi41NzcgNTIxIDEwMi41NzdaTTExMiAxOTQuMzk4QzExMiAxODEuMTc0IDEwMS4yNSAxNzAuNDQ1IDg4IDE3MC40NDVIMjRDMTAuNzUgMTcwLjQ0NSAwIDE4MS4xNzQgMCAxOTQuMzk4UzEwLjc1IDIxOC4zNTEgMjQgMjE4LjM1MUg4OEMxMDEuMjUgMjE4LjM1MSAxMTIgMjA3LjYyMiAxMTIgMTk0LjM5OFpNNTEuNjI1IDY3LjM5NkwxMDcuMTI1IDk5LjMzNEMxMTQuNSAxMDMuODI1IDEyMy43NSAxMDMuOTUgMTMxLjM3NSA5OS43MDhDMTM4Ljg3NSA5NS4zNDIgMTQzLjUgODcuMzU3IDE0My41IDc4Ljc0OUMxNDMuMzc1IDcwLjAxNiAxMzguNjI1IDYyLjAzMiAxMzEuMTI1IDU3LjkxNUw3NS42MjUgMjUuOTc3QzY4LjI1IDIxLjQ4NiA1OSAyMS4zNjEgNTEuMzc1IDI1LjYwM0M0My44NzUgMjkuOTY5IDM5LjI1IDM3Ljk1NCAzOS4yNSA0Ni41NjJDMzkuMzc1IDU1LjI5NSA0NC4xMjUgNjMuMjc5IDUxLjYyNSA2Ny4zOTZaTTYxNiAxNzAuNDQ1SDU1MkM1MzguNzUgMTcwLjQ0NSA1MjggMTgxLjE3NCA1MjggMTk0LjM5OFM1MzguNzUgMjE4LjM1MSA1NTIgMjE4LjM1MUg2MTZDNjI5LjI1IDIxOC4zNTEgNjQwIDIwNy42MjIgNjQwIDE5NC4zOThTNjI5LjI1IDE3MC40NDUgNjE2IDE3MC40NDVaTTQ3OS44NzUgMjEwLjM2N0M0NzkuODc1IDEzMi43NjggNDI1LjUgNzAuNzY1IDM1MiA1NS41NDRWMzQuNzFDMzUyLjM3NSAyMy4xMDggMzQ2LjI1IDEyLjEyOSAzMzYuMjUgNi4yNjZDMzI2LjI1IDAuMjc3IDMxMy43NSAwLjI3NyAzMDMuNzUgNi4yNjZDMjkzLjYyNSAxMi4xMjkgMjg3LjYyNSAyMy4xMDggMjg4IDM0LjcxVjU1LjU0NEMyMTQuNSA3MC43NjUgMTYwLjEyNSAxMzIuNzY4IDE2MC4xMjUgMjEwLjM2N0MxNjAuMTI1IDMxMi40MTggMTI0IDM0My42MDcgMTA0LjYyNSAzNjQuMzE2Qzk5IDM3MC4xOCA5NiAzNzcuOTE1IDk2IDM4Ni4wMjRDOTYuMTI1IDQwMi4zNjcgMTA5IDQxNy45NjEgMTI4LjEyNSA0MTcuOTYxSDUxMS44NzVDNTMxIDQxNy45NjEgNTQzLjg3NSA0MDIuMzY3IDU0NCAzODYuMDI0QzU0NCAzNzcuOTE1IDU0MSAzNzAuMTggNTM1LjM3NSAzNjQuMzE2QzUxNiAzNDMuNjA3IDQ3OS44NzUgMzEyLjQxOCA0NzkuODc1IDIxMC4zNjdaTTE2My41IDM3MC4wNTVDMTg0Ljc1IDM0Mi4xMSAyMDggMjk1LjgyNSAyMDggMjEwLjk5MUMyMDggMjEwLjc0MSAyMDggMjEwLjYxNiAyMDggMjEwLjM2N0MyMDggMTQ4LjYxMiAyNTguMTI1IDk4LjU4NSAzMjAgOTguNTg1UzQzMiAxNDguNjEyIDQzMiAyMTAuMzY3QzQzMiAyMTAuNjE2IDQzMiAyMTAuNzQxIDQzMiAyMTAuOTkxQzQzMiAyOTUuOTUgNDU1LjI1IDM0Mi4xMSA0NzYuNSAzNzAuMDU1SDE2My41Wk0zMjAgNTEzLjc3NEMzNTUuMzc1IDUxMy43NzQgMzg0IDQ4NS4yMDUgMzg0IDQ0OS44OTlIMjU2QzI1NiA0ODUuMjA1IDI4NC42MjUgNTEzLjc3NCAzMjAgNTEzLjc3NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BellOn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M521 102.577C525.125 102.577 529.25 101.455 533 99.334L588.375 67.396C599.625 60.659 603.25 46.188 596.75 34.959C590.25 23.607 575.75 19.614 564.375 25.977L509 57.915C499.5 63.279 495 74.382 497.75 84.862C500.625 95.342 510.125 102.577 521 102.577ZM112 194.398C112 181.174 101.25 170.445 88 170.445H24C10.75 170.445 0 181.174 0 194.398S10.75 218.351 24 218.351H88C101.25 218.351 112 207.622 112 194.398ZM51.625 67.396L107.125 99.334C114.5 103.825 123.75 103.95 131.375 99.708C138.875 95.342 143.5 87.357 143.5 78.749C143.375 70.016 138.625 62.032 131.125 57.915L75.625 25.977C68.25 21.486 59 21.361 51.375 25.603C43.875 29.969 39.25 37.954 39.25 46.562C39.375 55.295 44.125 63.279 51.625 67.396ZM616 170.445H552C538.75 170.445 528 181.174 528 194.398S538.75 218.351 552 218.351H616C629.25 218.351 640 207.622 640 194.398S629.25 170.445 616 170.445ZM479.875 210.367C479.875 132.768 425.5 70.765 352 55.544V34.71C352.375 23.108 346.25 12.129 336.25 6.266C326.25 0.277 313.75 0.277 303.75 6.266C293.625 12.129 287.625 23.108 288 34.71V55.544C214.5 70.765 160.125 132.768 160.125 210.367C160.125 312.418 124 343.607 104.625 364.316C99 370.18 96 377.915 96 386.024C96.125 402.367 109 417.961 128.125 417.961H511.875C531 417.961 543.875 402.367 544 386.024C544 377.915 541 370.18 535.375 364.316C516 343.607 479.875 312.418 479.875 210.367ZM163.5 370.055C184.75 342.11 208 295.825 208 210.991C208 210.741 208 210.616 208 210.367C208 148.612 258.125 98.585 320 98.585S432 148.612 432 210.367C432 210.616 432 210.741 432 210.991C432 295.95 455.25 342.11 476.5 370.055H163.5ZM320 513.774C355.375 513.774 384 485.205 384 449.899H256C256 485.205 284.625 513.774 320 513.774Z" />
        </Icon>
    </>
}