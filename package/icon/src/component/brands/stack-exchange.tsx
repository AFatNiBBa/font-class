
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `stack-exchange` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stack-exchange?s=brands stack-exchange}
 * @preview ![stack-exchange](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNy43IDMzMi4zaDQxMi43djIyYzAgMzcuNy0yOS4zIDY4LTY1LjMgNjhoLTE5TDI1OS4zIDUxMnYtODkuN0g4M2MtMzYgMC02NS4zLTMwLjMtNjUuMy02OHYtMjJ6bTAtMjMuNmg0MTIuN3YtODVIMTcuN3Y4NXptMC0xMDkuNGg0MTIuN3YtODVIMTcuN3Y4NXpNMzY1IDBIODNDNDcgMCAxNy43IDMwLjMgMTcuNyA2Ny43VjkwaDQxMi43VjY3LjdDNDMwLjMgMzAuMyA0MDEgMCAzNjUgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function StackExchange(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M17.7 332.3h412.7v22c0 37.7-29.3 68-65.3 68h-19L259.3 512v-89.7H83c-36 0-65.3-30.3-65.3-68v-22zm0-23.6h412.7v-85H17.7v85zm0-109.4h412.7v-85H17.7v85zM365 0H83C47 0 17.7 30.3 17.7 67.7V90h412.7V67.7C430.3 30.3 401 0 365 0z" />
        </Icon>
    </>
}