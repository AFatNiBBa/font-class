
import { Icon, generic } from "../../index";

/**
 * A component that renders the `memo-circle-check` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/memo-circle-check?s=duotone memo-circle-check}
 * @preview ![memo-circle-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAxOTguODIyVjY0QzM4NCAyOC42NTIgMzU1LjM0NiAwIDMyMCAwSDY0QzI4LjY1NCAwIDAgMjguNjUyIDAgNjRWNDQ4QzAgNDgzLjM0NiAyOC42NTQgNTEyIDY0IDUxMkgzMjBDMzIzLjM1NyA1MTIgMzI2LjU4NCA1MTEuNTEgMzI5LjgwMyA1MTEuMDEyQzI4NS4yMDkgNDc5LjA1MSAyNTYgNDI2LjkyNiAyNTYgMzY4QzI1NiAyODcuNjA5IDMxMC4yNCAyMTkuNzg3IDM4NCAxOTguODIyWk0xNzYgMzUySDgwQzcxLjE2NCAzNTIgNjQgMzQ0LjgzNiA2NCAzMzZTNzEuMTY0IDMyMCA4MCAzMjBIMTc2QzE4NC44MzggMzIwIDE5MiAzMjcuMTY0IDE5MiAzMzZTMTg0LjgzOCAzNTIgMTc2IDM1MlpNMjQwIDI1Nkg4MEM3MS4xNjQgMjU2IDY0IDI0OC44MzYgNjQgMjQwUzcxLjE2NCAyMjQgODAgMjI0SDI0MEMyNDguODM4IDIyNCAyNTYgMjMxLjE2NCAyNTYgMjQwUzI0OC44MzggMjU2IDI0MCAyNTZaTTgwIDE2MEM3MS4xNjQgMTYwIDY0IDE1Mi44MzYgNjQgMTQ0UzcxLjE2NCAxMjggODAgMTI4SDMwNEMzMTIuODM4IDEyOCAzMjAgMTM1LjE2NCAzMjAgMTQ0UzMxMi44MzggMTYwIDMwNCAxNjBIODBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTgwIDE2MEgzMDRDMzEyLjgzOCAxNjAgMzIwIDE1Mi44MzYgMzIwIDE0NFMzMTIuODM4IDEyOCAzMDQgMTI4SDgwQzcxLjE2NCAxMjggNjQgMTM1LjE2NCA2NCAxNDRTNzEuMTY0IDE2MCA4MCAxNjBaTTE3NiAzMjBIODBDNzEuMTY0IDMyMCA2NCAzMjcuMTY0IDY0IDMzNlM3MS4xNjQgMzUyIDgwIDM1MkgxNzZDMTg0LjgzOCAzNTIgMTkyIDM0NC44MzYgMTkyIDMzNlMxODQuODM4IDMyMCAxNzYgMzIwWk0yNDAgMjI0SDgwQzcxLjE2NCAyMjQgNjQgMjMxLjE2NCA2NCAyNDBTNzEuMTY0IDI1NiA4MCAyNTZIMjQwQzI0OC44MzggMjU2IDI1NiAyNDguODM2IDI1NiAyNDBTMjQ4LjgzOCAyMjQgMjQwIDIyNFpNNDMyLjAwMiAyMjRDMzUyLjQ2MyAyMjQgMjg4IDI4OC40NjMgMjg4IDM2OFMzNTIuNDYzIDUxMiA0MzIuMDAyIDUxMkM1MTEuNTM3IDUxMiA1NzYgNDQ3LjUzNyA1NzYgMzY4UzUxMS41MzcgMjI0IDQzMi4wMDIgMjI0Wk00OTkuMzEyIDM0MS45ODRMNDI0LjY1NiA0MTYuNjQxQzQyMS41MzEgNDE5Ljc2NiA0MTcuNDM4IDQyMS4zMjggNDEzLjM0NCA0MjEuMzI4UzQwNS4xNTYgNDE5Ljc2NiA0MDIuMDMxIDQxNi42NDFMMzY0LjY4OCAzNzkuMzEyQzM1OC40MzggMzczLjA2MiAzNTguNDM4IDM2Mi45MzcgMzY0LjY4OCAzNTYuNjg4UzM4MS4wNjMgMzUwLjQzOCAzODcuMzEyIDM1Ni42ODhMNDEzLjM0NCAzODIuNzAzTDQ3Ni42ODggMzE5LjM1OUM0ODIuOTM4IDMxMy4xMDkgNDkzLjA2MyAzMTMuMTA5IDQ5OS4zMTIgMzE5LjM1OVM1MDUuNTYyIDMzNS43MzQgNDk5LjMxMiAzNDEuOTg0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const MemoCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M384 198.822V64C384 28.652 355.346 0 320 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H320C323.357 512 326.584 511.51 329.803 511.012C285.209 479.051 256 426.926 256 368C256 287.609 310.24 219.787 384 198.822ZM176 352H80C71.164 352 64 344.836 64 336S71.164 320 80 320H176C184.838 320 192 327.164 192 336S184.838 352 176 352ZM240 256H80C71.164 256 64 248.836 64 240S71.164 224 80 224H240C248.838 224 256 231.164 256 240S248.838 256 240 256ZM80 160C71.164 160 64 152.836 64 144S71.164 128 80 128H304C312.838 128 320 135.164 320 144S312.838 160 304 160H80Z" />
            <path d="M80 160H304C312.838 160 320 152.836 320 144S312.838 128 304 128H80C71.164 128 64 135.164 64 144S71.164 160 80 160ZM176 320H80C71.164 320 64 327.164 64 336S71.164 352 80 352H176C184.838 352 192 344.836 192 336S184.838 320 176 320ZM240 224H80C71.164 224 64 231.164 64 240S71.164 256 80 256H240C248.838 256 256 248.836 256 240S248.838 224 240 224ZM432.002 224C352.463 224 288 288.463 288 368S352.463 512 432.002 512C511.537 512 576 447.537 576 368S511.537 224 432.002 224ZM499.312 341.984L424.656 416.641C421.531 419.766 417.438 421.328 413.344 421.328S405.156 419.766 402.031 416.641L364.688 379.312C358.438 373.062 358.438 362.937 364.688 356.688S381.063 350.438 387.312 356.688L413.344 382.703L476.688 319.359C482.938 313.109 493.063 313.109 499.312 319.359S505.562 335.734 499.312 341.984Z" />
    </Icon>
);

export default MemoCircleCheck;