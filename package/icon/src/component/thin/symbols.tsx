
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `symbols` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/symbols?s=thin symbols}
 * @preview ![symbols](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDAuNTk0IDcuMjU4QzQ5My45NTMgMS41MDggNDg1LjE4OCAtMC45MyA0NzYuNzM0IDAuMzJMMzYyLjQwNiAxNy44MkMzNDcuMzQ0IDIwLjEzMyAzMzYgMzQuMDA4IDMzNiA1MC4xNjhWMTc2LjU0N0MzMjQuMjcgMTY2LjQ4NCAzMDcuMjI1IDE1OS45OTIgMjg4IDE1OS45OTJDMjUyLjY1NCAxNTkuOTkyIDIyNCAxODEuNDg0IDIyNCAyMDcuOTkyQzIyNCAyMzQuNTA4IDI1Mi42NTQgMjU2IDI4OCAyNTZDMzIzLjM0OCAyNTYgMzUyIDIzNC41MDggMzUyIDIwNy45OTJWNTAuMTY4QzM1MiA0MS44NTIgMzU3LjUxNiAzNC43NTggMzY0LjgxMiAzMy42MzNMNDc5LjE1NiAxNi4xMzNDNDgzLjA3OCAxNS42MDIgNDg3LjAzMSAxNi42OTUgNDkwLjE4OCAxOS4zODNDNDkzLjg3NSAyMi41NyA0OTYgMjcuMzUyIDQ5NiAzMi41N1YxNDQuNTQzQzQ4NC4yNyAxMzQuNDggNDY3LjIyNSAxMjcuOTg4IDQ0OCAxMjcuOTg4QzQxMi42NTQgMTI3Ljk4OCAzODQgMTQ5LjQ4NCAzODQgMTc1Ljk5MlM0MTIuNjU0IDIyMy45OTYgNDQ4IDIyMy45OTZDNDgzLjM0OCAyMjMuOTk2IDUxMiAyMDIuNSA1MTIgMTc1Ljk5MlYzMi41N0M1MTIgMjIuNjk1IDUwNy44NDQgMTMuNDQ1IDUwMC41OTQgNy4yNThaTTI4OCAyNDBDMjYxLjk4MiAyNDAgMjQwIDIyNS4zNDQgMjQwIDIwNy45OTJDMjQwIDE5MC42NDggMjYxLjk4MiAxNzUuOTkyIDI4OCAxNzUuOTkyQzMxNC4wMiAxNzUuOTkyIDMzNiAxOTAuNjQ4IDMzNiAyMDcuOTkyQzMzNiAyMjUuMzQ0IDMxNC4wMiAyNDAgMjg4IDI0MFpNNDQ4IDIwNy45OTJDNDIxLjk4MiAyMDcuOTkyIDQwMCAxOTMuMzQ0IDQwMCAxNzUuOTkyUzQyMS45ODIgMTQzLjk4OCA0NDggMTQzLjk4OEM0NzQuMDIgMTQzLjk4OCA0OTYgMTU4LjY0MSA0OTYgMTc1Ljk5MlM0NzQuMDIgMjA3Ljk5MiA0NDggMjA3Ljk5MlpNOCAxNkgyMTZDMjIwLjQyMiAxNiAyMjQgMTIuNDA2IDIyNCA4UzIyMC40MjIgMCAyMTYgMEg4QzMuNTc4IDAgMCAzLjU5NCAwIDhTMy41NzggMTYgOCAxNlpNMjE2IDgwSDhDMy41NzggODAgMCA4My41OTQgMCA4OFMzLjU3OCA5NiA4IDk2SDEwNFYyMTZDMTA0IDIyMC40MDYgMTA3LjU3OCAyMjQgMTEyIDIyNFMxMjAgMjIwLjQwNiAxMjAgMjE2Vjk2SDIxNkMyMjAuNDIyIDk2IDIyNCA5Mi40MDYgMjI0IDg4UzIyMC40MjIgODAgMjE2IDgwWk00NzIgNDMyQzQ0OS45MzggNDMyIDQzMiA0NDkuOTM4IDQzMiA0NzJTNDQ5LjkzOCA1MTIgNDcyIDUxMlM1MTIgNDk0LjA2MiA1MTIgNDcyUzQ5NC4wNjIgNDMyIDQ3MiA0MzJaTTQ3MiA0OTZDNDU4Ljc2NiA0OTYgNDQ4IDQ4NS4yMTkgNDQ4IDQ3MlM0NTguNzY2IDQ0OCA0NzIgNDQ4UzQ5NiA0NTguNzgxIDQ5NiA0NzJTNDg1LjIzNCA0OTYgNDcyIDQ5NlpNMzI4IDM2OEMzNTAuMDYyIDM2OCAzNjggMzUwLjA2MiAzNjggMzI4UzM1MC4wNjIgMjg4IDMyOCAyODhTMjg4IDMwNS45MzggMjg4IDMyOFMzMDUuOTM4IDM2OCAzMjggMzY4Wk0zMjggMzA0QzM0MS4yMzQgMzA0IDM1MiAzMTQuNzgxIDM1MiAzMjhTMzQxLjIzNCAzNTIgMzI4IDM1MlMzMDQgMzQxLjIxOSAzMDQgMzI4UzMxNC43NjYgMzA0IDMyOCAzMDRaTTQ5OC4zNDQgMjkwLjM0NEwyOTAuMzQ0IDQ5OC4zNDRDMjg3LjIxOSA1MDEuNDY5IDI4Ny4yMTkgNTA2LjUzMSAyOTAuMzQ0IDUwOS42NTZDMjkxLjkwNiA1MTEuMjE5IDI5My45NTMgNTEyIDI5NiA1MTJTMzAwLjA5NCA1MTEuMjE5IDMwMS42NTYgNTA5LjY1Nkw1MDkuNjU2IDMwMS42NTZDNTEyLjc4MSAyOTguNTMxIDUxMi43ODEgMjkzLjQ2OSA1MDkuNjU2IDI5MC4zNDRTNTAxLjQ2OSAyODcuMjE5IDQ5OC4zNDQgMjkwLjM0NFpNMTU3LjUzMSA0NDMuNTYyTDIwNC40NjkgMzk2LjYyNUMyMDcuNTk0IDM5My41IDIwNy41OTQgMzg4LjQzNyAyMDQuNDY5IDM4NS4zMTJTMTk2LjI4MSAzODIuMTg4IDE5My4xNTYgMzg1LjMxMkwxNDYuMDc4IDQzMi4zNzVMOTEuMTg4IDM3OC44MTJMMTE5LjU5NCAzNTEuNTk0QzE0MS40MjIgMzI5Ljc1IDE0MS40MjIgMjk0LjI1IDExOS41OTQgMjcyLjQwNkM5OC40NjkgMjUxLjIxOSA2MS41MzEgMjUxLjIxOSA0MC40MDYgMjcyLjQwNkMxOC41NzggMjk0LjI1IDE4LjU3OCAzMjkuNzUgNDAuNDY5IDM1MS42NTZMNjguMTcyIDM3OC42ODhMMjcuMjY2IDQxNy44NzVDNS43NjYgNDM5LjM3NSA1Ljc2NiA0NzQuMzQ0IDI3LjI2NiA0OTUuODQ0QzQ4Ljc2NiA1MTcuMzc1IDgzLjcxOSA1MTcuMzc1IDEwNS4yMTkgNDk1Ljg0NEwxNDYuMjAzIDQ1NC44NzVMMjAyLjQwNiA1MDkuNzE5QzIwMy45NjkgNTExLjI1IDIwNS45ODQgNTEyIDIwOCA1MTJDMjEwLjA3OCA1MTIgMjEyLjE1NiA1MTEuMTg4IDIxMy43MTkgNTA5LjU5NEMyMTYuODEyIDUwNi40MzggMjE2Ljc1IDUwMS4zNzUgMjEzLjU5NCA0OTguMjgxTDE1Ny41MzEgNDQzLjU2MlpNNTEuNzE5IDM0MC4yODFDMzYuMTI1IDMyNC42ODggMzYuMTI1IDI5OS4zMTMgNTEuNzE5IDI4My43MTlDNTkuMjY2IDI3Ni4xNTYgNjkuMzEyIDI3MiA4MCAyNzJTMTAwLjczNCAyNzYuMTU2IDEwOC4yODEgMjgzLjcxOUMxMjMuODc1IDI5OS4zMTIgMTIzLjg3NSAzMjQuNjg3IDEwOC40MDYgMzQwLjE1Nkw3OS43MzQgMzY3LjYyNUw1MS43MTkgMzQwLjI4MVpNOTMuOTA2IDQ4NC41MzFDNzguNjg4IDQ5OS43ODEgNTMuODU5IDQ5OS44MTMgMzguNTc4IDQ4NC41MzFDMjMuMzI4IDQ2OS4yODEgMjMuMzI4IDQ0NC40MzggMzguNDUzIDQyOS4zMTNMNzkuNjI1IDM4OS44NzVMMTM0Ljc2NiA0NDMuNjg4TDkzLjkwNiA0ODQuNTMxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Symbols(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M500.594 7.258C493.953 1.508 485.188 -0.93 476.734 0.32L362.406 17.82C347.344 20.133 336 34.008 336 50.168V176.547C324.27 166.484 307.225 159.992 288 159.992C252.654 159.992 224 181.484 224 207.992C224 234.508 252.654 256 288 256C323.348 256 352 234.508 352 207.992V50.168C352 41.852 357.516 34.758 364.812 33.633L479.156 16.133C483.078 15.602 487.031 16.695 490.188 19.383C493.875 22.57 496 27.352 496 32.57V144.543C484.27 134.48 467.225 127.988 448 127.988C412.654 127.988 384 149.484 384 175.992S412.654 223.996 448 223.996C483.348 223.996 512 202.5 512 175.992V32.57C512 22.695 507.844 13.445 500.594 7.258ZM288 240C261.982 240 240 225.344 240 207.992C240 190.648 261.982 175.992 288 175.992C314.02 175.992 336 190.648 336 207.992C336 225.344 314.02 240 288 240ZM448 207.992C421.982 207.992 400 193.344 400 175.992S421.982 143.988 448 143.988C474.02 143.988 496 158.641 496 175.992S474.02 207.992 448 207.992ZM8 16H216C220.422 16 224 12.406 224 8S220.422 0 216 0H8C3.578 0 0 3.594 0 8S3.578 16 8 16ZM216 80H8C3.578 80 0 83.594 0 88S3.578 96 8 96H104V216C104 220.406 107.578 224 112 224S120 220.406 120 216V96H216C220.422 96 224 92.406 224 88S220.422 80 216 80ZM472 432C449.938 432 432 449.938 432 472S449.938 512 472 512S512 494.062 512 472S494.062 432 472 432ZM472 496C458.766 496 448 485.219 448 472S458.766 448 472 448S496 458.781 496 472S485.234 496 472 496ZM328 368C350.062 368 368 350.062 368 328S350.062 288 328 288S288 305.938 288 328S305.938 368 328 368ZM328 304C341.234 304 352 314.781 352 328S341.234 352 328 352S304 341.219 304 328S314.766 304 328 304ZM498.344 290.344L290.344 498.344C287.219 501.469 287.219 506.531 290.344 509.656C291.906 511.219 293.953 512 296 512S300.094 511.219 301.656 509.656L509.656 301.656C512.781 298.531 512.781 293.469 509.656 290.344S501.469 287.219 498.344 290.344ZM157.531 443.562L204.469 396.625C207.594 393.5 207.594 388.437 204.469 385.312S196.281 382.188 193.156 385.312L146.078 432.375L91.188 378.812L119.594 351.594C141.422 329.75 141.422 294.25 119.594 272.406C98.469 251.219 61.531 251.219 40.406 272.406C18.578 294.25 18.578 329.75 40.469 351.656L68.172 378.688L27.266 417.875C5.766 439.375 5.766 474.344 27.266 495.844C48.766 517.375 83.719 517.375 105.219 495.844L146.203 454.875L202.406 509.719C203.969 511.25 205.984 512 208 512C210.078 512 212.156 511.188 213.719 509.594C216.812 506.438 216.75 501.375 213.594 498.281L157.531 443.562ZM51.719 340.281C36.125 324.688 36.125 299.313 51.719 283.719C59.266 276.156 69.312 272 80 272S100.734 276.156 108.281 283.719C123.875 299.312 123.875 324.687 108.406 340.156L79.734 367.625L51.719 340.281ZM93.906 484.531C78.688 499.781 53.859 499.813 38.578 484.531C23.328 469.281 23.328 444.438 38.453 429.313L79.625 389.875L134.766 443.688L93.906 484.531Z" />
        </Icon>
    </>
}