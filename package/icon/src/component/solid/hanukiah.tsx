
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hanukiah` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hanukiah?s=solid hanukiah}
 * @preview ![hanukiah](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzIgMTYwQzIyNy42MjUgMTYwIDIyNCAxNjMuNjI1IDIyNCAxNjhWMjg4SDI1NlYxNjhDMjU2IDE2My42MjUgMjUyLjM3NSAxNjAgMjQ4IDE2MEgyMzJaTTE2OCAxNjBDMTYzLjYyNSAxNjAgMTYwIDE2My42MjUgMTYwIDE2OFYyODhIMTkyVjE2OEMxOTIgMTYzLjYyNSAxODguMzc1IDE2MCAxODQgMTYwSDE2OFpNMzkyIDE2MEMzODcuNjI1IDE2MCAzODQgMTYzLjYyNSAzODQgMTY4VjI4OEg0MTZWMTY4QzQxNiAxNjMuNjI1IDQxMi4zNzUgMTYwIDQwOCAxNjBIMzkyWk00NTYgMTYwQzQ1MS42MjUgMTYwIDQ0OCAxNjMuNjI1IDQ0OCAxNjhWMjg4SDQ4MFYxNjhDNDgwIDE2My42MjUgNDc2LjM3NSAxNjAgNDcyIDE2MEg0NTZaTTU0NCAxNjhDNTQ0IDE2My42MjUgNTQwLjM3NSAxNjAgNTM2IDE2MEg1MjBDNTE1LjYyNSAxNjAgNTEyIDE2My42MjUgNTEyIDE2OFYyODhINTQ0VjE2OFpNMTA0IDE2MEM5OS42MjUgMTYwIDk2IDE2My42MjUgOTYgMTY4VjI4OEgxMjhWMTY4QzEyOCAxNjMuNjI1IDEyNC4zNzUgMTYwIDEyMCAxNjBIMTA0Wk02MjQgMTYwSDU5MkM1ODMuMTYzIDE2MCA1NzYgMTY3LjE2MyA1NzYgMTc2VjI4OEM1NzYgMzA1LjYgNTYxLjYgMzIwIDU0NCAzMjBIMzUyVjEyOEMzNTIgMTE5LjE2MyAzNDQuODM3IDExMiAzMzYgMTEySDMwNEMyOTUuMTYzIDExMiAyODggMTE5LjE2MyAyODggMTI4VjMyMEg5NkM3OC40IDMyMCA2NCAzMDUuNiA2NCAyODhWMTc2QzY0IDE2Ny4xNjMgNTYuODM3IDE2MCA0OCAxNjBIMTZDNy4xNjMgMTYwIDAgMTY3LjE2MyAwIDE3NlYyODhDMCAzNDEuMDE5IDQyLjk4MSAzODQgOTYgMzg0SDI4OFY0NDhIMTc2QzE0OS40OSA0NDggMTI4IDQ2OS40OSAxMjggNDk2VjQ5NkMxMjggNTA0LjgzNyAxMzUuMTYzIDUxMiAxNDQgNTEySDQ5NkM1MDQuODM3IDUxMiA1MTIgNTA0LjgzNyA1MTIgNDk2VjQ5NkM1MTIgNDY5LjQ5IDQ5MC41MSA0NDggNDY0IDQ0OEgzNTJWMzg0SDU0NEM1OTcuMDE5IDM4NCA2NDAgMzQxLjAxOSA2NDAgMjg4VjE3NkM2NDAgMTY3LjE2MyA2MzIuODM3IDE2MCA2MjQgMTYwWk02MDggMTI4QzYyMS4yNSAxMjggNjMyIDExNiA2MzIgMTAxLjM3NUM2MzIgODYuNjI1IDYwOCA0OCA2MDggNDhTNTg0IDg2LjYyNSA1ODQgMTAxLjM3NUM1ODQgMTE2IDU5NC43NSAxMjggNjA4IDEyOFpNMzIgMTI4QzQ1LjI1IDEyOCA1NiAxMTYgNTYgMTAxLjM3NUM1NiA4Ni42MjUgMzIgNDggMzIgNDhTOCA4Ni42MjUgOCAxMDEuMzc1QzggMTE2IDE4Ljc1IDEyOCAzMiAxMjhaTTMyMCA4MEMzMzMuMjUgODAgMzQ0IDY4IDM0NCA1My4zNzVDMzQ0IDM4LjYyNSAzMjAgMCAzMjAgMFMyOTYgMzguNjI1IDI5NiA1My4zNzVDMjk2IDY4IDMwNi43NSA4MCAzMjAgODBaTTExMiAxMjhDMTI1LjI1IDEyOCAxMzYgMTE2IDEzNiAxMDEuMzc1QzEzNiA4Ni42MjUgMTEyIDQ4IDExMiA0OFM4OCA4Ni42MjUgODggMTAxLjM3NUM4OCAxMTYgOTguNzUgMTI4IDExMiAxMjhaTTE3NiAxMjhDMTg5LjI1IDEyOCAyMDAgMTE2IDIwMCAxMDEuMzc1QzIwMCA4Ni42MjUgMTc2IDQ4IDE3NiA0OFMxNTIgODYuNjI1IDE1MiAxMDEuMzc1QzE1MiAxMTYgMTYyLjc1IDEyOCAxNzYgMTI4Wk0yNDAgMTI4QzI1My4yNSAxMjggMjY0IDExNiAyNjQgMTAxLjM3NUMyNjQgODYuNjI1IDI0MCA0OCAyNDAgNDhTMjE2IDg2LjYyNSAyMTYgMTAxLjM3NUMyMTYgMTE2IDIyNi43NSAxMjggMjQwIDEyOFpNNDAwIDEyOEM0MTMuMjUgMTI4IDQyNCAxMTYgNDI0IDEwMS4zNzVDNDI0IDg2LjYyNSA0MDAgNDggNDAwIDQ4UzM3NiA4Ni42MjUgMzc2IDEwMS4zNzVDMzc2IDExNiAzODYuNzUgMTI4IDQwMCAxMjhaTTQ2NCAxMjhDNDc3LjI1IDEyOCA0ODggMTE2IDQ4OCAxMDEuMzc1QzQ4OCA4Ni42MjUgNDY0IDQ4IDQ2NCA0OFM0NDAgODYuNjI1IDQ0MCAxMDEuMzc1QzQ0MCAxMTYgNDUwLjc1IDEyOCA0NjQgMTI4Wk01MjggMTI4QzU0MS4yNSAxMjggNTUyIDExNiA1NTIgMTAxLjM3NUM1NTIgODYuNjI1IDUyOCA0OCA1MjggNDhTNTA0IDg2LjYyNSA1MDQgMTAxLjM3NUM1MDQgMTE2IDUxNC43NSAxMjggNTI4IDEyOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Hanukiah(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M232 160C227.625 160 224 163.625 224 168V288H256V168C256 163.625 252.375 160 248 160H232ZM168 160C163.625 160 160 163.625 160 168V288H192V168C192 163.625 188.375 160 184 160H168ZM392 160C387.625 160 384 163.625 384 168V288H416V168C416 163.625 412.375 160 408 160H392ZM456 160C451.625 160 448 163.625 448 168V288H480V168C480 163.625 476.375 160 472 160H456ZM544 168C544 163.625 540.375 160 536 160H520C515.625 160 512 163.625 512 168V288H544V168ZM104 160C99.625 160 96 163.625 96 168V288H128V168C128 163.625 124.375 160 120 160H104ZM624 160H592C583.163 160 576 167.163 576 176V288C576 305.6 561.6 320 544 320H352V128C352 119.163 344.837 112 336 112H304C295.163 112 288 119.163 288 128V320H96C78.4 320 64 305.6 64 288V176C64 167.163 56.837 160 48 160H16C7.163 160 0 167.163 0 176V288C0 341.019 42.981 384 96 384H288V448H176C149.49 448 128 469.49 128 496V496C128 504.837 135.163 512 144 512H496C504.837 512 512 504.837 512 496V496C512 469.49 490.51 448 464 448H352V384H544C597.019 384 640 341.019 640 288V176C640 167.163 632.837 160 624 160ZM608 128C621.25 128 632 116 632 101.375C632 86.625 608 48 608 48S584 86.625 584 101.375C584 116 594.75 128 608 128ZM32 128C45.25 128 56 116 56 101.375C56 86.625 32 48 32 48S8 86.625 8 101.375C8 116 18.75 128 32 128ZM320 80C333.25 80 344 68 344 53.375C344 38.625 320 0 320 0S296 38.625 296 53.375C296 68 306.75 80 320 80ZM112 128C125.25 128 136 116 136 101.375C136 86.625 112 48 112 48S88 86.625 88 101.375C88 116 98.75 128 112 128ZM176 128C189.25 128 200 116 200 101.375C200 86.625 176 48 176 48S152 86.625 152 101.375C152 116 162.75 128 176 128ZM240 128C253.25 128 264 116 264 101.375C264 86.625 240 48 240 48S216 86.625 216 101.375C216 116 226.75 128 240 128ZM400 128C413.25 128 424 116 424 101.375C424 86.625 400 48 400 48S376 86.625 376 101.375C376 116 386.75 128 400 128ZM464 128C477.25 128 488 116 488 101.375C488 86.625 464 48 464 48S440 86.625 440 101.375C440 116 450.75 128 464 128ZM528 128C541.25 128 552 116 552 101.375C552 86.625 528 48 528 48S504 86.625 504 101.375C504 116 514.75 128 528 128Z" />
        </Icon>
    </>
}