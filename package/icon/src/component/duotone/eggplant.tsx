
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `eggplant` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/eggplant?s=duotone eggplant}
 * @preview ![eggplant](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2NS4zMiAxOTkuODM4QzQ0MS44MjIgMjQ2LjY0MSA0MTUuODU5IDI5My4wNjIgMzg1LjgwOCAzMzkuMDg4QzI4NC4wMzEgNDkzLjc3IDIzNC43MzYgNTEyLjAzNSAxNzIuNTY1IDUxMi4wMzVDMTMwLjI4MSA1MTIuMDM1IDAgNDc4LjE1OCAwIDMzNy4zNTVDMCAyNzUuOTUgMzEuOTM0IDIxNC42NDcgMTAwLjc2MyAxODYuMDc2QzE4Ny41NzQgMTUyLjA5MSAyOTMuNjg2IDU5LjA4MSAzMTIuNzU5IDQ3Ljc3NUMzMjMuODE2IDY2Ljk0NyAzNDQuMjg1IDgwIDM2OC4wMDUgODBDMzY4LjAwNSAxMTUuMzQ2IDM5Ni42NiAxNDQgNDMyLjAwNSAxNDRDNDMyLjAwNSAxNjguMTYyIDQ0NS41NTQgMTg4Ljk0NSA0NjUuMzIgMTk5LjgzOFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTExLjk5NCAyNEM1MTEuOTk0IDMwLjE0MSA1MDkuNjUgMzYuMjgxIDUwNC45NjMgNDAuOTY5TDQ5MC45MjYgNTUuMDA2QzQ5NC4xODggNjIuNjg2IDQ5NiA3MS4xMjkgNDk2IDgwVjIwOEM0NjAuNjU0IDIwOCA0MzIgMTc5LjM0NiA0MzIgMTQ0QzM5Ni42NTQgMTQ0IDM2OCAxMTUuMzQ2IDM2OCA4MEMzMzIuNjU0IDgwIDMwNCA1MS4zNDYgMzA0IDE2SDQzMkM0NDAuODY3IDE2IDQ0OS4zMDkgMTcuODExIDQ1Ni45ODYgMjEuMDdMNDcxLjAyNSA3LjAzMUM0NzUuNzEzIDIuMzQ0IDQ4MS44NTQgMCA0ODcuOTk0IDBDNTAxLjcwMyAwIDUxMS45OTQgMTEuMjEgNTExLjk5NCAyNFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Eggplant(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M465.32 199.838C441.822 246.641 415.859 293.062 385.808 339.088C284.031 493.77 234.736 512.035 172.565 512.035C130.281 512.035 0 478.158 0 337.355C0 275.95 31.934 214.647 100.763 186.076C187.574 152.091 293.686 59.081 312.759 47.775C323.816 66.947 344.285 80 368.005 80C368.005 115.346 396.66 144 432.005 144C432.005 168.162 445.554 188.945 465.32 199.838Z" />
            <path d="M511.994 24C511.994 30.141 509.65 36.281 504.963 40.969L490.926 55.006C494.188 62.686 496 71.129 496 80V208C460.654 208 432 179.346 432 144C396.654 144 368 115.346 368 80C332.654 80 304 51.346 304 16H432C440.867 16 449.309 17.811 456.986 21.07L471.025 7.031C475.713 2.344 481.854 0 487.994 0C501.703 0 511.994 11.21 511.994 24Z" />
        </Icon>
    </>
}