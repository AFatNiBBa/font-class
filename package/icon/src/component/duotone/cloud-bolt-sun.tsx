
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-bolt-sun` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-bolt-sun?s=duotone cloud-bolt-sun}
 * @preview ![cloud-bolt-sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2NC4wMDQgMzY4LjAwNkg0MDguMjc3TDQ0Ni43MjMgMjc4LjMwOUM0NDkuNjYgMjcxLjQ0OSA0NDcuNDQxIDI2My40NjUgNDQxLjQxIDI1OS4wNzRDNDM1LjMxNCAyNTQuNjUyIDQyNy4wNjQgMjU1LjA0MyA0MjEuNDcxIDI1OS45NjVMMjkzLjQ2NSAzNzEuOTU5QzI4OC40MzIgMzc2LjM1IDI4Ni42ODIgMzgzLjM5NiAyODkuMDI1IDM4OS42MzFDMjkxLjM3MSAzOTUuODgxIDI5Ny4zNCA0MDAuMDA2IDMwMy45OTYgNDAwLjAwNkgzNTkuNzIzTDMyMS4yNzcgNDg5LjcwM0MzMTguMzQgNDk2LjU2MyAzMjAuNTU5IDUwNC41NDcgMzI2LjU5IDUwOC45MzhDMzI5LjQwNCA1MTAuOTg0IDMzMi43MTcgNTEyIDMzNS45OTggNTEyQzMzOS43NzkgNTEyIDM0My41MjkgNTEwLjY3MiAzNDYuNTI5IDUwOC4wNDdMNDc0LjUzNSAzOTYuMDUzQzQ3OS41NjggMzkxLjY2MiA0ODEuMzE4IDM4NC42MTUgNDc4Ljk3NSAzNzguMzgxQzQ3Ni42MjkgMzcyLjEzMSA0NzAuNjYgMzY4LjAwNiA0NjQuMDA0IDM2OC4wMDZaTTE1Ni4wOTQgMjU5Ljg0NEMxMTguNzE5IDIyMi40NjkgMTE4LjcxOSAxNjEuNTk0IDE1Ni4wOTQgMTI0LjA5NEMxOTAuNzE5IDg5LjQ2OSAyNDUuMjE5IDg3LjIxOSAyODIuNzE5IDExNi43MTlDMzAyLjcxOSAxMDMuNzE5IDMyNi4zNDQgOTUuOTY5IDM1MS45NjkgOTUuOTY5QzM1Mi43MTkgOTUuOTY5IDM1My4yMTkgOTYuMjE5IDM1My45NjkgOTYuMjE5TDM2Mi44NDQgNjkuNDY5QzM2Ni4yMTkgNTkuMjE5IDM1Ni41OTQgNDkuNzE5IDM0Ni4zNDQgNTMuMDk0TDI3MS4wOTQgNzguMjE5TDIzNS41OTQgNy4yMTlDMjMwLjcxOSAtMi40MDYgMjE3LjA5NCAtMi40MDYgMjEyLjIxOSA3LjIxOUwxNzYuNzE5IDc4LjIxOUwxMDEuNDY5IDUzLjA5NEM5MS4yMTkgNDkuNzE5IDgxLjcxOSA1OS4zNDQgODUuMDk0IDY5LjU5NEwxMTAuMjE5IDE0NC44NDRMMzkuMjE5IDE4MC4zNDRDMjkuNTk0IDE4NS4yMTkgMjkuNTk0IDE5OC44NDQgMzkuMjE5IDIwMy43MTlMMTEwLjIxOSAyMzkuMjE5TDg1LjA5NCAzMTQuNDY5QzgxLjcxOSAzMjQuNzE5IDkxLjM0NCAzMzQuMjE5IDEwMS41OTQgMzMwLjk2OUwxNjAuNzE5IDMxMS4yMTlDMTYwLjU5NCAzMDguODQ0IDE2MC4wOTQgMzA2LjU5NCAxNjAuMDk0IDMwNC4wOTRDMTYwLjA5NCAyOTEuNTk0IDE2Mi4zNDQgMjc5LjU5NCAxNjYuMjE5IDI2OC4yMTlDMTYyLjcxOSAyNjUuNDY5IDE1OS4yMTkgMjYyLjk2OSAxNTYuMDk0IDI1OS44NDRaTTIyNS44NDQgMjAxLjg0NEMyMzAuMjE5IDE3Ny4zNDQgMjQxLjcxOSAxNTUuNDY5IDI1Ny43MTkgMTM3Ljg0NEMyNDcuOTY5IDEzMS43MTkgMjM2LjM0NCAxMjcuOTY5IDIyMy45NjkgMTI3Ljk2OUMxODguNzE5IDEyNy45NjkgMTU5Ljk2OSAxNTYuNzE5IDE1OS45NjkgMTkxLjk2OUMxNTkuOTY5IDIxMC43MTkgMTY4LjIxOSAyMjcuMzQ0IDE4MS4wOTQgMjM5LjA5NEMxOTIuMzQ0IDIyMy4yMTkgMjA3LjcxOSAyMTAuMjE5IDIyNS44NDQgMjAxLjg0NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjA4IDMwNEM2MDggMzQ4LjI1IDU3Mi4yMzggMzg0IDUyNy45NzcgMzg0SDUxMS42NTRDNTExLjY2OCAzNzguMzE2IDUxMC45OTQgMzcyLjYxNyA1MDguOTI4IDM2Ny4xMTlDNTAxLjk1MSAzNDguNTIgNDgzLjg5NSAzMzYuMDA2IDQ2NC4wMDQgMzM2LjAwNkg0NTYuODA3TDQ3Ni4xMzUgMjkwLjkxNEM0ODUuMDA2IDI3MC4xOTkgNDc4LjQ2OSAyNDYuNDczIDQ2MC4yNDIgMjMzLjIwM0M0NTEuOTMgMjI3LjE3MiA0NDIuMTcgMjI0IDQzMS45NzcgMjI0QzQyMC4zMjIgMjI0IDQwOS4wODQgMjI4LjI0IDQwMC4zMzIgMjM1LjkzOUwyNzIuMzkzIDM0Ny44NzVDMjYyLjI1NCAzNTYuNzIzIDI1Ni45NjEgMzY5LjQxIDI1Ni41IDM4Mi40MzlDMjE5LjcwMyAzNzUuMjI1IDE5MiAzNDIuOTMyIDE5MiAzMDRDMTkyIDI2NS4yNSAyMTkuNjMzIDIzMyAyNTYuMjcgMjI1LjYyNUMyNTYuMjcgMjI1LjEyNSAyNTYuMDIgMjI0LjUgMjU2LjAyIDIyNEMyNTYuMDIgMTcxIDI5OS4wMzEgMTI4IDM1Mi4wNDkgMTI4QzM4NC4xODIgMTI4IDQxMi4zMTYgMTQzLjg3NSA0MjkuODIgMTY4QzQ0MC4xOTkgMTYzIDQ1MS44MjggMTYwIDQ2NC4wODIgMTYwQzUwMy4zNDQgMTYwIDUzNS43MjkgMTg4LjI1IDU0Mi42MDUgMjI1LjVDNTc5Ljg2NSAyMzIuMjUgNjA4LjEyNSAyNjQuNzUgNjA4IDMwNFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CloudBoltSun(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M464.004 368.006H408.277L446.723 278.309C449.66 271.449 447.441 263.465 441.41 259.074C435.314 254.652 427.064 255.043 421.471 259.965L293.465 371.959C288.432 376.35 286.682 383.396 289.025 389.631C291.371 395.881 297.34 400.006 303.996 400.006H359.723L321.277 489.703C318.34 496.563 320.559 504.547 326.59 508.938C329.404 510.984 332.717 512 335.998 512C339.779 512 343.529 510.672 346.529 508.047L474.535 396.053C479.568 391.662 481.318 384.615 478.975 378.381C476.629 372.131 470.66 368.006 464.004 368.006ZM156.094 259.844C118.719 222.469 118.719 161.594 156.094 124.094C190.719 89.469 245.219 87.219 282.719 116.719C302.719 103.719 326.344 95.969 351.969 95.969C352.719 95.969 353.219 96.219 353.969 96.219L362.844 69.469C366.219 59.219 356.594 49.719 346.344 53.094L271.094 78.219L235.594 7.219C230.719 -2.406 217.094 -2.406 212.219 7.219L176.719 78.219L101.469 53.094C91.219 49.719 81.719 59.344 85.094 69.594L110.219 144.844L39.219 180.344C29.594 185.219 29.594 198.844 39.219 203.719L110.219 239.219L85.094 314.469C81.719 324.719 91.344 334.219 101.594 330.969L160.719 311.219C160.594 308.844 160.094 306.594 160.094 304.094C160.094 291.594 162.344 279.594 166.219 268.219C162.719 265.469 159.219 262.969 156.094 259.844ZM225.844 201.844C230.219 177.344 241.719 155.469 257.719 137.844C247.969 131.719 236.344 127.969 223.969 127.969C188.719 127.969 159.969 156.719 159.969 191.969C159.969 210.719 168.219 227.344 181.094 239.094C192.344 223.219 207.719 210.219 225.844 201.844Z" />
            <path d="M608 304C608 348.25 572.238 384 527.977 384H511.654C511.668 378.316 510.994 372.617 508.928 367.119C501.951 348.52 483.895 336.006 464.004 336.006H456.807L476.135 290.914C485.006 270.199 478.469 246.473 460.242 233.203C451.93 227.172 442.17 224 431.977 224C420.322 224 409.084 228.24 400.332 235.939L272.393 347.875C262.254 356.723 256.961 369.41 256.5 382.439C219.703 375.225 192 342.932 192 304C192 265.25 219.633 233 256.27 225.625C256.27 225.125 256.02 224.5 256.02 224C256.02 171 299.031 128 352.049 128C384.182 128 412.316 143.875 429.82 168C440.199 163 451.828 160 464.082 160C503.344 160 535.729 188.25 542.605 225.5C579.865 232.25 608.125 264.75 608 304Z" />
        </Icon>
    </>
}