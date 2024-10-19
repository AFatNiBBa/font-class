
import { Icon, generic } from "../../index";

/**
 * A component that renders the `horse` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/horse?s=duotone horse}
 * @preview ![horse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3NS45MzkgNzYuNTk4QzU3NS45NTcgNjguNSA1NzIuODgxIDYwLjcwMyA1NjcuMzQgNTQuNzk3QzU2My41NjEgNTAuNzk3IDU1OC43NiA0NS42OCA1NTMuNjUgNDAuMjk3QzU2NC43MDkgMzMuNDYxIDU3My4xNSAyMi44MDkgNTc1LjgzIDkuNjQxQzU3Ni42ODYgNS4yNTQgNTczLjgyNCAxLjAwNCA1NjkuNDM5IDAuMTQ4QzU2OC45MzIgMC4wNDcgNTY4LjQxNiAwIDU2Ny45IDBINDQ3LjlDMzgwLjg4NSAwIDMyMy41ODQgNjAgMzIwIDEyMS44OTFWMTI4SDE2MEMxMDYuOTggMTI4IDY0IDE3MC45OCA2NCAyMjRDNjQgMjUxLjk3NyA3Ni4xNjYgMjc2LjkzIDk1LjI2MiAyOTQuNDc3TDY4LjgyIDM2Mi40NzdDNjQuMjYgMzc0LjYzMyA2My41MDYgMzg3Ljg4NyA2Ni42NiA0MDAuNDc3TDg4LjQzOCA0ODcuNzdDOTIuMDAyIDUwMi4wMTIgMTA0Ljc5OSA1MTIgMTE5LjQ4IDUxMkgxNTIuNDYzQzE3My4yNzMgNTEyIDE4OC41NDkgNDkyLjQ0OSAxODMuNTEyIDQ3Mi4yNTZMMTYyLjE4OSAzODYuODU5TDE4NiAzMjMuMjY2TDMyMCAzNDUuNTc4TDMxOS45NjcgNDgwQzMxOS45NjcgNDk3LjY3NCAzMzQuMjk1IDUxMiAzNTEuOTY3IDUxMkgzODMuOTY3QzQwMS42NDEgNTEyIDQxNS45NjcgNDk3LjY3NCA0MTUuOTY3IDQ4MEw0MTYgMzE4LjIxOUM0MzYuNTEyIDI5Ny4zNTIgNDQ4LjAwNiAyNjkuMjU4IDQ0OCAyNDBDNDQ4IDIzOS43ODEgNDQ3LjkzIDIzOS41NzggNDQ3LjkyIDIzOS4zNTlWMTM2Ljg5MUw0NjMuOTIgMTQ0TDQ4Mi44MiAxODEuNjk5QzQ5MC4yNzEgMTk2LjU2MiA1MDcuODY5IDIwMy4yNDIgNTIzLjMxMSAxOTcuMDdMNTU1Ljg1OSAxODQuMDdDNTY4LjAzNSAxNzkuMjExIDU3Ni4wMTYgMTY3LjQxOCA1NzYgMTU0LjMwOUw1NzUuOTM5IDc2LjU5OFpNNTExLjkyIDk2QzUwMy4wODQgOTYgNDk1LjkyIDg4LjgzNiA0OTUuOTIgODBTNTAzLjA4NCA2NCA1MTEuOTIgNjRTNTI3LjkyIDcxLjE2NCA1MjcuOTIgODBTNTIwLjc1NiA5NiA1MTEuOTIgOTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTAgMjQ4VjMwNEMwIDMxMi44MzYgNy4xNjQgMzIwIDE2IDMyMEgzMkM0MC44MzYgMzIwIDQ4IDMxMi44MzYgNDggMzA0VjI0OEM0OCAyMzQuNzU4IDU0Ljg1OSAyMjMuNTgyIDY0Ljc3NSAyMTYuMzA1QzY2LjUyIDE5NC42OTEgNzUuMjI3IDE3NS4xOTUgODguOTE0IDE2MEg4OEMzOS4zOTggMTYwIDAgMTk5LjM5OCAwIDI0OFpNNTExLjkyIDY0QzUwMy4wODQgNjQgNDk1LjkyIDcxLjE2NCA0OTUuOTIgODBTNTAzLjA4NCA5NiA1MTEuOTIgOTZTNTI3LjkyIDg4LjgzNiA1MjcuOTIgODBTNTIwLjc1NiA2NCA1MTEuOTIgNjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const Horse: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M575.939 76.598C575.957 68.5 572.881 60.703 567.34 54.797C563.561 50.797 558.76 45.68 553.65 40.297C564.709 33.461 573.15 22.809 575.83 9.641C576.686 5.254 573.824 1.004 569.439 0.148C568.932 0.047 568.416 0 567.9 0H447.9C380.885 0 323.584 60 320 121.891V128H160C106.98 128 64 170.98 64 224C64 251.977 76.166 276.93 95.262 294.477L68.82 362.477C64.26 374.633 63.506 387.887 66.66 400.477L88.438 487.77C92.002 502.012 104.799 512 119.48 512H152.463C173.273 512 188.549 492.449 183.512 472.256L162.189 386.859L186 323.266L320 345.578L319.967 480C319.967 497.674 334.295 512 351.967 512H383.967C401.641 512 415.967 497.674 415.967 480L416 318.219C436.512 297.352 448.006 269.258 448 240C448 239.781 447.93 239.578 447.92 239.359V136.891L463.92 144L482.82 181.699C490.271 196.562 507.869 203.242 523.311 197.07L555.859 184.07C568.035 179.211 576.016 167.418 576 154.309L575.939 76.598ZM511.92 96C503.084 96 495.92 88.836 495.92 80S503.084 64 511.92 64S527.92 71.164 527.92 80S520.756 96 511.92 96Z" />
            <path d="M0 248V304C0 312.836 7.164 320 16 320H32C40.836 320 48 312.836 48 304V248C48 234.758 54.859 223.582 64.775 216.305C66.52 194.691 75.227 175.195 88.914 160H88C39.398 160 0 199.398 0 248ZM511.92 64C503.084 64 495.92 71.164 495.92 80S503.084 96 511.92 96S527.92 88.836 527.92 80S520.756 64 511.92 64Z" />
    </Icon>
);

export default Horse;