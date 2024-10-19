
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `image-polaroid` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/image-polaroid?s=duotone image-polaroid}
 * @preview ![image-polaroid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMCAzMkg0OEMyMS42IDMyIDAgNTMuNjAyIDAgODBWNDMyQzAgNDU4LjM5OCAyMS42IDQ4MCA0OCA0ODBINDAwQzQyNi40IDQ4MCA0NDggNDU4LjM5OCA0NDggNDMyVjgwQzQ0OCA1My42MDIgNDI2LjQgMzIgNDAwIDMyWk0zODQgMzUySDY0Vjk2SDM4NFYzNTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTY0IDk2VjM1MkgzODRWOTZINjRaTTEyOCAxMjhDMTQ1LjYyNSAxMjggMTYwIDE0Mi4zNzUgMTYwIDE2MFMxNDUuNjI1IDE5MiAxMjggMTkyUzk2IDE3Ny42MjUgOTYgMTYwUzExMC4zNzUgMTI4IDEyOCAxMjhaTTM1MC4xMDcgMzExLjU1MUMzNDcuMzIyIDMxNi43NTQgMzQxLjkgMzIwIDMzNiAzMjBIMTEyQzEwNS45NzkgMzIwIDEwMC40NjcgMzE2LjYyMSA5Ny43MzggMzExLjI1Qzk1LjAwOCAzMDUuODgzIDk1LjUyMyAyOTkuNDM4IDk5LjA3MiAyOTQuNTc0TDE0NS43MzggMjMwLjU3NEMxNDguNzUgMjI2LjQ0MSAxNTMuNTU1IDIyNCAxNTguNjY2IDIyNFMxNjguNTgyIDIyNi40NDEgMTcxLjU5NCAyMzAuNTc0TDE4My44NSAyNDcuMzgzTDIzNy4zNTQgMTY3LjEyNUMyNDAuMzIgMTYyLjY3MiAyNDUuMzE2IDE2MCAyNTAuNjY2IDE2MFMyNjEuMDEyIDE2Mi42NzIgMjYzLjk3OSAxNjcuMTI1TDM0OS4zMTIgMjk1LjEyNUMzNTIuNTg2IDMwMC4wMzUgMzUyLjg5MSAzMDYuMzQ4IDM1MC4xMDcgMzExLjU1MVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ImagePolaroid(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M400 32H48C21.6 32 0 53.602 0 80V432C0 458.398 21.6 480 48 480H400C426.4 480 448 458.398 448 432V80C448 53.602 426.4 32 400 32ZM384 352H64V96H384V352Z" />
            <path d="M64 96V352H384V96H64ZM128 128C145.625 128 160 142.375 160 160S145.625 192 128 192S96 177.625 96 160S110.375 128 128 128ZM350.107 311.551C347.322 316.754 341.9 320 336 320H112C105.979 320 100.467 316.621 97.738 311.25C95.008 305.883 95.523 299.438 99.072 294.574L145.738 230.574C148.75 226.441 153.555 224 158.666 224S168.582 226.441 171.594 230.574L183.85 247.383L237.354 167.125C240.32 162.672 245.316 160 250.666 160S261.012 162.672 263.979 167.125L349.312 295.125C352.586 300.035 352.891 306.348 350.107 311.551Z" />
        </Icon>
    </>
}