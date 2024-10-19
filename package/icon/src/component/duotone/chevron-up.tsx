
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chevron-up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-up?s=duotone chevron-up}
 * @preview ![chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQzNi45MDggMzM5LjY1N0M0MjkuMDQ5IDM0Ny44NzUgNDE4LjUzMyAzNTIgNDA4LjAwMiAzNTJDMzk4LjA0OCAzNTIgMzg4LjA5NSAzNDguMzEzIDM4MC4zNDUgMzQwLjkwN0wyMjQgMTkxLjM1NEw2Ny42NTUgMzQwLjkwN0M1MS43MDIgMzU2LjE1NiAyNi4zNDIgMzU1LjYyNSAxMS4wOTIgMzM5LjY1N0MtNC4xNzQgMzIzLjY4OSAtMy42MTEgMjk4LjM3OCAxMi4zNDIgMjgzLjA5OEwxOTYuMzQ0IDEwNy4xMDlDMjExLjgxMiA5Mi4yOTcgMjM2LjE4OCA5Mi4yOTcgMjUxLjY1NiAxMDcuMTA5TDQzNS42NTggMjgzLjA5OEM0NTEuNjExIDI5OC4zNzggNDUyLjE3NCAzMjMuNjg5IDQzNi45MDggMzM5LjY1N1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChevronUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M436.908 339.657C429.049 347.875 418.533 352 408.002 352C398.048 352 388.095 348.313 380.345 340.907L224 191.354L67.655 340.907C51.702 356.156 26.342 355.625 11.092 339.657C-4.174 323.689 -3.611 298.378 12.342 283.098L196.344 107.109C211.812 92.297 236.188 92.297 251.656 107.109L435.658 283.098C451.611 298.378 452.174 323.689 436.908 339.657Z" />
        </Icon>
    </>
}