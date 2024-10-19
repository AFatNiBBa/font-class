
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `camera-polaroid` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/camera-polaroid?s=duotone camera-polaroid}
 * @preview ![camera-polaroid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OCAyNTZDMzIzLjM3NSAyNTYgMzUyIDIyNy4zNzUgMzUyIDE5MlMzMjMuMzc1IDEyOCAyODggMTI4UzIyNCAxNTYuNjI1IDIyNCAxOTJTMjUyLjYyNSAyNTYgMjg4IDI1NlpNNTc1Ljk1NSAzNTJIMC4wNDVMMCAzNTIuMDY4VjQ0OEMwIDQ2NS42IDE0LjQgNDgwIDMyIDQ4MEg1NDRDNTYxLjYgNDgwIDU3NiA0NjUuNiA1NzYgNDQ4VjM1Mi4wNjhMNTc1Ljk1NSAzNTJaTTQ2NCA0MzJIMTEyQzEwMy4xNjQgNDMyIDk2IDQyNC44MzYgOTYgNDE2Qzk2IDQwNy4xNjIgMTAzLjE2NCA0MDAgMTEyIDQwMEg0NjRDNDcyLjgzOCA0MDAgNDgwIDQwNy4xNjIgNDgwIDQxNkM0ODAgNDI0LjgzNiA0NzIuODM4IDQzMiA0NjQgNDMyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01NzUuOTEgMzUyTDUxMS45NTUgMjU2VjgwQzUxMS45NTUgNTMuNDkgNDkwLjQ2NSAzMiA0NjMuOTU1IDMySDExMS45NTVDODUuNDQ1IDMyIDYzLjk1NSA1My40OSA2My45NTUgODBWMjU2TDAgMzUySDU3NS45MVpNMzgzLjk1NSAxMTJDMzgzLjk1NSAxMDMuMTk5IDM5MS4xNTYgOTYgMzk5Ljk1NSA5Nkg0MzEuOTU1QzQ0MC43NTYgOTYgNDQ3Ljk1NSAxMDMuMTk5IDQ0Ny45NTUgMTEyVjE0NEM0NDcuOTU1IDE1Mi44MDEgNDQwLjc1NiAxNjAgNDMxLjk1NSAxNjBIMzk5Ljk1NUMzOTEuMTU2IDE2MCAzODMuOTU1IDE1Mi44MDEgMzgzLjk1NSAxNDRWMTEyWk0yODcuOTU1IDEyOEMzMjMuMzMgMTI4IDM1MS45NTUgMTU2LjYyNSAzNTEuOTU1IDE5MlMzMjMuMzMgMjU2IDI4Ny45NTUgMjU2UzIyMy45NTUgMjI3LjM3NSAyMjMuOTU1IDE5MlMyNTIuNTggMTI4IDI4Ny45NTUgMTI4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CameraPolaroid(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M288 256C323.375 256 352 227.375 352 192S323.375 128 288 128S224 156.625 224 192S252.625 256 288 256ZM575.955 352H0.045L0 352.068V448C0 465.6 14.4 480 32 480H544C561.6 480 576 465.6 576 448V352.068L575.955 352ZM464 432H112C103.164 432 96 424.836 96 416C96 407.162 103.164 400 112 400H464C472.838 400 480 407.162 480 416C480 424.836 472.838 432 464 432Z" />
            <path d="M575.91 352L511.955 256V80C511.955 53.49 490.465 32 463.955 32H111.955C85.445 32 63.955 53.49 63.955 80V256L0 352H575.91ZM383.955 112C383.955 103.199 391.156 96 399.955 96H431.955C440.756 96 447.955 103.199 447.955 112V144C447.955 152.801 440.756 160 431.955 160H399.955C391.156 160 383.955 152.801 383.955 144V112ZM287.955 128C323.33 128 351.955 156.625 351.955 192S323.33 256 287.955 256S223.955 227.375 223.955 192S252.58 128 287.955 128Z" />
        </Icon>
    </>
}