
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bone` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bone?s=thin bone}
 * @preview ![bone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MzQuODc1IDI0NC41QzU2MC4xMjUgMjMyIDU3NiAyMDYuMjUgNTc2IDE3OFYxNzMuNjEzQzU3NiAxMzguMDY0IDU1Mi41MDYgMTA1LjI2IDUxNy43NiA5Ny43MzhDNTEyLjMzMiA5Ni41NjIgNTA2LjkyOCA5NiA1MDEuNjI1IDk2QzQ2OS42MjMgOTYgNDQxLjEyNSAxMTYuNDk4IDQzMSAxNDYuODc1TDQzMC44MTIgMTQ3LjQ0M0M0MjUuMjEzIDE2NC40MzQgNDA5LjQ3NyAxNzYgMzkxLjU4NiAxNzZIMTg0LjQxQzE2Ni40MTYgMTc2IDE1MC43MjMgMTY0LjI1MiAxNDUuMDk0IDE0Ny4xNjJMMTQ1IDE0Ni44NzVDMTM0Ljg3NSAxMTYuNSAxMDYuMzc1IDk2IDc0LjM3NSA5NkM2OS4wNyA5NiA2My42NyA5Ni41NjIgNTguMjQgOTcuNzM4QzIzLjQ5NCAxMDUuMjYgMCAxMzguMDY0IDAgMTczLjYxM1YxNzhDMCAyMDYuMjUgMTUuODc1IDIzMiA0MS4xMjUgMjQ0LjVDNTAuNSAyNDkuMjUgNTAuNSAyNjIuNzUgNDEuMTI1IDI2Ny41QzE1Ljg3NSAyODAgMCAzMDUuNzUgMCAzMzRWMzM4LjM4N0MwIDM3My45MzYgMjMuNDk0IDQwNi43NCA1OC4yNCA0MTQuMjYyQzYzLjY2OCA0MTUuNDM2IDY5LjA3MiA0MTYgNzQuMzc1IDQxNkMxMDYuMzc3IDQxNiAxMzQuODc1IDM5NS41MDIgMTQ1IDM2NS4xMjVDMTQ1LjA2MiAzNjQuOTM2IDE0NS4xMjUgMzY0Ljc0OCAxNDUuMTg4IDM2NC41NTlDMTUwLjc4NSAzNDcuNTY2IDE2Ni41MjMgMzM2IDE4NC40MTQgMzM2SDM5MS41OUM0MDkuNTcyIDMzNiA0MjUuMjczIDM0Ny43MzIgNDMwLjg5NiAzNjQuODEyQzQzMC45MzIgMzY0LjkxOCA0MzAuOTY1IDM2NS4wMjEgNDMxIDM2NS4xMjVDNDQxLjEyNSAzOTUuNSA0NjkuNjI1IDQxNiA1MDEuNjI1IDQxNkM1MDYuOTMgNDE2IDUxMi4zMyA0MTUuNDM4IDUxNy43NiA0MTQuMjYyQzU1Mi41MDYgNDA2Ljc0IDU3NiAzNzMuOTM2IDU3NiAzMzguMzg3VjMzNEM1NzYgMzA1Ljc1IDU2MC4xMjUgMjgwIDUzNC44NzUgMjY3LjVDNTI1LjUgMjYyLjc1IDUyNS41IDI0OS4yNSA1MzQuODc1IDI0NC41Wk01MjcuNzc1IDI4MS44MzhDNTQ3LjY1MiAyOTEuNjc4IDU2MCAzMTEuNjY2IDU2MCAzMzRWMzM4LjM4N0M1NjAgMzY3LjU2OCA1NDAuODEyIDM5Mi45IDUxNC4zNzUgMzk4LjYyM0M1MTAuMTU0IDM5OS41MzcgNTA1Ljg2NSA0MDAgNTAxLjYyNSA0MDBDNDc2LjQyNCA0MDAgNDU0LjE0MSAzODMuOTUxIDQ0Ni4wOTQgMzU5LjgwOUM0MzguMjU0IDMzNS45OTggNDE2LjM1MiAzMjAgMzkxLjU5IDMyMEgxODQuNDE0QzE1OS42NTYgMzIwIDEzNy43ODUgMzM1Ljg5NSAxMjkuODIgMzYwLjA2NEMxMjEuODU5IDM4My45NTEgOTkuNTc4IDQwMCA3NC4zNzUgNDAwQzcwLjEzNSA0MDAgNjUuODQ2IDM5OS41MzcgNjEuNjI1IDM5OC42MjNDMzUuMTg4IDM5Mi45IDE2IDM2Ny41NjggMTYgMzM4LjM4N1YzMzRDMTYgMzExLjY2NiAyOC4zNDggMjkxLjY3OCA0OC4zNTUgMjgxLjc3MUM1OC4xMDIgMjc2LjgzNCA2NC4xNTYgMjY2Ljk1OSA2NC4xNTYgMjU2UzU4LjEwMiAyMzUuMTY0IDQ4LjIyNSAyMzAuMTZDMjguMzQ4IDIyMC4zMiAxNiAyMDAuMzM0IDE2IDE3OFYxNzMuNjEzQzE2IDE0NC40MzIgMzUuMTg4IDExOS4xIDYxLjYyNSAxMTMuMzc3QzY1Ljg0NiAxMTIuNDYzIDcwLjEzNSAxMTIgNzQuMzc1IDExMkM5OS41NzggMTEyIDEyMS44NTkgMTI4LjA0OSAxMjkuODk2IDE1Mi4xNjhDMTM3Ljc0NCAxNzUuOTkyIDE1OS42NSAxOTIgMTg0LjQxIDE5MkgzOTEuNTg2QzQxNi4zNDIgMTkyIDQzOC4yMTMgMTc2LjEwNSA0NDYuMTggMTUxLjkzNEM0NTQuMTQxIDEyOC4wNDkgNDc2LjQyMiAxMTIgNTAxLjYyNSAxMTJDNTA1Ljg2NSAxMTIgNTEwLjE1NCAxMTIuNDYzIDUxNC4zNzUgMTEzLjM3NUM1NDAuODEyIDExOS4xIDU2MCAxNDQuNDMyIDU2MCAxNzMuNjEzVjE3OEM1NjAgMjAwLjMzNCA1NDcuNjUyIDIyMC4zMiA1MjcuNjQzIDIzMC4yMjdDNTE3Ljg5OCAyMzUuMTY2IDUxMS44NDQgMjQ1LjA0MSA1MTEuODQ0IDI1NlM1MTcuODk4IDI3Ni44MzQgNTI3Ljc3NSAyODEuODM4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Bone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M534.875 244.5C560.125 232 576 206.25 576 178V173.613C576 138.064 552.506 105.26 517.76 97.738C512.332 96.562 506.928 96 501.625 96C469.623 96 441.125 116.498 431 146.875L430.812 147.443C425.213 164.434 409.477 176 391.586 176H184.41C166.416 176 150.723 164.252 145.094 147.162L145 146.875C134.875 116.5 106.375 96 74.375 96C69.07 96 63.67 96.562 58.24 97.738C23.494 105.26 0 138.064 0 173.613V178C0 206.25 15.875 232 41.125 244.5C50.5 249.25 50.5 262.75 41.125 267.5C15.875 280 0 305.75 0 334V338.387C0 373.936 23.494 406.74 58.24 414.262C63.668 415.436 69.072 416 74.375 416C106.377 416 134.875 395.502 145 365.125C145.062 364.936 145.125 364.748 145.188 364.559C150.785 347.566 166.523 336 184.414 336H391.59C409.572 336 425.273 347.732 430.896 364.812C430.932 364.918 430.965 365.021 431 365.125C441.125 395.5 469.625 416 501.625 416C506.93 416 512.33 415.438 517.76 414.262C552.506 406.74 576 373.936 576 338.387V334C576 305.75 560.125 280 534.875 267.5C525.5 262.75 525.5 249.25 534.875 244.5ZM527.775 281.838C547.652 291.678 560 311.666 560 334V338.387C560 367.568 540.812 392.9 514.375 398.623C510.154 399.537 505.865 400 501.625 400C476.424 400 454.141 383.951 446.094 359.809C438.254 335.998 416.352 320 391.59 320H184.414C159.656 320 137.785 335.895 129.82 360.064C121.859 383.951 99.578 400 74.375 400C70.135 400 65.846 399.537 61.625 398.623C35.188 392.9 16 367.568 16 338.387V334C16 311.666 28.348 291.678 48.355 281.771C58.102 276.834 64.156 266.959 64.156 256S58.102 235.164 48.225 230.16C28.348 220.32 16 200.334 16 178V173.613C16 144.432 35.188 119.1 61.625 113.377C65.846 112.463 70.135 112 74.375 112C99.578 112 121.859 128.049 129.896 152.168C137.744 175.992 159.65 192 184.41 192H391.586C416.342 192 438.213 176.105 446.18 151.934C454.141 128.049 476.422 112 501.625 112C505.865 112 510.154 112.463 514.375 113.375C540.812 119.1 560 144.432 560 173.613V178C560 200.334 547.652 220.32 527.643 230.227C517.898 235.166 511.844 245.041 511.844 256S517.898 276.834 527.775 281.838Z" />
        </Icon>
    </>
}