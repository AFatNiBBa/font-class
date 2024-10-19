
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `knife-kitchen` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/knife-kitchen?s=thin knife-kitchen}
 * @preview ![knife-kitchen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODcuODQ3IDMzMi42NjlDMzg0Ljc4NCAzMzUuODU2IDM4NC44NzggMzQwLjkxNyAzODguMDY1IDM0My45NzlDMzg5LjUzNCAzNDUuMzg0IDM5MC4zNDcgMzQ3LjIyOCAzOTAuMzQ3IDM0OS4xNjVDMzkwLjM0NyAzNTEuMTAyIDM4OS41MzQgMzUyLjkxNCAzODguMDY1IDM1NC4zMkwzMjguNzU0IDQxMS4zMzdDMjQ3Ljg5NiA0ODkuMDY4IDEzMC4xNDcgNTE1LjY4NyAyMS41NzEgNDgxLjA3QzE4Ljc0MyA0ODAuMTMzIDE2Ljc3NCA0NzguMDcxIDE2LjE4MSA0NzUuNDE1QzE1Ljg1MiA0NzQuMDA5IDE1LjY5NiA0NzEuMjYgMTguMzA1IDQ2OC43OTJMMjczLjYxNCAyMjMuNTA4QzI3Ni44MDEgMjIwLjQ0NiAyNzYuODk1IDIxNS4zODUgMjczLjgzMyAyMTIuMTk4QzI3MC44MTcgMjA4Ljk4IDI2NS43MjQgMjA4Ljk0OSAyNjIuNTIgMjExLjk0OEw3LjI0MyA0NTcuMjMyQzEuMjc0IDQ2Mi45MTggLTEuMjI1IDQ3MS4wNDEgMC41NzEgNDc4Ljk0NkMyLjQxNSA0ODcuMSA4LjM5OSA0OTMuNTY3IDE2LjYzNCA0OTYuMjg1QzQ5LjcyNyA1MDYuODQ1IDgzLjYwMSA1MTIgMTE3LjExNiA1MTJDMTk5LjM2NSA1MTIgMjc5LjM5NSA0ODAuOTc2IDMzOS44NDcgNDIyLjg5N0wzOTkuMTQzIDM2NS44NzlDNDAzLjc4NCAzNjEuNDQzIDQwNi4zMzEgMzU1LjUwNyA0MDYuMzQ2IDM0OS4xOTZDNDA2LjM2MiAzNDIuODU0IDQwMy44IDMzNi44ODcgMzk5LjE1OSAzMzIuNDE5QzM5NS45ODcgMzI5LjQ1MSAzOTAuOTQgMzI5LjQ1MSAzODcuODQ3IDMzMi42NjlaTTQ3OS4wMDEgNjIuOTIyQzQ3NC40ODYgNjcuNDIxIDQ3Mi4wMDIgNzMuMzg4IDQ3Mi4wMDIgNzkuNzYyUzQ3NC40ODYgOTIuMTAzIDQ3OS4wMTcgOTYuNjAxQzQ4My42NzMgMTAxLjI1NyA0ODkuNzgzIDEwMy41NjggNDk1Ljg5MiAxMDMuNTY4QzUwMi4wMDEgMTAzLjU2OCA1MDguMTEgMTAxLjI1NyA1MTIuNzY3IDk2LjYzM0M1MTcuMjY3IDkyLjIyNyA1MTkuNzY2IDg2LjI5MSA1MTkuNzk4IDc5LjkxOEM1MTkuODQ1IDczLjQ4MiA1MTcuMzQ1IDY3LjQ1MiA1MTIuNzk4IDYyLjkyMkM1MDMuNTE3IDUzLjY0MyA0ODguMzQ1IDUzLjY0MyA0NzkuMDAxIDYyLjkyMlpNNTAxLjU2NCA4NS4yMjlDNTAxLjUzMiA4NS4yMjkgNTAxLjUxNyA4NS4yNiA1MDEuNTAxIDg1LjI5MkM0OTguNDA3IDg4LjMyMiA0OTMuMzc2IDg4LjM1MyA0OTAuMzE0IDg1LjI5MkM0ODguODI5IDgzLjc5MiA0ODguMDAxIDgxLjg1NSA0ODguMDAxIDc5Ljc2MlM0ODguODI5IDc1LjczMiA0OTAuMzE0IDc0LjIzMkM0OTEuODQ1IDcyLjcwMSA0OTMuODc2IDcxLjkyIDQ5NS44OTIgNzEuOTJDNDk3LjkyMyA3MS45MiA0OTkuOTU0IDcyLjcwMSA1MDEuNTAxIDc0LjIzMkM1MDMuMDAxIDc1LjczMiA1MDMuODE0IDc3LjczMSA1MDMuNzk4IDc5Ljg1NkM1MDMuNzk4IDgxLjkxOCA1MDMuMDAxIDgzLjgyMyA1MDEuNTY0IDg1LjIyOVpNNDE0Ljk3MSAxMjYuODQ0QzQxMC40NzEgMTMxLjM0MyA0MDcuOTg3IDEzNy4zMSA0MDguMDAzIDE0My42NTJDNDA4LjAwMyAxNDkuOTk1IDQxMC40ODcgMTU1Ljk2MiA0MTQuOTcxIDE2MC4zOThDNDE5LjYxMiAxNjUuMDIyIDQyNS42OSAxNjcuMzM0IDQzMS43ODMgMTY3LjMzNFM0NDMuOTU1IDE2NS4wMjIgNDQ4LjU5NiAxNjAuMzk4QzQ1My4wOCAxNTUuOTMxIDQ1NS41NjQgMTQ5Ljk5NSA0NTUuNTY0IDE0My42NTJDNDU1LjU4IDEzNy4zMSA0NTMuMDk2IDEzMS4zNDMgNDQ4LjU4IDEyNi44MTNDNDM5LjI5OSAxMTcuNjI4IDQyNC4yNTIgMTE3LjU5NiA0MTQuOTcxIDEyNi44NDRaTTQzNy4yOTkgMTQ5LjA1N0M0MzcuMjk5IDE0OS4wNTcgNDM3LjI5OSAxNDkuMDg5IDQzNy4yODMgMTQ5LjA4OUM0MzQuMjUyIDE1Mi4wODggNDI5LjI5OSAxNTIuMTE5IDQyNi4yNjggMTQ5LjA1N0M0MjQuNzk5IDE0Ny42MiA0MjQuMDAyIDE0NS42ODMgNDI0LjAwMiAxNDMuNjUyQzQyNC4wMDIgMTQxLjU5IDQyNC43OTkgMTM5LjYyMiA0MjYuMjY4IDEzOC4xODVDNDI3Ljc4NCAxMzYuNjU0IDQyOS43ODQgMTM1LjkwNCA0MzEuNzgzIDEzNS45MDRTNDM1Ljc4MyAxMzYuNjU0IDQzNy4yODMgMTM4LjE1NEM0MzguNzY4IDEzOS42MjIgNDM5LjU2NSAxNDEuNTkgNDM5LjU2NSAxNDMuNjUyQzQzOS41NjUgMTQ1LjY4MyA0MzguNzY4IDE0Ny42MiA0MzcuMjk5IDE0OS4wNTdaTTU2NC4wNDcgNDQuMDUyTDUyOS45MDcgMTEuMjQ3QzUxNC4yNjcgLTMuNzQ5IDQ4OC43OTggLTMuNzQ5IDQ3My4xMjcgMTEuMjQ3TDI4Ni4yMjMgMTkwLjc2NkMyODQuNjYxIDE5Mi4yOTcgMjgzLjc3IDE5NC4zNTkgMjgzLjc3IDE5Ni41NDZTMjg0LjY2MSAyMDAuNzk1IDI4Ni4yMjMgMjAyLjI5NEwzOTUuMTEyIDMwNy4wMTlDMzk2LjY1OSAzMDguNTE4IDM5OC42NTkgMzA5LjI2OCA0MDAuNjU5IDMwOS4yNjhDNDAyLjQyNSAzMDkuMjY4IDQwNC4yMDYgMzA4LjY3NSA0MDUuNjc1IDMwNy41MTlMNDM5LjYxMSAyODAuMTgyQzQ0Ny4zMTQgMjcyLjgwOCA0NTEuNTQ5IDI2Mi45OTggNDUxLjU0OSAyNTIuNTAxVjIxMi42OThMNTY0LjA0NyA5OS41NjlDNTcxLjc2NiA5Mi4xNjUgNTc2IDgyLjI5MiA1NzYgNzEuNzY0QzU3NS45ODQgNjEuMjY2IDU3MS43NSA1MS40MjUgNTY0LjA0NyA0NC4wNTJaTTU1Mi44NDQgODguMTY2TDQzNy44NzcgMjAzLjczMkM0MzYuMzkzIDIwNS4yMzEgNDM1LjU0OSAyMDcuMjYyIDQzNS41NDkgMjA5LjM4NlYyNTIuNTAxQzQzNS41NDkgMjU4LjU5MyA0MzMuMDY1IDI2NC4zMSA0MjkuMDY1IDI2OC4xNTNMNDAxLjEyOCAyOTAuNjE3TDMwMy4zMTcgMTk2LjU0Nkw0ODQuMjA1IDIyLjgwN0M0OTMuNzY3IDEzLjYyMiA1MDkuMjgyIDEzLjYyMiA1MTguODEzIDIyLjgwN0w1NTIuOTY5IDU1LjYxMUM1NTIuOTg1IDU1LjYxMSA1NTIuOTg1IDU1LjYxMSA1NTIuOTg1IDU1LjYxMUM1NTcuNSA1OS45MjMgNTU5Ljk4NSA2NS42NzEgNTYwIDcxLjc5NUM1NjAgNzcuOTE4IDU1Ny41IDgzLjY2NyA1NTIuODQ0IDg4LjE2NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function KnifeKitchen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M387.847 332.669C384.784 335.856 384.878 340.917 388.065 343.979C389.534 345.384 390.347 347.228 390.347 349.165C390.347 351.102 389.534 352.914 388.065 354.32L328.754 411.337C247.896 489.068 130.147 515.687 21.571 481.07C18.743 480.133 16.774 478.071 16.181 475.415C15.852 474.009 15.696 471.26 18.305 468.792L273.614 223.508C276.801 220.446 276.895 215.385 273.833 212.198C270.817 208.98 265.724 208.949 262.52 211.948L7.243 457.232C1.274 462.918 -1.225 471.041 0.571 478.946C2.415 487.1 8.399 493.567 16.634 496.285C49.727 506.845 83.601 512 117.116 512C199.365 512 279.395 480.976 339.847 422.897L399.143 365.879C403.784 361.443 406.331 355.507 406.346 349.196C406.362 342.854 403.8 336.887 399.159 332.419C395.987 329.451 390.94 329.451 387.847 332.669ZM479.001 62.922C474.486 67.421 472.002 73.388 472.002 79.762S474.486 92.103 479.017 96.601C483.673 101.257 489.783 103.568 495.892 103.568C502.001 103.568 508.11 101.257 512.767 96.633C517.267 92.227 519.766 86.291 519.798 79.918C519.845 73.482 517.345 67.452 512.798 62.922C503.517 53.643 488.345 53.643 479.001 62.922ZM501.564 85.229C501.532 85.229 501.517 85.26 501.501 85.292C498.407 88.322 493.376 88.353 490.314 85.292C488.829 83.792 488.001 81.855 488.001 79.762S488.829 75.732 490.314 74.232C491.845 72.701 493.876 71.92 495.892 71.92C497.923 71.92 499.954 72.701 501.501 74.232C503.001 75.732 503.814 77.731 503.798 79.856C503.798 81.918 503.001 83.823 501.564 85.229ZM414.971 126.844C410.471 131.343 407.987 137.31 408.003 143.652C408.003 149.995 410.487 155.962 414.971 160.398C419.612 165.022 425.69 167.334 431.783 167.334S443.955 165.022 448.596 160.398C453.08 155.931 455.564 149.995 455.564 143.652C455.58 137.31 453.096 131.343 448.58 126.813C439.299 117.628 424.252 117.596 414.971 126.844ZM437.299 149.057C437.299 149.057 437.299 149.089 437.283 149.089C434.252 152.088 429.299 152.119 426.268 149.057C424.799 147.62 424.002 145.683 424.002 143.652C424.002 141.59 424.799 139.622 426.268 138.185C427.784 136.654 429.784 135.904 431.783 135.904S435.783 136.654 437.283 138.154C438.768 139.622 439.565 141.59 439.565 143.652C439.565 145.683 438.768 147.62 437.299 149.057ZM564.047 44.052L529.907 11.247C514.267 -3.749 488.798 -3.749 473.127 11.247L286.223 190.766C284.661 192.297 283.77 194.359 283.77 196.546S284.661 200.795 286.223 202.294L395.112 307.019C396.659 308.518 398.659 309.268 400.659 309.268C402.425 309.268 404.206 308.675 405.675 307.519L439.611 280.182C447.314 272.808 451.549 262.998 451.549 252.501V212.698L564.047 99.569C571.766 92.165 576 82.292 576 71.764C575.984 61.266 571.75 51.425 564.047 44.052ZM552.844 88.166L437.877 203.732C436.393 205.231 435.549 207.262 435.549 209.386V252.501C435.549 258.593 433.065 264.31 429.065 268.153L401.128 290.617L303.317 196.546L484.205 22.807C493.767 13.622 509.282 13.622 518.813 22.807L552.969 55.611C552.985 55.611 552.985 55.611 552.985 55.611C557.5 59.923 559.985 65.671 560 71.795C560 77.918 557.5 83.667 552.844 88.166Z" />
        </Icon>
    </>
}