
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `motorcycle` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/motorcycle?s=thin motorcycle}
 * @preview ![motorcycle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMjI0QzU3LjMwNyAyMjQgMCAyODEuMzA3IDAgMzUyUzU3LjMwNyA0ODAgMTI4IDQ4MFMyNTYgNDIyLjY5MyAyNTYgMzUyUzE5OC42OTMgMjI0IDEyOCAyMjRaTTEyOCA0NjRDNjYuMjQyIDQ2NCAxNiA0MTMuNzU4IDE2IDM1MlM2Ni4yNDIgMjQwIDEyOCAyNDBTMjQwIDI5MC4yNDIgMjQwIDM1MlMxODkuNzU4IDQ2NCAxMjggNDY0Wk0xMjggMjg4QzkyLjY1NCAyODggNjQgMzE2LjY1NCA2NCAzNTJTOTIuNjU0IDQxNiAxMjggNDE2UzE5MiAzODcuMzQ2IDE5MiAzNTJTMTYzLjM0NiAyODggMTI4IDI4OFpNMTI4IDQwMEMxMDEuNTMzIDQwMCA4MCAzNzguNDY3IDgwIDM1MlMxMDEuNTMzIDMwNCAxMjggMzA0UzE3NiAzMjUuNTMzIDE3NiAzNTJTMTU0LjQ2NyA0MDAgMTI4IDQwMFpNNTEyIDIyNEM0OTMuNzk5IDIyNCA0NzYuNTU1IDIyNy45MTYgNDYwLjg3OSAyMzQuNzY0TDM4OS4wNjQgOTQuNzI3TDQzNS41IDYwLjA5NEM0NDUuMzQ0IDUyLjI5NyA0NTcuNzE5IDQ4IDQ3MC4yODEgNDhINDg4QzUwMS4yMTkgNDggNTEyIDU4Ljc2NiA1MTIgNzJWMTA0QzUxMiAxMTcuMjM0IDUwMS4yMTkgMTI4IDQ4OCAxMjhINDU2QzQ1MS41OTQgMTI4IDQ0OCAxMzEuNTc4IDQ0OCAxMzZTNDUxLjU5NCAxNDQgNDU2IDE0NEg0ODhDNTEwLjA2MiAxNDQgNTI4IDEyNi4wNjIgNTI4IDEwNFY3MkM1MjggNDkuOTM4IDUxMC4wNjIgMzIgNDg4IDMySDQ3MC4yODFDNDU0LjEyNSAzMiA0MzguMjUgMzcuNTE2IDQyNS43NSA0Ny40MDZMMzgxLjY2MiA4MC4yOTFMMzU5LjEyNSAzNi4zNDRDMzU3Ljc1IDMzLjY3MiAzNTUgMzIgMzUyIDMySDI2NEMyNTkuNTk0IDMyIDI1NiAzNS41NzggMjU2IDQwUzI1OS41OTQgNDggMjY0IDQ4SDM0Ny4xMjVMMzY4LjY1NiA4OS45OTJMMjUzLjM0NCAxNzZIMjM3LjI1TDIxNy4zNzUgMTU2LjEyNUMxOTkuNSAxMzguMjUgMTc0Ljc1IDEyOCAxNDkuNDY5IDEyOEg1NkM0Mi43ODEgMTI4IDMyIDEzOC43NjYgMzIgMTUyVjE3NkMzMiAxODkuMjM0IDQyLjc4MSAyMDAgNTYgMjAwSDEyMS41NjJDMTk4LjE1NiAyMDAgMjYzLjYyNSAyNTEuNzUgMjc3LjI1IDMyMy4wMzFDMjgxLjAzMSAzNDIuNzgxIDI4MC45MDYgMzYyLjc2NiAyNzYuOTM4IDM4Mi40MDZDMjc2LjQ2OSAzODQuNzY2IDI3Ny4wNjIgMzg3LjIwMyAyNzguNTk0IDM4OS4wNjNDMjgwLjA5NCAzOTAuOTIyIDI4Mi4zNzUgMzkyIDI4NC43ODEgMzkySDM1NS4yMTlDMzU3LjYyNSAzOTIgMzU5LjkwNiAzOTAuOTIyIDM2MS40MDYgMzg5LjA2MkMzNjIuOTM4IDM4Ny4yMDMgMzYzLjUzMSAzODQuNzY2IDM2My4wNjMgMzgyLjQwNkMzNjEuMDMxIDM3Mi4zNzUgMzYwIDM2Mi4xNTYgMzYwIDM1MkMzNjAgMzEyLjA5NCAzNzUuODQ0IDI3NC4zMjggNDA0LjY1NiAyNDUuNjcyQzQwNy43ODEgMjQyLjU0NyA0MDcuNzgxIDIzNy40ODQgNDA0LjY1NiAyMzQuMzU5QzQwMS41NjIgMjMxLjIxOSAzOTYuNSAyMzEuMjE5IDM5My4zNDQgMjM0LjMyOEMzNjEuNTMxIDI2Ni4wMTYgMzQ0IDMwNy44MTIgMzQ0IDM1MkMzNDQgMzYwIDM0NC41NjIgMzY4LjAzMSAzNDUuNzE5IDM3NkgyOTQuMjgxQzI5Ni45NjkgMzU3LjQwNiAyOTYuNSAzMzguNjI1IDI5Mi45MzggMzIwLjAzMUMyNzcuOTA2IDI0MS4yMDMgMjA1LjgxMiAxODQgMTIxLjU2MiAxODRINTZDNTEuNTk0IDE4NCA0OCAxODAuNDA2IDQ4IDE3NlYxNTJDNDggMTQ3LjU5NCA1MS41OTQgMTQ0IDU2IDE0NEgxNDkuNDY5QzE3MC41MzEgMTQ0IDE5MS4xNTYgMTUyLjU0NyAyMDYuMDYyIDE2Ny40MzhMMjI4LjI4MSAxODkuNjU2QzIyOS43ODEgMTkxLjE1NiAyMzEuODEyIDE5MiAyMzMuOTM4IDE5MkgyNTZDMjU3LjcxOSAxOTIgMjU5LjQwNiAxOTEuNDM4IDI2MC43ODEgMTkwLjQwNkwzNzYuMDU5IDEwNC40MjhMNDQ2LjgwNSAyNDIuNDAyQzQwOS4zNTQgMjY0LjczNCAzODQgMzA1LjIyNyAzODQgMzUyQzM4NCA0MjIuNjkzIDQ0MS4zMDcgNDgwIDUxMiA0ODBTNjQwIDQyMi42OTMgNjQwIDM1MlM1ODIuNjkzIDIyNCA1MTIgMjI0Wk01MTIgNDY0QzQ1MC4yNDIgNDY0IDQwMCA0MTMuNzU4IDQwMCAzNTJDNDAwIDMxMS41MDYgNDIxLjgwNyAyNzYuMjg5IDQ1NC4wOTIgMjU2LjYxNUw1MDQuODc1IDM1NS42NTZDNTA2LjMxMiAzNTguNDA2IDUwOS4wOTQgMzYwIDUxMiAzNjBDNTEzLjI1IDM2MCA1MTQuNDY5IDM1OS43MTkgNTE1LjY1NiAzNTkuMTI1QzUxOS41OTQgMzU3LjEwOSA1MjEuMTI1IDM1Mi4yODEgNTE5LjEyNSAzNDguMzQ0TDQ2OC4xNjIgMjQ4Ljk2OUM0ODEuNjM3IDI0My4yMTMgNDk2LjQ0NSAyNDAgNTEyIDI0MEM1NzMuNzU4IDI0MCA2MjQgMjkwLjI0MiA2MjQgMzUyUzU3My43NTggNDY0IDUxMiA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Motorcycle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M128 224C57.307 224 0 281.307 0 352S57.307 480 128 480S256 422.693 256 352S198.693 224 128 224ZM128 464C66.242 464 16 413.758 16 352S66.242 240 128 240S240 290.242 240 352S189.758 464 128 464ZM128 288C92.654 288 64 316.654 64 352S92.654 416 128 416S192 387.346 192 352S163.346 288 128 288ZM128 400C101.533 400 80 378.467 80 352S101.533 304 128 304S176 325.533 176 352S154.467 400 128 400ZM512 224C493.799 224 476.555 227.916 460.879 234.764L389.064 94.727L435.5 60.094C445.344 52.297 457.719 48 470.281 48H488C501.219 48 512 58.766 512 72V104C512 117.234 501.219 128 488 128H456C451.594 128 448 131.578 448 136S451.594 144 456 144H488C510.062 144 528 126.062 528 104V72C528 49.938 510.062 32 488 32H470.281C454.125 32 438.25 37.516 425.75 47.406L381.662 80.291L359.125 36.344C357.75 33.672 355 32 352 32H264C259.594 32 256 35.578 256 40S259.594 48 264 48H347.125L368.656 89.992L253.344 176H237.25L217.375 156.125C199.5 138.25 174.75 128 149.469 128H56C42.781 128 32 138.766 32 152V176C32 189.234 42.781 200 56 200H121.562C198.156 200 263.625 251.75 277.25 323.031C281.031 342.781 280.906 362.766 276.938 382.406C276.469 384.766 277.062 387.203 278.594 389.063C280.094 390.922 282.375 392 284.781 392H355.219C357.625 392 359.906 390.922 361.406 389.062C362.938 387.203 363.531 384.766 363.063 382.406C361.031 372.375 360 362.156 360 352C360 312.094 375.844 274.328 404.656 245.672C407.781 242.547 407.781 237.484 404.656 234.359C401.562 231.219 396.5 231.219 393.344 234.328C361.531 266.016 344 307.812 344 352C344 360 344.562 368.031 345.719 376H294.281C296.969 357.406 296.5 338.625 292.938 320.031C277.906 241.203 205.812 184 121.562 184H56C51.594 184 48 180.406 48 176V152C48 147.594 51.594 144 56 144H149.469C170.531 144 191.156 152.547 206.062 167.438L228.281 189.656C229.781 191.156 231.812 192 233.938 192H256C257.719 192 259.406 191.438 260.781 190.406L376.059 104.428L446.805 242.402C409.354 264.734 384 305.227 384 352C384 422.693 441.307 480 512 480S640 422.693 640 352S582.693 224 512 224ZM512 464C450.242 464 400 413.758 400 352C400 311.506 421.807 276.289 454.092 256.615L504.875 355.656C506.312 358.406 509.094 360 512 360C513.25 360 514.469 359.719 515.656 359.125C519.594 357.109 521.125 352.281 519.125 348.344L468.162 248.969C481.637 243.213 496.445 240 512 240C573.758 240 624 290.242 624 352S573.758 464 512 464Z" />
        </Icon>
    </>
}