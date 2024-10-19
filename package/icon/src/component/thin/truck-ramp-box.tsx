
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `truck-ramp-box` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp-box?s=thin truck-ramp-box}
 * @preview ![truck-ramp-box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjAuMDAxIDM1MkMzNjQuNDA3IDM1MiAzNjguMDAxIDM0OC40MjIgMzY4LjAwMSAzNDRWNzJDMzY4LjAwMSA0MS4xMjUgMzkzLjEyNiAxNiA0MjQuMDAxIDE2SDYzMi4wMDFDNjM2LjQwNyAxNiA2NDAuMDAxIDEyLjQyMiA2NDAuMDAxIDhTNjM2LjQwNyAwIDYzMi4wMDEgMEg0MjQuMDAxQzM4NC4zMTMgMCAzNTIuMDAxIDMyLjI5NyAzNTIuMDAxIDcyVjM0NEMzNTIuMDAxIDM0OC40MjIgMzU1LjU5NSAzNTIgMzYwLjAwMSAzNTJaTTUyOC4wMDEgMjg4QzQ2Ni4xNDUgMjg4IDQxNi4wMDEgMzM4LjE0NSA0MTYuMDAxIDQwMEM0MTYuMDAxIDQwMC4wOTIgNDE2LjAyOCA0MDAuMTc0IDQxNi4wMjggNDAwLjI2NkMzNzUuNTI2IDQwMC45MzQgMzM1LjIxNiA0MDYuNDY1IDI5Ni4xNTcgNDE3LjEyNUw1LjkwNyA0OTYuMjgxQzEuNjI2IDQ5Ny40MzggLTAuODc0IDUwMS44NDQgMC4yODIgNTA2LjEwOUMxLjI1MSA1MDkuNjU2IDQuNDcgNTEyIDguMDAxIDUxMkM4LjY4OCA1MTIgOS40MDcgNTExLjkwNiAxMC4wOTUgNTExLjcxOUwzMDAuMzQ1IDQzMi41NjJDMzM4LjU3NyA0MjIuMTM3IDM3OCA0MTYuNzUgNDE3LjYzNiA0MTYuMjEzQzQyNS41NDggNDcwLjMyIDQ3MS42OTggNTEyIDUyOC4wMDEgNTEyQzU4OS44NTYgNTEyIDY0MC4wMDEgNDYxLjg1NSA2NDAuMDAxIDQwMFM1ODkuODU2IDI4OCA1MjguMDAxIDI4OFpNNTI4LjAwMSA0OTZDNDc1LjA2NSA0OTYgNDMyLjAwMSA0NTIuOTM0IDQzMi4wMDEgNDAwQzQzMi4wMDEgMzQ3LjA2NCA0NzUuMDY1IDMwNCA1MjguMDAxIDMwNFM2MjQuMDAxIDM0Ny4wNjQgNjI0LjAwMSA0MDBDNjI0LjAwMSA0NTIuOTM0IDU4MC45MzYgNDk2IDUyOC4wMDEgNDk2Wk00Ni4xMyAzNjAuMTVDNTAuMjEyIDM3NS4zOTUgNjYuNTY3IDM4Ny44MTggODUuMzM1IDM4Mi43NzlMMjcwLjgxMSAzMzMuMDA2QzI4Ny44OSAzMjguNDI0IDI5OC4wMTUgMzEwLjg5MSAyOTMuNDIxIDI5My43OTlMMjUxLjkzMSAxMzkuMjY2QzI0OC4yIDEyNS4zNjEgMjM1LjUzOCAxMTUuNTU5IDIyMS4wMzIgMTE1LjU1OUMyMTguMjM5IDExNS41NjEgMjE1LjQ1IDExNS45MjggMjEyLjc0MSAxMTYuNjU0TDI3LjM0NyAxNjYuMzVDMTAuMzA4IDE3MC45MTYgMC4xNTkgMTg4LjQ5NiA0LjcyMiAyMDUuNTM1TDQ2LjEzIDM2MC4xNVpNMTQ3LjM5NyAxNTAuNzM0TDE2NS45NyAyMjAuMzI4TDExOS42NTcgMjMyLjcwM0wxMDEuMTE4IDE2My4xMzlMMTQ3LjM5NyAxNTAuNzM0Wk0zMS40ODkgMTgxLjgwM0w4NS42ODMgMTY3LjI3N0wxMDQuMjIgMjM2Ljg1OUMxMDYuMyAyNDQuNTA2IDExNC40NzYgMjUwLjU5NiAxMjMuODEzIDI0OC4xNTZMMTcwLjA5NSAyMzUuNzk3QzE3OC42NjcgMjMzLjQ5IDE4My43NDMgMjI0LjcwNSAxODEuNDA3IDIxNi4yMDNMMTYyLjgzMyAxNDYuNTk4TDIxNi44ODQgMTMyLjEwOUMyMTguMjcgMTMxLjczNiAyMTkuNjY1IDEzMS41NTkgMjIxLjAzNiAxMzEuNTU5QzIyOC4wOTcgMTMxLjU1OSAyMzQuNTYxIDEzNi4yNyAyMzYuNDc3IDE0My40MTRMMjc3Ljk3IDI5Ny45NTFDMjgwLjI2MyAzMDYuNDg2IDI3NS4yIDMxNS4yNjQgMjY2LjY2NSAzMTcuNTUzTDgxLjE4NiAzNjcuMzI2QzcxLjk1MiAzNjkuODA3IDYzLjY4MSAzNjMuODM0IDYxLjU4NSAzNTYuMDEyTDIwLjE3NyAyMDEuMzk2QzE3Ljg5MiAxOTIuODYzIDIyLjk1NiAxODQuMDkgMzEuNDg5IDE4MS44MDNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TruckRampBox(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M360.001 352C364.407 352 368.001 348.422 368.001 344V72C368.001 41.125 393.126 16 424.001 16H632.001C636.407 16 640.001 12.422 640.001 8S636.407 0 632.001 0H424.001C384.313 0 352.001 32.297 352.001 72V344C352.001 348.422 355.595 352 360.001 352ZM528.001 288C466.145 288 416.001 338.145 416.001 400C416.001 400.092 416.028 400.174 416.028 400.266C375.526 400.934 335.216 406.465 296.157 417.125L5.907 496.281C1.626 497.438 -0.874 501.844 0.282 506.109C1.251 509.656 4.47 512 8.001 512C8.688 512 9.407 511.906 10.095 511.719L300.345 432.562C338.577 422.137 378 416.75 417.636 416.213C425.548 470.32 471.698 512 528.001 512C589.856 512 640.001 461.855 640.001 400S589.856 288 528.001 288ZM528.001 496C475.065 496 432.001 452.934 432.001 400C432.001 347.064 475.065 304 528.001 304S624.001 347.064 624.001 400C624.001 452.934 580.936 496 528.001 496ZM46.13 360.15C50.212 375.395 66.567 387.818 85.335 382.779L270.811 333.006C287.89 328.424 298.015 310.891 293.421 293.799L251.931 139.266C248.2 125.361 235.538 115.559 221.032 115.559C218.239 115.561 215.45 115.928 212.741 116.654L27.347 166.35C10.308 170.916 0.159 188.496 4.722 205.535L46.13 360.15ZM147.397 150.734L165.97 220.328L119.657 232.703L101.118 163.139L147.397 150.734ZM31.489 181.803L85.683 167.277L104.22 236.859C106.3 244.506 114.476 250.596 123.813 248.156L170.095 235.797C178.667 233.49 183.743 224.705 181.407 216.203L162.833 146.598L216.884 132.109C218.27 131.736 219.665 131.559 221.036 131.559C228.097 131.559 234.561 136.27 236.477 143.414L277.97 297.951C280.263 306.486 275.2 315.264 266.665 317.553L81.186 367.326C71.952 369.807 63.681 363.834 61.585 356.012L20.177 201.396C17.892 192.863 22.956 184.09 31.489 181.803Z" />
        </Icon>
    </>
}