
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `right-to-bracket` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-bracket?s=thin right-to-bracket}
 * @preview ![right-to-bracket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzIgMzJIMzkyQzM4Ny41NzggMzIgMzg0IDM1LjU3OCAzODQgNDBTMzg3LjU3OCA0OCAzOTIgNDhINDcyQzQ4NS4yMzQgNDggNDk2IDU4Ljc2NiA0OTYgNzJWNDQwQzQ5NiA0NTMuMjM0IDQ4NS4yMzQgNDY0IDQ3MiA0NjRIMzkyQzM4Ny41NzggNDY0IDM4NCA0NjcuNTc4IDM4NCA0NzJTMzg3LjU3OCA0ODAgMzkyIDQ4MEg0NzJDNDk0LjA2MiA0ODAgNTEyIDQ2Mi4wNjIgNTEyIDQ0MFY3MkM1MTIgNDkuOTM4IDQ5NC4wNjIgMzIgNDcyIDMyWk0zNzQuNjI1IDIzMy4zNzVMMjQ2LjYyNSAxMDUuMzc1QzIzNy40NjkgOTYuMjE5IDIyMy43MTkgOTMuNDY5IDIxMS43NSA5OC40MzhDMTk5Ljc5NyAxMDMuMzc1IDE5MiAxMTUuMDYyIDE5MiAxMjhWMTkySDMyQzE0LjMyNiAxOTIgMCAyMDYuMzI2IDAgMjI0VjI4OEMwIDMwNS42NzIgMTQuMzI2IDMyMCAzMiAzMjBIMTkyVjM4NEMxOTIgMzk2LjkzOCAxOTkuNzk3IDQwOC42MjUgMjExLjc1IDQxMy41NjJDMjIzLjcxOSA0MTguNTMxIDIzNy40NjkgNDE1Ljc4MSAyNDYuNjI1IDQwNi42MjVMMzc0LjYyNSAyNzguNjI1QzM4MC44NzUgMjcyLjM3NSAzODQgMjY0LjE4OCAzODQgMjU2UzM4MC44NzUgMjM5LjYyNSAzNzQuNjI1IDIzMy4zNzVaTTM2My4zMTEgMjY3LjMxMUwyMzUuMzExIDM5NS4zMTFDMjMwLjcxNSAzOTkuOTA4IDIyMy44NzMgNDAxLjI3MSAyMTcuODU3IDM5OC43NzNDMjExLjg2OSAzOTYuMzAxIDIwOCAzOTAuNTAyIDIwOCAzODRWMzA0SDMyQzIzLjE3OCAzMDQgMTYgMjk2LjgyMiAxNiAyODhWMjI0QzE2IDIxNS4xNzggMjMuMTc4IDIwOCAzMiAyMDhIMjA4VjEyOEMyMDggMTIxLjQ5OCAyMTEuODY5IDExNS42OTkgMjE3Ljg4NSAxMTMuMjE1QzIyMy44NzMgMTEwLjcyOSAyMzAuNzE1IDExMi4wOTIgMjM1LjMxMSAxMTYuNjg5TDM2My4zMTEgMjQ0LjY4OUMzNjYuMzM0IDI0Ny43MTMgMzY4IDI1MS43MjkgMzY4IDI1NlMzNjYuMzM0IDI2NC4yODcgMzYzLjMxMSAyNjcuMzExWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RightToBracket(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M472 32H392C387.578 32 384 35.578 384 40S387.578 48 392 48H472C485.234 48 496 58.766 496 72V440C496 453.234 485.234 464 472 464H392C387.578 464 384 467.578 384 472S387.578 480 392 480H472C494.062 480 512 462.062 512 440V72C512 49.938 494.062 32 472 32ZM374.625 233.375L246.625 105.375C237.469 96.219 223.719 93.469 211.75 98.438C199.797 103.375 192 115.062 192 128V192H32C14.326 192 0 206.326 0 224V288C0 305.672 14.326 320 32 320H192V384C192 396.938 199.797 408.625 211.75 413.562C223.719 418.531 237.469 415.781 246.625 406.625L374.625 278.625C380.875 272.375 384 264.188 384 256S380.875 239.625 374.625 233.375ZM363.311 267.311L235.311 395.311C230.715 399.908 223.873 401.271 217.857 398.773C211.869 396.301 208 390.502 208 384V304H32C23.178 304 16 296.822 16 288V224C16 215.178 23.178 208 32 208H208V128C208 121.498 211.869 115.699 217.885 113.215C223.873 110.729 230.715 112.092 235.311 116.689L363.311 244.689C366.334 247.713 368 251.729 368 256S366.334 264.287 363.311 267.311Z" />
        </Icon>
    </>
}