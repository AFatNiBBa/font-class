
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bring-front` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bring-front?s=thin bring-front}
 * @preview ![bring-front](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjAgMjQwSDY0QzM3LjQ5IDI0MCAxNiAyMTguNTEgMTYgMTkyVjY0QzE2IDM3LjQ5IDM3LjQ5IDE2IDY0IDE2SDE5MkMyMTYuMTU2IDE2IDIzNi4yMDMgMzMuOTM4IDIzOS41MiA1Ny4xOTFDMjQwLjA3NiA2MS4xMDQgMjQzLjQyIDY0IDI0Ny4zNzEgNjRDMjUyLjIxNyA2NCAyNTYuMDQxIDU5LjcwMyAyNTUuMzU5IDU0LjkwNkMyNTAuOTQzIDIzLjg2NyAyMjQuMjU4IDAgMTkyIDBINjRDMjguNjU0IDAgMCAyOC42NTQgMCA2NFYxOTJDMCAyMjcuMzQ2IDI4LjY1NCAyNTYgNjQgMjU2SDEyMEMxMjQuNDE4IDI1NiAxMjggMjUyLjQxOCAxMjggMjQ4UzEyNC40MTggMjQwIDEyMCAyNDBaTTQ4MCAzNTJWMTYwQzQ4MCAxMjQuNjU0IDQ1MS4zNDYgOTYgNDE2IDk2SDIyNEMxODguNjU0IDk2IDE2MCAxMjQuNjU0IDE2MCAxNjBWMzUyQzE2MCAzODcuMzQ2IDE4OC42NTQgNDE2IDIyNCA0MTZINDE2QzQ1MS4zNDYgNDE2IDQ4MCAzODcuMzQ2IDQ4MCAzNTJaTTE3NiAzNTJWMTYwQzE3NiAxMzMuNTMzIDE5Ny41MzMgMTEyIDIyNCAxMTJINDE2QzQ0Mi40NjcgMTEyIDQ2NCAxMzMuNTMzIDQ2NCAxNjBWMzUyQzQ2NCAzNzguNDY3IDQ0Mi40NjcgNDAwIDQxNiA0MDBIMjI0QzE5Ny41MzMgNDAwIDE3NiAzNzguNDY3IDE3NiAzNTJaTTU3NiAyNTZINTIwQzUxNS41ODIgMjU2IDUxMiAyNTkuNTgyIDUxMiAyNjRTNTE1LjU4MiAyNzIgNTIwIDI3Mkg1NzZDNjAyLjUxIDI3MiA2MjQgMjkzLjQ5IDYyNCAzMjBWNDQ4QzYyNCA0NzQuNTEgNjAyLjUxIDQ5NiA1NzYgNDk2SDQ0OEM0MjMuODQ0IDQ5NiA0MDMuNzk3IDQ3OC4wNjIgNDAwLjQ4IDQ1NC44MDlDMzk5LjkyNCA0NTAuODk2IDM5Ni41OCA0NDggMzkyLjYyOSA0NDhDMzg3Ljc4MyA0NDggMzgzLjk1OSA0NTIuMjk3IDM4NC42NDEgNDU3LjA5NEMzODkuMDU3IDQ4OC4xMzMgNDE1Ljc0MiA1MTIgNDQ4IDUxMkg1NzZDNjExLjM0NiA1MTIgNjQwIDQ4My4zNDYgNjQwIDQ0OFYzMjBDNjQwIDI4NC42NTQgNjExLjM0NiAyNTYgNTc2IDI1NlpNNTUyIDQzMkg0NzJDNDY3LjU5NCA0MzIgNDY0IDQzNS41NzggNDY0IDQ0MFM0NjcuNTk0IDQ0OCA0NzIgNDQ4SDU1MkM1NjUuMjE5IDQ0OCA1NzYgNDM3LjIzNCA1NzYgNDI0VjM0NEM1NzYgMzMwLjc2NiA1NjUuMjE5IDMyMCA1NTIgMzIwSDUyMEM1MTUuNTk0IDMyMCA1MTIgMzIzLjU3OCA1MTIgMzI4UzUxNS41OTQgMzM2IDUyMCAzMzZINTUyQzU1Ni40MDYgMzM2IDU2MCAzMzkuNTk0IDU2MCAzNDRWNDI0QzU2MCA0MjguNDA2IDU1Ni40MDYgNDMyIDU1MiA0MzJaTTEyMCAxNzZIODhDODMuNTk0IDE3NiA4MCAxNzIuNDA2IDgwIDE2OFY4OEM4MCA4My41OTQgODMuNTk0IDgwIDg4IDgwSDE2OEMxNzIuNDA2IDgwIDE3NiA3Ni40MjIgMTc2IDcyUzE3Mi40MDYgNjQgMTY4IDY0SDg4Qzc0Ljc4MSA2NCA2NCA3NC43NjYgNjQgODhWMTY4QzY0IDE4MS4yMzQgNzQuNzgxIDE5MiA4OCAxOTJIMTIwQzEyNC40MDYgMTkyIDEyOCAxODguNDIyIDEyOCAxODRTMTI0LjQwNiAxNzYgMTIwIDE3NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BringFront(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M120 240H64C37.49 240 16 218.51 16 192V64C16 37.49 37.49 16 64 16H192C216.156 16 236.203 33.938 239.52 57.191C240.076 61.104 243.42 64 247.371 64C252.217 64 256.041 59.703 255.359 54.906C250.943 23.867 224.258 0 192 0H64C28.654 0 0 28.654 0 64V192C0 227.346 28.654 256 64 256H120C124.418 256 128 252.418 128 248S124.418 240 120 240ZM480 352V160C480 124.654 451.346 96 416 96H224C188.654 96 160 124.654 160 160V352C160 387.346 188.654 416 224 416H416C451.346 416 480 387.346 480 352ZM176 352V160C176 133.533 197.533 112 224 112H416C442.467 112 464 133.533 464 160V352C464 378.467 442.467 400 416 400H224C197.533 400 176 378.467 176 352ZM576 256H520C515.582 256 512 259.582 512 264S515.582 272 520 272H576C602.51 272 624 293.49 624 320V448C624 474.51 602.51 496 576 496H448C423.844 496 403.797 478.062 400.48 454.809C399.924 450.896 396.58 448 392.629 448C387.783 448 383.959 452.297 384.641 457.094C389.057 488.133 415.742 512 448 512H576C611.346 512 640 483.346 640 448V320C640 284.654 611.346 256 576 256ZM552 432H472C467.594 432 464 435.578 464 440S467.594 448 472 448H552C565.219 448 576 437.234 576 424V344C576 330.766 565.219 320 552 320H520C515.594 320 512 323.578 512 328S515.594 336 520 336H552C556.406 336 560 339.594 560 344V424C560 428.406 556.406 432 552 432ZM120 176H88C83.594 176 80 172.406 80 168V88C80 83.594 83.594 80 88 80H168C172.406 80 176 76.422 176 72S172.406 64 168 64H88C74.781 64 64 74.766 64 88V168C64 181.234 74.781 192 88 192H120C124.406 192 128 188.422 128 184S124.406 176 120 176Z" />
        </Icon>
    </>
}