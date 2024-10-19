
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chevron-down` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=regular chevron-down}
 * @preview ![chevron-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIuNTkxIDIwOS4zMzJMMjQwLjU5MyAzOTMuMzEyQzIzNS45NjggMzk3Ljc4MSAyMjkuOTY4IDQwMCAyMjMuOTk5IDQwMFMyMTIuMDMxIDM5Ny43ODEgMjA3LjQwNiAzOTMuMzEyTDE1LjQwOCAyMDkuMzMyQzUuODE0IDIwMC4xOCA1LjUwMSAxODQuOTkyIDE0LjY4OSAxNzUuNDNDMjMuODE0IDE2NS44MDUgMzkuMDY0IDE2NS40OTIgNDguNTk1IDE3NC43MTFMMjIzLjk5OSAzNDIuNzU4TDM5OS40MDQgMTc0LjcxMUM0MDguOTA0IDE2NS40OTIgNDI0LjE4NSAxNjUuODA1IDQzMy4zMSAxNzUuNDNDNDQyLjQ5NyAxODQuOTkyIDQ0Mi4xODUgMjAwLjE4IDQzMi41OTEgMjA5LjMzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ChevronDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432.591 209.332L240.593 393.312C235.968 397.781 229.968 400 223.999 400S212.031 397.781 207.406 393.312L15.408 209.332C5.814 200.18 5.501 184.992 14.689 175.43C23.814 165.805 39.064 165.492 48.595 174.711L223.999 342.758L399.404 174.711C408.904 165.492 424.185 165.805 433.31 175.43C442.497 184.992 442.185 200.18 432.591 209.332Z" />
        </Icon>
    </>
}