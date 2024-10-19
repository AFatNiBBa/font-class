
import { Icon } from "../../index";

/**
 * A component that renders the `puzzle-piece` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle-piece?s=thin puzzle-piece}
 * @preview ![puzzle-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NTYgMjE2QzQ0MC4xMjUgMjE2IDQyNC45NjkgMjI0LjczNCA0MTQuNDIyIDIzOS45ODRDNDEwLjg5MSAyNDUuMDc4IDQwNS43NjYgMjQ4IDQwMC4zNTkgMjQ4QzM5MS4zNDQgMjQ4IDM4NCAyNDAuNjU2IDM4NCAyMzEuNjQxVjE2OEMzODQgMTQ1LjkzOCAzNjYuMDYyIDEyOCAzNDQgMTI4SDI4MC4zNTlDMjcxLjM0NCAxMjggMjY0IDEyMC42NTYgMjY0IDExMS42NDFDMjY0IDEwNi4yMzQgMjY2LjkyMiAxMDEuMTA5IDI3MiA5Ny41NzhDMjg3LjI1IDg3LjAzMSAyOTYgNzEuODc1IDI5NiA1NkMyOTYgMjUuMTI1IDI2My43MDMgMCAyMjQgMFMxNTIgMjUuMTI1IDE1MiA1NkMxNTIgNzEuODc1IDE2MC43NSA4Ny4wMzEgMTc1Ljk4NCA5Ny41NzhDMTgxLjA3OCAxMDEuMTA5IDE4NCAxMDYuMjM0IDE4NCAxMTEuNjQxQzE4NCAxMjAuNjU2IDE3Ni42NTYgMTI4IDE2Ny42NDEgMTI4SDQwQzE3LjkzOCAxMjggMCAxNDUuOTM4IDAgMTY4VjIzMS42NDFDMCAyNDkuNDg0IDE0LjUxNiAyNjQgMzIuMzU5IDI2NEM0Mi45MzggMjY0IDUzLjEwOSAyNTguNDIyIDU5LjU3OCAyNDkuMDc4QzY3LjIwMyAyMzguMDYyIDc3LjI5NyAyMzIgODggMjMyQzExMC4wNjIgMjMyIDEyOCAyNTcuMTI1IDEyOCAyODhTMTEwLjA2MiAzNDQgODggMzQ0Qzc3LjI5NyAzNDQgNjcuMjAzIDMzNy45MjIgNTkuNTc4IDMyNi44OTFDNTMuMTA5IDMxNy41NjIgNDIuOTIyIDMxMiAzMi4zNTkgMzEyQzE0LjUxNiAzMTIgMCAzMjYuNTE2IDAgMzQ0LjM1OVY0NzJDMCA0OTQuMDYyIDE3LjkzOCA1MTIgNDAgNTEySDE2Ny42NDFDMTg1LjQ4NCA1MTIgMjAwIDQ5Ny40ODQgMjAwIDQ3OS42NDFDMjAwIDQ2OS4wNzggMTk0LjQzOCA0NTguODkxIDE4NS4wOTQgNDUyLjQyMkMxNzQuMDc4IDQ0NC43OTcgMTY4IDQzNC43MDMgMTY4IDQyNEMxNjggNDAxLjkzOCAxOTMuMTI1IDM4NCAyMjQgMzg0UzI4MCA0MDEuOTM4IDI4MCA0MjRDMjgwIDQzNC43MDMgMjczLjkyMiA0NDQuNzk3IDI2Mi44OTEgNDUyLjQyMkMyNTMuNTYyIDQ1OC44OTEgMjQ4IDQ2OS4wNzggMjQ4IDQ3OS42NDFDMjQ4IDQ5Ny40ODQgMjYyLjUxNiA1MTIgMjgwLjM1OSA1MTJIMzQ0QzM2Ni4wNjIgNTEyIDM4NCA0OTQuMDYyIDM4NCA0NzJWMzQ0LjM1OUMzODQgMzM1LjM0NCAzOTEuMzQ0IDMyOCA0MDAuMzU5IDMyOEM0MDUuNzY2IDMyOCA0MTAuODkxIDMzMC45MjIgNDE0LjQyMiAzMzZDNDI0Ljk2OSAzNTEuMjUgNDQwLjEyNSAzNjAgNDU2IDM2MEM0ODYuODc1IDM2MCA1MTIgMzI3LjcwMyA1MTIgMjg4UzQ4Ni44NzUgMjE2IDQ1NiAyMTZaTTQ1NiAzNDRDNDQ1LjI5NyAzNDQgNDM1LjIwMyAzMzcuOTIyIDQyNy41NzggMzI2Ljg5MUM0MjEuMTA5IDMxNy41NjIgNDEwLjkyMiAzMTIgNDAwLjM1OSAzMTJDMzgyLjUxNiAzMTIgMzY4IDMyNi41MTYgMzY4IDM0NC4zNTlWNDcyQzM2OCA0ODUuMjM0IDM1Ny4yMzQgNDk2IDM0NCA0OTZIMjgwLjM1OUMyNzEuMzQ0IDQ5NiAyNjQgNDg4LjY1NiAyNjQgNDc5LjY0MUMyNjQgNDc0LjIzNCAyNjYuOTIyIDQ2OS4xMDkgMjcyIDQ2NS41NzhDMjg3LjI1IDQ1NS4wMzEgMjk2IDQzOS44NzUgMjk2IDQyNEMyOTYgMzkzLjEyNSAyNjMuNzAzIDM2OCAyMjQgMzY4UzE1MiAzOTMuMTI1IDE1MiA0MjRDMTUyIDQzOS44NzUgMTYwLjc1IDQ1NS4wMzEgMTc1Ljk4NCA0NjUuNTc4QzE4MS4wNzggNDY5LjEwOSAxODQgNDc0LjIzNCAxODQgNDc5LjY0MUMxODQgNDg4LjY1NiAxNzYuNjU2IDQ5NiAxNjcuNjQxIDQ5Nkg0MEMyNi43NjYgNDk2IDE2IDQ4NS4yMzQgMTYgNDcyVjM0NC4zNTlDMTYgMzM1LjM0NCAyMy4zNDQgMzI4IDMyLjM1OSAzMjhDMzcuNzY2IDMyOCA0Mi44OTEgMzMwLjkyMiA0Ni40MjIgMzM2QzU2Ljk2OSAzNTEuMjUgNzIuMTI1IDM2MCA4OCAzNjBDMTE4Ljg3NSAzNjAgMTQ0IDMyNy43MDMgMTQ0IDI4OFMxMTguODc1IDIxNiA4OCAyMTZDNzIuMTI1IDIxNiA1Ni45NjkgMjI0LjczNCA0Ni40MjIgMjM5Ljk4NEM0Mi44OTEgMjQ1LjA3OCAzNy43NjYgMjQ4IDMyLjM1OSAyNDhDMjMuMzQ0IDI0OCAxNiAyNDAuNjU2IDE2IDIzMS42NDFWMTY4QzE2IDE1NC43NjYgMjYuNzY2IDE0NCA0MCAxNDRIMTY3LjY0MUMxODUuNDg0IDE0NCAyMDAgMTI5LjQ4NCAyMDAgMTExLjY0MUMyMDAgMTAxLjA3OCAxOTQuNDM4IDkwLjg5MSAxODUuMDk0IDg0LjQyMkMxNzQuMDc4IDc2Ljc5NyAxNjggNjYuNzAzIDE2OCA1NkMxNjggMzMuOTM4IDE5My4xMjUgMTYgMjI0IDE2UzI4MCAzMy45MzggMjgwIDU2QzI4MCA2Ni43MDMgMjczLjkyMiA3Ni43OTcgMjYyLjg5MSA4NC40MjJDMjUzLjU2MiA5MC44OTEgMjQ4IDEwMS4wNzggMjQ4IDExMS42NDFDMjQ4IDEyOS40ODQgMjYyLjUxNiAxNDQgMjgwLjM1OSAxNDRIMzQ0QzM1Ny4yMzQgMTQ0IDM2OCAxNTQuNzY2IDM2OCAxNjhWMjMxLjY0MUMzNjggMjQ5LjQ4NCAzODIuNTE2IDI2NCA0MDAuMzU5IDI2NEM0MTAuOTM4IDI2NCA0MjEuMTA5IDI1OC40MjIgNDI3LjU3OCAyNDkuMDc4QzQzNS4yMDMgMjM4LjA2MiA0NDUuMjk3IDIzMiA0NTYgMjMyQzQ3OC4wNjIgMjMyIDQ5NiAyNTcuMTI1IDQ5NiAyODhTNDc4LjA2MiAzNDQgNDU2IDM0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
const PuzzlePiece: typeof Icon = x => (
    <Icon {...x}>
        <path d="M456 216C440.125 216 424.969 224.734 414.422 239.984C410.891 245.078 405.766 248 400.359 248C391.344 248 384 240.656 384 231.641V168C384 145.938 366.062 128 344 128H280.359C271.344 128 264 120.656 264 111.641C264 106.234 266.922 101.109 272 97.578C287.25 87.031 296 71.875 296 56C296 25.125 263.703 0 224 0S152 25.125 152 56C152 71.875 160.75 87.031 175.984 97.578C181.078 101.109 184 106.234 184 111.641C184 120.656 176.656 128 167.641 128H40C17.938 128 0 145.938 0 168V231.641C0 249.484 14.516 264 32.359 264C42.938 264 53.109 258.422 59.578 249.078C67.203 238.062 77.297 232 88 232C110.062 232 128 257.125 128 288S110.062 344 88 344C77.297 344 67.203 337.922 59.578 326.891C53.109 317.562 42.922 312 32.359 312C14.516 312 0 326.516 0 344.359V472C0 494.062 17.938 512 40 512H167.641C185.484 512 200 497.484 200 479.641C200 469.078 194.438 458.891 185.094 452.422C174.078 444.797 168 434.703 168 424C168 401.938 193.125 384 224 384S280 401.938 280 424C280 434.703 273.922 444.797 262.891 452.422C253.562 458.891 248 469.078 248 479.641C248 497.484 262.516 512 280.359 512H344C366.062 512 384 494.062 384 472V344.359C384 335.344 391.344 328 400.359 328C405.766 328 410.891 330.922 414.422 336C424.969 351.25 440.125 360 456 360C486.875 360 512 327.703 512 288S486.875 216 456 216ZM456 344C445.297 344 435.203 337.922 427.578 326.891C421.109 317.562 410.922 312 400.359 312C382.516 312 368 326.516 368 344.359V472C368 485.234 357.234 496 344 496H280.359C271.344 496 264 488.656 264 479.641C264 474.234 266.922 469.109 272 465.578C287.25 455.031 296 439.875 296 424C296 393.125 263.703 368 224 368S152 393.125 152 424C152 439.875 160.75 455.031 175.984 465.578C181.078 469.109 184 474.234 184 479.641C184 488.656 176.656 496 167.641 496H40C26.766 496 16 485.234 16 472V344.359C16 335.344 23.344 328 32.359 328C37.766 328 42.891 330.922 46.422 336C56.969 351.25 72.125 360 88 360C118.875 360 144 327.703 144 288S118.875 216 88 216C72.125 216 56.969 224.734 46.422 239.984C42.891 245.078 37.766 248 32.359 248C23.344 248 16 240.656 16 231.641V168C16 154.766 26.766 144 40 144H167.641C185.484 144 200 129.484 200 111.641C200 101.078 194.438 90.891 185.094 84.422C174.078 76.797 168 66.703 168 56C168 33.938 193.125 16 224 16S280 33.938 280 56C280 66.703 273.922 76.797 262.891 84.422C253.562 90.891 248 101.078 248 111.641C248 129.484 262.516 144 280.359 144H344C357.234 144 368 154.766 368 168V231.641C368 249.484 382.516 264 400.359 264C410.938 264 421.109 258.422 427.578 249.078C435.203 238.062 445.297 232 456 232C478.062 232 496 257.125 496 288S478.062 344 456 344Z" />
    </Icon>
);

export default PuzzlePiece;