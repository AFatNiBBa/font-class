
import { Icon, generic } from "../../index";

/**
 * A component that renders the `otter` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/otter?s=duotone otter}
 * @preview ![otter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYzOC4wMTYgMTEyQzYzMC4zNjMgMTU3LjM2MyA1OTEuMTY1IDE5MiA1NDMuNjI4IDE5Mkg1MjAuNzUyTDQyOC4yNTEgMjQxLjc1TDM5MyAxNzEuMjVMNTExLjYyNyAxMTJINjM4LjAxNloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjA3Ljk5OSAzMkg1NzUuOTk5TDU2Mi43MzcgMTguNzM4QzU1MC43MzkgNi43NCA1MzQuNDY1IDAgNTE3LjQ5OCAwSDQ5Ni45OThDNDg1Ljc4OCAwIDQ3NC43NzcgMi45MjYgNDY1LjA0NiA4LjQ4OEwzMTEuOTk1IDk2SDI1NS45OTRDMTQ5Ljk1MyA5NiA2My45ODggMTgxLjk2MSA2My45ODggMjg4VjI4OS42MjVDNjMuOTg4IDMyMi4zMTQgNDguMTMzIDM1MS43NCAyNC41ODMgMzc0LjQxQzYuMjkyIDM5Mi4wMTggLTMuNjI0IDQxOC4wMjMgMS4yMjQgNDQ2LjE2MkM3LjkxNyA0ODUuMDE2IDQ0LjA2MiA1MTIgODMuNDkxIDUxMkgxOTEuOTkzQzIwOS42MTggNTEyIDIyMy45OTMgNDk3LjYyNSAyMjMuOTkzIDQ4MFMyMDkuNjE4IDQ0OCAxOTEuOTkzIDQ0OEg3OS45OTFDNzEuMTE2IDQ0OCA2My45OSA0NDAuODc1IDYzLjk5IDQzMlM3MS4xMTYgNDE2IDc5Ljk5MSA0MTZIMzAzLjk5NEMzMTIuODcgNDE2IDMxOS45OTUgNDA4Ljg3NSAzMTkuOTk1IDQwMEMzMTkuOTk1IDM3My42IDI5OC4zOTMgMzUyIDI3MS45OTQgMzUySDIyMy45OTNMMzczLjQ5NiAyNzEuNUw0NDcuOTk3IDQxNkg1MjcuOTk4QzUzNi44NzMgNDE2IDU0My45OTggNDA4Ljg3NSA1NDMuOTk4IDQwMEM1NDMuOTk4IDM3My42IDUyMi4zOTYgMzUyIDQ5NS45OTggMzUySDQ4My43NDdMMzkzLjM3MSAxNzEuMjVMNTExLjk5OCAxMTJINjM4LjM4N0M2MzkuMjcgMTA2Ljc3IDY0MCAxMDEuNDggNjQwIDk2VjY0QzY0MCA0Ni40IDYyNS41OTkgMzIgNjA3Ljk5OSAzMlpNNTExLjk5OCA4MEM1MDMuMTIzIDgwIDQ5NS45OTggNzIuODc1IDQ5NS45OTggNjRTNTAzLjEyMyA0OCA1MTEuOTk4IDQ4QzUyMC44NzMgNDggNTI3Ljk5OCA1NS4xMjUgNTI3Ljk5OCA2NFM1MjAuODczIDgwIDUxMS45OTggODBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const Otter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M638.016 112C630.363 157.363 591.165 192 543.628 192H520.752L428.251 241.75L393 171.25L511.627 112H638.016Z" />
            <path d="M607.999 32H575.999L562.737 18.738C550.739 6.74 534.465 0 517.498 0H496.998C485.788 0 474.777 2.926 465.046 8.488L311.995 96H255.994C149.953 96 63.988 181.961 63.988 288V289.625C63.988 322.314 48.133 351.74 24.583 374.41C6.292 392.018 -3.624 418.023 1.224 446.162C7.917 485.016 44.062 512 83.491 512H191.993C209.618 512 223.993 497.625 223.993 480S209.618 448 191.993 448H79.991C71.116 448 63.99 440.875 63.99 432S71.116 416 79.991 416H303.994C312.87 416 319.995 408.875 319.995 400C319.995 373.6 298.393 352 271.994 352H223.993L373.496 271.5L447.997 416H527.998C536.873 416 543.998 408.875 543.998 400C543.998 373.6 522.396 352 495.998 352H483.747L393.371 171.25L511.998 112H638.387C639.27 106.77 640 101.48 640 96V64C640 46.4 625.599 32 607.999 32ZM511.998 80C503.123 80 495.998 72.875 495.998 64S503.123 48 511.998 48C520.873 48 527.998 55.125 527.998 64S520.873 80 511.998 80Z" />
    </Icon>
);

export default Otter;