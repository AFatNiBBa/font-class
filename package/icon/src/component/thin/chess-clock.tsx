
import { Icon } from "../../index";

/**
 * A component that renders the `chess-clock` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock?s=thin chess-clock}
 * @preview ![chess-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzYgMTkyQzExNC4xNDUgMTkyIDY0IDI0Mi4xNDUgNjQgMzA0UzExNC4xNDUgNDE2IDE3NiA0MTZTMjg4IDM2NS44NTUgMjg4IDMwNFMyMzcuODU1IDE5MiAxNzYgMTkyWk0xNzYgNDAwQzEyMy4wNjYgNDAwIDgwIDM1Ni45MzQgODAgMzA0QzgwIDI1MS4wNjQgMTIzLjA2NiAyMDggMTc2IDIwOFMyNzIgMjUxLjA2NCAyNzIgMzA0QzI3MiAzNTYuOTM0IDIyOC45MzQgNDAwIDE3NiA0MDBaTTQ2NCAxOTJDNDAyLjE0NSAxOTIgMzUyIDI0Mi4xNDUgMzUyIDMwNFM0MDIuMTQ1IDQxNiA0NjQgNDE2UzU3NiAzNjUuODU1IDU3NiAzMDRTNTI1Ljg1NSAxOTIgNDY0IDE5MlpNNDY0IDQwMEM0MTEuMDY2IDQwMCAzNjggMzU2LjkzNCAzNjggMzA0QzM2OCAyNTEuMDY0IDQxMS4wNjYgMjA4IDQ2NCAyMDhTNTYwIDI1MS4wNjQgNTYwIDMwNEM1NjAgMzU2LjkzNCA1MTYuOTM0IDQwMCA0NjQgNDAwWk01NzYgMTI4SDE4NFY0OEgyNDhDMjUyLjQwNiA0OCAyNTYgNDQuNDIyIDI1NiA0MFMyNTIuNDA2IDMyIDI0OCAzMkgxMDRDOTkuNTk0IDMyIDk2IDM1LjU3OCA5NiA0MFM5OS41OTQgNDggMTA0IDQ4SDE2OFYxMjhINjRDMjguNjUyIDEyOCAwIDE1Ni42NTIgMCAxOTJWNDE2QzAgNDUxLjM0NiAyOC42NTIgNDgwIDY0IDQ4MEg1NzZDNjExLjM0OCA0ODAgNjQwIDQ1MS4zNDYgNjQwIDQxNlYxOTJDNjQwIDE1Ni42NTIgNjExLjM0OCAxMjggNTc2IDEyOFpNNjI0IDQxNkM2MjQgNDQyLjQ2NyA2MDIuNDY5IDQ2NCA1NzYgNDY0SDY0QzM3LjUzMSA0NjQgMTYgNDQyLjQ2NyAxNiA0MTZWMTkyQzE2IDE2NS41MzMgMzcuNTMxIDE0NCA2NCAxNDRINTc2QzYwMi40NjkgMTQ0IDYyNCAxNjUuNTMzIDYyNCAxOTJWNDE2Wk0zOTIgOTZINTM2QzU0MC40MDYgOTYgNTQ0IDkyLjQyMiA1NDQgODhTNTQwLjQwNiA4MCA1MzYgODBIMzkyQzM4Ny41OTQgODAgMzg0IDgzLjU3OCAzODQgODhTMzg3LjU5NCA5NiAzOTIgOTZaTTE3NiAyMzJDMTcxLjU5NCAyMzIgMTY4IDIzNS41NzggMTY4IDI0MFYzMDRDMTY4IDMwOC40MjIgMTcxLjU5NCAzMTIgMTc2IDMxMlMxODQgMzA4LjQyMiAxODQgMzA0VjI0MEMxODQgMjM1LjU3OCAxODAuNDA2IDIzMiAxNzYgMjMyWk01MDMuNTk0IDI1My4wOTRMNDU4LjM0NCAyOTguMzQ0QzQ1NS4yMTkgMzAxLjQ2OSA0NTUuMjE5IDMwNi41MzEgNDU4LjM0NCAzMDkuNjU2QzQ1OS45MDYgMzExLjIxOSA0NjEuOTM4IDMxMiA0NjQgMzEyUzQ2OC4wOTQgMzExLjIxOSA0NjkuNjU2IDMwOS42NTZMNTE0LjkwNiAyNjQuNDA2QzUxOC4wMzEgMjYxLjI4MSA1MTguMDMxIDI1Ni4yMTkgNTE0LjkwNiAyNTMuMDk0UzUwNi43MTkgMjQ5Ljk2OSA1MDMuNTk0IDI1My4wOTRaIi8+PC9zdmc+|width=32|height=32)
 */
const ChessClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 192C114.145 192 64 242.145 64 304S114.145 416 176 416S288 365.855 288 304S237.855 192 176 192ZM176 400C123.066 400 80 356.934 80 304C80 251.064 123.066 208 176 208S272 251.064 272 304C272 356.934 228.934 400 176 400ZM464 192C402.145 192 352 242.145 352 304S402.145 416 464 416S576 365.855 576 304S525.855 192 464 192ZM464 400C411.066 400 368 356.934 368 304C368 251.064 411.066 208 464 208S560 251.064 560 304C560 356.934 516.934 400 464 400ZM576 128H184V48H248C252.406 48 256 44.422 256 40S252.406 32 248 32H104C99.594 32 96 35.578 96 40S99.594 48 104 48H168V128H64C28.652 128 0 156.652 0 192V416C0 451.346 28.652 480 64 480H576C611.348 480 640 451.346 640 416V192C640 156.652 611.348 128 576 128ZM624 416C624 442.467 602.469 464 576 464H64C37.531 464 16 442.467 16 416V192C16 165.533 37.531 144 64 144H576C602.469 144 624 165.533 624 192V416ZM392 96H536C540.406 96 544 92.422 544 88S540.406 80 536 80H392C387.594 80 384 83.578 384 88S387.594 96 392 96ZM176 232C171.594 232 168 235.578 168 240V304C168 308.422 171.594 312 176 312S184 308.422 184 304V240C184 235.578 180.406 232 176 232ZM503.594 253.094L458.344 298.344C455.219 301.469 455.219 306.531 458.344 309.656C459.906 311.219 461.938 312 464 312S468.094 311.219 469.656 309.656L514.906 264.406C518.031 261.281 518.031 256.219 514.906 253.094S506.719 249.969 503.594 253.094Z" />
    </Icon>
);

export default ChessClock;