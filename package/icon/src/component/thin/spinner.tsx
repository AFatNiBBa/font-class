
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `spinner` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/spinner?s=thin spinner}
 * @preview ![spinner](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMDguODc1IDM1NS4xMjVDODIuMzc1IDM1NS4xMjUgNjAuODc1IDM3Ni42MjUgNjAuODc1IDQwMy4xMjVTODIuMzc1IDQ1MS4xMjUgMTA4Ljg3NSA0NTEuMTI1UzE1Ni44NzUgNDI5LjYyNSAxNTYuODc1IDQwMy4xMjVTMTM1LjM3NSAzNTUuMTI1IDEwOC44NzUgMzU1LjEyNVpNMTA4Ljg3NSA0MzUuMTI1QzkxLjIzIDQzNS4xMjUgNzYuODc1IDQyMC43NyA3Ni44NzUgNDAzLjEyNVM5MS4yMyAzNzEuMTI1IDEwOC44NzUgMzcxLjEyNVMxNDAuODc1IDM4NS40OCAxNDAuODc1IDQwMy4xMjVTMTI2LjUyIDQzNS4xMjUgMTA4Ljg3NSA0MzUuMTI1Wk00NjQgMjA4QzQzNy41IDIwOCA0MTYgMjI5LjUgNDE2IDI1NlM0MzcuNSAzMDQgNDY0IDMwNFM1MTIgMjgyLjUgNTEyIDI1NlM0OTAuNSAyMDggNDY0IDIwOFpNNDY0IDI4OEM0NDYuMzU1IDI4OCA0MzIgMjczLjY0NSA0MzIgMjU2UzQ0Ni4zNTUgMjI0IDQ2NCAyMjRTNDk2IDIzOC4zNTUgNDk2IDI1NlM0ODEuNjQ1IDI4OCA0NjQgMjg4Wk0yNTYgMEMyMjkuNSAwIDIwOCAyMS41IDIwOCA0OFMyMjkuNSA5NiAyNTYgOTZTMzA0IDc0LjUgMzA0IDQ4UzI4Mi41IDAgMjU2IDBaTTI1NiA4MEMyMzguMzU1IDgwIDIyNCA2NS42NDUgMjI0IDQ4UzIzOC4zNTUgMTYgMjU2IDE2UzI4OCAzMC4zNTUgMjg4IDQ4UzI3My42NDUgODAgMjU2IDgwWk05NiAyNTZDOTYgMjI5LjUgNzQuNSAyMDggNDggMjA4UzAgMjI5LjUgMCAyNTZTMjEuNSAzMDQgNDggMzA0Uzk2IDI4Mi41IDk2IDI1NlpNNDggMjg4QzMwLjM1NSAyODggMTYgMjczLjY0NSAxNiAyNTZTMzAuMzU1IDIyNCA0OCAyMjRTODAgMjM4LjM1NSA4MCAyNTZTNjUuNjQ1IDI4OCA0OCAyODhaTTI1NiA0MTZDMjI5LjUgNDE2IDIwOCA0MzcuNSAyMDggNDY0UzIyOS41IDUxMiAyNTYgNTEyUzMwNCA0OTAuNSAzMDQgNDY0UzI4Mi41IDQxNiAyNTYgNDE2Wk0yNTYgNDk2QzIzOC4zNTUgNDk2IDIyNCA0ODEuNjQ1IDIyNCA0NjRTMjM4LjM1NSA0MzIgMjU2IDQzMlMyODggNDQ2LjM1NSAyODggNDY0UzI3My42NDUgNDk2IDI1NiA0OTZaTTEwOC44NzUgNjAuODc1QzgyLjM3NSA2MC44NzUgNjAuODc1IDgyLjM3NSA2MC44NzUgMTA4Ljg3NVM4Mi4zNzUgMTU2Ljg3NSAxMDguODc1IDE1Ni44NzVTMTU2Ljg3NSAxMzUuMzc1IDE1Ni44NzUgMTA4Ljg3NVMxMzUuMzc1IDYwLjg3NSAxMDguODc1IDYwLjg3NVpNMTA4Ljg3NSAxNDAuODc1QzkxLjIzIDE0MC44NzUgNzYuODc1IDEyNi41MiA3Ni44NzUgMTA4Ljg3NVM5MS4yMyA3Ni44NzUgMTA4Ljg3NSA3Ni44NzVTMTQwLjg3NSA5MS4yMyAxNDAuODc1IDEwOC44NzVTMTI2LjUyIDE0MC44NzUgMTA4Ljg3NSAxNDAuODc1Wk00MDMuMTI1IDM1NS4xMjVDMzc2LjYyNSAzNTUuMTI1IDM1NS4xMjUgMzc2LjYyNSAzNTUuMTI1IDQwMy4xMjVTMzc2LjYyNSA0NTEuMTI1IDQwMy4xMjUgNDUxLjEyNVM0NTEuMTI1IDQyOS42MjUgNDUxLjEyNSA0MDMuMTI1UzQyOS42MjUgMzU1LjEyNSA0MDMuMTI1IDM1NS4xMjVaTTQwMy4xMjUgNDM1LjEyNUMzODUuNDggNDM1LjEyNSAzNzEuMTI1IDQyMC43NyAzNzEuMTI1IDQwMy4xMjVTMzg1LjQ4IDM3MS4xMjUgNDAzLjEyNSAzNzEuMTI1UzQzNS4xMjUgMzg1LjQ4IDQzNS4xMjUgNDAzLjEyNVM0MjAuNzcgNDM1LjEyNSA0MDMuMTI1IDQzNS4xMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Spinner(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M108.875 355.125C82.375 355.125 60.875 376.625 60.875 403.125S82.375 451.125 108.875 451.125S156.875 429.625 156.875 403.125S135.375 355.125 108.875 355.125ZM108.875 435.125C91.23 435.125 76.875 420.77 76.875 403.125S91.23 371.125 108.875 371.125S140.875 385.48 140.875 403.125S126.52 435.125 108.875 435.125ZM464 208C437.5 208 416 229.5 416 256S437.5 304 464 304S512 282.5 512 256S490.5 208 464 208ZM464 288C446.355 288 432 273.645 432 256S446.355 224 464 224S496 238.355 496 256S481.645 288 464 288ZM256 0C229.5 0 208 21.5 208 48S229.5 96 256 96S304 74.5 304 48S282.5 0 256 0ZM256 80C238.355 80 224 65.645 224 48S238.355 16 256 16S288 30.355 288 48S273.645 80 256 80ZM96 256C96 229.5 74.5 208 48 208S0 229.5 0 256S21.5 304 48 304S96 282.5 96 256ZM48 288C30.355 288 16 273.645 16 256S30.355 224 48 224S80 238.355 80 256S65.645 288 48 288ZM256 416C229.5 416 208 437.5 208 464S229.5 512 256 512S304 490.5 304 464S282.5 416 256 416ZM256 496C238.355 496 224 481.645 224 464S238.355 432 256 432S288 446.355 288 464S273.645 496 256 496ZM108.875 60.875C82.375 60.875 60.875 82.375 60.875 108.875S82.375 156.875 108.875 156.875S156.875 135.375 156.875 108.875S135.375 60.875 108.875 60.875ZM108.875 140.875C91.23 140.875 76.875 126.52 76.875 108.875S91.23 76.875 108.875 76.875S140.875 91.23 140.875 108.875S126.52 140.875 108.875 140.875ZM403.125 355.125C376.625 355.125 355.125 376.625 355.125 403.125S376.625 451.125 403.125 451.125S451.125 429.625 451.125 403.125S429.625 355.125 403.125 355.125ZM403.125 435.125C385.48 435.125 371.125 420.77 371.125 403.125S385.48 371.125 403.125 371.125S435.125 385.48 435.125 403.125S420.77 435.125 403.125 435.125Z" />
        </Icon>
    </>
}