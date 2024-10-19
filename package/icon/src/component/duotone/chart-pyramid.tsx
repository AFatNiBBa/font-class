
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chart-pyramid` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pyramid?s=duotone chart-pyramid}
 * @preview ![chart-pyramid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI5Mi45NSA1M0MyNzYuNjE4IDI1IDIzNS4zOTcgMjUgMjE4Ljk1NCA1M0wxMzcuNTM0IDE5MkgzNzQuNDExTDI5Mi45NSA1M1pNNTA2LjI3NCA0MTdMNDQ5LjQyNiAzMjBINjIuNTU5TDUuNzQxIDQxN0MtMTAuNTkxIDQ0NC44OTEgOS44NTIgNDgwIDQyLjc0MSA0ODBINDY5LjI3NkM1MDIuMDUxIDQ4MCA1MjIuNjA2IDQ0NSA1MDYuMjc0IDQxN1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDQ5Ljg2NyAzMjBINjNMMTM3Ljk3NSAxOTJIMzc0Ljg1Mkw0NDkuODY3IDMyMFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ChartPyramid(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M292.95 53C276.618 25 235.397 25 218.954 53L137.534 192H374.411L292.95 53ZM506.274 417L449.426 320H62.559L5.741 417C-10.591 444.891 9.852 480 42.741 480H469.276C502.051 480 522.606 445 506.274 417Z" />
            <path d="M449.867 320H63L137.975 192H374.852L449.867 320Z" />
        </Icon>
    </>
}