
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `heart-half-stroke` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/heart-half-stroke?s=duotone heart-half-stroke}
 * @preview ![heart-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3Mi4wOTYgMjcwLjQ4NEwyNzguOTQ3IDQ3MC4xOTVDMjcyLjYzNyA0NzYuNzIzIDI2NC4zMTggNDc5Ljk4IDI1NiA0NzkuOTkyVjQyNC44NzdMNDM3LjU5MiAyMzcuMTE1QzQ1NS40OCAyMTguNjM3IDQ2NS4wNjQgMTkyLjk2MSA0NjMuOTA0IDE2Ni42NTZDNDYyLjczNCAxNDAuMTY4IDQ1MS4yNDYgMTE2LjE5NSA0MzEuNTU3IDk5LjE1MkM0MTMuMjY2IDgzLjMyMiAzOTIuNzMyIDgwIDM3OC43MjkgODBDMzUzLjIwOSA4MCAzMjguMjE5IDkwLjY4OCAzMTAuMTcgMTA5LjMyQzI4MyAxMzcuMzcxIDI5My43OTcgMTI2LjIyNSAyNTYuMDEgMTY1LjI0TDI1NiAxNjUuMjNWOTYuMjRMMjU2LjAwOCA5Ni4yNDhMMjc1LjY5MyA3NS45MjRDMzAzLjM3NyA0Ny4zNDQgMzQxLjIzNiAzMiAzNzguNzIzIDMyQzQwOC44NzEgMzEuOTk4IDQzOC43NzUgNDEuOTIgNDYyLjk2OSA2Mi44NTlDNTI1LjExNyAxMTYuNjQ4IDUyOC4yMTEgMjEyLjUxNiA0NzIuMDk2IDI3MC40ODRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1NiA0NzkuOTkyQzI0Ny42NTQgNDgwLjAwNCAyMzkuMzA1IDQ3Ni43NDIgMjMyLjk3NCA0NzAuMTk1TDM5LjgyNCAyNzAuNDg0Qy0xNi4xOTcgMjEyLjUxNiAtMTMuMTA0IDExNi42NTIgNDkuMDQxIDYyLjg2MUMxMDMuMzE2IDE1Ljg4NSAxODYuMzcxIDI0LjM1NyAyMzYuMzIgNzUuOTI0TDI1NiA5Ni4yNFY0NzkuOTkyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HeartHalfStroke(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M472.096 270.484L278.947 470.195C272.637 476.723 264.318 479.98 256 479.992V424.877L437.592 237.115C455.48 218.637 465.064 192.961 463.904 166.656C462.734 140.168 451.246 116.195 431.557 99.152C413.266 83.322 392.732 80 378.729 80C353.209 80 328.219 90.688 310.17 109.32C283 137.371 293.797 126.225 256.01 165.24L256 165.23V96.24L256.008 96.248L275.693 75.924C303.377 47.344 341.236 32 378.723 32C408.871 31.998 438.775 41.92 462.969 62.859C525.117 116.648 528.211 212.516 472.096 270.484Z" />
            <path d="M256 479.992C247.654 480.004 239.305 476.742 232.974 470.195L39.824 270.484C-16.197 212.516 -13.104 116.652 49.041 62.861C103.316 15.885 186.371 24.357 236.32 75.924L256 96.24V479.992Z" />
        </Icon>
    </>
}