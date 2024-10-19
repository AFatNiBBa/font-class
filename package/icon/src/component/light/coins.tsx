
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `coins` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/coins?s=light coins}
 * @preview ![coins](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMTYwQzg1Ljk2MSAxNjAgMCAxOTUuODE2IDAgMjQwVjQzMkMwIDQ3Ni4xODIgODUuOTYxIDUxMiAxOTIgNTEyUzM4NCA0NzYuMTgyIDM4NCA0MzJWMjQwQzM4NCAxOTUuODE2IDI5OC4wMzkgMTYwIDE5MiAxNjBaTTM1MiA0MzJDMzUyIDQ0NC4zMzYgMjk2Ljk4NiA0ODAgMTkyIDQ4MFMzMiA0NDQuMzM2IDMyIDQzMlYzODAuMTg2QzY2LjM4OSA0MDEuNzYgMTI1LjE4IDQxNiAxOTIgNDE2UzMxNy42MTEgNDAxLjc2IDM1MiAzODAuMTg2VjQzMlpNMzUyIDMzNkMzNTIgMzQ4LjMzNiAyOTYuOTg2IDM4NCAxOTIgMzg0UzMyIDM0OC4zMzYgMzIgMzM2VjI4NC4xODZDNjYuMzg5IDMwNS43NiAxMjUuMTggMzIwIDE5MiAzMjBTMzE3LjYxMSAzMDUuNzYgMzUyIDI4NC4xODZWMzM2Wk0xOTIgMjg4Qzg3LjAxNCAyODggMzIgMjUyLjMzNiAzMiAyNDBTODcuMDE0IDE5MiAxOTIgMTkyUzM1MiAyMjcuNjY0IDM1MiAyNDBTMjk2Ljk4NiAyODggMTkyIDI4OFpNMzIwIDBDMjI0IDAgMTI4IDI2LjM2MyAxMjggNzkuMDlWMTExLjIxOUMxMjggMTIwLjEgMTM1LjE1NiAxMjcuMjg1IDE0NCAxMjcuMjg1UzE2MCAxMjAuMSAxNjAgMTExLjIxOVY3OS4wOUMxNjAgNTkuOTA0IDIyMy44MTIgMzAuODk2IDMyMCAzMC44OTZTNDgwIDU5LjkwNCA0ODAgNzkuMDlDNDgwIDkzLjM5OCA0NDAuNSAxMTcuMzA3IDM2Ni4zNzUgMTI0Ljk0N0MzNTguMTIzIDEyNS44IDM1Mi4wMDggMTMyLjc3MyAzNTIuMDA4IDE0MC45MDlDMzUyLjAwOCAxNTQuNzQyIDM2NS4yMDUgMTU2Ljk5OCAzNjcuOTY5IDE1Ni45OThDMzczLjIzNyAxNTYuOTk4IDQzOS4wNDYgMTUwLjUwNSA0ODAgMTI1LjE5N1YxNTkuNDE0QzQ4MCAxNjguMjMgNDYzLjUzMSAxODIuNjkzIDQyNy40MDYgMTkzLjU5OEM0MjAuNDggMTk1LjY4OSA0MTUuOTk5IDIwMi4wNjMgNDE1Ljk5OSAyMDguOTY3QzQxNS45OTkgMjEwLjUwNCA0MTYuMjIxIDIxMi4wNjcgNDE2LjY4OCAyMTMuNjE1QzQxOC43NSAyMjAuNTY0IDQyNS4xMjUgMjI1LjA1MyA0MzIgMjI1LjA1M0M0MzcuMjMzIDIyNS4wNTMgNDYyLjI4MyAyMTYuNTkyIDQ4MCAyMDUuNTc2VjIzOS43MzZDNDgwIDI0OC41NTMgNDYzLjUzMSAyNjMuMDE4IDQyNy40MDYgMjczLjkyQzQyMC40OCAyNzYuMDExIDQxNS45OTkgMjgyLjM4NSA0MTUuOTk5IDI4OS4yODlDNDE1Ljk5OSAyOTAuODI2IDQxNi4yMjEgMjkyLjM4OSA0MTYuNjg4IDI5My45MzdDNDE4Ljc1IDMwMC44ODkgNDI1LjEyNSAzMDUuMzc1IDQzMiAzMDUuMzc1QzQzMy44ODIgMzA1LjM3NSA1MTIgMjg2Ljc5OCA1MTIgMjM5LjczNlY3OS4wOUM1MTIgMjYuMzYzIDQxNiAwIDMyMCAwWiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function Coins(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M192 160C85.961 160 0 195.816 0 240V432C0 476.182 85.961 512 192 512S384 476.182 384 432V240C384 195.816 298.039 160 192 160ZM352 432C352 444.336 296.986 480 192 480S32 444.336 32 432V380.186C66.389 401.76 125.18 416 192 416S317.611 401.76 352 380.186V432ZM352 336C352 348.336 296.986 384 192 384S32 348.336 32 336V284.186C66.389 305.76 125.18 320 192 320S317.611 305.76 352 284.186V336ZM192 288C87.014 288 32 252.336 32 240S87.014 192 192 192S352 227.664 352 240S296.986 288 192 288ZM320 0C224 0 128 26.363 128 79.09V111.219C128 120.1 135.156 127.285 144 127.285S160 120.1 160 111.219V79.09C160 59.904 223.812 30.896 320 30.896S480 59.904 480 79.09C480 93.398 440.5 117.307 366.375 124.947C358.123 125.8 352.008 132.773 352.008 140.909C352.008 154.742 365.205 156.998 367.969 156.998C373.237 156.998 439.046 150.505 480 125.197V159.414C480 168.23 463.531 182.693 427.406 193.598C420.48 195.689 415.999 202.063 415.999 208.967C415.999 210.504 416.221 212.067 416.688 213.615C418.75 220.564 425.125 225.053 432 225.053C437.233 225.053 462.283 216.592 480 205.576V239.736C480 248.553 463.531 263.018 427.406 273.92C420.48 276.011 415.999 282.385 415.999 289.289C415.999 290.826 416.221 292.389 416.688 293.937C418.75 300.889 425.125 305.375 432 305.375C433.882 305.375 512 286.798 512 239.736V79.09C512 26.363 416 0 320 0Z " />
        </Icon>
    </>
}