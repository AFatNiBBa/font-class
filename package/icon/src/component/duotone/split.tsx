
import { Icon, generic } from "../../index";

/**
 * A component that renders the `split` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/split?s=duotone split}
 * @preview ![split](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwNC45MjEgMzgyLjk1NEM1MTQuMzA3IDM5Mi4zNDEgNTE0LjMwNyA0MDcuNTYgNTA0LjkyMSA0MTYuOTQ2TDQyNC45MiA0OTYuOTIzQzQwOS43OTEgNTEyLjA0NCAzODMuOTMgNTAxLjMyOSAzODMuOTMgNDc5LjkzOVY0NDAuMDAxSDMxOS45NjFDMzA4LjUyNCA0NDAuMDAxIDI5Ny42NDkgNDM1LjEyNiAyOTAuMDU1IDQyNi41NjRMMTc0IDI5Ni4wMDFIMTkxLjk2MUMyMDMuMzk4IDI5Ni4wMDEgMjE0LjI3NCAyOTEuMTI2IDIyMS44NjcgMjgyLjU2M0wyNDUuNDgxIDI1Ni4wMDFMMzM3LjkzIDM2MC4wMDFIMzgzLjkzVjMxOS45N0MzODMuOTMgMjk4LjU3NSA0MDkuNzk1IDI4Ny44NiA0MjQuOTI2IDMwMi45ODVMNTA0LjkyMSAzODIuOTU0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MDQuOTYgMTI5LjA0OEw0MjQuOTY2IDIwOS4wMTZDNDA5LjgzNSAyMjQuMTQxIDM4My45NjkgMjEzLjQyMyAzODMuOTY5IDE5Mi4wMzJWMTUyLjAwMUgzMzcuOTY5TDIyMS45MDcgMjgyLjU2M0MyMTQuMzEzIDI5MS4xMjYgMjAzLjQzOCAyOTYuMDAxIDE5MiAyOTYuMDAxSDQwQzE3LjkwNiAyOTYuMDAxIDAgMjc4LjA5NSAwIDI1Ni4wMDFTMTcuOTA2IDIxNi4wMDEgNDAgMjE2LjAwMUgxNzQuMDMyTDI5MC4wOTQgODUuNDM4QzI5Ny42ODggNzYuODc2IDMwOC41NjMgNzIuMDAxIDMyMC4wMDEgNzIuMDAxSDM4My45NjlWMzIuMDYzQzM4My45NjkgMTAuNjcyIDQwOS44MzEgLTAuMDQ2IDQyNC45NiAxNS4wNzlMNTA0Ljk2IDk1LjA1NUM1MTQuMzQ3IDEwNC40MzggNTE0LjM0NyAxMTkuNjU3IDUwNC45NiAxMjkuMDQ4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Split: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M504.921 382.954C514.307 392.341 514.307 407.56 504.921 416.946L424.92 496.923C409.791 512.044 383.93 501.329 383.93 479.939V440.001H319.961C308.524 440.001 297.649 435.126 290.055 426.564L174 296.001H191.961C203.398 296.001 214.274 291.126 221.867 282.563L245.481 256.001L337.93 360.001H383.93V319.97C383.93 298.575 409.795 287.86 424.926 302.985L504.921 382.954Z" />
            <path d="M504.96 129.048L424.966 209.016C409.835 224.141 383.969 213.423 383.969 192.032V152.001H337.969L221.907 282.563C214.313 291.126 203.438 296.001 192 296.001H40C17.906 296.001 0 278.095 0 256.001S17.906 216.001 40 216.001H174.032L290.094 85.438C297.688 76.876 308.563 72.001 320.001 72.001H383.969V32.063C383.969 10.672 409.831 -0.046 424.96 15.079L504.96 95.055C514.347 104.438 514.347 119.657 504.96 129.048Z" />
    </Icon>
);

export default Split;