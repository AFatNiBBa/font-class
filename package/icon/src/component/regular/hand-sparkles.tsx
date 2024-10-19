
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-sparkles` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-sparkles?s=regular hand-sparkles}
 * @preview ![hand-sparkles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04MCAxOTJDODIuMjc3IDE5MiA4NC45NDMgMTkwLjM0NCA4NS45NTkgMTg4LjMwMUwxMDYuNjU0IDEzOC42NzRMMTA2LjY1NiAxMzguNjcyTDEwNi43NTQgMTM4LjYyM0wxMjggMTI5Ljc2NFY5NC4yMzRMMTA2LjczIDg1LjM2NUwxMDYuNjU2IDg1LjMyOEw4NS45NTkgMzUuNjk1Qzg0Ljk0MyAzMy42NTIgODIuMjc3IDMyIDgwIDMyQzc3LjcxOSAzMiA3NS4wNTEgMzMuNjUyIDc0LjAzNSAzNS42OTVMNTMuMzM4IDg1LjMzTDUzLjI4OSA4NS4zNTVMMy42OTUgMTA2LjAzN0MxLjY2OCAxMDcuMDUzIDAuMDIgMTA5LjcxNyAwLjAxNiAxMTEuOTkyTDAgMTEyTDAuMDE4IDExMi4wMDhDMC4wMjEgMTE0LjI3IDEuNjcgMTE2Ljk0OSAzLjY5NSAxMTcuOTYzTDUzLjI2NiAxMzguNjMzTDUzLjM0IDEzOC42N0w3NC4wMzUgMTg4LjMwMUM3NS4wNTEgMTkwLjM0NCA3Ny43MTkgMTkyIDgwIDE5MlpNNjM5Ljk4NCA0MzEuOTkyQzYzOS45OCA0MjkuNzE3IDYzOC4zMzIgNDI3LjA1MyA2MzYuMzAzIDQyNi4wMzdMNTg2LjczIDQwNS4zNjVMNTg2LjY1NiA0MDUuMzI4TDU2NS45NTkgMzU1LjY5NUM1NjQuOTQzIDM1My42NTIgNTYyLjI3NyAzNTIgNTYwIDM1MkM1NTcuNzE5IDM1MiA1NTUuMDUxIDM1My42NTIgNTU0LjAzNSAzNTUuNjk1TDUzMy4zMzggNDA1LjMzTDUzMy4yODkgNDA1LjM1NUw0ODMuNjk1IDQyNi4wMzdDNDgxLjY2OCA0MjcuMDUzIDQ4MC4wMiA0MjkuNzE3IDQ4MC4wMTYgNDMxLjk5Mkw0ODAgNDMyTDQ4MC4wMTggNDMyLjAwOEM0ODAuMDIxIDQzNC4yNyA0ODEuNjcgNDM2Ljk0OSA0ODMuNjk1IDQzNy45NjNMNTMzLjI2NiA0NTguNjMzTDUzMy4zNCA0NTguNjdMNTU0LjAzNSA1MDguMzAxQzU1NS4wNTEgNTEwLjM0NCA1NTcuNzE5IDUxMiA1NjAgNTEyQzU2Mi4yNzcgNTEyIDU2NC45NDMgNTEwLjM0NCA1NjUuOTU5IDUwOC4zMDFMNTg2LjY1NCA0NTguNjc0TDU4Ni42NTYgNDU4LjY3Mkw1ODYuNzU0IDQ1OC42MjNMNjM2LjMwMyA0MzcuOTYzQzYzOC4zMyA0MzYuOTQ5IDYzOS45NzkgNDM0LjI3IDYzOS45ODIgNDMyLjAwOEw2NDAgNDMyTDYzOS45ODQgNDMxLjk5MlpNMzA3LjU3OCAzMjIuMjE3QzMwNi45NjcgMzIwLjk5IDMwNS4zNjcgMzIwIDMwNCAzMjBTMzAxLjAzMSAzMjAuOTkgMzAwLjQyMiAzMjIuMjE3TDI4OCAzNTIuMDAyTDI1OC4yMDkgMzY0LjQyMkMyNTYuOTkyIDM2NS4wMzEgMjU2IDM2Ni42MzMgMjU2IDM2Ny45OThDMjU2IDM2OS4zNTcgMjU2Ljk5MiAzNzAuOTY5IDI1OC4yMDkgMzcxLjU3OEwyODggMzgzLjk5OEwzMDAuNDIyIDQxMy43ODFDMzAxLjAzMSA0MTUuMDA2IDMwMi42MzMgNDE2IDMwNCA0MTZTMzA2Ljk2NyA0MTUuMDA2IDMwNy41NzggNDEzLjc4MUwzMjAgMzgzLjk5OEwzNDkuNzg5IDM3MS41NzhDMzUxLjAwOCAzNzAuOTY5IDM1MiAzNjkuMzU3IDM1MiAzNjcuOTk4QzM1MiAzNjYuNjMzIDM1MS4wMDggMzY1LjAzMSAzNDkuNzg5IDM2NC40MjJMMzIwIDM1Mi4wMDJMMzA3LjU3OCAzMjIuMjE3Wk00NzQuMSAzOTUuNDQxTDUwOC44NTkgMzgwLjg5MUw1MjQuNSAzNDMuMzc1QzUyOC45MjIgMzM0LjQxOCA1MzUuODk2IDMyOC4wODYgNTQzLjc4NyAzMjQuMjA3QzU0My44MTggMzIyLjc5NSA1NDQgMzIxLjQyIDU0NCAzMjBWMTUyQzU0NCAxMTIuMjk5IDUxMS43MDEgODAgNDcyLjAwMiA4MEM0NjguMDA4IDgwIDQ2NC4wOTIgODAuMzI2IDQ2MC4yNzMgODAuOTU1QzQ1MC42ODggNTIuNDQxIDQyMy43MDMgMzEuODQ0IDM5Mi4wMDIgMzEuODQ0QzM4NS41NDUgMzEuODQ0IDM3OS4yODEgMzIuNjk5IDM3My4zMjIgMzQuMzAxQzM2MC42MzMgMTMuNzM0IDMzNy44OTMgMCAzMTIuMDA0IDBDMjg2LjA1OSAwIDI2My4yNzUgMTMuNzk1IDI1MC42MDIgMzQuNDM2QzI0NC42NjYgMzIuODQ2IDIzOC40MzQgMzIgMjMyLjAwNCAzMkMxOTIuMzA1IDMyIDE2MC4wMDYgNjQuMjk5IDE2MC4wMDYgMTA0VjIyNS42MzVDMTU0Ljc3MyAyMjQuNTYxIDE0OS40MTggMjI0LjAwNiAxNDQuMDE2IDIyNC4wMDZDMTQ0LjAxMyAyMjQuMDA2IDE0NC4wMSAyMjQuMDA2IDE0NC4wMDggMjI0LjAwNkMxMDAuNDIzIDIyNC4wMDYgNjQuMDAxIDI1OS4xNTYgNjQuMDAxIDMwNC4wNzFDNjQuMDAxIDMyNC4zNTggNzEuNTU5IDM0My41OTYgODUuNDU1IDM1OC41MjNMMTY2LjcwOSA0NDUuNzYyQzIwNS45NDMgNDg3Ljg2MSAyNjEuNDIgNTEyIDMxOC45MjYgNTEyQzMxOC45MjYgNTEyIDM0OS45NjMgNTEyIDM1Mi4wMDIgNTEyQzM5OC4xMjEgNTEyIDQ0MC40NzcgNDk1LjYzNSA0NzMuNjE1IDQ2OC40MzRMNDcxLjM3NSA0NjcuNUM0NTYuNTYzIDQ2MC4xNDEgNDQ4LjAxNiA0NDYuMjUgNDQ4LjAxNiA0MzJDNDQ4LjAxNiA0MjkuODkzIDQ0OC41NjQgNDI3Ljg1NCA0NDguOTI0IDQyNS43ODVDNDIzLjI4NyA0NDkuMjg5IDM4OS40NDUgNDY0IDM1Mi4wMDIgNDY0QzM0OS40MjQgNDY0IDMxOC45MjYgNDY0IDMxOC45MjYgNDY0QzI3NC41MTQgNDY0IDIzMi4xIDQ0NS41NDMgMjAxLjgzIDQxMy4wNDNMMTIyLjA3IDMyNy40MDhDMTE1Ljg2OSAzMjAuNzUgMTEyLjY2NCAzMTIuMDA0IDExMi42NjQgMzAzLjQwOUMxMTIuNjY0IDI4MS4zMDEgMTMxLjEyMiAyNzIuMDA2IDE0NC4wMSAyNzIuMDA2QzE1Mi41NyAyNzIuMDA2IDE2MS4xMTEgMjc1LjQyMiAxNjcuNDI4IDI4Mi4xODhMMTk0LjE1IDMxMC44NzlDMTk1LjggMzEyLjY1IDE5Ny44ODkgMzEzLjQ0MyAxOTkuOTQxIDMxMy40NDNDMjA0LjA0NyAzMTMuNDQzIDIwOC4wMDYgMzEwLjI3IDIwOC4wMDYgMzA1LjQyNlYxMDRDMjA4LjAwNiA5MC43NSAyMTguNzU0IDgwIDIzMi4wMDQgODBTMjU2LjAwNCA5MC43NSAyNTYuMDA0IDEwNFYyNTZDMjU2LjAwNCAyNjQuODM2IDI2My4xNjggMjcyIDI3Mi4wMDQgMjcyUzI4OC4wMDQgMjY0LjgzNiAyODguMDA0IDI1NlY3MkMyODguMDA0IDU4Ljc1IDI5OC43NTQgNDggMzEyLjAwNCA0OFMzMzYuMDA0IDU4Ljc1IDMzNi4wMDQgNzJWMjU2QzMzNi4wMDQgMjY0LjgzNiAzNDMuMTY2IDI3MiAzNTIuMDAyIDI3MkMzNjAuODQgMjcyIDM2OC4wMDIgMjY0LjgzNiAzNjguMDAyIDI1NlYxMDMuODQ0QzM2OC4wMDIgOTAuNTk0IDM3OC43NTIgNzkuODQ0IDM5Mi4wMDIgNzkuODQ0UzQxNi4wMDIgOTAuNTk0IDQxNi4wMDIgMTAzLjg0NFYyNTZDNDE2LjAwMiAyNjQuODM2IDQyMy4xNjYgMjcyIDQzMi4wMDIgMjcyUzQ0OC4wMDIgMjY0LjgzNiA0NDguMDAyIDI1NlYxNTJDNDQ4LjAwMiAxMzguNzUgNDU4Ljc1MiAxMjggNDcyLjAwMiAxMjhDNDg1LjI1IDEyOCA0OTYgMTM4Ljc1IDQ5NiAxNTJWMzIwQzQ5NiAzNDcuNzQyIDQ4Ny43NDQgMzczLjQzOCA0NzQuMSAzOTUuNDQxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandSparkles(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M80 192C82.277 192 84.943 190.344 85.959 188.301L106.654 138.674L106.656 138.672L106.754 138.623L128 129.764V94.234L106.73 85.365L106.656 85.328L85.959 35.695C84.943 33.652 82.277 32 80 32C77.719 32 75.051 33.652 74.035 35.695L53.338 85.33L53.289 85.355L3.695 106.037C1.668 107.053 0.02 109.717 0.016 111.992L0 112L0.018 112.008C0.021 114.27 1.67 116.949 3.695 117.963L53.266 138.633L53.34 138.67L74.035 188.301C75.051 190.344 77.719 192 80 192ZM639.984 431.992C639.98 429.717 638.332 427.053 636.303 426.037L586.73 405.365L586.656 405.328L565.959 355.695C564.943 353.652 562.277 352 560 352C557.719 352 555.051 353.652 554.035 355.695L533.338 405.33L533.289 405.355L483.695 426.037C481.668 427.053 480.02 429.717 480.016 431.992L480 432L480.018 432.008C480.021 434.27 481.67 436.949 483.695 437.963L533.266 458.633L533.34 458.67L554.035 508.301C555.051 510.344 557.719 512 560 512C562.277 512 564.943 510.344 565.959 508.301L586.654 458.674L586.656 458.672L586.754 458.623L636.303 437.963C638.33 436.949 639.979 434.27 639.982 432.008L640 432L639.984 431.992ZM307.578 322.217C306.967 320.99 305.367 320 304 320S301.031 320.99 300.422 322.217L288 352.002L258.209 364.422C256.992 365.031 256 366.633 256 367.998C256 369.357 256.992 370.969 258.209 371.578L288 383.998L300.422 413.781C301.031 415.006 302.633 416 304 416S306.967 415.006 307.578 413.781L320 383.998L349.789 371.578C351.008 370.969 352 369.357 352 367.998C352 366.633 351.008 365.031 349.789 364.422L320 352.002L307.578 322.217ZM474.1 395.441L508.859 380.891L524.5 343.375C528.922 334.418 535.896 328.086 543.787 324.207C543.818 322.795 544 321.42 544 320V152C544 112.299 511.701 80 472.002 80C468.008 80 464.092 80.326 460.273 80.955C450.688 52.441 423.703 31.844 392.002 31.844C385.545 31.844 379.281 32.699 373.322 34.301C360.633 13.734 337.893 0 312.004 0C286.059 0 263.275 13.795 250.602 34.436C244.666 32.846 238.434 32 232.004 32C192.305 32 160.006 64.299 160.006 104V225.635C154.773 224.561 149.418 224.006 144.016 224.006C144.013 224.006 144.01 224.006 144.008 224.006C100.423 224.006 64.001 259.156 64.001 304.071C64.001 324.358 71.559 343.596 85.455 358.523L166.709 445.762C205.943 487.861 261.42 512 318.926 512C318.926 512 349.963 512 352.002 512C398.121 512 440.477 495.635 473.615 468.434L471.375 467.5C456.563 460.141 448.016 446.25 448.016 432C448.016 429.893 448.564 427.854 448.924 425.785C423.287 449.289 389.445 464 352.002 464C349.424 464 318.926 464 318.926 464C274.514 464 232.1 445.543 201.83 413.043L122.07 327.408C115.869 320.75 112.664 312.004 112.664 303.409C112.664 281.301 131.122 272.006 144.01 272.006C152.57 272.006 161.111 275.422 167.428 282.188L194.15 310.879C195.8 312.65 197.889 313.443 199.941 313.443C204.047 313.443 208.006 310.27 208.006 305.426V104C208.006 90.75 218.754 80 232.004 80S256.004 90.75 256.004 104V256C256.004 264.836 263.168 272 272.004 272S288.004 264.836 288.004 256V72C288.004 58.75 298.754 48 312.004 48S336.004 58.75 336.004 72V256C336.004 264.836 343.166 272 352.002 272C360.84 272 368.002 264.836 368.002 256V103.844C368.002 90.594 378.752 79.844 392.002 79.844S416.002 90.594 416.002 103.844V256C416.002 264.836 423.166 272 432.002 272S448.002 264.836 448.002 256V152C448.002 138.75 458.752 128 472.002 128C485.25 128 496 138.75 496 152V320C496 347.742 487.744 373.438 474.1 395.441Z" />
        </Icon>
    </>
}