
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `clouds-moon` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clouds-moon?s=regular clouds-moon}
 * @preview ![clouds-moon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzAuOTYxIDI0OC42NTJDNTUyLjM4MyAyNjMuNDM3IDQ4MC4yMDkgMjAzLjkyNiA0ODAuMjA5IDEyNS41NjZDNDgwLjIwOSA4MC40MyA1MDQuNjcgMzguOTI2IDU0NC40MzQgMTYuNTYyQzU1MC41NjIgMTMuMTI1IDU0OS4wMjEgMy45NDUgNTQyLjA2MSAyLjY3NkM1MzMuOTUzIDEuMTkxIDUyMC42ODYgMCA1MTIuNDU5IDBDNDQzLjA4OCAwIDM4NC4zMjggNDMuMjg5IDM2MS4yNiAxMDMuOTAyQzM5My4xMDIgMTI4LjczNCA0MTMuNSAxNjcuNDQ1IDQxMy41IDIxMS4yNUM0MTMuNSAyMjMuNTMxIDQxMS43ODEgMjM1LjU5NCA0MDguNDA2IDI0Ny4zNDRDNDQ1LjQ0NyAyNTkuMjc3IDQ3NS40NzcgMjg1LjA3IDQ5My43NTIgMzE4LjEzN0M0OTkuOTY1IDMxOC44NTIgNTA2LjA0OSAzMjAgNTEyLjQ1OSAzMjBDNTYyLjQyOCAzMjAgNjA4LjA0NSAyOTcuNTM5IDYzOC4yNzcgMjYwLjc2MkM2NDIuNzQ2IDI1NS4zMTIgNjM3Ljg4MyAyNDcuMzYzIDYzMC45NjEgMjQ4LjY1MlpNMzgyLjc1IDI3My44NzVDMzc5IDI2OC4xMjUgMzc0LjI1IDI2My4yNSAzNjkuNjI1IDI1OC4yNUMzNzcgMjQ0LjI1IDM4MS41IDIyOC4zNzUgMzgxLjUgMjExLjI1QzM4MS41IDE1NS4yNSAzMzcuMTI1IDEwOS4yNSAyODEuNzUgMTA3LjM3NUMyNTguMTI1IDc3Ljc1IDIyMS43NSA1OS4yNSAxODIuNzUgNTkuMjVDMTQyLjc1IDU5LjI1IDEwNS42MjUgNzguMjUgODEuODc1IDEwOS42MjVDMzUuMTI1IDExOS41IDAgMTYxLjM3NSAwIDIxMS4yNUMwIDI0OC4yNSAxOS41IDI4MC4zNzUgNDguNjI1IDI5OC43NUMyMS4zNzUgMzIwLjc1IDQuMjUgMzU0LjI1IDQuMjUgMzkyQzQuMjUgNDU4LjI1IDU3Ljc1IDUxMiAxMjMuMzc1IDUxMkgzNjEuNzVDNDI3LjUgNTEyIDQ4MSA0NTguMjUgNDgxIDM5MkM0ODEgMzMzIDQzOC42MjUgMjgzLjc1IDM4Mi43NSAyNzMuODc1Wk00Ny43NSAyMTEuMjVDNDcuNzUgMTgwLjM3NSA3Mi42MjUgMTU1LjI1IDEwMy4yNSAxNTUuMjVIMTEwQzEyMi4yNSAxMjcuMTI1IDE1MC4yNSAxMDcuMjUgMTgyLjc1IDEwNy4yNUMyMTcgMTA3LjI1IDI0NS43NSAxMjkuMTI1IDI1Ny4xMjUgMTU5LjVDMjYzLjYyNSAxNTYuNzUgMjcwLjc1IDE1NS4yNSAyNzguMjUgMTU1LjI1QzMwOC44NzUgMTU1LjI1IDMzMy43NSAxODAuMzc1IDMzMy43NSAyMTEuMjVDMzMzLjc1IDIxOC43NSAzMzIgMjI1LjUgMzI5LjM3NSAyMzJDMzE3LjEyNSAyMjcuMjUgMzA0LjI1IDIyNCAyOTAuMzc1IDIyNEMyODAuNzUgMjI0IDI3MS4zNzUgMjI1LjI1IDI2Mi4yNSAyMjcuNjI1QzI0Mi4yNSAyMTQuODc1IDIxOSAyMDggMTk1LjEyNSAyMDhDMTUxLjYyNSAyMDggMTEyLjI1IDIzMC4zNzUgODkuMjUgMjY1LjI1QzY1LjI1IDI1OC44NzUgNDcuNzUgMjM3LjI1IDQ3Ljc1IDIxMS4yNVpNMzYxLjc1IDQ2NEgxMjMuMzc1QzgzLjg3NSA0NjQgNTEuODc1IDQzMS43NSA1MS44NzUgMzkyQzUxLjg3NSAzNTQuMzc1IDgwLjYyNSAzMjQgMTE3IDMyMC43NUMxMjQuMTI1IDI4My44NzUgMTU2LjI1IDI1NiAxOTQuODc1IDI1NkMyMTguNjI1IDI1NiAyMzkuNzUgMjY2Ljc1IDI1NC4yNSAyODMuMjVDMjY0LjUgMjc2LjI1IDI3Ni44NzUgMjcyIDI5MC4yNSAyNzJDMzIwLjI1IDI3MiAzNDUuMjUgMjkyLjg3NSAzNTEuODc1IDMyMUMzNTUuMjUgMzIwLjUgMzU4LjM3NSAzMjAgMzYxLjc1IDMyMEM0MDEuMjUgMzIwIDQzMy4yNSAzNTIuMjUgNDMzLjI1IDM5MkM0MzMuMzc1IDQzMS43NSA0MDEuMjUgNDY0IDM2MS43NSA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CloudsMoon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M630.961 248.652C552.383 263.437 480.209 203.926 480.209 125.566C480.209 80.43 504.67 38.926 544.434 16.562C550.562 13.125 549.021 3.945 542.061 2.676C533.953 1.191 520.686 0 512.459 0C443.088 0 384.328 43.289 361.26 103.902C393.102 128.734 413.5 167.445 413.5 211.25C413.5 223.531 411.781 235.594 408.406 247.344C445.447 259.277 475.477 285.07 493.752 318.137C499.965 318.852 506.049 320 512.459 320C562.428 320 608.045 297.539 638.277 260.762C642.746 255.312 637.883 247.363 630.961 248.652ZM382.75 273.875C379 268.125 374.25 263.25 369.625 258.25C377 244.25 381.5 228.375 381.5 211.25C381.5 155.25 337.125 109.25 281.75 107.375C258.125 77.75 221.75 59.25 182.75 59.25C142.75 59.25 105.625 78.25 81.875 109.625C35.125 119.5 0 161.375 0 211.25C0 248.25 19.5 280.375 48.625 298.75C21.375 320.75 4.25 354.25 4.25 392C4.25 458.25 57.75 512 123.375 512H361.75C427.5 512 481 458.25 481 392C481 333 438.625 283.75 382.75 273.875ZM47.75 211.25C47.75 180.375 72.625 155.25 103.25 155.25H110C122.25 127.125 150.25 107.25 182.75 107.25C217 107.25 245.75 129.125 257.125 159.5C263.625 156.75 270.75 155.25 278.25 155.25C308.875 155.25 333.75 180.375 333.75 211.25C333.75 218.75 332 225.5 329.375 232C317.125 227.25 304.25 224 290.375 224C280.75 224 271.375 225.25 262.25 227.625C242.25 214.875 219 208 195.125 208C151.625 208 112.25 230.375 89.25 265.25C65.25 258.875 47.75 237.25 47.75 211.25ZM361.75 464H123.375C83.875 464 51.875 431.75 51.875 392C51.875 354.375 80.625 324 117 320.75C124.125 283.875 156.25 256 194.875 256C218.625 256 239.75 266.75 254.25 283.25C264.5 276.25 276.875 272 290.25 272C320.25 272 345.25 292.875 351.875 321C355.25 320.5 358.375 320 361.75 320C401.25 320 433.25 352.25 433.25 392C433.375 431.75 401.25 464 361.75 464Z" />
        </Icon>
    </>
}