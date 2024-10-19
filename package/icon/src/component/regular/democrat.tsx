
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `democrat` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/democrat?s=regular democrat}
 * @preview ![democrat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzguNzEyIDIyMS4yNDdMNjE4Ljk1OCAxOTEuNzQ3QzU5My43MDQgMTUzLjg3MSA1NTIuNDQ4IDEzMC40OTYgNTA3LjMxNSAxMjcuOTk2SDI4OC4yNzlMMjE0LjY0MyA2Ni43NDZDMjI2LjAxOSA0Ny42MiAyMjYuMTQ0IDIzLjc0NSAyMTMuNzY3IDQuODdDMjEwLjM5MiAtMC4yNTUgMjAzLjAxNiAtMS4wMDUgMTk4LjY0IDMuMzdMMTU3LjYzMyA0NC4yNDVMMTE1Ljc1MSAyLjM3QzExMi4xMjYgLTEuMjU1IDEwNi4xMjUgLTAuNjMgMTAzLjM3NCAzLjYyQzkxLjk5OCAyMC43NDUgOTMuNDk4IDQzLjI0NSAxMDYuNSA1OS42MkwxMy40ODUgMTY4LjI0N0MtMS4yNjggMTg1LjM3MiAtNC4xNDMgMjA5LjYyMiA1Ljk4NCAyMjkuNzQ3TDE5LjYxMSAyNTcuMTIyQzI5LjIzNyAyNzYuMjQ4IDQ4LjQ5IDI4Ny45OTggNjkuNzQ0IDI4Ny45OThIMTAwLjc0OUMxMTUuNjI2IDI4Ny45OTggMTMwLjAwNCAyODEuOTk4IDEzOS4wMDUgMjcyLjg3M0wxNDkuMjU3IDI2NC4yNDhMMTc1LjYzNiAzMzIuNDk4VjQ3MkMxNzUuNjM2IDQ5NC4xMjUgMTkzLjYzOSA1MTIgMjE1LjY0MyA1MTJIMjg3LjY1NEMzMDkuNzgzIDUxMiAzMjcuNjYxIDQ5NC4xMjUgMzI3LjY2MSA0NzJWNDMxLjk5OUg0MjMuODAyVjQ3MkM0MjMuODAyIDQ5NC4xMjUgNDQxLjgwNSA1MTIgNDYzLjgwOCA1MTJINTM1Ljk0NUM1NTguMDczIDUxMiA1NzUuOTUxIDQ5NC4xMjUgNTc1Ljk1MSA0NzJWMjE0Ljc4NkM1NzYuOTI0IDIxNi4wMTMgNTc4LjE1MSAyMTYuOTgxIDU3OS4wNzcgMjE4LjM3Mkw1OTguNzA1IDI0Ny43NDdDNTk5LjgzIDI0OS42MjIgNjAxLjcwNiAyNTAuNzQ3IDYwMy43MDYgMjUxLjI0N0M2MDUuOTU2IDI1MS43NDcgNjA3Ljk1NyAyNTEuMjQ3IDYwOS43MDcgMjQ5Ljk5N0w2MzYuNDYxIDIzMi4yNDdDNjQwLjA4NyAyMjkuNzQ3IDY0MS4wODcgMjI0Ljc0NyA2MzguNzEyIDIyMS4yNDdaTTUyNy44MTggNDY0SDQ3MS42ODRWMzk5Ljk5OUM0NzEuNjg0IDM5MS4yNDkgNDY0LjU1OCAzODMuOTk5IDQ1NS42ODIgMzgzLjk5OUgyOTUuNjU2QzI4Ni43NzkgMzgzLjk5OSAyNzkuNjUzIDM5MS4yNDkgMjc5LjY1MyAzOTkuOTk5VjQ2NEgyMjMuNTE5VjM1MS45OThINTI3LjgxOFY0NjRaTTUyNy44MTggMzAzLjk5OEgyMTQuNjQzTDE3Ny42MzYgMjA1LjI0N0MxNzMuNzYxIDE5NC43NDcgMTYwLjc1OSAxOTEuMzcyIDE1Mi4yNTcgMTk4LjYyMkwxMDYuMjUgMjM3Ljc0N0MxMDQuNzUgMjM5LjI0NyAxMDIuNjI0IDIzOS45OTcgMTAwLjYyNCAyMzkuOTk3SDY5LjYxOUM2Ni40OTMgMjM5Ljk5NyA2My43NDMgMjM4LjI0NyA2Mi4zNjggMjM1LjYyMkw0OC42MTUgMjA4LjI0N0M0Ny4yNCAyMDUuMzcyIDQ3LjYxNSAyMDEuOTk3IDQ5Ljc0MSAxOTkuNDk3TDEzOC41MDUgOTUuOTk2SDE3NC43NjFMMjcwLjkwMiAxNzUuOTk3SDQ4Ny44MTJDNTA5Ljk0MSAxNzUuOTk3IDUyNy44MTggMTkzLjg3MiA1MjcuODE4IDIxNS45OTdWMzAzLjk5OFpNMjgzLjY1NCAyMjYuNzQ3TDI3NS40MDIgMjEwLjI0N0MyNzMuOTAyIDIwNy4yNDcgMjY5LjY1MSAyMDcuMjQ3IDI2OC4xNTEgMjEwLjI0N0wyNjAuMDI1IDIyNi43NDdMMjQxLjY0NyAyMjkuNDk3QzIzOC4zOTYgMjI5Ljk5NyAyMzcuMTQ2IDIzMy45OTcgMjM5LjUyMiAyMzYuMjQ3TDI1Mi42NDkgMjQ5LjI0N0wyNDkuNjQ4IDI2Ny4zNzNDMjQ5LjAyMyAyNzAuNzQ4IDI1Mi41MjQgMjczLjI0OCAyNTUuMzk5IDI3MS42MjNMMjcxLjY1MiAyNjIuOTk3TDI4OC4wMjkgMjcxLjYyM0MyOTAuOTA1IDI3My4xMjMgMjk0LjQwNSAyNzAuNzQ4IDI5My43OCAyNjcuMzczTDI5MC42NTUgMjQ5LjI0N0wzMDMuOTA3IDIzNi4yNDdDMzA2LjI4MiAyMzMuOTk3IDMwNS4wMzIgMjI5Ljk5NyAzMDEuNjU3IDIyOS40OTdMMjgzLjY1NCAyMjYuNzQ3Wk0zNzkuNDE5IDIyNi43NDdMMzcxLjE2OCAyMTAuMjQ3QzM2OS42NjggMjA3LjI0NyAzNjUuNTQyIDIwNy4yNDcgMzY0LjA0MiAyMTAuMjQ3TDM1NS43OSAyMjYuNzQ3TDMzNy41MzggMjI5LjQ5N0MzMzQuMTYyIDIyOS45OTcgMzMyLjkxMiAyMzMuOTk3IDMzNS4yODcgMjM2LjI0N0wzNDguNTM5IDI0OS4yNDdMMzQ1LjQxNCAyNjcuMzczQzM0NC43ODkgMjcwLjc0OCAzNDguMjg5IDI3My4yNDggMzUxLjE2NSAyNzEuNjIzTDM2Ny41NDIgMjYyLjk5N0wzODMuNzk1IDI3MS42MjNDMzg2LjY3MSAyNzMuMTIzIDM5MC4xNzEgMjcwLjc0OCAzODkuNjcxIDI2Ny4zNzNMMzg2LjU0NiAyNDkuMjQ3TDM5OS42NzMgMjM2LjI0N0M0MDIuMTczIDIzMy45OTcgNDAwLjc5OCAyMjkuOTk3IDM5Ny41NDcgMjI5LjQ5N0wzNzkuNDE5IDIyNi43NDdaTTQ3NS42ODUgMjI2Ljc0N0w0NjcuNDM0IDIxMC4yNDdDNDY1LjkzMyAyMDcuMjQ3IDQ2MS42ODMgMjA3LjI0NyA0NjAuMTgyIDIxMC4yNDdMNDUyLjA1NiAyMjYuNzQ3TDQzMy42NzggMjI5LjQ5N0M0MzAuNDI4IDIyOS45OTcgNDI5LjE3NyAyMzMuOTk3IDQzMS41NTMgMjM2LjI0N0w0NDQuNjggMjQ5LjI0N0w0NDEuNjc5IDI2Ny4zNzNDNDQxLjA1NCAyNzAuNzQ4IDQ0NC41NTUgMjczLjI0OCA0NDcuNDMgMjcxLjYyM0w0NjMuNjgzIDI2Mi45OThMNDgwLjA2MSAyNzEuNjIzQzQ4Mi45MzYgMjczLjEyMyA0ODYuNDM3IDI3MC43NDggNDg1LjgxMiAyNjcuMzczTDQ4Mi42ODYgMjQ5LjI0N0w0OTUuOTM4IDIzNi4yNDdDNDk4LjMxNCAyMzMuOTk3IDQ5Ny4wNjQgMjI5Ljk5NyA0OTMuNjg4IDIyOS40OTdMNDc1LjY4NSAyMjYuNzQ3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Democrat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M638.712 221.247L618.958 191.747C593.704 153.871 552.448 130.496 507.315 127.996H288.279L214.643 66.746C226.019 47.62 226.144 23.745 213.767 4.87C210.392 -0.255 203.016 -1.005 198.64 3.37L157.633 44.245L115.751 2.37C112.126 -1.255 106.125 -0.63 103.374 3.62C91.998 20.745 93.498 43.245 106.5 59.62L13.485 168.247C-1.268 185.372 -4.143 209.622 5.984 229.747L19.611 257.122C29.237 276.248 48.49 287.998 69.744 287.998H100.749C115.626 287.998 130.004 281.998 139.005 272.873L149.257 264.248L175.636 332.498V472C175.636 494.125 193.639 512 215.643 512H287.654C309.783 512 327.661 494.125 327.661 472V431.999H423.802V472C423.802 494.125 441.805 512 463.808 512H535.945C558.073 512 575.951 494.125 575.951 472V214.786C576.924 216.013 578.151 216.981 579.077 218.372L598.705 247.747C599.83 249.622 601.706 250.747 603.706 251.247C605.956 251.747 607.957 251.247 609.707 249.997L636.461 232.247C640.087 229.747 641.087 224.747 638.712 221.247ZM527.818 464H471.684V399.999C471.684 391.249 464.558 383.999 455.682 383.999H295.656C286.779 383.999 279.653 391.249 279.653 399.999V464H223.519V351.998H527.818V464ZM527.818 303.998H214.643L177.636 205.247C173.761 194.747 160.759 191.372 152.257 198.622L106.25 237.747C104.75 239.247 102.624 239.997 100.624 239.997H69.619C66.493 239.997 63.743 238.247 62.368 235.622L48.615 208.247C47.24 205.372 47.615 201.997 49.741 199.497L138.505 95.996H174.761L270.902 175.997H487.812C509.941 175.997 527.818 193.872 527.818 215.997V303.998ZM283.654 226.747L275.402 210.247C273.902 207.247 269.651 207.247 268.151 210.247L260.025 226.747L241.647 229.497C238.396 229.997 237.146 233.997 239.522 236.247L252.649 249.247L249.648 267.373C249.023 270.748 252.524 273.248 255.399 271.623L271.652 262.997L288.029 271.623C290.905 273.123 294.405 270.748 293.78 267.373L290.655 249.247L303.907 236.247C306.282 233.997 305.032 229.997 301.657 229.497L283.654 226.747ZM379.419 226.747L371.168 210.247C369.668 207.247 365.542 207.247 364.042 210.247L355.79 226.747L337.538 229.497C334.162 229.997 332.912 233.997 335.287 236.247L348.539 249.247L345.414 267.373C344.789 270.748 348.289 273.248 351.165 271.623L367.542 262.997L383.795 271.623C386.671 273.123 390.171 270.748 389.671 267.373L386.546 249.247L399.673 236.247C402.173 233.997 400.798 229.997 397.547 229.497L379.419 226.747ZM475.685 226.747L467.434 210.247C465.933 207.247 461.683 207.247 460.182 210.247L452.056 226.747L433.678 229.497C430.428 229.997 429.177 233.997 431.553 236.247L444.68 249.247L441.679 267.373C441.054 270.748 444.555 273.248 447.43 271.623L463.683 262.998L480.061 271.623C482.936 273.123 486.437 270.748 485.812 267.373L482.686 249.247L495.938 236.247C498.314 233.997 497.064 229.997 493.688 229.497L475.685 226.747Z" />
        </Icon>
    </>
}