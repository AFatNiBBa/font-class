
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-down` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-down?s=thin square-down}
 * @preview ![square-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjUyIDQxOS4zNDYgMzIgMzg0IDMyWk00MzIgNDE2QzQzMiA0NDIuNDY3IDQxMC40NjcgNDY0IDM4NCA0NjRINjRDMzcuNTMzIDQ2NCAxNiA0NDIuNDY3IDE2IDQxNlY5NkMxNiA2OS41MzMgMzcuNTMzIDQ4IDY0IDQ4SDM4NEM0MTAuNDY3IDQ4IDQzMiA2OS41MzMgNDMyIDk2VjQxNlpNMzE2LjY4NCAyNTZIMjcyVjE1MkMyNzIgMTM4Ljc0NCAyNjEuMjU0IDEyOCAyNDggMTI4SDIwMEMxODYuNzQ2IDEyOCAxNzYgMTM4Ljc0NCAxNzYgMTUyVjI1NkgxMzEuMzE2QzEwOS45MzQgMjU2IDk5LjIyNyAyODEuODUyIDExNC4zNDYgMjk2Ljk3MUwyMDcuMDI5IDM4OS42NTRDMjExLjcxNyAzOTQuMzQgMjE3Ljg1NyAzOTYuNjg0IDIyNCAzOTYuNjg0UzIzNi4yODMgMzk0LjM0IDI0MC45NzEgMzg5LjY1NEwzMzMuNjU0IDI5Ni45NzFDMzQ4Ljc3MyAyODEuODUyIDMzOC4wNjYgMjU2IDMxNi42ODQgMjU2Wk0zMjIuMzQgMjg1LjY1NkwyMjkuNjU2IDM3OC4zNEMyMjcuNjE3IDM4MC4zNzkgMjI1LjIzOCAzODAuNjg0IDIyNCAzODAuNjg0UzIyMC4zODMgMzgwLjM3OSAyMTguMzQ0IDM3OC4zNEwxMjUuNjYgMjg1LjY1NkMxMjIuMjQ4IDI4Mi4yNDQgMTIzLjMxMSAyNzguNDI0IDEyMy45MjQgMjc2LjkzOEMxMjQuNTM5IDI3NS40NTMgMTI2LjQ5MiAyNzIgMTMxLjMxNiAyNzJIMTkyVjE1MkMxOTIgMTQ3LjU4OCAxOTUuNTg4IDE0NCAyMDAgMTQ0SDI0OEMyNTIuNDEyIDE0NCAyNTYgMTQ3LjU4OCAyNTYgMTUyVjI3MkgzMTYuNjg0QzMyMS41MDggMjcyIDMyMy40NjEgMjc1LjQ1MyAzMjQuMDc2IDI3Ni45MzhDMzI0LjY4OSAyNzguNDI0IDMyNS43NTIgMjgyLjI0NCAzMjIuMzQgMjg1LjY1NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM316.684 256H272V152C272 138.744 261.254 128 248 128H200C186.746 128 176 138.744 176 152V256H131.316C109.934 256 99.227 281.852 114.346 296.971L207.029 389.654C211.717 394.34 217.857 396.684 224 396.684S236.283 394.34 240.971 389.654L333.654 296.971C348.773 281.852 338.066 256 316.684 256ZM322.34 285.656L229.656 378.34C227.617 380.379 225.238 380.684 224 380.684S220.383 380.379 218.344 378.34L125.66 285.656C122.248 282.244 123.311 278.424 123.924 276.938C124.539 275.453 126.492 272 131.316 272H192V152C192 147.588 195.588 144 200 144H248C252.412 144 256 147.588 256 152V272H316.684C321.508 272 323.461 275.453 324.076 276.938C324.689 278.424 325.752 282.244 322.34 285.656Z" />
        </Icon>
    </>
}