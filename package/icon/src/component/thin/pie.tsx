
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pie` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pie?s=thin pie}
 * @preview ![pie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MzYuODc1IDIyNEM1MzMuNSAyMjQgNTMxLjMxMyAyMjMuNTk0IDUyOS4yODEgMjIyLjc4MUM0OTIuNzE5IDExOC4wOTQgMzk2LjE4OCA0OCAyODggNDhDMTc5LjcxOSA0OCA4My4xMjUgMTE4LjEyNSA0Ni42ODggMjIyLjg0NEM0NC43ODEgMjIzLjYwOSA0Mi42MjUgMjI0IDM5LjEyNSAyMjRDMTcuNTYyIDIyNCAwIDI0MS45MzggMCAyNjRTMTcuNTYyIDMwNCAzOS4xMjUgMzA0QzcyLjg0NCAzMDQgOTIuMzc1IDI4OSAxMDQuMTg3IDI3OS45MzhDMTEyLjQzOCAyNzMuNTMxIDExNC40MDYgMjcyIDEyMi4yNSAyNzJDMTI5LjkzOCAyNzIgMTMxLjkwNiAyNzMuNTMxIDE0MC4yNSAyODBDMTUxLjkzOCAyODguOTY5IDE3MS40MzggMzA0IDIwNS4yNSAzMDRDMjM4Ljk2OSAzMDQgMjU4LjUgMjg5IDI3MC4zNDQgMjc5LjkyMkMyNzguNjU2IDI3My4zNzUgMjgwLjY4OCAyNzIgMjg4LjI1IDI3MkMyOTUuNzE5IDI3MiAyOTcuNTYyIDI3My4yNSAzMDYuNSAyODAuMjgxQzMxOC45MDYgMjg5LjczNCAzMzcuNjU2IDMwNCAzNzEuMTI1IDMwNEM0MDQuOTM3IDMwNCA0MjQuNDM3IDI4OC45NjkgNDM2LjIxOSAyNzkuOTIyQzQ0NC4zNzUgMjczLjUxNiA0NDYuMzEyIDI3MiA0NTQuMTI1IDI3MkM0NjEuNjg3IDI3MiA0NjMuNDM3IDI3My4zNTkgNDcxLjkzNyAyNzkuOTM4QzQ4My41MzEgMjg4LjkzOCA1MDIuOTM4IDMwNCA1MzYuODc1IDMwNEM1NTguNDM4IDMwNCA1NzYgMjg2LjA2MiA1NzYgMjY0UzU1OC40MzggMjI0IDUzNi44NzUgMjI0Wk01MzYuODc1IDI4OEM1MDguNDA2IDI4OCA0OTIuMzc1IDI3NS41NDcgNDgxLjYyNSAyNjcuMjAzQzQ3Mi41OTQgMjYwLjIxOSA0NjcuMTU2IDI1NiA0NTQuMTI1IDI1NkM0NDAuNzUgMjU2IDQzNS4zNDQgMjYwLjI2NiA0MjYuMzQ0IDI2Ny4zMTJDNDE1LjAzMSAyNzYuMDQ3IDM5OS41IDI4OCAzNzEuMTI1IDI4OEMzNDMuMDMxIDI4OCAzMjcuNTMxIDI3Ni4xODggMzE1LjkwNiAyNjcuMzI4QzMwNi45MDYgMjYwLjI2NiAzMDEuNSAyNTYgMjg4LjI1IDI1NkMyNzUuNDY5IDI1NiAyNjkuOTM4IDI1OS44OTEgMjYwLjQzOCAyNjcuMzU5QzI0OS4wOTQgMjc2LjA2MiAyMzMuNTMxIDI4OCAyMDUuMjUgMjg4QzE3Ni44NzUgMjg4IDE2MS4zNDQgMjc2LjA0NyAxNTAgMjY3LjI5N0MxNDAuOTA2IDI2MC4yNSAxMzUuNDA2IDI1NiAxMjIuMjUgMjU2QzEwOC45MDYgMjU2IDEwMy40MzggMjYwLjI1IDk0LjMxMiAyNjcuMzU5QzgyLjk2OSAyNzYuMDYyIDY3LjQwNiAyODggMzkuMTI1IDI4OEMyNi4zNzUgMjg4IDE2IDI3Ny4yMzQgMTYgMjY0UzI2LjM3NSAyNDAgMzkuMTI1IDI0MEM0Ni40NjkgMjQwIDUxLjcxOSAyMzguNjcyIDU3LjI4MSAyMzUuMzkxTDU5Ljg0NCAyMzMuODc1TDYwLjgxMiAyMzEuMDMxQzk0LjIxOSAxMzEuMTI1IDE4NS41MzEgNjQgMjg4IDY0QzM5MC40MDYgNjQgNDgxLjY4OCAxMzEuMTI1IDUxNS4xODggMjMxLjA0N0w1MTYuMTg4IDIzMy45ODRMNTE4Ljg3NSAyMzUuNDg0QzUyNC42MjUgMjM4LjY4OCA1MjkuODQ0IDI0MCA1MzYuODc1IDI0MEM1NDkuNjI1IDI0MCA1NjAgMjUwLjc2NiA1NjAgMjY0UzU0OS42MjUgMjg4IDUzNi44NzUgMjg4Wk01MTQuNTMxIDMyMC40MDZDNTEwLjM3NSAzMTkuMDYyIDUwNS44MTMgMzIxLjI5NyA1MDQuNDA2IDMyNS40NjlMNDc0LjI1IDQxNi4xODdDNDcxLjE1NiA0MjUuNjQxIDQ2Mi4zNzUgNDMyIDQ1Mi40MDYgNDMySDEyMy43MTlDMTEzLjc1IDQzMiAxMDQuOTM3IDQyNS42MDkgMTAxLjc1IDQxNi4xMjVMNzEuNTk0IDMyNS40NjlDNzAuMTg4IDMyMS4yODEgNjUuNzE5IDMxOS4wNDcgNjEuNDY5IDMyMC40MDZDNTcuMjgxIDMyMS43OTcgNTUgMzI2LjMyOCA1Ni40MDYgMzMwLjUzMUw4Ni41NjMgNDIxLjIwM0M5MS45MzggNDM3LjIzNCAxMDYuODc1IDQ0OCAxMjMuNzE5IDQ0OEg0NTIuNDA2QzQ2OS4zNDQgNDQ4IDQ4NC4yMTkgNDM3LjIwMyA0ODkuNDM4IDQyMS4xODhMNTE5LjU5NCAzMzAuNTMxQzUyMSAzMjYuMzI4IDUxOC43MTkgMzIxLjc5NyA1MTQuNTMxIDMyMC40MDZaTTI4OCAxMjhDMjgzLjU5NCAxMjggMjgwIDEzMS41NzggMjgwIDEzNlYxODRDMjgwIDE4OC40MjIgMjgzLjU5NCAxOTIgMjg4IDE5MlMyOTYgMTg4LjQyMiAyOTYgMTg0VjEzNkMyOTYgMTMxLjU3OCAyOTIuNDA2IDEyOCAyODggMTI4Wk0xODQuODQ0IDEzMi40MjJMMTYwLjg0NCAxODAuNDIyQzE1OC44NzUgMTg0LjM3NSAxNjAuNDY5IDE4OS4xNzIgMTY0LjQzOCAxOTEuMTU2QzE2NS41NjIgMTkxLjczNCAxNjYuNzgxIDE5MiAxNjggMTkyQzE3MC45MzggMTkyIDE3My43NSAxOTAuMzc1IDE3NS4xNTYgMTg3LjU3OEwxOTkuMTU2IDEzOS41NzhDMjAxLjEyNSAxMzUuNjI1IDE5OS41MzEgMTMwLjgyOCAxOTUuNTYyIDEyOC44NDRDMTkxLjc1IDEyNi44NTkgMTg2LjgxMiAxMjguNDUzIDE4NC44NDQgMTMyLjQyMlpNMzkxLjE1NiAxMzIuNDIyQzM4OS4xODggMTI4LjQ2OSAzODQuMjgxIDEyNi44OTEgMzgwLjQzOCAxMjguODQ0QzM3Ni40NjkgMTMwLjgyOCAzNzQuODc1IDEzNS42MjUgMzc2Ljg0NCAxMzkuNTc4TDQwMC44NDQgMTg3LjU3OEM0MDIuMjUgMTkwLjM3NSA0MDUuMDYyIDE5MiA0MDggMTkyQzQwOS4yMTkgMTkyIDQxMC40MzggMTkxLjczNCA0MTEuNTYyIDE5MS4xNTZDNDE1LjUzMSAxODkuMTcyIDQxNy4xMjUgMTg0LjM3NSA0MTUuMTU2IDE4MC40MjJMMzkxLjE1NiAxMzIuNDIyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Pie(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M536.875 224C533.5 224 531.313 223.594 529.281 222.781C492.719 118.094 396.188 48 288 48C179.719 48 83.125 118.125 46.688 222.844C44.781 223.609 42.625 224 39.125 224C17.562 224 0 241.938 0 264S17.562 304 39.125 304C72.844 304 92.375 289 104.187 279.938C112.438 273.531 114.406 272 122.25 272C129.938 272 131.906 273.531 140.25 280C151.938 288.969 171.438 304 205.25 304C238.969 304 258.5 289 270.344 279.922C278.656 273.375 280.688 272 288.25 272C295.719 272 297.562 273.25 306.5 280.281C318.906 289.734 337.656 304 371.125 304C404.937 304 424.437 288.969 436.219 279.922C444.375 273.516 446.312 272 454.125 272C461.687 272 463.437 273.359 471.937 279.938C483.531 288.938 502.938 304 536.875 304C558.438 304 576 286.062 576 264S558.438 224 536.875 224ZM536.875 288C508.406 288 492.375 275.547 481.625 267.203C472.594 260.219 467.156 256 454.125 256C440.75 256 435.344 260.266 426.344 267.312C415.031 276.047 399.5 288 371.125 288C343.031 288 327.531 276.188 315.906 267.328C306.906 260.266 301.5 256 288.25 256C275.469 256 269.938 259.891 260.438 267.359C249.094 276.062 233.531 288 205.25 288C176.875 288 161.344 276.047 150 267.297C140.906 260.25 135.406 256 122.25 256C108.906 256 103.438 260.25 94.312 267.359C82.969 276.062 67.406 288 39.125 288C26.375 288 16 277.234 16 264S26.375 240 39.125 240C46.469 240 51.719 238.672 57.281 235.391L59.844 233.875L60.812 231.031C94.219 131.125 185.531 64 288 64C390.406 64 481.688 131.125 515.188 231.047L516.188 233.984L518.875 235.484C524.625 238.688 529.844 240 536.875 240C549.625 240 560 250.766 560 264S549.625 288 536.875 288ZM514.531 320.406C510.375 319.062 505.813 321.297 504.406 325.469L474.25 416.187C471.156 425.641 462.375 432 452.406 432H123.719C113.75 432 104.937 425.609 101.75 416.125L71.594 325.469C70.188 321.281 65.719 319.047 61.469 320.406C57.281 321.797 55 326.328 56.406 330.531L86.563 421.203C91.938 437.234 106.875 448 123.719 448H452.406C469.344 448 484.219 437.203 489.438 421.188L519.594 330.531C521 326.328 518.719 321.797 514.531 320.406ZM288 128C283.594 128 280 131.578 280 136V184C280 188.422 283.594 192 288 192S296 188.422 296 184V136C296 131.578 292.406 128 288 128ZM184.844 132.422L160.844 180.422C158.875 184.375 160.469 189.172 164.438 191.156C165.562 191.734 166.781 192 168 192C170.938 192 173.75 190.375 175.156 187.578L199.156 139.578C201.125 135.625 199.531 130.828 195.562 128.844C191.75 126.859 186.812 128.453 184.844 132.422ZM391.156 132.422C389.188 128.469 384.281 126.891 380.438 128.844C376.469 130.828 374.875 135.625 376.844 139.578L400.844 187.578C402.25 190.375 405.062 192 408 192C409.219 192 410.438 191.734 411.562 191.156C415.531 189.172 417.125 184.375 415.156 180.422L391.156 132.422Z" />
        </Icon>
    </>
}