
import { Icon } from "../../index";

/**
 * A component that renders the `radar` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/radar?s=thin radar}
 * @preview ![radar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMjU2QzQwMCAzMTEuODI4IDM2Ny4yODEgMzYzLjEwOSAzMTYuNjI1IDM4Ni42NTZDMzEyLjYyNSAzODguNTE2IDMxMC44NzUgMzkzLjI2NiAzMTIuNzUgMzk3LjI4MUMzMTQuMDk0IDQwMC4xODggMzE3IDQwMS45MDYgMzIwIDQwMS45MDZDMzIxLjEyNSA0MDEuOTA2IDMyMi4yODEgNDAxLjY3MiAzMjMuMzc1IDQwMS4xNTZDMzc5LjY1NiAzNzUgNDE2IDMxOC4wMzEgNDE2IDI1NkM0MTYgMjUxLjU3OCA0MTIuNDA2IDI0OCA0MDggMjQ4UzQwMCAyNTEuNTc4IDQwMCAyNTZaTTUwNCAyNDhDNDk5LjU5NCAyNDggNDk2IDI1MS41NzggNDk2IDI1NkM0OTYgMzg4LjM0NCAzODguMzQ0IDQ5NiAyNTYgNDk2UzE2IDM4OC4zNDQgMTYgMjU2UzEyMy42NTYgMTYgMjU2IDE2QzMxNy40MDIgMTYgMzc1LjEyOSAzOS4xMjkgNDE5Ljc3NyA4MC45MUwzNjIuOTI0IDEzNy43NjRDMzMzLjQ2NSAxMTEuMDg4IDI5Ni4wMDYgOTYgMjU2IDk2QzE5My45NjkgOTYgMTM3IDEzMi4zNTkgMTEwLjg0NCAxODguNjI1QzEwOC45NjkgMTkyLjY0MSAxMTAuNzE5IDE5Ny4zOTEgMTE0LjcxOSAxOTkuMjVDMTE1LjgxMiAxOTkuNzY2IDExNi45NjkgMjAwIDExOC4wOTQgMjAwQzEyMS4wOTQgMjAwIDEyNCAxOTguMjgxIDEyNS4zNDQgMTk1LjM3NUMxNDguODc1IDE0NC43MTkgMjAwLjE4OCAxMTIgMjU2IDExMkMyOTEuNzU0IDExMiAzMjUuMTk3IDEyNS40MiAzNTEuNjExIDE0OS4wNzZMMjk1LjA0NSAyMDUuNjQzQzI4My44NjMgMTk2Ljk1OSAyNzAuMzQgMTkyIDI1NiAxOTJDMjIwLjcxOSAxOTIgMTkyIDIyMC43MDMgMTkyIDI1NlMyMjAuNzE5IDMyMCAyNTYgMzIwUzMyMCAyOTEuMjk3IDMyMCAyNTZDMzIwIDI1MS41NzggMzE2LjQwNiAyNDggMzEyIDI0OFMzMDQgMjUxLjU3OCAzMDQgMjU2QzMwNCAyODIuNDY5IDI4Mi40NjkgMzA0IDI1NiAzMDRTMjA4IDI4Mi40NjkgMjA4IDI1NlMyMjkuNTMxIDIwOCAyNTYgMjA4QzI2Ni4wMTYgMjA4IDI3NS4xNjQgMjExLjgxOCAyODMuMTkxIDIxNy40OTZMMjUwLjM0NCAyNTAuMzQ0QzI0Ny4yMTkgMjUzLjQ2OSAyNDcuMjE5IDI1OC41MzEgMjUwLjM0NCAyNjEuNjU2QzI1MS45MDYgMjYzLjIxOSAyNTMuOTM4IDI2NCAyNTYgMjY0UzI2MC4wOTQgMjYzLjIxOSAyNjEuNjU2IDI2MS42NTZMNDg1LjY1NiAzNy42NTZDNDg4Ljc4MSAzNC41MzEgNDg4Ljc4MSAyOS40NjkgNDg1LjY1NiAyNi4zNDRTNDc3LjQ2OSAyMy4yMTkgNDc0LjM0NCAyNi4zNDRMNDMxLjA5IDY5LjU5OEMzODMuNDM0IDI0Ljc5MyAzMjEuNjU0IDAgMjU2IDBDMTE0Ljg0NCAwIDAgMTE0Ljg0NCAwIDI1NlMxMTQuODQ0IDUxMiAyNTYgNTEyUzUxMiAzOTcuMTU2IDUxMiAyNTZDNTEyIDI1MS41NzggNTA4LjQwNiAyNDggNTA0IDI0OFpNMjE2IDQxNkMyMTYgNDM4LjA2MiAyMzMuOTM4IDQ1NiAyNTYgNDU2UzI5NiA0MzguMDYyIDI5NiA0MTZTMjc4LjA2MiAzNzYgMjU2IDM3NlMyMTYgMzkzLjkzOCAyMTYgNDE2Wk0yODAgNDE2QzI4MCA0MjkuMjM0IDI2OS4yMTkgNDQwIDI1NiA0NDBTMjMyIDQyOS4yMzQgMjMyIDQxNlMyNDIuNzgxIDM5MiAyNTYgMzkyUzI4MCA0MDIuNzY2IDI4MCA0MTZaTTE4OC42MjUgNDAxLjE1NkMxODkuNzE5IDQwMS42NzIgMTkwLjg3NSA0MDEuOTA2IDE5MiA0MDEuOTA2QzE5NSA0MDEuOTA2IDE5Ny45MDYgNDAwLjE4OCAxOTkuMjUgMzk3LjI4MUMyMDEuMTI1IDM5My4yNjYgMTk5LjM3NSAzODguNTE2IDE5NS4zNzUgMzg2LjY1NkMxNjQuNTYyIDM3Mi4zNDQgMTM5LjY4NyAzNDcuNDY5IDEyNS4zNDQgMzE2LjYyNUMxMjMuNSAzMTIuNjI1IDExOC42ODcgMzEwLjg0NCAxMTQuNzE5IDMxMi43NUMxMTAuNzE5IDMxNC42MDkgMTA4Ljk2OSAzMTkuMzc1IDExMC44NDQgMzIzLjM3NUMxMjYuNzgxIDM1Ny42NDEgMTU0LjQwNiAzODUuMjY2IDE4OC42MjUgNDAxLjE1NlpNMTM2IDI1NkMxMzYgMjMzLjkzOCAxMTguMDYyIDIxNiA5NiAyMTZTNTYgMjMzLjkzOCA1NiAyNTZTNzMuOTM4IDI5NiA5NiAyOTZTMTM2IDI3OC4wNjIgMTM2IDI1NlpNOTYgMjgwQzgyLjc4MSAyODAgNzIgMjY5LjIzNCA3MiAyNTZTODIuNzgxIDIzMiA5NiAyMzJTMTIwIDI0Mi43NjYgMTIwIDI1NlMxMDkuMjE5IDI4MCA5NiAyODBaIi8+PC9zdmc+|width=32|height=32)
 */
const Radar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 256C400 311.828 367.281 363.109 316.625 386.656C312.625 388.516 310.875 393.266 312.75 397.281C314.094 400.188 317 401.906 320 401.906C321.125 401.906 322.281 401.672 323.375 401.156C379.656 375 416 318.031 416 256C416 251.578 412.406 248 408 248S400 251.578 400 256ZM504 248C499.594 248 496 251.578 496 256C496 388.344 388.344 496 256 496S16 388.344 16 256S123.656 16 256 16C317.402 16 375.129 39.129 419.777 80.91L362.924 137.764C333.465 111.088 296.006 96 256 96C193.969 96 137 132.359 110.844 188.625C108.969 192.641 110.719 197.391 114.719 199.25C115.812 199.766 116.969 200 118.094 200C121.094 200 124 198.281 125.344 195.375C148.875 144.719 200.188 112 256 112C291.754 112 325.197 125.42 351.611 149.076L295.045 205.643C283.863 196.959 270.34 192 256 192C220.719 192 192 220.703 192 256S220.719 320 256 320S320 291.297 320 256C320 251.578 316.406 248 312 248S304 251.578 304 256C304 282.469 282.469 304 256 304S208 282.469 208 256S229.531 208 256 208C266.016 208 275.164 211.818 283.191 217.496L250.344 250.344C247.219 253.469 247.219 258.531 250.344 261.656C251.906 263.219 253.938 264 256 264S260.094 263.219 261.656 261.656L485.656 37.656C488.781 34.531 488.781 29.469 485.656 26.344S477.469 23.219 474.344 26.344L431.09 69.598C383.434 24.793 321.654 0 256 0C114.844 0 0 114.844 0 256S114.844 512 256 512S512 397.156 512 256C512 251.578 508.406 248 504 248ZM216 416C216 438.062 233.938 456 256 456S296 438.062 296 416S278.062 376 256 376S216 393.938 216 416ZM280 416C280 429.234 269.219 440 256 440S232 429.234 232 416S242.781 392 256 392S280 402.766 280 416ZM188.625 401.156C189.719 401.672 190.875 401.906 192 401.906C195 401.906 197.906 400.188 199.25 397.281C201.125 393.266 199.375 388.516 195.375 386.656C164.562 372.344 139.687 347.469 125.344 316.625C123.5 312.625 118.687 310.844 114.719 312.75C110.719 314.609 108.969 319.375 110.844 323.375C126.781 357.641 154.406 385.266 188.625 401.156ZM136 256C136 233.938 118.062 216 96 216S56 233.938 56 256S73.938 296 96 296S136 278.062 136 256ZM96 280C82.781 280 72 269.234 72 256S82.781 232 96 232S120 242.766 120 256S109.219 280 96 280Z" />
    </Icon>
);

export default Radar;