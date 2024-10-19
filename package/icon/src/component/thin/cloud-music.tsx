
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-music` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-music?s=thin cloud-music}
 * @preview ![cloud-music](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzIuNzk3IDE5Mi42NDZMMjQ0Ljc5NyAyNDguNjQ2QzI0MS44NzUgMjQ5LjkyOCAyNDAgMjUyLjgwMyAyNDAgMjU1Ljk5VjM2MC4yOTVDMjMxLjQ5NCAzNTUuMTg2IDIyMC4zNSAzNTEuOTkgMjA4IDM1MS45OUMxODEuNDkgMzUxLjk5IDE2MCAzNjYuMzE4IDE2MCAzODMuOTlTMTgxLjQ5IDQxNS45OSAyMDggNDE1Ljk5UzI1NiA0MDEuNjYyIDI1NiAzODMuOTlWMjYxLjIwOUwzNjggMjEyLjIwOVYzMjguMjk1QzM1OS40OTQgMzIzLjE4NiAzNDguMzUgMzE5Ljk5IDMzNiAzMTkuOTlDMzA5LjQ5IDMxOS45OSAyODggMzM0LjMxOCAyODggMzUxLjk5UzMwOS40OSAzODMuOTkgMzM2IDM4My45OVMzODQgMzY5LjY2MiAzODQgMzUxLjk5VjE5OS45OUMzODQgMTk3LjMwMyAzODIuNjQxIDE5NC43NzEgMzgwLjM3NSAxOTMuMzAzQzM3OC4xNTYgMTkxLjgwMyAzNzUuMjUgMTkxLjYxNSAzNzIuNzk3IDE5Mi42NDZaTTIwOCAzOTkuOTlDMTg4LjQ2NyAzOTkuOTkgMTc2IDM5MC41MTQgMTc2IDM4My45OVMxODguNDY3IDM2Ny45OSAyMDggMzY3Ljk5QzIyNy41MzUgMzY3Ljk5IDI0MCAzNzcuNDY3IDI0MCAzODMuOTlTMjI3LjUzNSAzOTkuOTkgMjA4IDM5OS45OVpNMzM2IDM2Ny45OUMzMTYuNDY3IDM2Ny45OSAzMDQgMzU4LjUxNCAzMDQgMzUxLjk5UzMxNi40NjcgMzM1Ljk5IDMzNiAzMzUuOTlDMzU1LjUzNSAzMzUuOTkgMzY4IDM0NS40NjcgMzY4IDM1MS45OVMzNTUuNTM1IDM2Ny45OSAzMzYgMzY3Ljk5Wk01MzcuNTk0IDIyNi41OTRDNTQxLjY4OCAyMTUuOTA2IDU0NCAyMDQuMjAzIDU0NCAxOTJDNTQ0IDEzOSA1MDEgOTYgNDQ4IDk2QzQyOC4zMTIgOTYgNDA5LjkwNiAxMDIgMzk0LjY4OCAxMTIuMjAzQzM2NyA2NC4yMDMgMzE1LjMxMiAzMiAyNTYgMzJDMTY3LjU5NCAzMiA5NiAxMDMuNTk0IDk2IDE5MkM5NiAxOTQuNzAzIDk2LjA5NCAxOTcuNDA2IDk2LjE4OCAyMDAuMDk0QzQwLjE4OCAyMTkuNzk3IDAgMjczLjIwMyAwIDMzNkMwIDQxNS41IDY0LjUgNDgwIDE0NCA0ODBINTEyQzU4Mi42ODggNDgwIDY0MCA0MjIuNzAzIDY0MCAzNTJDNjQwIDI5MC4wOTQgNTk2IDIzOC40MDYgNTM3LjU5NCAyMjYuNTk0Wk01MTIgNDY0SDE0NEM3My40MiA0NjQgMTYgNDA2LjU3OCAxNiAzMzZDMTYgMjgxLjczIDUwLjM1OSAyMzMuMTggMTAxLjQ5OCAyMTUuMTg2TDExMi41ODggMjExLjI4NUwxMTIuMTc4IDE5OS41MzVDMTEyLjA5IDE5Ny4wMzMgMTEyIDE5NC41MTYgMTEyIDE5MkMxMTIgMTEyLjU5OCAxNzYuNTk4IDQ4IDI1NiA0OEMzMDcuMzA5IDQ4IDM1NS4xNDEgNzUuNjY0IDM4MC44MjggMTIwLjE5N0wzODkuMzgxIDEzNS4wMjNMNDAzLjU5OCAxMjUuNDkyQzQxNi43NjQgMTE2LjY2NiA0MzIuMTE3IDExMiA0NDggMTEyQzQ5Mi4xMTEgMTEyIDUyOCAxNDcuODg3IDUyOCAxOTJDNTI4IDIwMS44OTMgNTI2LjIwMSAyMTEuNjA1IDUyMi42NTIgMjIwLjg2OUw1MTUuODg5IDIzOC41MjdMNTM0LjQyMiAyNDIuMjc1QzU4Ni4zMjYgMjUyLjc3MyA2MjQgMjk4LjkyIDYyNCAzNTJDNjI0IDQxMy43NTYgNTczLjc1OCA0NjQgNTEyIDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
const CloudMusic: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M372.797 192.646L244.797 248.646C241.875 249.928 240 252.803 240 255.99V360.295C231.494 355.186 220.35 351.99 208 351.99C181.49 351.99 160 366.318 160 383.99S181.49 415.99 208 415.99S256 401.662 256 383.99V261.209L368 212.209V328.295C359.494 323.186 348.35 319.99 336 319.99C309.49 319.99 288 334.318 288 351.99S309.49 383.99 336 383.99S384 369.662 384 351.99V199.99C384 197.303 382.641 194.771 380.375 193.303C378.156 191.803 375.25 191.615 372.797 192.646ZM208 399.99C188.467 399.99 176 390.514 176 383.99S188.467 367.99 208 367.99C227.535 367.99 240 377.467 240 383.99S227.535 399.99 208 399.99ZM336 367.99C316.467 367.99 304 358.514 304 351.99S316.467 335.99 336 335.99C355.535 335.99 368 345.467 368 351.99S355.535 367.99 336 367.99ZM537.594 226.594C541.688 215.906 544 204.203 544 192C544 139 501 96 448 96C428.312 96 409.906 102 394.688 112.203C367 64.203 315.312 32 256 32C167.594 32 96 103.594 96 192C96 194.703 96.094 197.406 96.188 200.094C40.188 219.797 0 273.203 0 336C0 415.5 64.5 480 144 480H512C582.688 480 640 422.703 640 352C640 290.094 596 238.406 537.594 226.594ZM512 464H144C73.42 464 16 406.578 16 336C16 281.73 50.359 233.18 101.498 215.186L112.588 211.285L112.178 199.535C112.09 197.033 112 194.516 112 192C112 112.598 176.598 48 256 48C307.309 48 355.141 75.664 380.828 120.197L389.381 135.023L403.598 125.492C416.764 116.666 432.117 112 448 112C492.111 112 528 147.887 528 192C528 201.893 526.201 211.605 522.652 220.869L515.889 238.527L534.422 242.275C586.326 252.773 624 298.92 624 352C624 413.756 573.758 464 512 464Z" />
    </Icon>
);

export default CloudMusic;