
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `wind-turbine` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wind-turbine?s=light wind-turbine}
 * @preview ![wind-turbine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDQuOTc2IDM5NS41MzFMMzI2Ljk2MSAyMzIuMjVDMzI0LjE2NCAyMjUuNzE5IDMyNC4wMDggMjE4LjI4MSAzMjYuNDc2IDIxMkwzOTEuMjg5IDUxLjM0NEMzOTguNzQyIDMyLjI4MSAzODkuNDE0IDEwLjQzOCAzNzAuMzUxIDIuNjI1QzM1NC4zNTEgLTMuNjU2IDMzNi4yNTggMS42MjUgMzI2LjMyIDE1LjU5NEwyMjUuNDYxIDE1NkMyMjEuMzk4IDE2MS42ODggMjE1LjM4MyAxNjUuNDM4IDIwOC41NyAxNjYuNTMxTDM5LjQyOSAxOTMuNzE5QzIxLjE0OCAxOTYuNjU2IDcuNjMzIDIxMy4wMzEgOC4wMDggMjMxLjkwNkM4LjQ3NiAyNTAuNjU2IDIyLjc3MyAyNjYuMzEyIDQxLjI3MyAyNjguMzQ0TDIwOC44ODMgMjg2Ljc1QzIxNS42MzMgMjg3LjQ2OSAyMjIuMDIzIDI5MS4wNjIgMjI2LjY2NCAyOTYuOTM4TDI0MC4wMDggMzEyLjg2OVY0ODBIMTQ0LjAwOEMxMzUuMTY0IDQ4MCAxMjguMDA4IDQ4Ny4xNTYgMTI4LjAwOCA0OTZTMTM1LjE2NCA1MTIgMTQ0LjAwOCA1MTJIMzY4LjAwOEMzNzYuODUxIDUxMiAzODQuMDA4IDUwNC44NDQgMzg0LjAwOCA0OTZTMzc2Ljg1MSA0ODAgMzY4LjAwOCA0ODBIMjcyLjAwOFYzNTEuMDc2TDM0MS4zMDQgNDMzLjgxM0MzNDkuMTc5IDQ0My44NDQgMzU5Ljk2MSA0NDggMzcwLjI3MyA0NDhDMzc3LjUwOCA0NDggMzg0LjQ5MiA0NDUuOTY5IDM5MC4wODYgNDQyLjQ2OUM0MDUuODk4IDQzMi44MTIgNDEyLjMwNCA0MTIuNjU2IDQwNC45NzYgMzk1LjUzMVpNMzczLjI4OSA0MTUuMjVDMzczLjI0MiA0MTUuMjE5IDM2OS4yODkgNDE3LjY1NiAzNjYuMTY0IDQxMy42NTZMMjUxLjQ3NiAyNzYuNzE5QzI0MS44MiAyNjQuNTMxIDIyNy41NTQgMjU2LjU5NCAyMTIuMzUxIDI1NC45MzhMNDQuNzU4IDIzNi41MzFDNDIuMTY0IDIzNi4yNSA0MC4wNyAyMzMuODc1IDQwLjAwOCAyMzEuMTg4QzM5Ljk0NSAyMjguMjUgNDEuODgzIDIyNS43MTkgNDQuNTA4IDIyNS4zMTJMMjEzLjYzMyAxOTguMTU2QzIyOC45NzYgMTk1LjY4OCAyNDIuNDI5IDE4Ny4zMTIgMjUxLjQ5MiAxNzQuNjI1TDM1Mi4zNjcgMzQuMTg3QzM1My4zODMgMzIuNzUgMzU1LjAwOCAzMS45NjkgMzU2LjYxNyAzMS45NjlDMzU3LjIxMSAzMS45NjkgMzU3LjgwNCAzMi4wOTQgMzU4LjM2NyAzMi4zMTJDMzYxLjIyNiAzMy40NjkgMzYyLjYxNyAzNi43ODEgMzYxLjUzOSAzOS41MzFMMjk2Ljc0MiAyMDAuMTU2QzI5MS4xNjQgMjE0LjM0NCAyOTEuNDYxIDIzMC42MjUgMjk3LjgwNCAyNDUuNDM3TDM3NS42NDggNDA4LjM0NEMzNzYuNTg2IDQxMC44MTIgMzc1LjYwMSA0MTMuODEyIDM3My4yODkgNDE1LjI1Wk0yNTYuMDA4IDIwOEMyNDcuMTcgMjA4IDI0MC4wMDYgMjE1LjE2MiAyNDAuMDA2IDIyNEMyNDAuMDA2IDIzMi44MzYgMjQ3LjE3IDI0MCAyNTYuMDA4IDI0MEMyNjQuODQ0IDI0MCAyNzIuMDA2IDIzMi44MzYgMjcyLjAwNiAyMjRDMjcyLjAwNiAyMTUuMTYyIDI2NC44NDQgMjA4IDI1Ni4wMDggMjA4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WindTurbine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M404.976 395.531L326.961 232.25C324.164 225.719 324.008 218.281 326.476 212L391.289 51.344C398.742 32.281 389.414 10.438 370.351 2.625C354.351 -3.656 336.258 1.625 326.32 15.594L225.461 156C221.398 161.688 215.383 165.438 208.57 166.531L39.429 193.719C21.148 196.656 7.633 213.031 8.008 231.906C8.476 250.656 22.773 266.312 41.273 268.344L208.883 286.75C215.633 287.469 222.023 291.062 226.664 296.938L240.008 312.869V480H144.008C135.164 480 128.008 487.156 128.008 496S135.164 512 144.008 512H368.008C376.851 512 384.008 504.844 384.008 496S376.851 480 368.008 480H272.008V351.076L341.304 433.813C349.179 443.844 359.961 448 370.273 448C377.508 448 384.492 445.969 390.086 442.469C405.898 432.812 412.304 412.656 404.976 395.531ZM373.289 415.25C373.242 415.219 369.289 417.656 366.164 413.656L251.476 276.719C241.82 264.531 227.554 256.594 212.351 254.938L44.758 236.531C42.164 236.25 40.07 233.875 40.008 231.188C39.945 228.25 41.883 225.719 44.508 225.312L213.633 198.156C228.976 195.688 242.429 187.312 251.492 174.625L352.367 34.187C353.383 32.75 355.008 31.969 356.617 31.969C357.211 31.969 357.804 32.094 358.367 32.312C361.226 33.469 362.617 36.781 361.539 39.531L296.742 200.156C291.164 214.344 291.461 230.625 297.804 245.437L375.648 408.344C376.586 410.812 375.601 413.812 373.289 415.25ZM256.008 208C247.17 208 240.006 215.162 240.006 224C240.006 232.836 247.17 240 256.008 240C264.844 240 272.006 232.836 272.006 224C272.006 215.162 264.844 208 256.008 208Z" />
        </Icon>
    </>
}