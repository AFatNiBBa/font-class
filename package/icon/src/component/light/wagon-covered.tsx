
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `wagon-covered` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wagon-covered?s=light wagon-covered}
 * @preview ![wagon-covered](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjkuNjE0IDI3Ljc1QzYxNy45ODcgMTAuMzc1IDU5OC40ODUgMCA1NzcuNjA4IDBDNTYwLjczMyAwIDQyNi4wOTYgMzIgNDA5Ljk2OSAzMkMzOTguNDY3IDIxLjc1IDM4My40NjcgMTYgMzY3Ljk2NSAxNkgyNzEuOTU3QzI1Ni40NTUgMTYgMjQxLjU3OSAyMS43NSAyMjkuOTU0IDMyQzIxMy44MjcgMzIgNzkuNDQgMCA2Mi4zMTMgMEM0MS41NjEgMCAyMi4xODQgMTAuMjUgMTAuNTU5IDI3LjVDLTEuMDY4IDQ0Ljc1IC0zLjE5MyA2Ni42MjUgNC42ODIgODUuODc1TDk1Ljk0MiAyNTZWMjcyLjA2MkM5NS45NDIgMjgwLjg2MyAxMDMuMDc3IDI4OCAxMTEuODc5IDI4OFMxMjcuODE5IDI4MC44NjMgMTI3LjgxOSAyNzIuMDYyVjI1Nkg1MTIuMTAyVjI3Mi4wNjJDNTEyLjEwMiAyODAuODYzIDUxOS4yMzkgMjg4IDUyOC4wNDEgMjg4UzU0My45ODEgMjgwLjg2MyA1NDMuOTgxIDI3Mi4wNjJWMjU2SDU0NC4xMDZMNjM1LjExNCA4Ni4zNzVDNjQzLjIzOSA2Ny4xMjUgNjQxLjExNCA0NS4xMjUgNjI5LjYxNCAyNy43NVpNMjA3Ljk1MiA3OS42MjVWMjI0SDExNS4wNjdMMzMuNjg2IDcyLjI1QzMwLjE4NiA2Mi4zNzUgMzIuMDYxIDUxLjM3NSAzOC42ODYgNDMuMjVDNDUuNTYxIDM0Ljc1IDU2LjQzOCAzMC42MjUgNjcuMTg4IDMyLjM3NUwyMTAuNzAyIDYyQzIwOC45NTIgNjcuNjI1IDIwOC4wNzcgNzMuNjI1IDIwNy45NTIgNzkuNjI1Wk0zOTkuOTY3IDIyNEgyMzkuOTU0Vjc5LjYyNUMyMzkuOTU0IDczLjg3NSAyNDIuNTc5IDY3LjUgMjQ0LjcwNCA2NEMyNTAuMjA1IDU0LjUgMjYwLjA4IDQ3Ljc1IDI3MS45NTcgNDcuNzVIMzY3Ljk2NUMzNzkuODQgNDcuNzUgMzg5LjcxNyA1NC41IDM5NS4yMTcgNjRDMzk3LjM0MiA2Ny41IDM5OS45NjcgNzMuODc1IDM5OS45NjcgNzkuNjI1VjIyNFpNNjA1Ljk4NyA3Mi43NUw1MjQuOTc5IDIyNEg0MzEuOTcxVjc5LjYyNUM0MzEuODQ2IDczLjYyNSA0MzAuOTcxIDY3Ljc1IDQyOS4yMjEgNjJMNTcxLjk4MyAzMi41QzU3NS4zNTggMzEuODc1IDU5MC40ODUgMjkuODc1IDYwMS4yMzUgNDMuMjVDNjA3Ljk4NyA1MS41IDYwOS43MzcgNjIuNzUgNjA1Ljk4NyA3Mi43NVpNNDY0IDI4OEM0MDIuMTQ1IDI4OCAzNTIgMzM4LjE0NSAzNTIgNDAwUzQwMi4xNDUgNTEyIDQ2NCA1MTJTNTc2IDQ2MS44NTUgNTc2IDQwMFM1MjUuODU2IDI4OCA0NjQgMjg4Wk00NDggNDc4LjM4MUM0MTYuNzAyIDQ3Mi4wMDIgMzkxLjk5OCA0NDcuMjk5IDM4NS42MiA0MTZINDQ4VjQ3OC4zODFaTTQ0OCAzODRIMzg1LjYyQzM5MS45OTggMzUyLjcwMSA0MTYuNzAyIDMyNy45OTggNDQ4IDMyMS42MTlWMzg0Wk00ODAgNDc4LjM4MVY0MTZINTQyLjM4MUM1MzYuMDAyIDQ0Ny4yOTkgNTExLjMwMSA0NzIuMDAyIDQ4MCA0NzguMzgxWk00ODAgMzg0VjMyMS42MTlDNTExLjMwMSAzMjcuOTk4IDUzNi4wMDIgMzUyLjcwMSA1NDIuMzgxIDM4NEg0ODBaTTE3NiAyODhDMTE0LjE0NSAyODggNjQgMzM4LjE0NSA2NCA0MDBTMTE0LjE0NSA1MTIgMTc2IDUxMlMyODggNDYxLjg1NSAyODggNDAwUzIzNy44NTYgMjg4IDE3NiAyODhaTTE2MCA0NzguMzgxQzEyOC43MDIgNDcyLjAwMiAxMDMuOTk4IDQ0Ny4yOTkgOTcuNjIgNDE2SDE2MFY0NzguMzgxWk0xNjAgMzg0SDk3LjYyQzEwMy45OTggMzUyLjcwMSAxMjguNzAyIDMyNy45OTggMTYwIDMyMS42MTlWMzg0Wk0xOTIgNDc4LjM4MVY0MTZIMjU0LjM4MUMyNDguMDAyIDQ0Ny4yOTkgMjIzLjMwMSA0NzIuMDAyIDE5MiA0NzguMzgxWk0xOTIgMzg0VjMyMS42MTlDMjIzLjMwMSAzMjcuOTk4IDI0OC4wMDIgMzUyLjcwMSAyNTQuMzgxIDM4NEgxOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function WagonCovered(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M629.614 27.75C617.987 10.375 598.485 0 577.608 0C560.733 0 426.096 32 409.969 32C398.467 21.75 383.467 16 367.965 16H271.957C256.455 16 241.579 21.75 229.954 32C213.827 32 79.44 0 62.313 0C41.561 0 22.184 10.25 10.559 27.5C-1.068 44.75 -3.193 66.625 4.682 85.875L95.942 256V272.062C95.942 280.863 103.077 288 111.879 288S127.819 280.863 127.819 272.062V256H512.102V272.062C512.102 280.863 519.239 288 528.041 288S543.981 280.863 543.981 272.062V256H544.106L635.114 86.375C643.239 67.125 641.114 45.125 629.614 27.75ZM207.952 79.625V224H115.067L33.686 72.25C30.186 62.375 32.061 51.375 38.686 43.25C45.561 34.75 56.438 30.625 67.188 32.375L210.702 62C208.952 67.625 208.077 73.625 207.952 79.625ZM399.967 224H239.954V79.625C239.954 73.875 242.579 67.5 244.704 64C250.205 54.5 260.08 47.75 271.957 47.75H367.965C379.84 47.75 389.717 54.5 395.217 64C397.342 67.5 399.967 73.875 399.967 79.625V224ZM605.987 72.75L524.979 224H431.971V79.625C431.846 73.625 430.971 67.75 429.221 62L571.983 32.5C575.358 31.875 590.485 29.875 601.235 43.25C607.987 51.5 609.737 62.75 605.987 72.75ZM464 288C402.145 288 352 338.145 352 400S402.145 512 464 512S576 461.855 576 400S525.856 288 464 288ZM448 478.381C416.702 472.002 391.998 447.299 385.62 416H448V478.381ZM448 384H385.62C391.998 352.701 416.702 327.998 448 321.619V384ZM480 478.381V416H542.381C536.002 447.299 511.301 472.002 480 478.381ZM480 384V321.619C511.301 327.998 536.002 352.701 542.381 384H480ZM176 288C114.145 288 64 338.145 64 400S114.145 512 176 512S288 461.855 288 400S237.856 288 176 288ZM160 478.381C128.702 472.002 103.998 447.299 97.62 416H160V478.381ZM160 384H97.62C103.998 352.701 128.702 327.998 160 321.619V384ZM192 478.381V416H254.381C248.002 447.299 223.301 472.002 192 478.381ZM192 384V321.619C223.301 327.998 248.002 352.701 254.381 384H192Z" />
        </Icon>
    </>
}