
import { Icon } from "../../index";

/**
 * A component that renders the `book-skull` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-skull?s=light book-skull}
 * @preview ![book-skull](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDggMTYwQzI1Ni43NSAxNjAgMjY0IDE1Mi43NSAyNjQgMTQ0UzI1Ni43NSAxMjggMjQ4IDEyOFMyMzIgMTM1LjI1IDIzMiAxNDRTMjM5LjI1IDE2MCAyNDggMTYwWk0yMDAgMTYwQzIwOC43NSAxNjAgMjE2IDE1Mi43NSAyMTYgMTQ0UzIwOC43NSAxMjggMjAwIDEyOFMxODQgMTM1LjI1IDE4NCAxNDRTMTkxLjI1IDE2MCAyMDAgMTYwWk0xNjAgMjAzLjM3NVYyMTZDMTYwIDIyOS4yNSAxNzAuNzUgMjQwIDE4NCAyNDBIMjY0QzI3Ny4yNSAyNDAgMjg4IDIyOS4yNSAyODggMjE2VjIwMy4zNzVDMzA4LjM3NSAxODguMjUgMzIwIDE2NyAzMjAgMTQ0QzMyMCA5OS44NzUgMjc2Ljg3NSA2NCAyMjQgNjRTMTI4IDk5Ljg3NSAxMjggMTQ0QzEyOCAxNjcgMTM5LjYyNSAxODguMjUgMTYwIDIwMy4zNzVaTTIyNCA5NkMyNTkuMjUgOTYgMjg4IDExNy41IDI4OCAxNDRDMjg4IDE1OC4yNSAyNzkuMjUgMTcxLjg3NSAyNjMuNzUgMTgxLjI1TDI1NiAxODUuODc1VjIwOEgxOTJWMTg1Ljg3NUwxODQuMjUgMTgxLjI1QzE2OC44NzUgMTcxLjg3NSAxNjAgMTU4LjI1IDE2MCAxNDRDMTYwIDExNy41IDE4OC43NSA5NiAyMjQgOTZaTTQ0OCAzNjhWNDhDNDQ4IDIxLjQ5IDQyNi41MSAwIDQwMCAwSDgwQzM1LjgxNyAwIDAgMzUuODE3IDAgODBWNDQ4QzAgNDgzLjM0NiAyOC42NTQgNTEyIDY0IDUxMkg0MzJDNDQwLjg0NCA1MTIgNDQ4IDUwNC44NDQgNDQ4IDQ5NlM0NDAuODQ0IDQ4MCA0MzIgNDgwSDQxNlY0MTMuMDUzQzQzNC41ODQgNDA2LjQyNiA0NDggMzg4LjgzMiA0NDggMzY4Wk0zODQgNDgwSDY0QzQ2LjM1OSA0ODAgMzIgNDY1LjY0MSAzMiA0NDhTNDYuMzU5IDQxNiA2NCA0MTZIMzg0VjQ4MFpNNDAwIDM4NEg2NEM1Mi4yOTEgMzg0IDQxLjQ1MSAzODcuMzg5IDMyIDM5Mi45VjgwQzMyIDUzLjQ5IDUzLjQ5IDMyIDgwIDMySDQwMEM0MDguODM3IDMyIDQxNiAzOS4xNjMgNDE2IDQ4VjM2OEM0MTYgMzc2LjgzNyA0MDguODM3IDM4NCA0MDAgMzg0Wk0zNTEuMDYyIDI1MC42MjVDMzQ4LjEwOSAyNDIuMjk3IDMzOC44NzUgMjM3LjkwNiAzMzAuNjI1IDI0MC45MzdMMjI0IDI3OS4wMThMMTE3LjM3NSAyNDAuOTM4QzEwOS4wNDcgMjM3Ljg5MSA5OS44OTEgMjQyLjI5NyA5Ni45MzggMjUwLjYyNUM5My45NTMgMjU4LjkzOCA5OC4yOTcgMjY4LjA5NCAxMDYuNjI1IDI3MS4wNjJMMTc2LjQ0OSAyOTZMMTA2LjYyNSAzMjAuOTM4Qzk4LjI5NyAzMjMuOTA2IDkzLjk1MyAzMzMuMDYyIDk2LjkzOCAzNDEuMzc1Qzk5LjI2NiAzNDcuOTIyIDEwNS40MjIgMzUyIDExMiAzNTJDMTEzLjc4MSAzNTIgMTE1LjYwOSAzNTEuNzAzIDExNy4zNzUgMzUxLjA2MkwyMjQgMzEyLjk4MkwzMzAuNjI1IDM1MS4wNjJDMzMyLjM5MSAzNTEuNzAzIDMzNC4yMTkgMzUyIDMzNiAzNTJDMzQyLjU3OCAzNTIgMzQ4LjczNCAzNDcuOTIyIDM1MS4wNjIgMzQxLjM3NUMzNTQuMDQ3IDMzMy4wNjMgMzQ5LjcwMyAzMjMuOTA2IDM0MS4zNzUgMzIwLjkzOEwyNzEuNTUxIDI5NkwzNDEuMzc1IDI3MS4wNjJDMzQ5LjcwMyAyNjguMDk0IDM1NC4wNDcgMjU4LjkzOCAzNTEuMDYyIDI1MC42MjVaIi8+PC9zdmc+|width=32|height=32)
 */
const BookSkull: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M248 160C256.75 160 264 152.75 264 144S256.75 128 248 128S232 135.25 232 144S239.25 160 248 160ZM200 160C208.75 160 216 152.75 216 144S208.75 128 200 128S184 135.25 184 144S191.25 160 200 160ZM160 203.375V216C160 229.25 170.75 240 184 240H264C277.25 240 288 229.25 288 216V203.375C308.375 188.25 320 167 320 144C320 99.875 276.875 64 224 64S128 99.875 128 144C128 167 139.625 188.25 160 203.375ZM224 96C259.25 96 288 117.5 288 144C288 158.25 279.25 171.875 263.75 181.25L256 185.875V208H192V185.875L184.25 181.25C168.875 171.875 160 158.25 160 144C160 117.5 188.75 96 224 96ZM448 368V48C448 21.49 426.51 0 400 0H80C35.817 0 0 35.817 0 80V448C0 483.346 28.654 512 64 512H432C440.844 512 448 504.844 448 496S440.844 480 432 480H416V413.053C434.584 406.426 448 388.832 448 368ZM384 480H64C46.359 480 32 465.641 32 448S46.359 416 64 416H384V480ZM400 384H64C52.291 384 41.451 387.389 32 392.9V80C32 53.49 53.49 32 80 32H400C408.837 32 416 39.163 416 48V368C416 376.837 408.837 384 400 384ZM351.062 250.625C348.109 242.297 338.875 237.906 330.625 240.937L224 279.018L117.375 240.938C109.047 237.891 99.891 242.297 96.938 250.625C93.953 258.938 98.297 268.094 106.625 271.062L176.449 296L106.625 320.938C98.297 323.906 93.953 333.062 96.938 341.375C99.266 347.922 105.422 352 112 352C113.781 352 115.609 351.703 117.375 351.062L224 312.982L330.625 351.062C332.391 351.703 334.219 352 336 352C342.578 352 348.734 347.922 351.062 341.375C354.047 333.063 349.703 323.906 341.375 320.938L271.551 296L341.375 271.062C349.703 268.094 354.047 258.938 351.062 250.625Z" />
    </Icon>
);

export default BookSkull;