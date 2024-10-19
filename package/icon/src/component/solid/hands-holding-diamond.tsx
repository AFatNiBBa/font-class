
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hands-holding-diamond` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hands-holding-diamond?s=solid hands-holding-diamond}
 * @preview ![hands-holding-diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzguNzUgMTA1LjY1TDM0Mi4zNzUgOS4yODFDMzMwIC0zLjA5NCAzMTAgLTMuMDk0IDI5Ny42MjUgOS4yODFMMjAxLjI1IDEwNS43NzVDMTg4Ljc1IDExOC4wMjQgMTg4Ljc1IDEzOC4xNDggMjAxLjI1IDE1MC4zOTdMMjk3LjYyNSAyNDYuNzY2QzMwOS44NzUgMjU5LjE0IDMzMCAyNTkuMTQgMzQyLjI1IDI0Ni43NjZMNDM4Ljc1IDE1MC4zOTdDNDUxLjEyNSAxMzguMDIzIDQ1MS4xMjUgMTE4LjAyNCA0MzguNzUgMTA1LjY1Wk0yMTYuOTg0IDIzNi4wMTdDMjA1Ljk1MyAyMjIuMjY4IDE4NS43ODEgMjE5Ljk4NyAxNzIuMDE2IDIzMS4wMTdDMTU4LjIwMyAyNDIuMDc5IDE1NS45NjkgMjYyLjIwMyAxNjcuMDE2IDI3Ni4wMTRMMTg1Ljg3NSAzMDYuNTc1QzE5NC43NzMgMzE3LjcwNyAxOTMuODgzIDMzMy43NDUgMTgzLjgwNSAzNDMuODE1QzE3Mi4wMjMgMzU1LjYwMyAxNTIuNjA5IDM1NC41MjUgMTQyLjE5NSAzNDEuNTFMODAgMjU2Ljc4MVYxMDQuMDI1QzgwIDgxLjkzMyA2Mi4wOTQgNjQuMDI3IDQwIDY0LjAyN1MwIDgxLjkzMyAwIDEwNC4wMjVWMzA4Ljc1OEMwIDMyMy4zMDEgNC45NDkgMzM3LjQwNSAxNC4wMzEgMzQ4Ljc2TDEzNS4wMTYgNTAwLjAwMUMxNDEuMDgyIDUwNy41ODYgMTUwLjI2NiA1MTIgMTU5Ljk4IDUxMkgyNTZDMjczLjY3MiA1MTIgMjg4IDQ5Ny42NzMgMjg4IDQ4MC4wMDJWMzU4LjQ0N0MyODggMzM2LjY1OSAyODAuNTg2IDMxNS41MjQgMjY2Ljk3NyAyOTguNTEzTDIxNi45ODQgMjM2LjAxN1pNNjAwIDY0LjAyN0M1NzcuOTA2IDY0LjAyNyA1NjAgODEuOTMzIDU2MCAxMDQuMDI1VjI1Ni43ODFMNDk3LjgwNSAzNDEuNTFDNDg3LjM5MSAzNTQuNTI1IDQ2Ny45NzcgMzU1LjYwMyA0NTYuMTk1IDM0My44MTVDNDQ2LjExNyAzMzMuNzQ1IDQ0NS4yMjcgMzE3LjcwNyA0NTQuMTI1IDMwNi41NzVMNDcyLjk4NCAyNzYuMDE0QzQ4NC4wMzEgMjYyLjIwMyA0ODEuNzk3IDI0Mi4wNzkgNDY3Ljk4NCAyMzEuMDE3QzQ1NC4yMTkgMjE5Ljk4NyA0MzQuMDQ3IDIyMi4yNjggNDIzLjAxNiAyMzYuMDE3TDM3My4wMjMgMjk4LjUxM0MzNTkuNDE0IDMxNS41MjQgMzUyIDMzNi42NTkgMzUyIDM1OC40NDdWNDgwLjAwMkMzNTIgNDk3LjY3MyAzNjYuMzI4IDUxMiAzODQgNTEySDQ4MC4wMkM0ODkuNzM0IDUxMiA0OTguOTE4IDUwNy41ODYgNTA0Ljk4NCA1MDAuMDAxTDYyNS45NjkgMzQ4Ljc2QzYzNS4wNTEgMzM3LjQwNSA2NDAgMzIzLjMwMSA2NDAgMzA4Ljc1OFYxMDQuMDI1QzY0MCA4MS45MzMgNjIyLjA5NCA2NC4wMjcgNjAwIDY0LjAyN1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandsHoldingDiamond(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M438.75 105.65L342.375 9.281C330 -3.094 310 -3.094 297.625 9.281L201.25 105.775C188.75 118.024 188.75 138.148 201.25 150.397L297.625 246.766C309.875 259.14 330 259.14 342.25 246.766L438.75 150.397C451.125 138.023 451.125 118.024 438.75 105.65ZM216.984 236.017C205.953 222.268 185.781 219.987 172.016 231.017C158.203 242.079 155.969 262.203 167.016 276.014L185.875 306.575C194.773 317.707 193.883 333.745 183.805 343.815C172.023 355.603 152.609 354.525 142.195 341.51L80 256.781V104.025C80 81.933 62.094 64.027 40 64.027S0 81.933 0 104.025V308.758C0 323.301 4.949 337.405 14.031 348.76L135.016 500.001C141.082 507.586 150.266 512 159.98 512H256C273.672 512 288 497.673 288 480.002V358.447C288 336.659 280.586 315.524 266.977 298.513L216.984 236.017ZM600 64.027C577.906 64.027 560 81.933 560 104.025V256.781L497.805 341.51C487.391 354.525 467.977 355.603 456.195 343.815C446.117 333.745 445.227 317.707 454.125 306.575L472.984 276.014C484.031 262.203 481.797 242.079 467.984 231.017C454.219 219.987 434.047 222.268 423.016 236.017L373.023 298.513C359.414 315.524 352 336.659 352 358.447V480.002C352 497.673 366.328 512 384 512H480.02C489.734 512 498.918 507.586 504.984 500.001L625.969 348.76C635.051 337.405 640 323.301 640 308.758V104.025C640 81.933 622.094 64.027 600 64.027Z" />
        </Icon>
    </>
}