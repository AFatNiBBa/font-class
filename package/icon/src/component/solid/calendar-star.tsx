
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `calendar-star` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-star?s=solid calendar-star}
 * @preview ![calendar-star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDQ2NEMwIDQ5MC41IDIxLjUgNTEyIDQ4IDUxMkg0MDBDNDI2LjUgNTEyIDQ0OCA0OTAuNSA0NDggNDY0VjE5MkgwVjQ2NFpNMTM0LjEyNSAzMDQuMjVMMTg4Ljc1IDI5Ni4yNUwyMTMuMjUgMjQ2Ljc1QzIxNy43NSAyMzcuNzUgMjMwLjM3NSAyMzcuODc1IDIzNC43NSAyNDYuNzVMMjU5LjI1IDI5Ni4yNUwzMTMuOTk5IDMwNC4yNUMzMjMuNzUgMzA1Ljc1IDMyNy43NSAzMTcuNzUgMzIwLjYyNSAzMjQuNzVMMjgxIDM2My4zNzVMMjkwLjM3NSA0MThDMjkyLjEyNSA0MjcuODc1IDI4MS43NSA0MzUuMjUgMjczIDQzMC42MjVMMjI0IDQwNC43NUwxNzUuMTI1IDQzMC42MjVDMTY2LjM3NSA0MzUuMjUgMTU2IDQyNy43NSAxNTcuNzUgNDE4TDE2Ny4xMjUgMzYzLjM3NUwxMjcuNSAzMjQuNzVDMTIwLjI1IDMxNy43NSAxMjQuMjUgMzA1Ljc1IDEzNC4xMjUgMzA0LjI1Wk00MDAgNjRIMzUyVjMyQzM1MiAxNC40IDMzNy42IDAgMzIwIDBIMzIwQzMwMi40IDAgMjg4IDE0LjQgMjg4IDMyVjY0SDE2MFYzMkMxNjAgMTQuNCAxNDUuNiAwIDEyOCAwSDEyOEMxMTAuNCAwIDk2IDE0LjQgOTYgMzJWNjRINDhDMjEuNDkgNjQgMCA4NS40OSAwIDExMlYxNjBINDQ4VjExMkM0NDggODUuNDkgNDI2LjUxIDY0IDQwMCA2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CalendarStar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M0 464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V192H0V464ZM134.125 304.25L188.75 296.25L213.25 246.75C217.75 237.75 230.375 237.875 234.75 246.75L259.25 296.25L313.999 304.25C323.75 305.75 327.75 317.75 320.625 324.75L281 363.375L290.375 418C292.125 427.875 281.75 435.25 273 430.625L224 404.75L175.125 430.625C166.375 435.25 156 427.75 157.75 418L167.125 363.375L127.5 324.75C120.25 317.75 124.25 305.75 134.125 304.25ZM400 64H352V32C352 14.4 337.6 0 320 0H320C302.4 0 288 14.4 288 32V64H160V32C160 14.4 145.6 0 128 0H128C110.4 0 96 14.4 96 32V64H48C21.49 64 0 85.49 0 112V160H448V112C448 85.49 426.51 64 400 64Z" />
        </Icon>
    </>
}