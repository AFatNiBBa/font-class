
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `traffic-light-slow` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-light-slow?s=thin traffic-light-slow}
 * @preview ![traffic-light-slow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMTkyQzE2NS40OSAxOTIgMTQ0IDIxMy40OSAxNDQgMjQwUzE2NS40OSAyODggMTkyIDI4OFMyNDAgMjY2LjUxIDI0MCAyNDBTMjE4LjUxIDE5MiAxOTIgMTkyWk0xOTIgMjcyQzE3NC4zNTUgMjcyIDE2MCAyNTcuNjQ1IDE2MCAyNDBTMTc0LjM1NSAyMDggMTkyIDIwOFMyMjQgMjIyLjM1NSAyMjQgMjQwUzIwOS42NDUgMjcyIDE5MiAyNzJaTTE5MiA2NEMxNjUuNDkgNjQgMTQ0IDg1LjQ5IDE0NCAxMTJTMTY1LjQ5IDE2MCAxOTIgMTYwUzI0MCAxMzguNTEgMjQwIDExMlMyMTguNTEgNjQgMTkyIDY0Wk0xOTIgMTQ0QzE3NC4zNTUgMTQ0IDE2MCAxMjkuNjQ1IDE2MCAxMTJTMTc0LjM1NSA4MCAxOTIgODBTMjI0IDk0LjM1NSAyMjQgMTEyUzIwOS42NDUgMTQ0IDE5MiAxNDRaTTMyOS40ODQgMjg4LjIwM0MzNjMuMTA5IDI3MS4zOTEgMzg0IDIzNy41OTQgMzg0IDIwMEMzODQgMTk1LjU3OCAzODAuNDIyIDE5MiAzNzYgMTkySDMyMFYxNjQuOTQ1TDMyOS40ODQgMTYwLjIwM0MzNjMuMTA5IDE0My4zOTEgMzg0IDEwOS41OTQgMzg0IDcyQzM4NCA2Ny41NzggMzgwLjQyMiA2NCAzNzYgNjRIMzIwQzMyMCAyOC42NTIgMjkxLjM0NiAwIDI1NiAwSDEyOEM5Mi42NTQgMCA2NCAyOC42NTIgNjQgNjRIOEMzLjU3OCA2NCAwIDY3LjU3OCAwIDcyQzAgMTA5LjU5NCAyMC44OTEgMTQzLjM5MSA1NC41MTYgMTYwLjIwM0w2NCAxNjQuOTQ1VjE5Mkg4QzMuNTc4IDE5MiAwIDE5NS41NzggMCAyMDBDMCAyMzcuNTk0IDIwLjg5MSAyNzEuMzkxIDU0LjUxNiAyODguMjAzTDY0IDI5Mi45NDVWMzIwSDhDMy41NzggMzIwIDAgMzIzLjU3OCAwIDMyOEMwIDM2NS41OTQgMjAuODkxIDM5OS4zOTEgNTQuNTE2IDQxNi4yMDNDNjkuODg3IDQyMy44ODkgNjguMDk0IDQyMy4zNjEgNzAuOTMyIDQyMy43NDhDODcuNzI3IDQ3NC44NTQgMTM1LjI3NSA1MTIgMTkyIDUxMlMyOTYuMjczIDQ3NC44NTQgMzEzLjA2OCA0MjMuNzQ4QzMxNS45MDYgNDIzLjM2MSAzMTQuMTE3IDQyMy44ODcgMzI5LjQ4NCA0MTYuMjAzQzM2My4xMDkgMzk5LjM5MSAzODQgMzY1LjU5NCAzODQgMzI4QzM4NCAzMjMuNTc4IDM4MC40MjIgMzIwIDM3NiAzMjBIMzIwVjI5Mi45NDVMMzI5LjQ4NCAyODguMjAzWk0zMjAgODBIMzY3LjYyNUMzNjUuMDQzIDEwNy4xMjkgMzQ5Ljg2OSAxMzIuMTE5IDMyMCAxNDcuMDU1VjgwWk0zMjAgMjA4SDM2Ny42MjVDMzY1LjA0MyAyMzUuMTI5IDM0OS44NjkgMjYwLjExOSAzMjAgMjc1LjA1NVYyMDhaTTE2LjM3NSA4MEg2NFYxNDcuMDU1QzM0LjQxIDEzMi4yNiAxOC45ODYgMTA3LjQzNCAxNi4zNzUgODBaTTE2LjM3NSAyMDhINjRWMjc1LjA1NUMzNC40MSAyNjAuMjYgMTguOTg2IDIzNS40MzQgMTYuMzc1IDIwOFpNMTYuMzc1IDMzNkg2NFYzODRDNjQgMzkwLjg3MyA2NC45NzkgMzk3LjQ4NiA2Ni4wMjEgNDA0LjA2NkMzNC4xODIgMzg4LjEzOSAxOS4wMzUgMzYzLjk0MSAxNi4zNzUgMzM2Wk0zMDQgMzg0QzMwNCA0NDUuNzU2IDI1My43NTggNDk2IDE5MiA0OTZTODAgNDQ1Ljc1NiA4MCAzODRWNjRDODAgMzcuNTMzIDEwMS41MzMgMTYgMTI4IDE2SDI1NkMyODIuNDY3IDE2IDMwNCAzNy41MzMgMzA0IDY0VjM4NFpNMzY3LjYyNSAzMzZDMzY0Ljk4NCAzNjMuNzM4IDM1MC4wMjEgMzg4LjAzNyAzMTcuOTc5IDQwNC4wNjZDMzE5LjAyMSAzOTcuNDg2IDMyMCAzOTAuODczIDMyMCAzODRWMzM2SDM2Ny42MjVaTTE5MiAzMjBDMTY1LjQ5IDMyMCAxNDQgMzQxLjQ5IDE0NCAzNjhTMTY1LjQ5IDQxNiAxOTIgNDE2UzI0MCAzOTQuNTEgMjQwIDM2OFMyMTguNTEgMzIwIDE5MiAzMjBaTTE5MiA0MDBDMTc0LjM1NSA0MDAgMTYwIDM4NS42NDUgMTYwIDM2OFMxNzQuMzU1IDMzNiAxOTIgMzM2UzIyNCAzNTAuMzU1IDIyNCAzNjhTMjA5LjY0NSA0MDAgMTkyIDQwMFpNMTkyIDk2QzE4My4xNjQgOTYgMTc2IDEwMy4xNjIgMTc2IDExMkMxNzYgMTIwLjgzNiAxODMuMTY0IDEyOCAxOTIgMTI4UzIwOCAxMjAuODM2IDIwOCAxMTJDMjA4IDEwMy4xNjIgMjAwLjgzNiA5NiAxOTIgOTZaTTE5MiAzNTJDMTgzLjE2NCAzNTIgMTc2IDM1OS4xNjIgMTc2IDM2OEMxNzYgMzc2LjgzNiAxODMuMTY0IDM4NCAxOTIgMzg0UzIwOCAzNzYuODM2IDIwOCAzNjhDMjA4IDM1OS4xNjIgMjAwLjgzNiAzNTIgMTkyIDM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TrafficLightSlow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 192C165.49 192 144 213.49 144 240S165.49 288 192 288S240 266.51 240 240S218.51 192 192 192ZM192 272C174.355 272 160 257.645 160 240S174.355 208 192 208S224 222.355 224 240S209.645 272 192 272ZM192 64C165.49 64 144 85.49 144 112S165.49 160 192 160S240 138.51 240 112S218.51 64 192 64ZM192 144C174.355 144 160 129.645 160 112S174.355 80 192 80S224 94.355 224 112S209.645 144 192 144ZM329.484 288.203C363.109 271.391 384 237.594 384 200C384 195.578 380.422 192 376 192H320V164.945L329.484 160.203C363.109 143.391 384 109.594 384 72C384 67.578 380.422 64 376 64H320C320 28.652 291.346 0 256 0H128C92.654 0 64 28.652 64 64H8C3.578 64 0 67.578 0 72C0 109.594 20.891 143.391 54.516 160.203L64 164.945V192H8C3.578 192 0 195.578 0 200C0 237.594 20.891 271.391 54.516 288.203L64 292.945V320H8C3.578 320 0 323.578 0 328C0 365.594 20.891 399.391 54.516 416.203C69.887 423.889 68.094 423.361 70.932 423.748C87.727 474.854 135.275 512 192 512S296.273 474.854 313.068 423.748C315.906 423.361 314.117 423.887 329.484 416.203C363.109 399.391 384 365.594 384 328C384 323.578 380.422 320 376 320H320V292.945L329.484 288.203ZM320 80H367.625C365.043 107.129 349.869 132.119 320 147.055V80ZM320 208H367.625C365.043 235.129 349.869 260.119 320 275.055V208ZM16.375 80H64V147.055C34.41 132.26 18.986 107.434 16.375 80ZM16.375 208H64V275.055C34.41 260.26 18.986 235.434 16.375 208ZM16.375 336H64V384C64 390.873 64.979 397.486 66.021 404.066C34.182 388.139 19.035 363.941 16.375 336ZM304 384C304 445.756 253.758 496 192 496S80 445.756 80 384V64C80 37.533 101.533 16 128 16H256C282.467 16 304 37.533 304 64V384ZM367.625 336C364.984 363.738 350.021 388.037 317.979 404.066C319.021 397.486 320 390.873 320 384V336H367.625ZM192 320C165.49 320 144 341.49 144 368S165.49 416 192 416S240 394.51 240 368S218.51 320 192 320ZM192 400C174.355 400 160 385.645 160 368S174.355 336 192 336S224 350.355 224 368S209.645 400 192 400ZM192 96C183.164 96 176 103.162 176 112C176 120.836 183.164 128 192 128S208 120.836 208 112C208 103.162 200.836 96 192 96ZM192 352C183.164 352 176 359.162 176 368C176 376.836 183.164 384 192 384S208 376.836 208 368C208 359.162 200.836 352 192 352Z" />
        </Icon>
    </>
}