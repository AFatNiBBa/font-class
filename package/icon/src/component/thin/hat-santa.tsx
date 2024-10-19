
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hat-santa` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hat-santa?s=thin hat-santa}
 * @preview ![hat-santa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMjQwQzY0MCAyMjguOTA2IDYzNC4xNTYgMjE4LjkwNiA2MjQuODEyIDIxMy4xNTZDNjI3LjQzNyAyMDIuNTYyIDYyNC41MzEgMTkxLjMxMiA2MTYuNjI1IDE4My4zNzVDNjA4LjY4NyAxNzUuNDM3IDU5Ny40NjkgMTcyLjQwNiA1ODYuODQ0IDE3NS4xODdDNTgxLjA5NCAxNjUuODQ0IDU3MS4wOTQgMTYwIDU2MCAxNjBTNTM4LjkwNiAxNjUuODQ0IDUzMy4xNTYgMTc1LjE4OEM1MjIuNDY5IDE3Mi40MDYgNTExLjMxMiAxNzUuNDY5IDUwMy4zNzUgMTgzLjM3NUM0OTUuNDY5IDE5MS4zMTMgNDkyLjU2MiAyMDIuNTYzIDQ5NS4xODcgMjEzLjE1NkM0ODUuODQ0IDIxOC45MDYgNDgwIDIyOC45MDYgNDgwIDI0MFM0ODUuODQ0IDI2MS4wOTQgNDk1LjE4OCAyNjYuODQ0QzQ5Mi41NjMgMjc3LjQ2OSA0OTUuNDY5IDI4OC42ODggNTAzLjQzOCAyOTYuNjg4QzUxMS4yODEgMzA0LjM0NCA1MjIuMjgxIDMwOCA1MzMuMjE5IDMwNC45NjlDNTM4Ljk2OSAzMTQuMTg4IDU0OC45MzggMzIwIDU2MCAzMjBTNTgxLjAzMSAzMTQuMTg4IDU4Ni43ODEgMzA0LjkzOEM1OTcuODEzIDMwNy45MzggNjA4LjQ2OSAzMDQuNDA2IDYxNi42MjUgMjk2LjYyNUM2MjQuNTMxIDI4OC42ODggNjI3LjQzOCAyNzcuNDM4IDYyNC44MTMgMjY2Ljg0NEM2MzQuMTU2IDI2MS4wOTQgNjQwIDI1MS4wOTQgNjQwIDI0MFpNNjEyLjM0NCAyNTUuMDYyQzYxMC4wMzEgMjU1Ljc4MSA2MDguMTg4IDI1Ny40NjkgNjA3LjI4MSAyNTkuNzE5QzYwNi4zNzUgMjYxLjkzNyA2MDYuNTMxIDI2NC40NjkgNjA3LjY4OCAyNjYuNTYyQzYxMS4xMjUgMjcyLjg3NSA2MTAuMTg4IDI4MC40MDYgNjA1LjQ2OSAyODUuMTU2QzYwMC41NjMgMjg5Ljg0NCA1OTUuMjUgMjkyLjI1IDU4Ni40NjkgMjg3LjYyNUM1ODQuMzc1IDI4Ni40NjkgNTgxLjgxMyAyODYuMzc1IDU3OS42NTYgMjg3LjI4MUM1NzcuNDM4IDI4OC4yMTkgNTc1Ljc4MSAyOTAuMDYyIDU3NS4wNjMgMjkyLjM0NEM1NzIuOTM4IDI5OS4zMTIgNTY2Ljg3NSAzMDQgNTYwIDMwNFM1NDcuMDYyIDI5OS4zMTIgNTQ0LjkzOCAyOTIuMzQ0QzU0NC4yMTkgMjkwLjAzMSA1NDIuNTMxIDI4OC4xODggNTQwLjMxMyAyODcuMjgxQzUzOS4zNDQgMjg2Ljg3NSA1MzguMzEzIDI4Ni42ODggNTM3LjI4MSAyODYuNjg4QzUzNS45NjkgMjg2LjY4OCA1MzQuNjU2IDI4NyA1MzMuNDY5IDI4Ny42NTZDNTI1LjA2MyAyOTIuMTg4IDUxOS4zMTMgMjg5LjgxMiA1MTQuNjg4IDI4NS4zMTJDNTA5LjgxMiAyODAuNDA2IDUwOC44NzUgMjcyLjg3NSA1MTIuMzEyIDI2Ni41NjJDNTEzLjQ2OSAyNjQuNDY5IDUxMy42MjUgMjYxLjkzOCA1MTIuNzE5IDI1OS43MTlDNTExLjgxMiAyNTcuNDY5IDUwOS45NjkgMjU1Ljc4MSA1MDcuNjU2IDI1NS4wNjJDNTAwLjY4OCAyNTIuOTM4IDQ5NiAyNDYuODc1IDQ5NiAyNDBTNTAwLjY4OCAyMjcuMDYyIDUwNy42NTYgMjI0LjkzOEM1MDkuOTY5IDIyNC4yMTkgNTExLjgxMiAyMjIuNTMxIDUxMi43MTkgMjIwLjI4MUM1MTMuNjI1IDIxOC4wNjMgNTEzLjQ2OSAyMTUuNTMxIDUxMi4zMTIgMjEzLjQzOEM1MDguODc1IDIwNy4xMjUgNTA5LjgxMiAxOTkuNTk0IDUxNC42ODggMTk0LjY4OEM1MTkuNjI1IDE4OS44NDQgNTI3LjE1NiAxODguOTA2IDUzMy40MzggMTkyLjMxMkM1MzUuNTYyIDE5My41IDUzOC4wOTQgMTkzLjY4OCA1NDAuMjgxIDE5Mi43MTlDNTQyLjUzMSAxOTEuODEyIDU0NC4yMTkgMTg5Ljk2OSA1NDQuOTM4IDE4Ny42NTZDNTQ3LjA2MiAxODAuNjg4IDU1My4xMjUgMTc2IDU2MCAxNzZTNTcyLjkzOCAxODAuNjg4IDU3NS4wNjIgMTg3LjY1NkM1NzUuNzgxIDE4OS45NjkgNTc3LjQ2OSAxOTEuODEyIDU3OS43MTkgMTkyLjcxOUM1ODEuOTY5IDE5My42ODcgNTg0LjQ2OSAxOTMuNSA1ODYuNTYyIDE5Mi4zMTJDNTkyLjkwNiAxODguODQ0IDYwMC40MDYgMTg5Ljg0NCA2MDUuMzEyIDE5NC42ODhDNjEwLjE4OCAxOTkuNTk0IDYxMS4xMjUgMjA3LjEyNSA2MDcuNjg4IDIxMy40MzhDNjA2LjUzMSAyMTUuNTMxIDYwNi4zNzUgMjE4LjA2MiA2MDcuMjgxIDIyMC4yODFDNjA4LjE4OCAyMjIuNTMxIDYxMC4wMzEgMjI0LjIxOSA2MTIuMzQ0IDIyNC45MzhDNjE5LjMxMiAyMjcuMDYyIDYyNCAyMzMuMTI1IDYyNCAyNDBTNjE5LjMxMiAyNTIuOTM4IDYxMi4zNDQgMjU1LjA2MlpNNDQ4IDM4NEg2NEMyOC42NTQgMzg0IDAgNDEyLjY1MiAwIDQ0OEMwIDQ2NS42NzIgMTQuMzI2IDQ4MCAzMiA0ODBINDgwQzQ5Ny42NzQgNDgwIDUxMiA0NjUuNjcyIDUxMiA0NDhDNTEyIDQxMi42NTIgNDgzLjM0NiAzODQgNDQ4IDM4NFpNNDgwIDQ2NEgzMkMyMy4xNzggNDY0IDE2IDQ1Ni44MjQgMTYgNDQ4QzE2IDQyMS41MzEgMzcuNTMzIDQwMCA2NCA0MDBINDQ4QzQ3NC40NjcgNDAwIDQ5NiA0MjEuNTMxIDQ5NiA0NDhDNDk2IDQ1Ni44MjQgNDg4LjgyMiA0NjQgNDgwIDQ2NFpNNDU1Ljc1IDIxOS41QzQ1OS4yODEgMjE5LjUgNDYyLjUgMjE3LjE1NiA0NjMuNDY5IDIxMy41OTRDNDY0LjYyNSAyMDkuMzQ0IDQ2Mi4xMjUgMjA0LjkzOCA0NTcuODQ0IDIwMy43ODFMMzg2Ljg1NCAxODQuNDg4TDM3NS4zNzUgMTU2LjkzOEMzNzMuNjg4IDE1Mi44NDQgMzY4Ljk2OSAxNTAuODc1IDM2NC45MzggMTUyLjYyNUMzNjAuODQ0IDE1NC4zMTMgMzU4LjkwNiAxNTkgMzYwLjYyNSAxNjMuMDYzTDQ0MC42MjUgMzU1LjA2M0M0NDEuOTA2IDM1OC4xNTYgNDQ0Ljg3NSAzNjAgNDQ4IDM2MEM0NDkuMDMxIDM2MCA0NTAuMDYyIDM1OS44MTIgNDUxLjA2MiAzNTkuMzc1QzQ1NS4xNTYgMzU3LjY4OCA0NTcuMDk0IDM1MyA0NTUuMzc1IDM0OC45MzhMMzk0LjY0MyAyMDMuMThMNDUzLjY1NiAyMTkuMjE5QzQ1NC4zNDQgMjE5LjQwNiA0NTUuMDYyIDIxOS41IDQ1NS43NSAyMTkuNVpNNjEgMzU5LjQwNkM2MS45NjkgMzU5LjgxMiA2MyAzNjAgNjQgMzYwQzY3LjE1NiAzNjAgNzAuMTU2IDM1OC4xMjUgNzEuNDA2IDM1NUwxNTUuNzUgMTQ3LjU5NEMxODAuOTY5IDg3LjA5NCAyMzkuNjU2IDQ4IDMwNS4yNSA0OEMzNTIuOTA2IDQ4IDM5Ny45NjkgNjguODc1IDQyOC42MjUgMTA0LjkzOEw0NzQuNSAxNjUuNTYyQzQ3Ny4xNTYgMTY5LjEyNSA0ODIuMTg4IDE2OS43ODEgNDg1LjY4OCAxNjcuMTI1QzQ4OS4yMTkgMTY0LjQ2OSA0ODkuOTA2IDE1OS40MzcgNDg3LjI1IDE1NS45MzdMNDQxLjA5NCA5NC45MzdDNDA3LjEyNSA1NC45MzggMzU3LjYyNSAzMiAzMDUuMjUgMzJDMjMzLjE4OCAzMiAxNjguNzE5IDc0LjkzOCAxNDAuOTY5IDE0MS41TDU2LjU5NCAzNDlDNTQuOTM4IDM1My4wOTQgNTYuOTA2IDM1Ny43NSA2MSAzNTkuNDA2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HatSanta(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M640 240C640 228.906 634.156 218.906 624.812 213.156C627.437 202.562 624.531 191.312 616.625 183.375C608.687 175.437 597.469 172.406 586.844 175.187C581.094 165.844 571.094 160 560 160S538.906 165.844 533.156 175.188C522.469 172.406 511.312 175.469 503.375 183.375C495.469 191.313 492.562 202.563 495.187 213.156C485.844 218.906 480 228.906 480 240S485.844 261.094 495.188 266.844C492.563 277.469 495.469 288.688 503.438 296.688C511.281 304.344 522.281 308 533.219 304.969C538.969 314.188 548.938 320 560 320S581.031 314.188 586.781 304.938C597.813 307.938 608.469 304.406 616.625 296.625C624.531 288.688 627.438 277.438 624.813 266.844C634.156 261.094 640 251.094 640 240ZM612.344 255.062C610.031 255.781 608.188 257.469 607.281 259.719C606.375 261.937 606.531 264.469 607.688 266.562C611.125 272.875 610.188 280.406 605.469 285.156C600.563 289.844 595.25 292.25 586.469 287.625C584.375 286.469 581.813 286.375 579.656 287.281C577.438 288.219 575.781 290.062 575.063 292.344C572.938 299.312 566.875 304 560 304S547.062 299.312 544.938 292.344C544.219 290.031 542.531 288.188 540.313 287.281C539.344 286.875 538.313 286.688 537.281 286.688C535.969 286.688 534.656 287 533.469 287.656C525.063 292.188 519.313 289.812 514.688 285.312C509.812 280.406 508.875 272.875 512.312 266.562C513.469 264.469 513.625 261.938 512.719 259.719C511.812 257.469 509.969 255.781 507.656 255.062C500.688 252.938 496 246.875 496 240S500.688 227.062 507.656 224.938C509.969 224.219 511.812 222.531 512.719 220.281C513.625 218.063 513.469 215.531 512.312 213.438C508.875 207.125 509.812 199.594 514.688 194.688C519.625 189.844 527.156 188.906 533.438 192.312C535.562 193.5 538.094 193.688 540.281 192.719C542.531 191.812 544.219 189.969 544.938 187.656C547.062 180.688 553.125 176 560 176S572.938 180.688 575.062 187.656C575.781 189.969 577.469 191.812 579.719 192.719C581.969 193.687 584.469 193.5 586.562 192.312C592.906 188.844 600.406 189.844 605.312 194.688C610.188 199.594 611.125 207.125 607.688 213.438C606.531 215.531 606.375 218.062 607.281 220.281C608.188 222.531 610.031 224.219 612.344 224.938C619.312 227.062 624 233.125 624 240S619.312 252.938 612.344 255.062ZM448 384H64C28.654 384 0 412.652 0 448C0 465.672 14.326 480 32 480H480C497.674 480 512 465.672 512 448C512 412.652 483.346 384 448 384ZM480 464H32C23.178 464 16 456.824 16 448C16 421.531 37.533 400 64 400H448C474.467 400 496 421.531 496 448C496 456.824 488.822 464 480 464ZM455.75 219.5C459.281 219.5 462.5 217.156 463.469 213.594C464.625 209.344 462.125 204.938 457.844 203.781L386.854 184.488L375.375 156.938C373.688 152.844 368.969 150.875 364.938 152.625C360.844 154.313 358.906 159 360.625 163.063L440.625 355.063C441.906 358.156 444.875 360 448 360C449.031 360 450.062 359.812 451.062 359.375C455.156 357.688 457.094 353 455.375 348.938L394.643 203.18L453.656 219.219C454.344 219.406 455.062 219.5 455.75 219.5ZM61 359.406C61.969 359.812 63 360 64 360C67.156 360 70.156 358.125 71.406 355L155.75 147.594C180.969 87.094 239.656 48 305.25 48C352.906 48 397.969 68.875 428.625 104.938L474.5 165.562C477.156 169.125 482.188 169.781 485.688 167.125C489.219 164.469 489.906 159.437 487.25 155.937L441.094 94.937C407.125 54.938 357.625 32 305.25 32C233.188 32 168.719 74.938 140.969 141.5L56.594 349C54.938 353.094 56.906 357.75 61 359.406Z" />
        </Icon>
    </>
}