
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `handshake-angle` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-angle?s=light handshake-angle}
 * @preview ![handshake-angle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzMuNTA1IDE3NkgzODQuMDA1QzM3NS4xNjEgMTc2IDM2OC4wMDUgMTgzLjE1NiAzNjguMDA1IDE5MlMzNzUuMTYxIDIwOCAzODQuMDA1IDIwOEg0NzMuNTA1QzQ3Ny4wODMgMjA4IDQ4MC4wMDUgMjEwLjkyMiA0ODAuMDA1IDIxNC41VjI1OS41QzQ4MC4wMDUgMjYzLjA3OCA0NzcuMDgzIDI2NiA0NzMuNTA1IDI2Nkg0NjQuMDA1QzQ1NS4xNjEgMjY2IDQ0OC4wMDUgMjczLjE1NiA0NDguMDA1IDI4MlYzMjdDNDQ4LjAwNSAzNDMuNTMxIDQzNi4zOTYgMzU2IDQyMS4wMDUgMzU2SDQxNi4wMDVDNDA3LjE2MSAzNTYgNDAwLjAwNSAzNjMuMTU2IDQwMC4wMDUgMzcyQzQwMC4wMDUgMzk2LjI4MSAzODAuMjcxIDQxNi4wMzEgMzU2LjAwNSA0MTYuMDMxTDI0MC4wMDUgNDE2QzIzNy4yMjQgNDE2IDIzNC40OSA0MTYuNzE5IDIzMi4wNjggNDE4LjA5NEwxMjAuMDY4IDQ4Mi4wOTRDMTEyLjM5NiA0ODYuNSAxMDkuNzI0IDQ5Ni4yODEgMTE0LjExNSA1MDMuOTM4QzExNy4wNjggNTA5LjA5NCAxMjIuNDU4IDUxMiAxMjguMDIxIDUxMkMxMzAuNzA4IDUxMiAxMzMuNDQzIDUxMS4zMTIgMTM1Ljk0MyA1MDkuOTA2TDI0NC4yNTUgNDQ4TDM1Ni4wMDUgNDQ4LjAzMUMzOTIuNjkzIDQ0OC4wMzEgNDIzLjM5NiA0MjEuOTA2IDQzMC40NzQgMzg3LjI1QzQ1OC44OTYgMzgyLjY4OCA0ODAuMDA1IDM1Ny44NzUgNDgwLjAwNSAzMjdWMjk3LjQzOEM0OTguMTQ2IDI5NC4zNDQgNTEyLjAwNSAyNzguNTE2IDUxMi4wMDUgMjU5LjVWMjE0LjVDNTEyLjAwNSAxOTMuMjY2IDQ5NC43NCAxNzYgNDczLjUwNSAxNzZaTTEyNi4wMzYgMjY2Ljc4MUMxMjYuMDM2IDIyMy4wNzggMTQ3LjgwMiAxODMuOTA2IDE4NC4yNTUgMTYyQzE5MS44MTggMTU3LjQzOCAxOTQuMjcxIDE0Ny42MDkgMTg5LjcyNCAxNDAuMDMxQzE4NS4xMyAxMzIuNDUzIDE3NS4zMDIgMTI5Ljk4NCAxNjcuNzU1IDEzNC41NjJDMTI0LjI3MSAxNjAuNzE5IDk3LjI4NiAyMDYuMTA5IDk0LjMxOCAyNTcuMjk3TDguMTMgMzA2LjA2MkMwLjQyNyAzMTAuNDM4IC0yLjI3NiAzMjAuMTg3IDIuMDgzIDMyNy44NzVDNS4wMjEgMzMzLjA5NCAxMC40NDMgMzM2IDE2LjAyMSAzMzZDMTguNjkzIDMzNiAyMS4zOTYgMzM1LjM0NCAyMy44OCAzMzMuOTM4TDEyNi4wMzYgMjc2LjEwOVYyNjYuNzgxWk0yODAuMDA1IDI4OEMzMTAuODggMjg4IDMzNi4wMDUgMjYyLjg3NSAzMzYuMDA1IDIzMlYxNTRDMzM2LjAwNSAxNDUuMTU2IDMyOC44NDkgMTM4IDMyMC4wMDUgMTM4UzMwNC4wMDUgMTQ1LjE1NiAzMDQuMDA1IDE1NFYyMzJDMzA0LjAwNSAyNDUuMjM0IDI5My4yNCAyNTYgMjgwLjAwNSAyNTZTMjU2LjAwNSAyNDUuMjM0IDI1Ni4wMDUgMjMyVjExOC4wNDdDMjU2LjAwNSAxMTMuMjM0IDI1OC40NDMgMTA4Ljg0NCAyNjIuNTM2IDEwNi4yOTdDMjkwLjEzIDg5LjA5NCAzMjEuOTExIDgwIDM1NC40MjcgODBINDE2LjAwNUM0MTYuMDA5IDgwIDQxNi4wMDkgNzkuOTk4IDQxNi4wMTMgNzkuOTk4QzQxNi4wMTUgNzkuOTk4IDQxNi4wMTkgODAgNDE2LjAyMSA4MEM0MTYuMDM0IDgwIDQxNi4wNDggNzkuOTg4IDQxNi4wNjIgNzkuOTg4QzQxOC43NjUgNzkuOTc5IDQyMS4xOTEgNzkuMTM3IDQyMy40MTkgNzcuOTQ3QzQyMy42ODEgNzcuODA5IDQyMy45ODIgNzcuODczIDQyNC4yNCA3Ny43MTlMNTA0LjI0IDI5LjcxOUM1MTEuODE4IDI1LjE3MiA1MTQuMjcxIDE1LjM0NCA1MDkuNzI0IDcuNzY2QzUwNS4xNzcgMC4yMDMgNDk1LjMzMyAtMi4yNjYgNDg3Ljc3MSAyLjI4MUw0MTEuNTc0IDQ4SDM1NC40MjdDMzE1LjkyNyA0OCAyNzguMjg2IDU4Ljc2NiAyNDUuNjMgNzkuMTI1QzIzMi4wODMgODcuNTQ3IDIyNC4wMDUgMTAyLjA5NCAyMjQuMDA1IDExOC4wNDdWMjMyQzIyNC4wMDUgMjYyLjg3NSAyNDkuMTMgMjg4IDI4MC4wMDUgMjg4Wk02MzcuNTM2IDE4My40NjlDNjMyLjg2NSAxNzYgNjIyLjk5IDE3My43NSA2MTUuNDc0IDE3OC40NjlMNTUxLjY2MSAyMTguNjU2QzU0NC4xOTMgMjIzLjM1OSA1NDEuOTQzIDIzMy4yMzQgNTQ2LjY2MSAyNDAuNzE5QzU0OS42OTMgMjQ1LjU0NyA1NTQuODk2IDI0OC4xODcgNTYwLjIwOCAyNDguMTg3QzU2My4xMTUgMjQ4LjE4NyA1NjYuMDY4IDI0Ny4zOTEgNTY4LjcyNCAyNDUuNzE5TDYzMi41MzYgMjA1LjUzMUM2NDAuMDA1IDIwMC44MjggNjQyLjI1NSAxOTAuOTUzIDYzNy41MzYgMTgzLjQ2OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandshakeAngle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M473.505 176H384.005C375.161 176 368.005 183.156 368.005 192S375.161 208 384.005 208H473.505C477.083 208 480.005 210.922 480.005 214.5V259.5C480.005 263.078 477.083 266 473.505 266H464.005C455.161 266 448.005 273.156 448.005 282V327C448.005 343.531 436.396 356 421.005 356H416.005C407.161 356 400.005 363.156 400.005 372C400.005 396.281 380.271 416.031 356.005 416.031L240.005 416C237.224 416 234.49 416.719 232.068 418.094L120.068 482.094C112.396 486.5 109.724 496.281 114.115 503.938C117.068 509.094 122.458 512 128.021 512C130.708 512 133.443 511.312 135.943 509.906L244.255 448L356.005 448.031C392.693 448.031 423.396 421.906 430.474 387.25C458.896 382.688 480.005 357.875 480.005 327V297.438C498.146 294.344 512.005 278.516 512.005 259.5V214.5C512.005 193.266 494.74 176 473.505 176ZM126.036 266.781C126.036 223.078 147.802 183.906 184.255 162C191.818 157.438 194.271 147.609 189.724 140.031C185.13 132.453 175.302 129.984 167.755 134.562C124.271 160.719 97.286 206.109 94.318 257.297L8.13 306.062C0.427 310.438 -2.276 320.187 2.083 327.875C5.021 333.094 10.443 336 16.021 336C18.693 336 21.396 335.344 23.88 333.938L126.036 276.109V266.781ZM280.005 288C310.88 288 336.005 262.875 336.005 232V154C336.005 145.156 328.849 138 320.005 138S304.005 145.156 304.005 154V232C304.005 245.234 293.24 256 280.005 256S256.005 245.234 256.005 232V118.047C256.005 113.234 258.443 108.844 262.536 106.297C290.13 89.094 321.911 80 354.427 80H416.005C416.009 80 416.009 79.998 416.013 79.998C416.015 79.998 416.019 80 416.021 80C416.034 80 416.048 79.988 416.062 79.988C418.765 79.979 421.191 79.137 423.419 77.947C423.681 77.809 423.982 77.873 424.24 77.719L504.24 29.719C511.818 25.172 514.271 15.344 509.724 7.766C505.177 0.203 495.333 -2.266 487.771 2.281L411.574 48H354.427C315.927 48 278.286 58.766 245.63 79.125C232.083 87.547 224.005 102.094 224.005 118.047V232C224.005 262.875 249.13 288 280.005 288ZM637.536 183.469C632.865 176 622.99 173.75 615.474 178.469L551.661 218.656C544.193 223.359 541.943 233.234 546.661 240.719C549.693 245.547 554.896 248.187 560.208 248.187C563.115 248.187 566.068 247.391 568.724 245.719L632.536 205.531C640.005 200.828 642.255 190.953 637.536 183.469Z" />
        </Icon>
    </>
}