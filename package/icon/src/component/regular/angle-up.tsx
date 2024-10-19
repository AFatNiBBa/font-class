
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angle-up` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-up?s=regular angle-up}
 * @preview ![angle-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMy40OTcgMjk0LjU0N0wxNzUuNDk5IDE1MC41NjJDMTgwLjEyNCAxNDYuMTg4IDE4Ni4wNjIgMTQ0IDE5MS45OTkgMTQ0UzIwMy44NzQgMTQ2LjE4OCAyMDguNDk5IDE1MC41NjJMMzYwLjUwMSAyOTQuNTQ3QzM3MC4xMjYgMzAzLjY3MiAzNzAuNTMyIDMxOC44NTkgMzYxLjQzOSAzMjguNDhDMzUyLjMxNCAzMzguMTY4IDMzNy4wNjQgMzM4LjUxMiAzMjcuNTAxIDMyOS40MThMMTkxLjk5OSAyMDEuMDU1TDU2LjQ5NyAzMjkuNDE4QzQ2LjkzNSAzMzguNTEyIDMxLjc0NyAzMzguMTY4IDIyLjU2IDMyOC40OEMxMy40NjYgMzE4Ljg1OSAxMy44NzIgMzAzLjY3MiAyMy40OTcgMjk0LjU0N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function AngleUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M23.497 294.547L175.499 150.562C180.124 146.188 186.062 144 191.999 144S203.874 146.188 208.499 150.562L360.501 294.547C370.126 303.672 370.532 318.859 361.439 328.48C352.314 338.168 337.064 338.512 327.501 329.418L191.999 201.055L56.497 329.418C46.935 338.512 31.747 338.168 22.56 328.48C13.466 318.859 13.872 303.672 23.497 294.547Z" />
        </Icon>
    </>
}