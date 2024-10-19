
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `horse-saddle` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/horse-saddle?s=duotone horse-saddle}
 * @preview ![horse-saddle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3NS45MzggNzYuNjVDNTc1Ljk1NyA2OC41NDcgNTcyLjg4MyA2MC43NDQgNTY3LjM0IDU0LjgzNEM1NjMuNTYyIDUwLjgzMSA1NTguNzU4IDQ1LjcxMSA1NTMuNjQ4IDQwLjMyNEM1NjQuNzExIDMzLjQ4NCA1NzMuMTQ4IDIyLjgyNCA1NzUuODI4IDkuNjQ3QzU3Ni42ODggNS4yNTcgNTczLjgyNCAxLjAwNSA1NjkuNDM4IDAuMTQ5QzU2OC45MyAwLjA0NyA1NjguNDE0IDAgNTY3Ljg5OCAwSDQ0Ny44OThDMzgwLjg4MyAwIDMyMy41ODYgNjAuMDQxIDMyMCAxMjEuOTczVjE1OS43NjFDMzIwIDIwNy4zMzIgMjg1LjM2MyAyNDYuNTU0IDI0MCAyNTQuMjEyVjMzMi40ODRMMzIwIDM0NS44MTNMMzE5Ljk2NyA0NzkuOTc4QzMxOS45NjcgNDk3LjY2NCAzMzQuMjk1IDUxMiAzNTEuOTY3IDUxMkgzODMuOTY3QzQwMS42NDEgNTEyIDQxNS45NjcgNDk3LjY2NCA0MTUuOTY3IDQ3OS45NzhMNDE2IDMxOC40MzVDNDM2LjUxMiAyOTcuNTU0IDQ0OC4wMDggMjY5LjQ0MSA0NDggMjQwLjE2M0M0NDggMjM5Ljk0NCA0NDcuOTMgMjM5Ljc0MSA0NDcuOTIyIDIzOS41MjJWMTM2Ljk4NEw0NjMuOTIyIDE0NC4wOThMNDgyLjgyIDE4MS44MjNDNDkwLjI3MyAxOTYuNjk2IDUwNy44NjcgMjAzLjM4IDUyMy4zMTMgMTk3LjIwNEw1NTUuODU5IDE4NC4xOTVDNTY4LjAzNSAxNzkuMzMzIDU3Ni4wMTYgMTY3LjUzMiA1NzYgMTU0LjQxM0w1NzUuOTM4IDc2LjY1Wk01MTEuOTIyIDk2LjA2NUM1MDMuMDg2IDk2LjA2NSA0OTUuOTIyIDg4Ljg5NiA0OTUuOTIyIDgwLjA1NFM1MDMuMDg2IDY0LjA0MyA1MTEuOTIyIDY0LjA0M1M1MjcuOTIyIDcxLjIxMiA1MjcuOTIyIDgwLjA1NFM1MjAuNzU4IDk2LjA2NSA1MTEuOTIyIDk2LjA2NVpNMTI4IDE1OS43NjFWMTMzLjk3QzkwLjc5NyAxNDcuMjA1IDY0IDE4Mi4zODYgNjQgMjI0LjE1MkM2NCAyNTIuMTQ4IDc2LjE2NCAyNzcuMTE4IDk1LjI2MiAyOTQuNjc3TDY4LjgyIDM2Mi43MjNDNjQuMjU4IDM3NC44ODcgNjMuNTA4IDM4OC4xNSA2Ni42NiA0MDAuNzQ5TDg4LjQzOCA0ODcuNzUzQzkyLjAwMiA1MDIuMDA1IDEwNC43OTkgNTEyIDExOS40OCA1MTJIMTUyLjQ2M0MxNzMuMjczIDUxMiAxODguNTQ5IDQ5Mi40MzYgMTgzLjUxMiA0NzIuMjI5TDE2Mi4xODggMzg3LjEyMkwxODYgMzIzLjQ4NUwyMDggMzI3LjE1MlYyNTQuMjEyQzE2Mi42MzcgMjQ2LjU1NCAxMjggMjA3LjMzMiAxMjggMTU5Ljc2MVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMCAyNDguMTY5VjMwNC4yMDdDMCAzMTMuMDQ4IDcuMTY0IDMyMC4yMTcgMTYgMzIwLjIxN0gzMkM0MC44MzYgMzIwLjIxNyA0OCAzMTMuMDQ4IDQ4IDMwNC4yMDdWMjQ4LjE2OUM0OCAyMzQuOTE3IDU0Ljg1OSAyMjMuNzM0IDY0Ljc3MyAyMTYuNDUyQzY2LjUyIDE5NC44MjQgNzUuMjI3IDE3NS4zMTQgODguOTE0IDE2MC4xMDlIODhDMzkuMzk4IDE2MC4xMDkgMCAxOTkuNTM0IDAgMjQ4LjE2OVpNMTI4IDEzMy45N1YxNTkuNzYxQzEyOCAyMDcuMzMyIDE2Mi42MzcgMjQ2LjU1NCAyMDggMjU0LjIxMlYzMjcuMTUyTDI0MCAzMzIuNDg0VjI1NC4yMTJDMjg1LjM2MyAyNDYuNTU0IDMyMCAyMDcuMzMyIDMyMCAxNTkuNzYxVjEyOC4wODdIMTYwQzE0OC43MTkgMTI4LjA4NyAxMzguMDU1IDEzMC4zOTMgMTI4IDEzMy45N1pNNTExLjkyMiA2NC4wNDNDNTAzLjA4NiA2NC4wNDMgNDk1LjkyMiA3MS4yMTIgNDk1LjkyMiA4MC4wNTRTNTAzLjA4NiA5Ni4wNjUgNTExLjkyMiA5Ni4wNjVTNTI3LjkyMiA4OC44OTYgNTI3LjkyMiA4MC4wNTRTNTIwLjc1OCA2NC4wNDMgNTExLjkyMiA2NC4wNDNaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HorseSaddle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M575.938 76.65C575.957 68.547 572.883 60.744 567.34 54.834C563.562 50.831 558.758 45.711 553.648 40.324C564.711 33.484 573.148 22.824 575.828 9.647C576.688 5.257 573.824 1.005 569.438 0.149C568.93 0.047 568.414 0 567.898 0H447.898C380.883 0 323.586 60.041 320 121.973V159.761C320 207.332 285.363 246.554 240 254.212V332.484L320 345.813L319.967 479.978C319.967 497.664 334.295 512 351.967 512H383.967C401.641 512 415.967 497.664 415.967 479.978L416 318.435C436.512 297.554 448.008 269.441 448 240.163C448 239.944 447.93 239.741 447.922 239.522V136.984L463.922 144.098L482.82 181.823C490.273 196.696 507.867 203.38 523.313 197.204L555.859 184.195C568.035 179.333 576.016 167.532 576 154.413L575.938 76.65ZM511.922 96.065C503.086 96.065 495.922 88.896 495.922 80.054S503.086 64.043 511.922 64.043S527.922 71.212 527.922 80.054S520.758 96.065 511.922 96.065ZM128 159.761V133.97C90.797 147.205 64 182.386 64 224.152C64 252.148 76.164 277.118 95.262 294.677L68.82 362.723C64.258 374.887 63.508 388.15 66.66 400.749L88.438 487.753C92.002 502.005 104.799 512 119.48 512H152.463C173.273 512 188.549 492.436 183.512 472.229L162.188 387.122L186 323.485L208 327.152V254.212C162.637 246.554 128 207.332 128 159.761Z" />
            <path d="M0 248.169V304.207C0 313.048 7.164 320.217 16 320.217H32C40.836 320.217 48 313.048 48 304.207V248.169C48 234.917 54.859 223.734 64.773 216.452C66.52 194.824 75.227 175.314 88.914 160.109H88C39.398 160.109 0 199.534 0 248.169ZM128 133.97V159.761C128 207.332 162.637 246.554 208 254.212V327.152L240 332.484V254.212C285.363 246.554 320 207.332 320 159.761V128.087H160C148.719 128.087 138.055 130.393 128 133.97ZM511.922 64.043C503.086 64.043 495.922 71.212 495.922 80.054S503.086 96.065 511.922 96.065S527.922 88.896 527.922 80.054S520.758 64.043 511.922 64.043Z" />
        </Icon>
    </>
}