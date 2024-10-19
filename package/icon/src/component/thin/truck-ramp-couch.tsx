
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `truck-ramp-couch` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp-couch?s=thin truck-ramp-couch}
 * @preview ![truck-ramp-couch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjAuMDAxIDM1MS45OTRDMzY0LjQwNyAzNTEuOTk0IDM2OC4wMDEgMzQ4LjQxNiAzNjguMDAxIDM0My45OTRWNzEuOTk4QzM2OC4wMDEgNDEuMTIzIDM5My4xMjYgMTYgNDI0LjAwMSAxNkg2MzIuMDAxQzYzNi40MDcgMTYgNjQwLjAwMSAxMi40MjIgNjQwLjAwMSA4UzYzNi40MDcgMCA2MzIuMDAxIDBINDI0LjAwMUMzODQuMzEzIDAgMzUyLjAwMSAzMi4yOTUgMzUyLjAwMSA3MS45OThWMzQzLjk5NEMzNTIuMDAxIDM0OC40MTYgMzU1LjU5NSAzNTEuOTk0IDM2MC4wMDEgMzUxLjk5NFpNMjMuMDk1IDI0Ni40MDJDMjcuMzc2IDI0NS4yNzcgMjkuOTM4IDI0MC45MDIgMjguODEzIDIzNi42MjFDMjEuMTU3IDIwNy42NjggMzcuNTAxIDE3OC45MzQgNjYgMTcxLjIzTDIxMi45MDcgMTMxLjkyQzIzNy45MDcgMTI1LjEyMyAyNjkuMTI2IDEzNy43NDggMjc3LjkzOCAxNzAuMzRDMjc5LjA5NSAxNzQuNTkgMjgzLjQwNyAxNzcuMTg0IDI4Ny43NTEgMTc1Ljk2NUMyOTIuMDAxIDE3NC44MjQgMjk0LjUzMiAxNzAuNDE4IDI5My4zNzYgMTY2LjE1MkMyODMuMTI2IDEyOC4zNDIgMjQ1LjkzOCAxMDYuNjcgMjA4Ljc4MiAxMTYuNDUxTDYxLjg0NSAxNTUuNzc3QzI0LjcyIDE2NS44MjQgMy40MDcgMjAzLjEyMSAxMy4zMTMgMjQwLjcxNUMxNC41OTUgMjQ1LjQ0NyAxOS4zMzkgMjQ3LjQyNiAyMy4wOTUgMjQ2LjQwMlpNMTUuMzQ1IDM2NS4zODVDMjAuODQ3IDM4NS45MzQgNDEuODc0IDM5OC4wMjkgNjIuMzQ1IDM5Mi41N0wzMTQuMDk1IDMyNS4xMzVDMzE4LjM3NiAzMjMuOTc5IDMyMC45MDcgMzE5LjYwNCAzMTkuNzUxIDMxNS4zMzhDMzE4LjYyNiAzMTEuMDcyIDMxNC4xODggMzA4LjYzNSAzMDkuOTcgMzA5LjY2Nkw1OC4yMiAzNzcuMTAyQzQ2LjMxMyAzODAuMzk4IDM0IDM3My4xOTcgMzAuNzgyIDM2MS4yNkwxNy4wMzIgMzA5LjlDMTIuODEzIDI5My45MTYgMjIuMzc2IDI3Ny40MTYgMzguMzQ1IDI3My4xMDRDNTQuMjUxIDI2OC43MjkgNzAuNzUxIDI3OC4zMDcgNzUuMDYzIDI5NC4yNkw4MC44NzYgMzE2LjM1NEM4Mi4wNTggMzIwLjY4NCA4Ni40NzIgMzIzLjE5MyA5MC42ODggMzIyLjA1N0wyNjYuODQ1IDI3NC43OTFDMjcxLjEyNiAyNzMuNjM1IDI3My42NTcgMjY5LjI2IDI3Mi41MDEgMjY0Ljk5NEwyNjYuNjU3IDI0Mi45OTZDMjYyLjM0MyAyMjcuMDI5IDI3MS45MzEgMjEwLjQ0OSAyODcuNzgyIDIwNi4yNzdDMjk0LjM0NSAyMDQuNTI3IDMwMS44MTMgMjA1LjQwMiAzMDguNTMyIDIwOC42OTlDMzEyLjQzOCAyMTAuNjA1IDMxNy4yODIgMjA4Ljk4IDMxOS4yMiAyMDQuOThDMzIxLjE1NyAyMDEuMDEyIDMxOS41MDEgMTk2LjIxNSAzMTUuNTMyIDE5NC4yOTNDMzA1LjM0NSAxODkuMzcxIDI5NC4wOTUgMTg4LjEyMSAyODMuNzIgMTkwLjc5M0MyNTguODk1IDE5Ny4zOTMgMjQ0LjY1MyAyMjIuOTQ1IDI1MS4yMiAyNDcuMTM3TDI1NS4wMDEgMjYxLjRMOTQuMzEzIDMwNC41MUw5MC41MzIgMjkwLjEzNUM4My45MDcgMjY1LjYxOSA1OC41NjMgMjUxLjEwNSAzNC4xNTcgMjU3LjY2OEM5LjcyIDI2NC4yNDQgLTQuOTA1IDI4OS41MjUgMS41OTUgMzE0LjAxTDE1LjM0NSAzNjUuMzg1Wk01MjguMDAxIDI4Ny45OTRDNDY2LjE0NSAyODcuOTk0IDQxNi4wMDEgMzM4LjEzOSA0MTYuMDAxIDM5OS45OTJDNDE2LjAwMSA0MDAuMDg0IDQxNi4wMjggNDAwLjE2NiA0MTYuMDI4IDQwMC4yNThDMzc1LjUyNiA0MDAuOTI2IDMzNS4yMTYgNDA2LjQ1NyAyOTYuMTU3IDQxNy4xMTdMNS45MDcgNDk2LjI3MUMxLjYyNiA0OTcuNDI4IC0wLjg3NCA1MDEuODM0IDAuMjgyIDUwNi4xQzEuMzQ5IDUxMC4wMDQgNS41MTcgNTEyLjk1OSAxMC4wOTUgNTExLjcwOUwzMDAuMzQ1IDQzMi41NTVDMzM4LjU3NyA0MjIuMTI5IDM3OCA0MTYuNzQyIDQxNy42MzYgNDE2LjIwNUM0MjUuNTQ4IDQ3MC4zMTMgNDcxLjY5OCA1MTEuOTkgNTI4LjAwMSA1MTEuOTlDNTg5Ljg1NiA1MTEuOTkgNjQwLjAwMSA0NjEuODQ4IDY0MC4wMDEgMzk5Ljk5MkM2NDAuMDAxIDMzOC4xMzkgNTg5Ljg1NiAyODcuOTk0IDUyOC4wMDEgMjg3Ljk5NFpNNTI4LjAwMSA0OTUuOTlDNDc1LjA2NSA0OTUuOTkgNDMyLjAwMSA0NTIuOTI2IDQzMi4wMDEgMzk5Ljk5MlM0NzUuMDY1IDMwMy45OTQgNTI4LjAwMSAzMDMuOTk0UzYyNC4wMDEgMzQ3LjA1OSA2MjQuMDAxIDM5OS45OTJTNTgwLjkzNiA0OTUuOTkgNTI4LjAwMSA0OTUuOTlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TruckRampCouch(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M360.001 351.994C364.407 351.994 368.001 348.416 368.001 343.994V71.998C368.001 41.123 393.126 16 424.001 16H632.001C636.407 16 640.001 12.422 640.001 8S636.407 0 632.001 0H424.001C384.313 0 352.001 32.295 352.001 71.998V343.994C352.001 348.416 355.595 351.994 360.001 351.994ZM23.095 246.402C27.376 245.277 29.938 240.902 28.813 236.621C21.157 207.668 37.501 178.934 66 171.23L212.907 131.92C237.907 125.123 269.126 137.748 277.938 170.34C279.095 174.59 283.407 177.184 287.751 175.965C292.001 174.824 294.532 170.418 293.376 166.152C283.126 128.342 245.938 106.67 208.782 116.451L61.845 155.777C24.72 165.824 3.407 203.121 13.313 240.715C14.595 245.447 19.339 247.426 23.095 246.402ZM15.345 365.385C20.847 385.934 41.874 398.029 62.345 392.57L314.095 325.135C318.376 323.979 320.907 319.604 319.751 315.338C318.626 311.072 314.188 308.635 309.97 309.666L58.22 377.102C46.313 380.398 34 373.197 30.782 361.26L17.032 309.9C12.813 293.916 22.376 277.416 38.345 273.104C54.251 268.729 70.751 278.307 75.063 294.26L80.876 316.354C82.058 320.684 86.472 323.193 90.688 322.057L266.845 274.791C271.126 273.635 273.657 269.26 272.501 264.994L266.657 242.996C262.343 227.029 271.931 210.449 287.782 206.277C294.345 204.527 301.813 205.402 308.532 208.699C312.438 210.605 317.282 208.98 319.22 204.98C321.157 201.012 319.501 196.215 315.532 194.293C305.345 189.371 294.095 188.121 283.72 190.793C258.895 197.393 244.653 222.945 251.22 247.137L255.001 261.4L94.313 304.51L90.532 290.135C83.907 265.619 58.563 251.105 34.157 257.668C9.72 264.244 -4.905 289.525 1.595 314.01L15.345 365.385ZM528.001 287.994C466.145 287.994 416.001 338.139 416.001 399.992C416.001 400.084 416.028 400.166 416.028 400.258C375.526 400.926 335.216 406.457 296.157 417.117L5.907 496.271C1.626 497.428 -0.874 501.834 0.282 506.1C1.349 510.004 5.517 512.959 10.095 511.709L300.345 432.555C338.577 422.129 378 416.742 417.636 416.205C425.548 470.313 471.698 511.99 528.001 511.99C589.856 511.99 640.001 461.848 640.001 399.992C640.001 338.139 589.856 287.994 528.001 287.994ZM528.001 495.99C475.065 495.99 432.001 452.926 432.001 399.992S475.065 303.994 528.001 303.994S624.001 347.059 624.001 399.992S580.936 495.99 528.001 495.99Z" />
        </Icon>
    </>
}