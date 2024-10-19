
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sheep` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sheep?s=duotone sheep}
 * @preview ![sheep](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ5My4yOTUgMzE4LjU3NkM0OTQuODgxIDMyNC4xNSA0OTYgMzI5LjkxOCA0OTYgMzM2QzQ5NiAzNzEuMzQ2IDQ2Ny4zNDYgNDAwIDQzMiA0MDBDNDIwLjkzMiA0MDAgNDEwLjY3OCAzOTYuOTM2IDQwMS41OTggMzkxLjk5QzM4OS44NjUgNDA2LjUyIDM3Mi4xMjkgNDE2IDM1MiA0MTZDMzQwLjkzMiA0MTYgMzMwLjY3OCA0MTIuOTM2IDMyMS41OTggNDA3Ljk5QzMwOS44NjUgNDIyLjUyIDI5Mi4xMjkgNDMyIDI3MiA0MzJTMjM0LjEzNSA0MjIuNTIgMjIyLjQwMiA0MDcuOTlDMjEzLjMyMiA0MTIuOTM2IDIwMy4wNjggNDE2IDE5MiA0MTZDMTcxLjg3MSA0MTYgMTU0LjEzNSA0MDYuNTIgMTQyLjQwMiAzOTEuOTlDMTMzLjMyMiAzOTYuOTM2IDEyMy4wNjggNDAwIDExMiA0MDBDNzYuNjU0IDQwMCA0OCAzNzEuMzQ2IDQ4IDMzNkM0OCAzMjkuOTE4IDQ5LjExOSAzMjQuMTUgNTAuNzA1IDMxOC41NzZDMjEuNzQ4IDMxMi40NTEgMCAyODYuNzgxIDAgMjU2UzIxLjc0OCAxOTkuNTQ5IDUwLjcwNSAxOTMuNDI0QzQ5LjExOSAxODcuODUgNDggMTgyLjA4MiA0OCAxNzZDNDggMTQwLjY1NCA3Ni42NTQgMTEyIDExMiAxMTJDMTIzLjA2OCAxMTIgMTMzLjMyMiAxMTUuMDY0IDE0Mi40MDIgMTIwLjAxQzE1NC4xMzUgMTA1LjQ4IDE3MS44NzEgOTYgMTkyIDk2QzIwMy4wNjggOTYgMjEzLjMyMiA5OS4wNjQgMjIyLjQwMiAxMDQuMDFDMjM0LjEzNSA4OS40OCAyNTEuODcxIDgwIDI3MiA4MFMzMDkuODY1IDg5LjQ4IDMyMS41OTggMTA0LjAxQzMzMC42NzggOTkuMDY0IDM0MC45MzIgOTYgMzUyIDk2QzM4Mi43ODEgOTYgNDA4LjQ1MSAxMTcuNzQ4IDQxNC41NzYgMTQ2LjcwNUM0MjAuMTUgMTQ1LjExOSA0MjUuOTE4IDE0NCA0MzIgMTQ0QzQ2Mi40MjIgMTQ0IDQ4Ny43NyAxNjUuMjc1IDQ5NC4yNzMgMTkzLjcyN0M1MjIuNzI1IDIwMC4yMyA1NDQgMjI1LjU3OCA1NDQgMjU2QzU0NCAyODYuNzgxIDUyMi4yNTIgMzEyLjQ1MSA0OTMuMjk1IDMxOC41NzZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTE5MS45NjUgNDE2QzE3MS44MzYgNDE2IDE1NC4xIDQwNi41MiAxNDIuMzY3IDM5MS45OUMxMzQuMTUyIDM5Ni40NjUgMTI0Ljg3MSAzOTkuMDcyIDExNSAzOTkuNTlMMTUzLjkzIDQ5Ni45MTRDMTU3LjU3NCA1MDYuMDI1IDE2Ni40IDUxMiAxNzYuMjEzIDUxMkgxOTkuOTY1QzIxMy4yMTkgNTEyIDIyMy45NjUgNTAxLjI1NCAyMjMuOTY1IDQ4OFY0MDkuNTlDMjIzLjQ3MSA0MDkuMDIgMjIyLjg0MiA0MDguNTc4IDIyMi4zNjcgNDA3Ljk5QzIxMy4yODcgNDEyLjkzNiAyMDMuMDMzIDQxNiAxOTEuOTY1IDQxNlpNMzUxLjk2NSA0MTZDMzQwLjg5NiA0MTYgMzMwLjY0MyA0MTIuOTM2IDMyMS41NjMgNDA3Ljk5QzMyMS4wODggNDA4LjU3OCAzMjAuNDU5IDQwOS4wMiAzMTkuOTY1IDQwOS41OVY0ODhDMzE5Ljk2NSA1MDEuMjU0IDMzMC43MTEgNTEyIDM0My45NjUgNTEySDM2Ny43MTdDMzc3LjUyOSA1MTIgMzg2LjM1NSA1MDYuMDI1IDM5MCA0OTYuOTE0TDQyOC45MyAzOTkuNTlDNDE5LjA1OSAzOTkuMDcyIDQwOS43NzcgMzk2LjQ2NSA0MDEuNTYyIDM5MS45OUMzODkuODMgNDA2LjUyIDM3Mi4wOTQgNDE2IDM1MS45NjUgNDE2Wk02MjQuMzA5IDEwMC43Nkw1NzEuMjAzIDQ3LjY1NEM1NjEuMTggMzcuNjMxIDU0Ny41ODYgMzIgNTMzLjQxIDMySDQ2My45NjVDNDYzLjk2NSAxNC4zMjYgNDQ5LjYzOSAwIDQzMS45NjUgMFMzOTkuOTY1IDE0LjMyNiAzOTkuOTY1IDMyVjExNy43NEM0MDcuMDk0IDEyNS44NDQgNDEyLjIyNSAxMzUuNzUyIDQxNC41NDEgMTQ2LjcwNUM0MjAuMTE1IDE0NS4xMTkgNDI1Ljg4MyAxNDQgNDMxLjk2NSAxNDRDNDYxLjc1IDE0NCA0ODYuNTUxIDE2NC40NDUgNDkzLjY4NiAxOTJINTg2LjUxOEM2MDYuNzYyIDE5MiA2MjUuMjY4IDE4MC41NjIgNjM0LjMyIDE2Mi40NTVDNjQ0LjYwOSAxNDEuODc5IDY0MC41NzYgMTE3LjAyNyA2MjQuMzA5IDEwMC43NlpNNTExLjk2NSAxMTJDNTAzLjEyOSAxMTIgNDk1Ljk2NSAxMDQuODM2IDQ5NS45NjUgOTZTNTAzLjEyOSA4MCA1MTEuOTY1IDgwUzUyNy45NjUgODcuMTY0IDUyNy45NjUgOTZTNTIwLjgwMSAxMTIgNTExLjk2NSAxMTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Sheep(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M493.295 318.576C494.881 324.15 496 329.918 496 336C496 371.346 467.346 400 432 400C420.932 400 410.678 396.936 401.598 391.99C389.865 406.52 372.129 416 352 416C340.932 416 330.678 412.936 321.598 407.99C309.865 422.52 292.129 432 272 432S234.135 422.52 222.402 407.99C213.322 412.936 203.068 416 192 416C171.871 416 154.135 406.52 142.402 391.99C133.322 396.936 123.068 400 112 400C76.654 400 48 371.346 48 336C48 329.918 49.119 324.15 50.705 318.576C21.748 312.451 0 286.781 0 256S21.748 199.549 50.705 193.424C49.119 187.85 48 182.082 48 176C48 140.654 76.654 112 112 112C123.068 112 133.322 115.064 142.402 120.01C154.135 105.48 171.871 96 192 96C203.068 96 213.322 99.064 222.402 104.01C234.135 89.48 251.871 80 272 80S309.865 89.48 321.598 104.01C330.678 99.064 340.932 96 352 96C382.781 96 408.451 117.748 414.576 146.705C420.15 145.119 425.918 144 432 144C462.422 144 487.77 165.275 494.273 193.727C522.725 200.23 544 225.578 544 256C544 286.781 522.252 312.451 493.295 318.576Z" />
            <path d="M191.965 416C171.836 416 154.1 406.52 142.367 391.99C134.152 396.465 124.871 399.072 115 399.59L153.93 496.914C157.574 506.025 166.4 512 176.213 512H199.965C213.219 512 223.965 501.254 223.965 488V409.59C223.471 409.02 222.842 408.578 222.367 407.99C213.287 412.936 203.033 416 191.965 416ZM351.965 416C340.896 416 330.643 412.936 321.563 407.99C321.088 408.578 320.459 409.02 319.965 409.59V488C319.965 501.254 330.711 512 343.965 512H367.717C377.529 512 386.355 506.025 390 496.914L428.93 399.59C419.059 399.072 409.777 396.465 401.562 391.99C389.83 406.52 372.094 416 351.965 416ZM624.309 100.76L571.203 47.654C561.18 37.631 547.586 32 533.41 32H463.965C463.965 14.326 449.639 0 431.965 0S399.965 14.326 399.965 32V117.74C407.094 125.844 412.225 135.752 414.541 146.705C420.115 145.119 425.883 144 431.965 144C461.75 144 486.551 164.445 493.686 192H586.518C606.762 192 625.268 180.562 634.32 162.455C644.609 141.879 640.576 117.027 624.309 100.76ZM511.965 112C503.129 112 495.965 104.836 495.965 96S503.129 80 511.965 80S527.965 87.164 527.965 96S520.801 112 511.965 112Z" />
        </Icon>
    </>
}