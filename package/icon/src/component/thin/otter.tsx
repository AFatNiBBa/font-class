
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `otter` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/otter?s=thin otter}
 * @preview ![otter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDggMzJINTc1Ljk5OEw1NjIuNzM2IDE4LjczOEM1NTAuNzM4IDYuNzQgNTM0LjQ2NSAwIDUxNy40OTggMEg0OTYuOTk2QzQ4NS43ODcgMCA0NzQuNzczIDIuOTI4IDQ2NS4wNDMgOC40OUwzMTEuOTk2IDk2SDI1NS45NzVDMTQ5LjkzOCA5NiA2My45OCAxODEuOTY1IDYzLjk5IDI4OEw2My45OTIgMzI2LjM3NUM2My45OCAzMzYuMjE5IDYwLjkyOCAzNDUuNjIzIDU1LjE0MSAzNTMuNTc4TDExLjkyMiA0MTMuMDE2QzQuMTI1IDQyMy43MzQgMCA0MzYuNDA2IDAgNDQ5LjY3MkMwIDQ4NC4wNDcgMjcuOTUzIDUxMiA2Mi4zMjggNTEySDIxNkMyMjAuNDIyIDUxMiAyMjQgNTA4LjQyMiAyMjQgNTA0UzIyMC40MjIgNDk2IDIxNiA0OTZINjIuMzI4QzM2Ljc4MSA0OTYgMTYgNDc1LjIxOSAxNiA0NDkuNjcyQzE2IDQzOS44MTIgMTkuMDYyIDQzMC4zOTEgMjQuODU5IDQyMi40MjJMNjUuNzExIDM2Ni4yNEM3Mi4yMDUgMzk0LjcwNyA5Ny41NjEgNDE2IDEyNy45OTQgNDE2SDMwMy45OTZDMzEyLjg3MSA0MTYgMzE5Ljk5NiA0MDguODc1IDMxOS45OTYgNDAwQzMxOS45OTYgMzczLjYgMjk4LjM5NSAzNTIgMjcxLjk5NiAzNTJIMjI0VjM1MS45OTZMMzczLjQ5NiAyNzEuNUw0MzkuMDYxIDM5OC42NjRDNDQ0LjU0OSA0MDkuMzExIDQ1NS41MjMgNDE2IDQ2Ny41MDIgNDE2SDUyNy45OThDNTM2Ljg3MyA0MTYgNTQzLjk5OCA0MDguODc1IDU0My45OTggNDAwQzU0My45OTggMzczLjYgNTIyLjM5NiAzNTIgNDk1Ljk5NiAzNTJINDgzLjc0Nkw0MjguNjIzIDI0MS43NUw1MjEuMTIzIDE5Mkg1NDRDNTk3LjAyIDE5MiA2NDAgMTQ5LjAyIDY0MCA5NlY2NEM2NDAgNDYuNCA2MjUuNiAzMiA2MDggMzJaTTU0NCAxNzZINTIxLjEyM0M1MTguNDc3IDE3NiA1MTUuODczIDE3Ni42NTYgNTEzLjU0MyAxNzcuOTA4TDQyMi4zMTQgMjI2Ljk3N0M0MTUuNjAyIDIxNC41OTIgNDE0LjE1IDIwMC40NTUgNDE4LjQyMiAxODYuOTg0QzQyMi44MjggMTczLjEyNSA0MzIuNSAxNjIuMTI1IDQ0NS42NTYgMTU1Ljk4NEw0OTQuNDM2IDEzMy4yNUM1MDEuNzc5IDEyOS44MTIgNTA5Ljk2NyAxMjggNTE4LjA5MiAxMjhINjE3LjIxOUM2MDQuODQgMTU2LjIwMyA1NzYuNzIzIDE3NiA1NDQgMTc2Wk02MjQgOTZDNjI0IDEwMS40NzkgNjIzLjQzNiAxMDYuODI4IDYyMi4zODEgMTEySDUxOC4wOTJDNTA3LjYzOSAxMTIgNDk3LjEyMyAxMTQuMzI4IDQ4Ny42NyAxMTguNzVMNDM4LjkwNiAxNDEuNDg0QzQyMS44OTEgMTQ5LjQyMiA0MDguODU5IDE2NC4yMzQgNDAzLjE3MiAxODIuMTQxUzM5OS41NzggMjE5LjY3MiA0MDguOTA2IDIzNS45NjlMNDY5LjQzOCAzNTkuMTU2QzQ3Mi4xNDggMzY0LjU3NiA0NzcuNjg4IDM2OCA0ODMuNzQ2IDM2OEg0OTUuOTk2QzUxMy42NDMgMzY4IDUyNy45OTggMzgyLjM1NSA1MjcuOTk4IDQwMEg0NjcuNTAyQzQ2MS40ODYgNDAwIDQ1Ni4wMzcgMzk2LjY4IDQ1My4yODEgMzkxLjMzMkwzODcuNzE5IDI2NC4xNjhDMzg1Ljc1IDI2MC4zNTIgMzgyLjMzMiAyNTcuNDg2IDM3OC4yMzIgMjU2LjIxN0MzNzYuNjg0IDI1NS43MzYgMzc1LjA4OCAyNTUuNSAzNzMuNDk4IDI1NS41QzM3MC44NzMgMjU1LjUgMzY4LjI2NCAyNTYuMTQ1IDM2NS45MTIgMjU3LjQxMkwyMjQgMzMzLjgyNFYyOTZDMjI0IDI5MS41ODIgMjIwLjQxOCAyODggMjE2IDI4OFMyMDggMjkxLjU4MiAyMDggMjk2VjM1MkgyMDguMTY4QzIwOC4xNjggMzUzLjMwMSAyMDguMTUgMzU0LjYwNSAyMDguNDggMzU1LjkxMkMyMTAuMjcxIDM2My4wMiAyMTYuNjY0IDM2OCAyMjMuOTk0IDM2OEgyNzEuOTk2QzI4OS42NDEgMzY4IDMwMy45OTYgMzgyLjM1NSAzMDMuOTk2IDQwMEgxMjcuOTk0QzEwMS41MjkgNDAwIDc5Ljk5OCAzNzguNDY5IDc5Ljk5NCAzNTIuMDA0TDc5Ljk5MiAzMjYuMzc1Qzc5Ljk5MiAzMjYuMzU5IDgwIDMyNi4zNDQgODAgMzI2LjMyOFYyODhDODAgMjg3Ljk5MiA3OS45OTIgMjg3Ljk4OCA3OS45OTIgMjg3Ljk4Qzc5Ljk5MiAyNDAuOTc3IDk4LjI5MyAxOTYuNzg5IDEzMS41MjkgMTYzLjU1MUMxNjQuNzcgMTMwLjMwNyAyMDguOTY1IDExMiAyNTUuOTc1IDExMkgzMTEuOTk2QzMxNC43ODEgMTEyIDMxNy41MiAxMTEuMjczIDMxOS45MzcgMTA5Ljg4OUw0NzIuOTgyIDIyLjM4MUM0ODAuMjgzIDE4LjIwNyA0ODguNTg4IDE2IDQ5Ni45OTYgMTZINTE3LjQ5OEM1MzAuMzEyIDE2IDU0Mi4zNjEgMjAuOTkgNTUxLjQyNCAzMC4wNTNMNTY0LjY4NiA0My4zMTRDNTY3LjY4NiA0Ni4zMTQgNTcxLjc1NiA0OCA1NzUuOTk4IDQ4SDYwOEM2MTYuODIyIDQ4IDYyNCA1NS4xNzggNjI0IDY0Vjk2Wk01MTEuOTk4IDQ4QzUwMy4xMjMgNDggNDk1Ljk5NiA1NS4xMjUgNDk1Ljk5NiA2NFM1MDMuMTIzIDgwIDUxMS45OTggODBTNTI3Ljk5OCA3Mi44NzUgNTI3Ljk5OCA2NFM1MjAuODczIDQ4IDUxMS45OTggNDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Otter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M608 32H575.998L562.736 18.738C550.738 6.74 534.465 0 517.498 0H496.996C485.787 0 474.773 2.928 465.043 8.49L311.996 96H255.975C149.938 96 63.98 181.965 63.99 288L63.992 326.375C63.98 336.219 60.928 345.623 55.141 353.578L11.922 413.016C4.125 423.734 0 436.406 0 449.672C0 484.047 27.953 512 62.328 512H216C220.422 512 224 508.422 224 504S220.422 496 216 496H62.328C36.781 496 16 475.219 16 449.672C16 439.812 19.062 430.391 24.859 422.422L65.711 366.24C72.205 394.707 97.561 416 127.994 416H303.996C312.871 416 319.996 408.875 319.996 400C319.996 373.6 298.395 352 271.996 352H224V351.996L373.496 271.5L439.061 398.664C444.549 409.311 455.523 416 467.502 416H527.998C536.873 416 543.998 408.875 543.998 400C543.998 373.6 522.396 352 495.996 352H483.746L428.623 241.75L521.123 192H544C597.02 192 640 149.02 640 96V64C640 46.4 625.6 32 608 32ZM544 176H521.123C518.477 176 515.873 176.656 513.543 177.908L422.314 226.977C415.602 214.592 414.15 200.455 418.422 186.984C422.828 173.125 432.5 162.125 445.656 155.984L494.436 133.25C501.779 129.812 509.967 128 518.092 128H617.219C604.84 156.203 576.723 176 544 176ZM624 96C624 101.479 623.436 106.828 622.381 112H518.092C507.639 112 497.123 114.328 487.67 118.75L438.906 141.484C421.891 149.422 408.859 164.234 403.172 182.141S399.578 219.672 408.906 235.969L469.438 359.156C472.148 364.576 477.688 368 483.746 368H495.996C513.643 368 527.998 382.355 527.998 400H467.502C461.486 400 456.037 396.68 453.281 391.332L387.719 264.168C385.75 260.352 382.332 257.486 378.232 256.217C376.684 255.736 375.088 255.5 373.498 255.5C370.873 255.5 368.264 256.145 365.912 257.412L224 333.824V296C224 291.582 220.418 288 216 288S208 291.582 208 296V352H208.168C208.168 353.301 208.15 354.605 208.48 355.912C210.271 363.02 216.664 368 223.994 368H271.996C289.641 368 303.996 382.355 303.996 400H127.994C101.529 400 79.998 378.469 79.994 352.004L79.992 326.375C79.992 326.359 80 326.344 80 326.328V288C80 287.992 79.992 287.988 79.992 287.98C79.992 240.977 98.293 196.789 131.529 163.551C164.77 130.307 208.965 112 255.975 112H311.996C314.781 112 317.52 111.273 319.937 109.889L472.982 22.381C480.283 18.207 488.588 16 496.996 16H517.498C530.312 16 542.361 20.99 551.424 30.053L564.686 43.314C567.686 46.314 571.756 48 575.998 48H608C616.822 48 624 55.178 624 64V96ZM511.998 48C503.123 48 495.996 55.125 495.996 64S503.123 80 511.998 80S527.998 72.875 527.998 64S520.873 48 511.998 48Z" />
        </Icon>
    </>
}