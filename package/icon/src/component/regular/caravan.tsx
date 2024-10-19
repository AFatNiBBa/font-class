
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `caravan` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/caravan?s=regular caravan}
 * @preview ![caravan](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTYgMzY4SDU3NlYxOTJDNTc2IDEwMy42MzQgNTA0LjM2NiAzMiA0MTYgMzJIOTZDNDIuOTgxIDMyIDAgNzQuOTgxIDAgMTI4VjMyMEMwIDM3MyA0MyA0MTYgOTYgNDE2Qzk2IDQ2OSAxMzkgNTEyIDE5MiA1MTJTMjg4IDQ2OSAyODggNDE2SDYxNkM2MjkuMjU1IDQxNiA2NDAgNDA1LjI1NSA2NDAgMzkyVjM5MkM2NDAgMzc4Ljc0NSA2MjkuMjU1IDM2OCA2MTYgMzY4Wk0xOTIgNDY0QzE2NS41IDQ2NCAxNDQgNDQyLjUgMTQ0IDQxNlMxNjUuNSAzNjggMTkyIDM2OFMyNDAgMzg5LjUgMjQwIDQxNlMyMTguNSA0NjQgMTkyIDQ2NFpNNDMyIDI0MEM0MjMuMTI1IDI0MCA0MTYgMjQ3LjEyNSA0MTYgMjU2QzQxNiAyNjQuODc1IDQyMy4xMjUgMjcyIDQzMiAyNzJWMzY4SDM2OFYxNzZINDMyVjI0MFpNNTI4IDM2OEg0ODBWMTY4QzQ4MCAxNDUuODc1IDQ2Mi4xMjUgMTI4IDQ0MCAxMjhIMzYwQzMzNy44NzUgMTI4IDMyMCAxNDUuODc1IDMyMCAxNjhWMzY4SDI3NC43NUMyNTcuOTk5IDMzOS4zNzUgMjI3LjUgMzIwIDE5MiAzMjBTMTI1Ljk5OSAzMzkuMzc1IDEwOS4yNSAzNjhIOTZDNjkuNSAzNjggNDggMzQ2LjUgNDggMzIwVjEyOEM0OCAxMDEuNSA2OS41IDgwIDk2IDgwSDQxNkM0NzcuODc1IDgwLjEyNSA1MjcuODc1IDEzMC4xMjUgNTI4IDE5MlYzNjhaTTI1NiAxMjhIMTI4QzExMC4zNzUgMTI4IDk2IDE0Mi4zNzUgOTYgMTYwVjIyNEM5NiAyNDEuNjI1IDExMC4zNzUgMjU2IDEyOCAyNTZIMjU2QzI3My42MjUgMjU2IDI4OCAyNDEuNjI1IDI4OCAyMjRWMTYwQzI4OCAxNDIuMzc1IDI3My42MjUgMTI4IDI1NiAxMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Caravan(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M616 368H576V192C576 103.634 504.366 32 416 32H96C42.981 32 0 74.981 0 128V320C0 373 43 416 96 416C96 469 139 512 192 512S288 469 288 416H616C629.255 416 640 405.255 640 392V392C640 378.745 629.255 368 616 368ZM192 464C165.5 464 144 442.5 144 416S165.5 368 192 368S240 389.5 240 416S218.5 464 192 464ZM432 240C423.125 240 416 247.125 416 256C416 264.875 423.125 272 432 272V368H368V176H432V240ZM528 368H480V168C480 145.875 462.125 128 440 128H360C337.875 128 320 145.875 320 168V368H274.75C257.999 339.375 227.5 320 192 320S125.999 339.375 109.25 368H96C69.5 368 48 346.5 48 320V128C48 101.5 69.5 80 96 80H416C477.875 80.125 527.875 130.125 528 192V368ZM256 128H128C110.375 128 96 142.375 96 160V224C96 241.625 110.375 256 128 256H256C273.625 256 288 241.625 288 224V160C288 142.375 273.625 128 256 128Z" />
        </Icon>
    </>
}