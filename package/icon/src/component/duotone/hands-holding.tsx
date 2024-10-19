
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hands-holding` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hands-holding?s=duotone hands-holding}
 * @preview ![hands-holding](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIxNi45ODQgMjM2QzIwNS45NTMgMjIyLjI1IDE4NS43ODEgMjE5Ljk2OSAxNzIuMDE2IDIzMUMxNTguMjAzIDI0Mi4wNjIgMTU1Ljk2OSAyNjIuMTg4IDE2Ny4wMTYgMjc2TDE4NS44NzMgMzA2LjU2MkMxOTQuNzczIDMxNy42OTUgMTkzLjg4MyAzMzMuNzM0IDE4My44MDcgMzQzLjgwNUMxNzIuMDIxIDM1NS41OTQgMTUyLjYwNyAzNTQuNTE2IDE0Mi4xOTUgMzQxLjVMODAgMjU2Ljc2NlYxMDRDODAgODEuOTA2IDYyLjA5MiA2NCA0MCA2NFMwIDgxLjkwNiAwIDEwNFYzMDguNzQ2QzAgMzIzLjI4OSA0Ljk0OSAzMzcuMzk1IDE0LjAzMSAzNDguNzVMMTM1LjAxNiA1MDBDMTQxLjA4MiA1MDcuNTg2IDE1MC4yNjggNTEyIDE1OS45OCA1MTJIMjU2QzI3My42NzQgNTEyIDI4OCA0OTcuNjcyIDI4OCA0ODBWMzU4LjQzOEMyODggMzM2LjY0OCAyODAuNTg2IDMxNS41MTIgMjY2Ljk3NyAyOTguNUwyMTYuOTg0IDIzNlpNNjAwIDY0QzU3Ny45MDggNjQgNTYwIDgxLjkwNiA1NjAgMTA0VjI1Ni43NjZMNDk3LjgwNSAzNDEuNUM0ODcuMzkzIDM1NC41MTYgNDY3Ljk3OSAzNTUuNTk0IDQ1Ni4xOTMgMzQzLjgwNUM0NDYuMTE3IDMzMy43MzQgNDQ1LjIyNyAzMTcuNjk1IDQ1NC4xMjcgMzA2LjU2Mkw0NzIuOTg0IDI3NkM0ODQuMDMxIDI2Mi4xODggNDgxLjc5NyAyNDIuMDYyIDQ2Ny45ODQgMjMxQzQ1NC4yMTkgMjE5Ljk2OSA0MzQuMDQ3IDIyMi4yNSA0MjMuMDE2IDIzNkwzNzMuMDIzIDI5OC41QzM1OS40MTQgMzE1LjUxMiAzNTIgMzM2LjY0OCAzNTIgMzU4LjQzOFY0ODBDMzUyIDQ5Ny42NzIgMzY2LjMyNiA1MTIgMzg0IDUxMkg0ODAuMDJDNDg5LjczMiA1MTIgNDk4LjkxOCA1MDcuNTg2IDUwNC45ODQgNTAwTDYyNS45NjkgMzQ4Ljc1QzYzNS4wNTEgMzM3LjM5NSA2NDAgMzIzLjI4OSA2NDAgMzA4Ljc0NlYxMDRDNjQwIDgxLjkwNiA2MjIuMDkyIDY0IDYwMCA2NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const HandsHolding: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M216.984 236C205.953 222.25 185.781 219.969 172.016 231C158.203 242.062 155.969 262.188 167.016 276L185.873 306.562C194.773 317.695 193.883 333.734 183.807 343.805C172.021 355.594 152.607 354.516 142.195 341.5L80 256.766V104C80 81.906 62.092 64 40 64S0 81.906 0 104V308.746C0 323.289 4.949 337.395 14.031 348.75L135.016 500C141.082 507.586 150.268 512 159.98 512H256C273.674 512 288 497.672 288 480V358.438C288 336.648 280.586 315.512 266.977 298.5L216.984 236ZM600 64C577.908 64 560 81.906 560 104V256.766L497.805 341.5C487.393 354.516 467.979 355.594 456.193 343.805C446.117 333.734 445.227 317.695 454.127 306.562L472.984 276C484.031 262.188 481.797 242.062 467.984 231C454.219 219.969 434.047 222.25 423.016 236L373.023 298.5C359.414 315.512 352 336.648 352 358.438V480C352 497.672 366.326 512 384 512H480.02C489.732 512 498.918 507.586 504.984 500L625.969 348.75C635.051 337.395 640 323.289 640 308.746V104C640 81.906 622.092 64 600 64Z" />
    </Icon>
);

export default HandsHolding;