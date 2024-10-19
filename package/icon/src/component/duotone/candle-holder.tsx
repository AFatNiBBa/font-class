
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `candle-holder` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/candle-holder?s=duotone candle-holder}
 * @preview ![candle-holder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MCAxOTJDMjA1Ljg3NSAxOTIgMjM4IDE1OS4zNzUgMjM4IDExMi43NUMyMzggODIuNzUgMjA1LjM3NSAzNy44NzUgMTYwIDBDMTE0LjM3NSAzOCA4MiA4Mi44NzUgODIgMTEyLjc1QzgyIDE1OS4zNzUgMTE0LjEyNSAxOTIgMTYwIDE5MlpNMzc2IDM2OEMzMzYuMjUgMzY4IDMwNCA0MDAuMjUgMzA0IDQ0MEMzMDQgNDQ4LjUgMzA1Ljc1IDQ1Ni41IDMwOC4zNzUgNDY0SDE2QzcuMTI1IDQ2NCAwIDQ3MS4xMjUgMCA0ODBWNDk2QzAgNTA0Ljg3NSA3LjEyNSA1MTIgMTYgNTEySDM3NkM0MTUuNzUgNTEyIDQ0OCA0NzkuNzUgNDQ4IDQ0MFM0MTUuNzUgMzY4IDM3NiAzNjhaTTM3NiA0NjRDMzYyLjc1IDQ2NCAzNTIgNDUzLjI1IDM1MiA0NDBTMzYyLjc1IDQxNiAzNzYgNDE2UzQwMCA0MjYuNzUgNDAwIDQ0MFMzODkuMjUgNDY0IDM3NiA0NjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1NiAyNTZWNDY0SDY0VjI1NkM2NCAyMzguMzc1IDc4LjM3NSAyMjQgOTYgMjI0SDEyOFYyNzJDMTI4IDI4MC44NzUgMTM1LjEyNSAyODggMTQ0IDI4OFMxNjAgMjgwLjg3NSAxNjAgMjcyVjIyNEgyMjRDMjQxLjYyNSAyMjQgMjU2IDIzOC4zNzUgMjU2IDI1NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CandleHolder(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M160 192C205.875 192 238 159.375 238 112.75C238 82.75 205.375 37.875 160 0C114.375 38 82 82.875 82 112.75C82 159.375 114.125 192 160 192ZM376 368C336.25 368 304 400.25 304 440C304 448.5 305.75 456.5 308.375 464H16C7.125 464 0 471.125 0 480V496C0 504.875 7.125 512 16 512H376C415.75 512 448 479.75 448 440S415.75 368 376 368ZM376 464C362.75 464 352 453.25 352 440S362.75 416 376 416S400 426.75 400 440S389.25 464 376 464Z" />
            <path d="M256 256V464H64V256C64 238.375 78.375 224 96 224H128V272C128 280.875 135.125 288 144 288S160 280.875 160 272V224H224C241.625 224 256 238.375 256 256Z" />
        </Icon>
    </>
}