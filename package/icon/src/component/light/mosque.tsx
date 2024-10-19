
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mosque` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mosque?s=light mosque}
 * @preview ![mosque](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzUyQzMyMyAzODIuNSAzMjAgNDI4LjI1IDMyMCA0NDEuODc1VjQ5NkMzMjAgNTA0Ljc5OSAzMjcuMTk5IDUxMiAzMzYgNTEyUzM1MiA1MDQuNzk5IDM1MiA0OTZWNDQxLjg3NUMzNTIgNDE0Ljc1IDM3Mi43NSAzOTYuNSAzODQgMzg4LjYyNUMzOTUuMjUgMzk2LjUgNDE2IDQxNC43NSA0MTYgNDQxLjg3NVY0OTZDNDE2IDUwNC43OTkgNDIzLjE5OSA1MTIgNDMyIDUxMlM0NDggNTA0Ljc5OSA0NDggNDk2VjQ0MS44NzVDNDQ4IDQyOC4xMjUgNDQ1IDM4Mi41IDM4NCAzNTJaTTI0My45NDEgMzg0LjE0NkMyMTIuMTU2IDM4MS44MDkgMTkyIDQwNy45MSAxOTIgNDMzLjg3NVY0OTZDMTkyIDUwNC43OTkgMTk5LjE5OSA1MTIgMjA4IDUxMlMyMjQgNTA0Ljc5OSAyMjQgNDk2VjQzMkMyMjQgNDIzLjEyNSAyMzEuMjUgNDE2IDI0MCA0MTZTMjU2IDQyMy4xMjUgMjU2IDQzMlY0OTZDMjU2IDUwNC43OTkgMjYzLjE5OSA1MTIgMjcyIDUxMlMyODggNTA0Ljc5OSAyODggNDk2VjQzMy4zMTRDMjg4IDQwOC4xMTEgMjY5LjA3NiAzODUuOTk0IDI0My45NDEgMzg0LjE0NlpNNTMxLjk0MSAzODQuMTQ2QzUwMC4xNTYgMzgxLjgwOSA0ODAgNDA3LjkxIDQ4MCA0MzMuODc1VjQ5NkM0ODAgNTA0Ljc5OSA0ODcuMTk5IDUxMiA0OTYgNTEyUzUxMiA1MDQuNzk5IDUxMiA0OTZWNDMyQzUxMiA0MjMuMTI1IDUxOS4yNSA0MTYgNTI4IDQxNlM1NDQgNDIzLjEyNSA1NDQgNDMyVjQ5NkM1NDQgNTA0Ljc5OSA1NTEuMTk5IDUxMiA1NjAgNTEyUzU3NiA1MDQuNzk5IDU3NiA0OTZWNDMzLjMxNEM1NzYgNDA4LjExMSA1NTcuMDc2IDM4NS45OTQgNTMxLjk0MSAzODQuMTQ2Wk01OTIgMjU2SDU4NS44NzVDNTg5LjYyNSAyNDcuMzc1IDU5MiAyMzguMzc1IDU5MiAyMjkuMTI1QzU5MiAxNzUuMTI1IDU0OC41IDEzMy42MjUgNTAxLjI1IDEwNC4zNzVDNDYzLjYyMyA4MS4xNjggNDMzLjAwMiA3MS44NzUgMzk2LjMwMSAyOS4zMTJDMzg5Ljg1NSAyMS44MzggMzc4LjE0MSAyMS44NDggMzcxLjcwMSAyOS4zMjZDMzM1LjIyNyA3MS42ODQgMzA1LjE0NiA4MC42MTUgMjY2Ljc1IDEwNC4zNzVDMjE5LjUgMTMzLjYyNSAxNzYgMTc1LjEyNSAxNzYgMjI5LjEyNUMxNzYgMjM4LjM3NSAxNzguMzc1IDI0Ny4zNzUgMTgyLjEyNSAyNTZIMTc2QzE3MC4zNzUgMjU2IDE2NSAyNTcuMTI1IDE2MCAyNTlWMTIwQzE2MCA0MCA4MCAwIDgwIDBTMCA0MCAwIDEyMFY1MDRDMCA1MDguNDE4IDMuNTgyIDUxMiA4IDUxMkgyNEMyOC40MTggNTEyIDMyIDUwOC40MTggMzIgNTA0VjE5MkgxMjhWNDk2QzEyOCA1MDQuNzk5IDEzNS4xOTkgNTEyIDE0NCA1MTJTMTYwIDUwNC43OTkgMTYwIDQ5NlYzMDRDMTYwIDI5NS4xNjIgMTY3LjE2NCAyODggMTc2IDI4OEg1OTJDNjAwLjgzNiAyODggNjA4IDI5NS4xNjIgNjA4IDMwNFY0OTZDNjA4IDUwNC43OTkgNjE1LjE5OSA1MTIgNjI0IDUxMlM2NDAgNTA0Ljc5OSA2NDAgNDk2VjMwNEM2NDAgMjc3LjQ5IDYxOC41MSAyNTYgNTkyIDI1NlpNMTI4IDE2MEgzMlYxMjBDMzIgNzkuMzc1IDYxLjUgNTEuMzc1IDgwIDM3Ljg3NUM5OC41IDUxLjM3NSAxMjggNzkuMzc1IDEyOCAxMjBWMTYwWk01NDkuMTI1IDI1NkgyMTguODc1QzIxMS42MjUgMjQ2Ljc1IDIwOCAyMzcuNzUgMjA4IDIyOS4xMjVDMjA4IDE5NiAyMzIuNSAxNjMuODc1IDI4MSAxMzMuMjVDMzIyIDEwNy4zNzUgMzU1Ljg3NSA5NC4zNzUgMzg0IDY0QzQxMi4xMjUgOTQuMzc1IDQ0NiAxMDcuMzc1IDQ4NyAxMzMuMjVDNTM1LjUgMTYzLjc1IDU2MCAxOTYgNTYwIDIyOS4xMjVDNTYwIDIzNy43NSA1NTYuMzc1IDI0Ni43NSA1NDkuMTI1IDI1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Mosque(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M384 352C323 382.5 320 428.25 320 441.875V496C320 504.799 327.199 512 336 512S352 504.799 352 496V441.875C352 414.75 372.75 396.5 384 388.625C395.25 396.5 416 414.75 416 441.875V496C416 504.799 423.199 512 432 512S448 504.799 448 496V441.875C448 428.125 445 382.5 384 352ZM243.941 384.146C212.156 381.809 192 407.91 192 433.875V496C192 504.799 199.199 512 208 512S224 504.799 224 496V432C224 423.125 231.25 416 240 416S256 423.125 256 432V496C256 504.799 263.199 512 272 512S288 504.799 288 496V433.314C288 408.111 269.076 385.994 243.941 384.146ZM531.941 384.146C500.156 381.809 480 407.91 480 433.875V496C480 504.799 487.199 512 496 512S512 504.799 512 496V432C512 423.125 519.25 416 528 416S544 423.125 544 432V496C544 504.799 551.199 512 560 512S576 504.799 576 496V433.314C576 408.111 557.076 385.994 531.941 384.146ZM592 256H585.875C589.625 247.375 592 238.375 592 229.125C592 175.125 548.5 133.625 501.25 104.375C463.623 81.168 433.002 71.875 396.301 29.312C389.855 21.838 378.141 21.848 371.701 29.326C335.227 71.684 305.146 80.615 266.75 104.375C219.5 133.625 176 175.125 176 229.125C176 238.375 178.375 247.375 182.125 256H176C170.375 256 165 257.125 160 259V120C160 40 80 0 80 0S0 40 0 120V504C0 508.418 3.582 512 8 512H24C28.418 512 32 508.418 32 504V192H128V496C128 504.799 135.199 512 144 512S160 504.799 160 496V304C160 295.162 167.164 288 176 288H592C600.836 288 608 295.162 608 304V496C608 504.799 615.199 512 624 512S640 504.799 640 496V304C640 277.49 618.51 256 592 256ZM128 160H32V120C32 79.375 61.5 51.375 80 37.875C98.5 51.375 128 79.375 128 120V160ZM549.125 256H218.875C211.625 246.75 208 237.75 208 229.125C208 196 232.5 163.875 281 133.25C322 107.375 355.875 94.375 384 64C412.125 94.375 446 107.375 487 133.25C535.5 163.75 560 196 560 229.125C560 237.75 556.375 246.75 549.125 256Z" />
        </Icon>
    </>
}