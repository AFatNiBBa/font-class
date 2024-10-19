
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `book-circle-arrow-right` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-circle-arrow-right?s=duotone book-circle-arrow-right}
 * @preview ![book-circle-arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMzOS4zNjcgNDQ4SDk2Qzc4LjMyOCA0NDggNjQgNDMzLjY3MiA2NCA0MTZDNjQgMzk4LjMyNiA3OC4zMjggMzg0IDk2IDM4NEgzMjAuODA1QzMyMC4zMjggMzc4LjcyMyAzMjAgMzczLjQwMiAzMjAgMzY4QzMyMCAyODcuNDYxIDM3NC4xNjQgMjE5LjcxMSA0NDggMTk4Ljc5N1YyNEM0NDggMTAuNzQ0IDQzNy4yNTQgMCA0MjQgMEg5NkM0Mi45OCAwIDAgNDIuOTggMCA5NlY0MTZDMCA0NjkuMDIgNDIuOTggNTEyIDk2IDUxMkgzOTVDMzcxLjYyMSA0OTUuNTY4IDM1Mi40NzcgNDczLjYxMyAzMzkuMzY3IDQ0OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDk2IDIyNEM0MTYuNDYxIDIyNCAzNTIgMjg4LjQ2MyAzNTIgMzY4UzQxNi40NjEgNTEyIDQ5NiA1MTJTNjQwIDQ0Ny41MzcgNjQwIDM2OFM1NzUuNTM5IDIyNCA0OTYgMjI0Wk01NzEuMzEyIDM3OS4zMTJMNTE1LjMxMiA0MzUuMzEyQzUxMi4xODggNDM4LjQzOCA1MDguMDk0IDQ0MCA1MDQgNDQwUzQ5NS44MTIgNDM4LjQzOCA0OTIuNjg4IDQzNS4zMTJDNDg2LjQzOCA0MjkuMDYyIDQ4Ni40MzggNDE4LjkzNyA0OTIuNjg4IDQxMi42ODhMNTIxLjM3NSAzODRINDMyQzQyMy4xNjQgMzg0IDQxNiAzNzYuODM2IDQxNiAzNjhTNDIzLjE2NCAzNTIgNDMyIDM1Mkg1MjEuMzc1TDQ5Mi42ODggMzIzLjMxMkM0ODYuNDM4IDMxNy4wNjIgNDg2LjQzOCAzMDYuOTM3IDQ5Mi42ODggMzAwLjY4OFM1MDkuMDYzIDI5NC40MzggNTE1LjMxMiAzMDAuNjg4TDU3MS4zMTIgMzU2LjY4OEM1NzcuNTYyIDM2Mi45MzggNTc3LjU2MiAzNzMuMDYyIDU3MS4zMTIgMzc5LjMxMloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function BookCircleArrowRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M339.367 448H96C78.328 448 64 433.672 64 416C64 398.326 78.328 384 96 384H320.805C320.328 378.723 320 373.402 320 368C320 287.461 374.164 219.711 448 198.797V24C448 10.744 437.254 0 424 0H96C42.98 0 0 42.98 0 96V416C0 469.02 42.98 512 96 512H395C371.621 495.568 352.477 473.613 339.367 448Z" />
            <path d="M496 224C416.461 224 352 288.463 352 368S416.461 512 496 512S640 447.537 640 368S575.539 224 496 224ZM571.312 379.312L515.312 435.312C512.188 438.438 508.094 440 504 440S495.812 438.438 492.688 435.312C486.438 429.062 486.438 418.937 492.688 412.688L521.375 384H432C423.164 384 416 376.836 416 368S423.164 352 432 352H521.375L492.688 323.312C486.438 317.062 486.438 306.937 492.688 300.688S509.063 294.438 515.312 300.688L571.312 356.688C577.562 362.938 577.562 373.062 571.312 379.312Z" />
        </Icon>
    </>
}