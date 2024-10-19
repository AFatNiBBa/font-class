
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `campground` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/campground?s=solid campground}
 * @preview ![campground](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjcuNSAxMTcuNzQ2TDM4MSA0NC4yNDZDMzg2LjEyNSAzNi45OTYgMzg0LjUgMjYuOTk2IDM3Ny4zNzUgMjEuODcxTDM1MS41IDIuOTk2QzM0NC4zNzcgLTIuMiAzMzQuMzg5IC0wLjYyNyAzMjkuMjA4IDYuNTA3TDI4OCA2My4yNDZMMjQ2Ljc5MiA2LjUwN0MyNDEuNjExIC0wLjYyNyAyMzEuNjIzIC0yLjIgMjI0LjUgMi45OTZMMTk4LjYyNSAyMS44NzFDMTkxLjUgMjYuOTk2IDE4OS44NzUgMzYuOTk2IDE5NSA0NC4yNDZMMjQ4LjUgMTE3Ljc0Nkw2LjQzIDQzOS40NTRDMi4yNTcgNDQ1LjAwMSAwIDQ1MS43NTQgMCA0NTguNjk1VjQ3OS45OTZDMCA0OTcuNjY5IDE0LjMyNyA1MTEuOTk2IDMyIDUxMS45OTZINTQ0QzU2MS42NzMgNTExLjk5NiA1NzYgNDk3LjY2OSA1NzYgNDc5Ljk5NlY0NTguNjk1QzU3NiA0NTEuNzU0IDU3My43NDMgNDQ1LjAwMSA1NjkuNTcgNDM5LjQ1NEwzMjcuNSAxMTcuNzQ2Wk0yODggMjg3Ljk5Nkw0MDQuMzc1IDQ0Ny45OTZIMTcxLjYyNUwyODggMjg3Ljk5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Campground(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M327.5 117.746L381 44.246C386.125 36.996 384.5 26.996 377.375 21.871L351.5 2.996C344.377 -2.2 334.389 -0.627 329.208 6.507L288 63.246L246.792 6.507C241.611 -0.627 231.623 -2.2 224.5 2.996L198.625 21.871C191.5 26.996 189.875 36.996 195 44.246L248.5 117.746L6.43 439.454C2.257 445.001 0 451.754 0 458.695V479.996C0 497.669 14.327 511.996 32 511.996H544C561.673 511.996 576 497.669 576 479.996V458.695C576 451.754 573.743 445.001 569.57 439.454L327.5 117.746ZM288 287.996L404.375 447.996H171.625L288 287.996Z" />
        </Icon>
    </>
}