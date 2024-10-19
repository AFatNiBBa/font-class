
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-star` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-star?s=light square-star}
 * @preview ![square-star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NCAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDQgNDQ4IDQxNlY5NkM0NDggNjAuNjUyIDQxOS4zNDYgMzIgMzg0IDMyWk00MTYgNDE2QzQxNiA0MzMuNjQ1IDQwMS42NDUgNDQ4IDM4NCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDM4NEM0MDEuNjQ1IDY0IDQxNiA3OC4zNTUgNDE2IDk2VjQxNlpNMzU5LjI5OSAyMDAuNDYzTDI3Ni45NzEgMTg4LjQ4NEwyNDAuMTY2IDExNC4wMTZDMjM2Ljg2MyAxMDcuMzU3IDIzMC40MSAxMDMuOTk4IDIyMy45NjEgMTA0QzIxNy41NTEgMTA0IDIxMS4xNDMgMTA3LjMxOCAyMDcuODM0IDExNC4wMTZMMTcxLjAyOSAxODguNDg0TDg4LjcwMSAyMDAuNDYzQzczLjkyNiAyMDIuNTk4IDY4LjAxIDIyMC43NjQgNzguNzE3IDIzMS4xNjhMMTM4LjI5MSAyODkuMUwxMjQuMjAzIDM3MC45MzRDMTIyLjE5OSAzODIuNjMxIDEzMS41MjMgMzkyIDE0MS45ODIgMzkyQzE0NC43NTYgMzkyIDE0Ny42MTEgMzkxLjM0IDE1MC4zNTQgMzg5Ljg5MUwyMjQgMzUxLjI0OEwyOTcuNjQ2IDM4OS44OTFDMzAwLjM4MyAzOTEuMzI2IDMwMy4yMjkgMzkxLjk3OSAzMDUuOTk4IDM5MS45NzlDMzE2LjQ2MyAzOTEuOTc5IDMyNS44MDMgMzgyLjYzOSAzMjMuNzk3IDM3MC45MzRMMzA5LjcwOSAyODkuMUwzNjkuMjgzIDIzMS4xNjhDMzc5Ljk5IDIyMC43NjQgMzc0LjA3NCAyMDIuNTk4IDM1OS4yOTkgMjAwLjQ2M1pNMjgxLjM1NiAyNzIuMDM1QzI3Ny41NzQgMjc1LjcxMyAyNzUuODQ4IDI4MS4wMiAyNzYuNzQzIDI4Ni4yMkwyODcuNDQ3IDM0OC40TDIzMS40MzQgMzE5LjAxQzIyNi43NzkgMzE2LjU2OCAyMjEuMjIxIDMxNi41NjggMjE2LjU2NiAzMTkuMDFMMTYwLjU1MyAzNDguNEwxNzEuMjU3IDI4Ni4yMkMxNzIuMTUyIDI4MS4wMiAxNzAuNDI3IDI3NS43MTMgMTY2LjY0NCAyNzIuMDM1TDEyMS40MDQgMjI4LjA0MUwxODMuOTUzIDIxOC45NEMxODkuMTYgMjE4LjE4MyAxOTMuNjYyIDIxNC45MTQgMTk1Ljk5MyAyMTAuMTk2TDIyNCAxNTMuNTI5TDI1Mi4wMDcgMjEwLjE5NkMyNTQuMzM4IDIxNC45MTQgMjU4Ljg0IDIxOC4xODMgMjY0LjA0NyAyMTguOTRMMzI2LjU5OCAyMjguMDQxTDI4MS4zNTYgMjcyLjAzNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareStar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM359.299 200.463L276.971 188.484L240.166 114.016C236.863 107.357 230.41 103.998 223.961 104C217.551 104 211.143 107.318 207.834 114.016L171.029 188.484L88.701 200.463C73.926 202.598 68.01 220.764 78.717 231.168L138.291 289.1L124.203 370.934C122.199 382.631 131.523 392 141.982 392C144.756 392 147.611 391.34 150.354 389.891L224 351.248L297.646 389.891C300.383 391.326 303.229 391.979 305.998 391.979C316.463 391.979 325.803 382.639 323.797 370.934L309.709 289.1L369.283 231.168C379.99 220.764 374.074 202.598 359.299 200.463ZM281.356 272.035C277.574 275.713 275.848 281.02 276.743 286.22L287.447 348.4L231.434 319.01C226.779 316.568 221.221 316.568 216.566 319.01L160.553 348.4L171.257 286.22C172.152 281.02 170.427 275.713 166.644 272.035L121.404 228.041L183.953 218.94C189.16 218.183 193.662 214.914 195.993 210.196L224 153.529L252.007 210.196C254.338 214.914 258.84 218.183 264.047 218.94L326.598 228.041L281.356 272.035Z" />
        </Icon>
    </>
}