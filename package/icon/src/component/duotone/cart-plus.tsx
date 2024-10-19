
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-plus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cart-plus?s=duotone cart-plus}
 * @preview ![cart-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU2OS41NzIgNDQuNzM0QzU2My40NjMgMzYuNjQxIDU1NC4xNSAzMiA1NDQuMDEgMzJIMTIyTDE3MC43NiAyODhINDg5LjE2NkM1MDMuNCAyODggNTE2LjA0MSAyNzguNDM4IDUxOS45MzIgMjY0Ljc4MUw1NzQuNzkxIDcyLjc5N0M1NzcuNTcyIDYzLjA0NyA1NzUuNjY2IDUyLjgyOCA1NjkuNTcyIDQ0LjczNFpNMzk1LjQ3NSAxODAuNTc2SDM1Ni42MTVWMjE5LjQyOEMzNTYuNjE1IDIzMC43NDIgMzQ3LjM1NyAyNDAgMzM2LjA0NSAyNDBIMzM2LjA0MUMzMjQuNzI5IDI0MCAzMTUuNDcxIDIzMC43NDIgMzE1LjQ3MSAyMTkuNDI4VjE4MC41NzZIMjc2LjYxMUMyNjUuMjk5IDE4MC41NzYgMjU2LjA0MyAxNzEuMzIgMjU2LjA0MyAxNjAuMDA2QzI1Ni4wNDMgMTQ4LjY5MyAyNjUuMjk5IDEzOS40MzggMjc2LjYxMSAxMzkuNDM4SDMxNS40NzFWMTAwLjU4NkMzMTUuNDcxIDg5LjI3MSAzMjQuNzI5IDgwLjAxNiAzMzYuMDQxIDgwLjAxNkgzMzYuMDQ1QzM0Ny4zNTcgODAuMDE2IDM1Ni42MTUgODkuMjcxIDM1Ni42MTUgMTAwLjU4NlYxMzkuNDM3SDM5NS40NzVDNDA2Ljc4NyAxMzkuNDM4IDQxNi4wNDMgMTQ4LjY5MyA0MTYuMDQzIDE2MC4wMDZDNDE2LjA0MyAxNzEuMzIgNDA2Ljc4NyAxODAuNTc2IDM5NS40NzUgMTgwLjU3NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTc2IDQxNkMxNDkuNDkgNDE2IDEyOCA0MzcuNDkgMTI4IDQ2NFMxNDkuNDkgNTEyIDE3NiA1MTJTMjI0IDQ5MC41MSAyMjQgNDY0UzIwMi41MSA0MTYgMTc2IDQxNlpNMjc2LjU2OCAxODAuNTc2SDMxNS40MjhWMjE5LjQyOEMzMTUuNDI4IDIzMC43NDIgMzI0LjY4NiAyNDAgMzM1Ljk5OCAyNDBIMzM2LjAwMkMzNDcuMzE0IDI0MCAzNTYuNTcyIDIzMC43NDIgMzU2LjU3MiAyMTkuNDI4VjE4MC41NzZIMzk1LjQzMkM0MDYuNzQ0IDE4MC41NzYgNDE2IDE3MS4zMiA0MTYgMTYwLjAwNkM0MTYgMTQ4LjY5MyA0MDYuNzQ0IDEzOS40MzggMzk1LjQzMiAxMzkuNDM4SDM1Ni41NzJWMTAwLjU4NkMzNTYuNTcyIDg5LjI3MSAzNDcuMzE0IDgwLjAxNiAzMzYuMDAyIDgwLjAxNkgzMzUuOTk4QzMyNC42ODYgODAuMDE2IDMxNS40MjggODkuMjcxIDMxNS40MjggMTAwLjU4NlYxMzkuNDM3SDI3Ni41NjhDMjY1LjI1NiAxMzkuNDM4IDI1NiAxNDguNjkzIDI1NiAxNjAuMDA2QzI1NiAxNzEuMzIgMjY1LjI1NiAxODAuNTc2IDI3Ni41NjggMTgwLjU3NlpNNDg4IDMzNkgxNzkuODU5TDExOS41NzggMTkuNTExQzExNy40MjIgOC4xOTEgMTA3LjUyNCAwIDk2IDBIMjRDMTAuNzQ1IDAgMCAxMC43NDUgMCAyNFYyNEMwIDM3LjI1NSAxMC43NDUgNDggMjQgNDhINzYuMTQxTDEzNi40MjQgMzY0LjQ5MUMxMzguNTggMzc1LjgxMSAxNDguNDc3IDM4NCAxNjAgMzg0SDQ4OEM1MDEuMjU1IDM4NCA1MTIgMzczLjI1NSA1MTIgMzYwVjM2MEM1MTIgMzQ2Ljc0NSA1MDEuMjU1IDMzNiA0ODggMzM2Wk00NjQgNDE2QzQzNy40OSA0MTYgNDE2IDQzNy40OSA0MTYgNDY0UzQzNy40OSA1MTIgNDY0IDUxMlM1MTIgNDkwLjUxIDUxMiA0NjRTNDkwLjUxIDQxNiA0NjQgNDE2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const CartPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M569.572 44.734C563.463 36.641 554.15 32 544.01 32H122L170.76 288H489.166C503.4 288 516.041 278.438 519.932 264.781L574.791 72.797C577.572 63.047 575.666 52.828 569.572 44.734ZM395.475 180.576H356.615V219.428C356.615 230.742 347.357 240 336.045 240H336.041C324.729 240 315.471 230.742 315.471 219.428V180.576H276.611C265.299 180.576 256.043 171.32 256.043 160.006C256.043 148.693 265.299 139.438 276.611 139.438H315.471V100.586C315.471 89.271 324.729 80.016 336.041 80.016H336.045C347.357 80.016 356.615 89.271 356.615 100.586V139.437H395.475C406.787 139.438 416.043 148.693 416.043 160.006C416.043 171.32 406.787 180.576 395.475 180.576Z" />
            <path d="M176 416C149.49 416 128 437.49 128 464S149.49 512 176 512S224 490.51 224 464S202.51 416 176 416ZM276.568 180.576H315.428V219.428C315.428 230.742 324.686 240 335.998 240H336.002C347.314 240 356.572 230.742 356.572 219.428V180.576H395.432C406.744 180.576 416 171.32 416 160.006C416 148.693 406.744 139.438 395.432 139.438H356.572V100.586C356.572 89.271 347.314 80.016 336.002 80.016H335.998C324.686 80.016 315.428 89.271 315.428 100.586V139.437H276.568C265.256 139.438 256 148.693 256 160.006C256 171.32 265.256 180.576 276.568 180.576ZM488 336H179.859L119.578 19.511C117.422 8.191 107.524 0 96 0H24C10.745 0 0 10.745 0 24V24C0 37.255 10.745 48 24 48H76.141L136.424 364.491C138.58 375.811 148.477 384 160 384H488C501.255 384 512 373.255 512 360V360C512 346.745 501.255 336 488 336ZM464 416C437.49 416 416 437.49 416 464S437.49 512 464 512S512 490.51 512 464S490.51 416 464 416Z" />
    </Icon>
);

export default CartPlus;