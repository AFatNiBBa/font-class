
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `location-crosshairs` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-crosshairs?s=regular location-crosshairs}
 * @preview ![location-crosshairs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTY4QzIwNy4zNzUgMTY4IDE2OCAyMDcuMzc1IDE2OCAyNTZTMjA3LjM3NSAzNDQgMjU2IDM0NFMzNDQgMzA0LjYyNSAzNDQgMjU2UzMwNC42MjUgMTY4IDI1NiAxNjhaTTI1NiAyOTZDMjM0IDI5NiAyMTYgMjc4LjAwMSAyMTYgMjU2QzIxNiAyMzQuMDAxIDIzNCAyMTYgMjU2IDIxNkMyNzggMjE2IDI5NiAyMzQuMDAxIDI5NiAyNTZDMjk2IDI3OC4wMDEgMjc4IDI5NiAyNTYgMjk2Wk00ODggMjMySDQ0Ni4zNzVDNDM1LjUgMTQ1LjI1IDM2Ni43NSA3Ni41IDI4MCA2NS42MjVWMjRDMjgwIDEwLjc0NSAyNjkuMjU1IDAgMjU2IDBIMjU2QzI0Mi43NDUgMCAyMzIgMTAuNzQ1IDIzMiAyNFY2NS42MjVDMTQ1LjI1IDc2LjUgNzYuNSAxNDUuMjUgNjUuNjI1IDIzMkgyNEMxMC43NDUgMjMyIDAgMjQyLjc0NSAwIDI1NlYyNTZDMCAyNjkuMjU1IDEwLjc0NSAyODAgMjQgMjgwSDY1LjYyNUM3Ni41IDM2Ni43NSAxNDUuMjUgNDM1LjUgMjMyIDQ0Ni4zNzVWNDg4QzIzMiA1MDEuMjU1IDI0Mi43NDUgNTEyIDI1NiA1MTJIMjU2QzI2OS4yNTUgNTEyIDI4MCA1MDEuMjU1IDI4MCA0ODhWNDQ2LjM3NUMzNjYuNzUgNDM1LjUgNDM1LjUgMzY2Ljc1IDQ0Ni4zNzUgMjgwSDQ4OEM1MDEuMjU1IDI4MCA1MTIgMjY5LjI1NSA1MTIgMjU2VjI1NkM1MTIgMjQyLjc0NSA1MDEuMjU1IDIzMiA0ODggMjMyWk0yNTYgNDAwQzE3Ni42MjUgNDAwIDExMiAzMzUuMzc1IDExMiAyNTZTMTc2LjYyNSAxMTIgMjU2IDExMlM0MDAgMTc2LjYyNSA0MDAgMjU2UzMzNS4zNzUgNDAwIDI1NiA0MDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LocationCrosshairs(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 168C207.375 168 168 207.375 168 256S207.375 344 256 344S344 304.625 344 256S304.625 168 256 168ZM256 296C234 296 216 278.001 216 256C216 234.001 234 216 256 216C278 216 296 234.001 296 256C296 278.001 278 296 256 296ZM488 232H446.375C435.5 145.25 366.75 76.5 280 65.625V24C280 10.745 269.255 0 256 0H256C242.745 0 232 10.745 232 24V65.625C145.25 76.5 76.5 145.25 65.625 232H24C10.745 232 0 242.745 0 256V256C0 269.255 10.745 280 24 280H65.625C76.5 366.75 145.25 435.5 232 446.375V488C232 501.255 242.745 512 256 512H256C269.255 512 280 501.255 280 488V446.375C366.75 435.5 435.5 366.75 446.375 280H488C501.255 280 512 269.255 512 256V256C512 242.745 501.255 232 488 232ZM256 400C176.625 400 112 335.375 112 256S176.625 112 256 112S400 176.625 400 256S335.375 400 256 400Z" />
        </Icon>
    </>
}