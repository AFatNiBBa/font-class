
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `y` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/y?s=duotone y}
 * @preview ![y](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM3NS40NTkgMTA3LjMzMkwyMzkuOTk4IDMwMy4wMDFWNDMyLjAwM0MyMzkuOTk4IDQ1OC41MDEgMjE4LjQ5OSA0ODAgMTkyIDQ4MFMxNDQuMDAyIDQ1OC41MDEgMTQ0LjAwMiA0MzIuMDAzVjMwMy4wMDFMOC41NDEgMTA3LjMzMkMtNi41NTIgODUuNTUyIC0xLjExNSA1NS42NDcgMjAuNjk2IDQwLjU1NEM0Mi4zODMgMjUuNDMgNzIuMzgxIDMwLjg5OSA4Ny40NzQgNTIuNzFMMTkyIDIwMy43MDJMMjk2LjUyNiA1Mi43MUMzMTEuNTg4IDMwLjg5OSAzNDEuNTg2IDI1LjQzIDM2My4zMDQgNDAuNTU0QzM4NS4xMTUgNTUuNjQ3IDM5MC41NTIgODUuNTUyIDM3NS40NTkgMTA3LjMzMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Y(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M375.459 107.332L239.998 303.001V432.003C239.998 458.501 218.499 480 192 480S144.002 458.501 144.002 432.003V303.001L8.541 107.332C-6.552 85.552 -1.115 55.647 20.696 40.554C42.383 25.43 72.381 30.899 87.474 52.71L192 203.702L296.526 52.71C311.588 30.899 341.586 25.43 363.304 40.554C385.115 55.647 390.552 85.552 375.459 107.332Z" />
        </Icon>
    </>
}