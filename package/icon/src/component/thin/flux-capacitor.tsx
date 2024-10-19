
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `flux-capacitor` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flux-capacitor?s=thin flux-capacitor}
 * @preview ![flux-capacitor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMzJIODBDMzUuODc1IDMyLjEyNSAwLjEyNSA2Ny44NzUgMCAxMTJWNDAwQzAuMTI1IDQ0NC4xMjUgMzUuODc1IDQ3OS44NzUgODAgNDgwSDM2OEM0MTIuMTI1IDQ3OS44NzUgNDQ3Ljg3NSA0NDQuMTI1IDQ0OCA0MDBWMTEyQzQ0Ny44NzUgNjcuODc1IDQxMi4xMjUgMzIuMTI1IDM2OCAzMlpNNDMyIDM5OS45NTNDNDMxLjkgNDM1LjE2OCA0MDMuMTcgNDYzLjg5OCAzNjggNDY0SDgwLjA0NUM0NC44MyA0NjMuODk4IDE2LjEgNDM1LjE2OCAxNiA0MDBWMTEyLjA0N0MxNi4xIDc2LjgzMiA0NC44MyA0OC4xMDIgODAgNDhIMzY3Ljk1NUM0MDMuMTcgNDguMTAyIDQzMS45IDc2LjgzMiA0MzIgMTEyVjM5OS45NTNaTTEyOCAyMzJDODguMjk3IDIzMiA1NiAxOTkuNjg4IDU2IDE2MFM4OC4yOTcgODggMTI4IDg4UzIwMCAxMjAuMzEyIDIwMCAxNjBDMjAwIDE2NC40MDYgMjAzLjU3OCAxNjggMjA4IDE2OFMyMTYgMTY0LjQwNiAyMTYgMTYwQzIxNiAxMTEuNDY5IDE3Ni41MzEgNzIgMTI4IDcyUzQwIDExMS40NjkgNDAgMTYwUzc5LjQ2OSAyNDggMTI4IDI0OEMxMzIuNDIyIDI0OCAxMzYgMjQ0LjQwNiAxMzYgMjQwUzEzMi40MjIgMjMyIDEyOCAyMzJaTTI3Ni43ODEgMjgxLjk2OUMyNzMuMjUgMjc5LjMxMiAyNjguMjUgMjgwLjA2MiAyNjUuNTc4IDI4My41OTRDMjYyLjkzOCAyODcuMTI1IDI2My42NzIgMjkyLjE1NiAyNjcuMjE5IDI5NC43ODFDMjgyLjgyOCAzMDYuNDA2IDI5NiAzMzIuNzE5IDI5NiAzNTIuMjVDMjk2IDM5MS44MTIgMjYzLjgxMiA0MjQgMjIzLjc1IDQyNEMxODQuMTg4IDQyNCAxNTIgMzkxLjgxMiAxNTIgMzUyLjI1QzE1MiAzMzIuODQ0IDE2NS4xODggMzA2LjUgMTgwLjgxMiAyOTQuNzgxQzE4NC4zNDQgMjkyLjEyNSAxODUuMDQ3IDI4Ny4wOTQgMTgyLjM5MSAyODMuNTYyUzE3NC43MzQgMjc5LjM0NCAxNzEuMTg4IDI4MS45NjlDMTUxLjQ1MyAyOTYuODEyIDEzNiAzMjcuNjg4IDEzNiAzNTIuMjVDMTM2IDQwMC42MjUgMTc1LjM1OSA0NDAgMjI0LjI1IDQ0MEMyNzIuNjQxIDQ0MCAzMTIgNDAwLjYyNSAzMTIgMzUyLjI1QzMxMiAzMjcuNTMxIDI5Ni41MzEgMjk2LjY1NiAyNzYuNzgxIDI4MS45NjlaTTMyMCA3MkMyNzEuNDY5IDcyIDIzMiAxMTEuNDY5IDIzMiAxNjBDMjMyIDE2NC40MDYgMjM1LjU3OCAxNjggMjQwIDE2OFMyNDggMTY0LjQwNiAyNDggMTYwQzI0OCAxMjAuMzEyIDI4MC4yOTcgODggMzIwIDg4UzM5MiAxMjAuMzEyIDM5MiAxNjBTMzU5LjcwMyAyMzIgMzIwIDIzMkMzMTUuNTc4IDIzMiAzMTIgMjM1LjU5NCAzMTIgMjQwUzMxNS41NzggMjQ4IDMyMCAyNDhDMzY4LjUzMSAyNDggNDA4IDIwOC41MzEgNDA4IDE2MFMzNjguNTMxIDcyIDMyMCA3MlpNMjI0IDM2MEMyMjguNDIyIDM2MCAyMzIgMzU2LjQwNiAyMzIgMzUyVjI1OS4zMTJMMzI1LjY1NiAxNjUuNjU2QzMyOC43ODEgMTYyLjUzMSAzMjguNzgxIDE1Ny40NjkgMzI1LjY1NiAxNTQuMzQ0UzMxNy40NjkgMTUxLjIxOSAzMTQuMzQ0IDE1NC4zNDRMMjI0IDI0NC42ODhMMTMzLjY1NiAxNTQuMzQ0QzEzMC41MzEgMTUxLjIxOSAxMjUuNDY5IDE1MS4yMTkgMTIyLjM0NCAxNTQuMzQ0UzExOS4yMTkgMTYyLjUzMSAxMjIuMzQ0IDE2NS42NTZMMjE2IDI1OS4zMTJWMzUyQzIxNiAzNTYuNDA2IDIxOS41NzggMzYwIDIyNCAzNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FluxCapacitor(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M368 32H80C35.875 32.125 0.125 67.875 0 112V400C0.125 444.125 35.875 479.875 80 480H368C412.125 479.875 447.875 444.125 448 400V112C447.875 67.875 412.125 32.125 368 32ZM432 399.953C431.9 435.168 403.17 463.898 368 464H80.045C44.83 463.898 16.1 435.168 16 400V112.047C16.1 76.832 44.83 48.102 80 48H367.955C403.17 48.102 431.9 76.832 432 112V399.953ZM128 232C88.297 232 56 199.688 56 160S88.297 88 128 88S200 120.312 200 160C200 164.406 203.578 168 208 168S216 164.406 216 160C216 111.469 176.531 72 128 72S40 111.469 40 160S79.469 248 128 248C132.422 248 136 244.406 136 240S132.422 232 128 232ZM276.781 281.969C273.25 279.312 268.25 280.062 265.578 283.594C262.938 287.125 263.672 292.156 267.219 294.781C282.828 306.406 296 332.719 296 352.25C296 391.812 263.812 424 223.75 424C184.188 424 152 391.812 152 352.25C152 332.844 165.188 306.5 180.812 294.781C184.344 292.125 185.047 287.094 182.391 283.562S174.734 279.344 171.188 281.969C151.453 296.812 136 327.688 136 352.25C136 400.625 175.359 440 224.25 440C272.641 440 312 400.625 312 352.25C312 327.531 296.531 296.656 276.781 281.969ZM320 72C271.469 72 232 111.469 232 160C232 164.406 235.578 168 240 168S248 164.406 248 160C248 120.312 280.297 88 320 88S392 120.312 392 160S359.703 232 320 232C315.578 232 312 235.594 312 240S315.578 248 320 248C368.531 248 408 208.531 408 160S368.531 72 320 72ZM224 360C228.422 360 232 356.406 232 352V259.312L325.656 165.656C328.781 162.531 328.781 157.469 325.656 154.344S317.469 151.219 314.344 154.344L224 244.688L133.656 154.344C130.531 151.219 125.469 151.219 122.344 154.344S119.219 162.531 122.344 165.656L216 259.312V352C216 356.406 219.578 360 224 360Z" />
        </Icon>
    </>
}