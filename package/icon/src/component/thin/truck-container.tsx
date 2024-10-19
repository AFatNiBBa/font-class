
import { Icon } from "../../index";

/**
 * A component that renders the `truck-container` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/truck-container?s=thin truck-container}
 * @preview ![truck-container](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzIgMjMyQzIzNi40MDYgMjMyIDI0MCAyMjguNDIyIDI0MCAyMjRWOTZDMjQwIDkxLjU3OCAyMzYuNDA2IDg4IDIzMiA4OFMyMjQgOTEuNTc4IDIyNCA5NlYyMjRDMjI0IDIyOC40MjIgMjI3LjU5NCAyMzIgMjMyIDIzMlpNMjk2IDIzMkMzMDAuNDA2IDIzMiAzMDQgMjI4LjQyMiAzMDQgMjI0Vjk2QzMwNCA5MS41NzggMzAwLjQwNiA4OCAyOTYgODhTMjg4IDkxLjU3OCAyODggOTZWMjI0QzI4OCAyMjguNDIyIDI5MS41OTQgMjMyIDI5NiAyMzJaTTE2OCAyMzJDMTcyLjQwNiAyMzIgMTc2IDIyOC40MjIgMTc2IDIyNFY5NkMxNzYgOTEuNTc4IDE3Mi40MDYgODggMTY4IDg4UzE2MCA5MS41NzggMTYwIDk2VjIyNEMxNjAgMjI4LjQyMiAxNjMuNTk0IDIzMiAxNjggMjMyWk02MjkuNDc3IDI0OS4zOTZMNTY4Ljk2MSAxODMuMzY3QzU1NS4zMTIgMTY4LjQ3OSA1MzYuMDQxIDE2MCA1MTUuODQ0IDE2MEg0NDhDNDM5LjE2NCAxNjAgNDMyIDE2Ny4xNjIgNDMyIDE3NlYzNTIuNDM4QzQyNS4xMTcgMzYxLjY4IDQxOS45OSAzNzIuMjkzIDQxNy42MTMgMzg0SDMzNC4zODdDMzI2Ljk3MyAzNDcuNDg0IDI5NC43MDMgMzIwIDI1NiAzMjBDMjI0LjE0NSAzMjAgMTk2Ljg2OSAzMzguNzU2IDE4NCAzNjUuNzAzQzE3MS4xMzEgMzM4Ljc1NiAxNDMuODU1IDMyMCAxMTIgMzIwQzczLjI5NyAzMjAgNDEuMDI3IDM0Ny40ODQgMzMuNjEzIDM4NEg4QzMuNTk0IDM4NCAwIDM4Ny41NzggMCAzOTJTMy41OTQgNDAwIDggNDAwSDMyQzMyIDQ0NC4xODIgNjcuODE2IDQ4MCAxMTIgNDgwQzE0My44NTUgNDgwIDE3MS4xMzEgNDYxLjI0IDE4NCA0MzQuMjk1QzE5Ni44NjkgNDYxLjI0IDIyNC4xNDUgNDgwIDI1NiA0ODBDMzAwLjE4NCA0ODAgMzM2IDQ0NC4xODIgMzM2IDQwMEg0MTZDNDE2IDQ0NC4xODIgNDUxLjgxNiA0ODAgNDk2IDQ4MFM1NzYgNDQ0LjE4MiA1NzYgNDAwSDYwMEM2MjIuMDYyIDQwMCA2NDAgMzgyLjA2MiA2NDAgMzYwVjI3Ni40NTNDNjQwIDI2Ni40MzYgNjM2LjI0NiAyNTYuNzgxIDYyOS40NzcgMjQ5LjM5NlpNMTEyIDQ2NEM3Ni43MTEgNDY0IDQ4IDQzNS4yODkgNDggNDAwQzQ4IDM2NC43MDkgNzYuNzExIDMzNiAxMTIgMzM2UzE3NiAzNjQuNzA5IDE3NiA0MDBDMTc2IDQzNS4yODkgMTQ3LjI4OSA0NjQgMTEyIDQ2NFpNMjU2IDQ2NEMyMjAuNzExIDQ2NCAxOTIgNDM1LjI4OSAxOTIgNDAwQzE5MiAzNjQuNzA5IDIyMC43MTEgMzM2IDI1NiAzMzZTMzIwIDM2NC43MDkgMzIwIDQwMEMzMjAgNDM1LjI4OSAyOTEuMjg5IDQ2NCAyNTYgNDY0Wk00NDggMTc2SDUxNS44NDRDNTMxLjUgMTc2IDU0Ni41NjIgMTgyLjYyNSA1NTcuMTI1IDE5NC4xNTZMNjEzLjgwNyAyNTZINDQ4VjE3NlpNNDk2IDQ2NEM0NjAuNzExIDQ2NCA0MzIgNDM1LjI4OSA0MzIgNDAwQzQzMiAzNjQuNzA5IDQ2MC43MTEgMzM2IDQ5NiAzMzZTNTYwIDM2NC43MDkgNTYwIDQwMEM1NjAgNDM1LjI4OSA1MzEuMjg5IDQ2NCA0OTYgNDY0Wk02MjQgMzYwQzYyNCAzNzMuMjM0IDYxMy4yMTkgMzg0IDYwMCAzODRINTc0LjM4N0M1NjYuOTczIDM0Ny40ODQgNTM0LjcwMyAzMjAgNDk2IDMyMEM0NzcuOTA0IDMyMCA0NjEuNDAyIDMyNi4yMzIgNDQ4IDMzNi4zNjFWMjcySDYyNFYzNjBaTTMyIDI4OEgzNjhDMzg1LjY3NCAyODggNDAwIDI3My42NzIgNDAwIDI1NlY2NEM0MDAgNDYuMzI2IDM4NS42NzQgMzIgMzY4IDMySDMyQzE0LjMyNiAzMiAwIDQ2LjMyNiAwIDY0VjI1NkMwIDI3My42NzIgMTQuMzI2IDI4OCAzMiAyODhaTTE2IDY0QzE2IDU1LjE3OCAyMy4xNzggNDggMzIgNDhIMzY4QzM3Ni44MjIgNDggMzg0IDU1LjE3OCAzODQgNjRWMjU2QzM4NCAyNjQuODIyIDM3Ni44MjIgMjcyIDM2OCAyNzJIMzJDMjMuMTc4IDI3MiAxNiAyNjQuODIyIDE2IDI1NlY2NFpNMTA0IDIzMkMxMDguNDA2IDIzMiAxMTIgMjI4LjQyMiAxMTIgMjI0Vjk2QzExMiA5MS41NzggMTA4LjQwNiA4OCAxMDQgODhTOTYgOTEuNTc4IDk2IDk2VjIyNEM5NiAyMjguNDIyIDk5LjU5NCAyMzIgMTA0IDIzMloiLz48L3N2Zz4=|width=32|height=32)
 */
const TruckContainer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M232 232C236.406 232 240 228.422 240 224V96C240 91.578 236.406 88 232 88S224 91.578 224 96V224C224 228.422 227.594 232 232 232ZM296 232C300.406 232 304 228.422 304 224V96C304 91.578 300.406 88 296 88S288 91.578 288 96V224C288 228.422 291.594 232 296 232ZM168 232C172.406 232 176 228.422 176 224V96C176 91.578 172.406 88 168 88S160 91.578 160 96V224C160 228.422 163.594 232 168 232ZM629.477 249.396L568.961 183.367C555.312 168.479 536.041 160 515.844 160H448C439.164 160 432 167.162 432 176V352.438C425.117 361.68 419.99 372.293 417.613 384H334.387C326.973 347.484 294.703 320 256 320C224.145 320 196.869 338.756 184 365.703C171.131 338.756 143.855 320 112 320C73.297 320 41.027 347.484 33.613 384H8C3.594 384 0 387.578 0 392S3.594 400 8 400H32C32 444.182 67.816 480 112 480C143.855 480 171.131 461.24 184 434.295C196.869 461.24 224.145 480 256 480C300.184 480 336 444.182 336 400H416C416 444.182 451.816 480 496 480S576 444.182 576 400H600C622.062 400 640 382.062 640 360V276.453C640 266.436 636.246 256.781 629.477 249.396ZM112 464C76.711 464 48 435.289 48 400C48 364.709 76.711 336 112 336S176 364.709 176 400C176 435.289 147.289 464 112 464ZM256 464C220.711 464 192 435.289 192 400C192 364.709 220.711 336 256 336S320 364.709 320 400C320 435.289 291.289 464 256 464ZM448 176H515.844C531.5 176 546.562 182.625 557.125 194.156L613.807 256H448V176ZM496 464C460.711 464 432 435.289 432 400C432 364.709 460.711 336 496 336S560 364.709 560 400C560 435.289 531.289 464 496 464ZM624 360C624 373.234 613.219 384 600 384H574.387C566.973 347.484 534.703 320 496 320C477.904 320 461.402 326.232 448 336.361V272H624V360ZM32 288H368C385.674 288 400 273.672 400 256V64C400 46.326 385.674 32 368 32H32C14.326 32 0 46.326 0 64V256C0 273.672 14.326 288 32 288ZM16 64C16 55.178 23.178 48 32 48H368C376.822 48 384 55.178 384 64V256C384 264.822 376.822 272 368 272H32C23.178 272 16 264.822 16 256V64ZM104 232C108.406 232 112 228.422 112 224V96C112 91.578 108.406 88 104 88S96 91.578 96 96V224C96 228.422 99.594 232 104 232Z" />
    </Icon>
);

export default TruckContainer;