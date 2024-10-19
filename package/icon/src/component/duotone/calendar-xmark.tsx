
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-xmark` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-xmark?s=duotone calendar-xmark}
 * @preview ![calendar-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMTkyVjQ2NEMwIDQ5MC41IDIxLjUgNTEyIDQ4IDUxMkg0MDBDNDI2LjUgNTEyIDQ0OCA0OTAuNSA0NDggNDY0VjE5MkgwWk0zMDQuOTY5IDM5OS4wMzFDMzE0LjM0NCA0MDguNDA2IDMxNC4zNDQgNDIzLjU5NCAzMDQuOTY5IDQzMi45NjlDMjk1LjU5NSA0NDIuMzQzIDI4MC40MTEgNDQyLjM0OSAyNzEuMDMxIDQzMi45NjlMMjI0IDM4NS45MzhMMTc2Ljk2OSA0MzIuOTY5QzE2Ny41OTUgNDQyLjM0MyAxNTIuNDExIDQ0Mi4zNDkgMTQzLjAzMSA0MzIuOTY5QzEzMy42NTYgNDIzLjU5NCAxMzMuNjU2IDQwOC40MDYgMTQzLjAzMSAzOTkuMDMxTDE5MC4wNjIgMzUyTDE0My4wMzEgMzA0Ljk2OUMxMzMuNjU2IDI5NS41OTQgMTMzLjY1NiAyODAuNDA2IDE0My4wMzEgMjcxLjAzMVMxNjcuNTk0IDI2MS42NTYgMTc2Ljk2OSAyNzEuMDMxTDIyNCAzMTguMDYyTDI3MS4wMzEgMjcxLjAzMUMyODAuNDA2IDI2MS42NTYgMjk1LjU5NCAyNjEuNjU2IDMwNC45NjkgMjcxLjAzMVMzMTQuMzQ0IDI5NS41OTQgMzA0Ljk2OSAzMDQuOTY5TDI1Ny45MzggMzUyTDMwNC45NjkgMzk5LjAzMVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDAwIDY0SDM1MlYzMkMzNTIgMTQuMzI3IDMzNy42NzMgMCAzMjAgMEgzMjBDMzAyLjMyNyAwIDI4OCAxNC4zMjcgMjg4IDMyVjY0SDE2MFYzMkMxNjAgMTQuMzI3IDE0NS42NzMgMCAxMjggMEgxMjhDMTEwLjMyNyAwIDk2IDE0LjMyNyA5NiAzMlY2NEg0OEMyMS40OSA2NCAwIDg1LjQ5IDAgMTEyVjE5Mkg0NDhWMTEyQzQ0OCA4NS40OSA0MjYuNTEgNjQgNDAwIDY0Wk0zMDQuOTY5IDI3MS4wMzFDMjk1LjU5NCAyNjEuNjU2IDI4MC40MDYgMjYxLjY1NiAyNzEuMDMxIDI3MS4wMzFMMjI0IDMxOC4wNjJMMTc2Ljk2OSAyNzEuMDMxQzE2Ny41OTQgMjYxLjY1NiAxNTIuNDA2IDI2MS42NTYgMTQzLjAzMSAyNzEuMDMxUzEzMy42NTYgMjk1LjU5NCAxNDMuMDMxIDMwNC45NjlMMTkwLjA2MiAzNTJMMTQzLjAzMSAzOTkuMDMxQzEzMy42NTYgNDA4LjQwNiAxMzMuNjU2IDQyMy41OTQgMTQzLjAzMSA0MzIuOTY5QzE1Mi40MDUgNDQyLjM0MyAxNjcuNTg5IDQ0Mi4zNDkgMTc2Ljk2OSA0MzIuOTY5TDIyNCAzODUuOTM4TDI3MS4wMzEgNDMyLjk2OUMyODAuNDA1IDQ0Mi4zNDMgMjk1LjU4OSA0NDIuMzQ5IDMwNC45NjkgNDMyLjk2OUMzMTQuMzQ0IDQyMy41OTQgMzE0LjM0NCA0MDguNDA2IDMwNC45NjkgMzk5LjAzMUwyNTcuOTM4IDM1MkwzMDQuOTY5IDMwNC45NjlDMzE0LjM0NCAyOTUuNTk0IDMxNC4zNDQgMjgwLjQwNiAzMDQuOTY5IDI3MS4wMzFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CalendarXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M0 192V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0ZM304.969 399.031C314.344 408.406 314.344 423.594 304.969 432.969C295.595 442.343 280.411 442.349 271.031 432.969L224 385.938L176.969 432.969C167.595 442.343 152.411 442.349 143.031 432.969C133.656 423.594 133.656 408.406 143.031 399.031L190.062 352L143.031 304.969C133.656 295.594 133.656 280.406 143.031 271.031S167.594 261.656 176.969 271.031L224 318.062L271.031 271.031C280.406 261.656 295.594 261.656 304.969 271.031S314.344 295.594 304.969 304.969L257.938 352L304.969 399.031Z" />
            <path d="M400 64H352V32C352 14.327 337.673 0 320 0H320C302.327 0 288 14.327 288 32V64H160V32C160 14.327 145.673 0 128 0H128C110.327 0 96 14.327 96 32V64H48C21.49 64 0 85.49 0 112V192H448V112C448 85.49 426.51 64 400 64ZM304.969 271.031C295.594 261.656 280.406 261.656 271.031 271.031L224 318.062L176.969 271.031C167.594 261.656 152.406 261.656 143.031 271.031S133.656 295.594 143.031 304.969L190.062 352L143.031 399.031C133.656 408.406 133.656 423.594 143.031 432.969C152.405 442.343 167.589 442.349 176.969 432.969L224 385.938L271.031 432.969C280.405 442.343 295.589 442.349 304.969 432.969C314.344 423.594 314.344 408.406 304.969 399.031L257.938 352L304.969 304.969C314.344 295.594 314.344 280.406 304.969 271.031Z" />
        </Icon>
    </>
}