
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `key` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/key?s=light key}
 * @preview ![key](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMEMyMzguODc1IDAgMTYwIDc4Ljc1IDE2MCAxNzZDMTYwIDE5MS4yNSAxNjIgMjA2LjM3NSAxNjUuNzUgMjIxTDcgMzc5Ljc1QzIuNSAzODQuMjUgMCAzOTAuMzc1IDAgMzk2LjYyNVY0ODhDMCA1MDEuMjUgMTAuNzUgNTEyIDI0IDUxMkgxMzZDMTQ5LjI1IDUxMiAxNjAgNTAxLjI1IDE2MCA0ODhWNDQ4SDIwMEMyMTMuMjUgNDQ4IDIyNCA0MzcuMjUgMjI0IDQyNFYzODRIMjQzLjM3NUMyNDkuNjI1IDM4NCAyNTUuNzUgMzgxLjUgMjYwLjI1IDM3N0wyOTEgMzQ2LjI1QzMwNS42MjUgMzUwIDMyMC43NSAzNTIgMzM2IDM1MkM0MzMuMTI1IDM1MiA1MTIgMjczLjI1IDUxMiAxNzZDNTEyIDc4Ljg3NSA0MzMuMjUgMCAzMzYgMFpNMzM2IDMyMEMzMTcgMzIwIDI5OC44NzUgMzE2LjM3NSAyODIuMzc1IDMwOS42MjVMMjQwIDM1MkgxOTJWNDE2SDEyOFY0ODBIMzJWNDAwTDIwMi4zNzUgMjI5LjYyNUMxOTUuNjI1IDIxMy4xMjUgMTkyIDE5NSAxOTIgMTc2QzE5MiA5Ni41IDI1Ni41IDMyIDMzNiAzMlM0ODAgOTYuNSA0ODAgMTc2UzQxNS41IDMyMCAzMzYgMzIwWk0zODQgMTA0QzM3MC43NDYgMTA0IDM2MCAxMTQuNzQ0IDM2MCAxMjhDMzYwIDE0MS4yNTQgMzcwLjc0NiAxNTIgMzg0IDE1MlM0MDggMTQxLjI1NCA0MDggMTI4QzQwOCAxMTQuNzQ0IDM5Ny4yNTQgMTA0IDM4NCAxMDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Key(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M336 0C238.875 0 160 78.75 160 176C160 191.25 162 206.375 165.75 221L7 379.75C2.5 384.25 0 390.375 0 396.625V488C0 501.25 10.75 512 24 512H136C149.25 512 160 501.25 160 488V448H200C213.25 448 224 437.25 224 424V384H243.375C249.625 384 255.75 381.5 260.25 377L291 346.25C305.625 350 320.75 352 336 352C433.125 352 512 273.25 512 176C512 78.875 433.25 0 336 0ZM336 320C317 320 298.875 316.375 282.375 309.625L240 352H192V416H128V480H32V400L202.375 229.625C195.625 213.125 192 195 192 176C192 96.5 256.5 32 336 32S480 96.5 480 176S415.5 320 336 320ZM384 104C370.746 104 360 114.744 360 128C360 141.254 370.746 152 384 152S408 141.254 408 128C408 114.744 397.254 104 384 104Z" />
        </Icon>
    </>
}