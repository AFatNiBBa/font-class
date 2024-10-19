
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-xmark` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-xmark?s=thin square-xmark}
 * @preview ![square-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU2IDAgOTZWNDE2QzAgNDUxLjM0NCAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDQgNDQ4IDQxNlY5NkM0NDggNjAuNjU2IDQxOS4zNDYgMzIgMzg0IDMyWk00MzIgNDE2QzQzMiA0NDIuNDY5IDQxMC40NjcgNDY0IDM4NCA0NjRINjRDMzcuNTMzIDQ2NCAxNiA0NDIuNDY5IDE2IDQxNlY5NkMxNiA2OS41MzEgMzcuNTMzIDQ4IDY0IDQ4SDM4NEM0MTAuNDY3IDQ4IDQzMiA2OS41MzEgNDMyIDk2VjQxNlpNMzAxLjY1NiAxNzguMzQ0QzI5OC41MzEgMTc1LjIxOSAyOTMuNDY5IDE3NS4yMTkgMjkwLjM0NCAxNzguMzQ0TDIyNCAyNDQuNjg2TDE1Ny42NTYgMTc4LjM0NEMxNTQuNTMxIDE3NS4yMTkgMTQ5LjQ2OSAxNzUuMjE5IDE0Ni4zNDQgMTc4LjM0NFMxNDMuMjE5IDE4Ni41MzEgMTQ2LjM0NCAxODkuNjU2TDIxMi42ODggMjU1Ljk5OEwxNDYuMzQ0IDMyMi4zNDJDMTQzLjIxOSAzMjUuNDY3IDE0My4yMTkgMzMwLjUyOSAxNDYuMzQ0IDMzMy42NTRDMTQ5LjQ3MSAzMzYuNzgxIDE1NC41MjkgMzM2Ljc4MSAxNTcuNjU2IDMzMy42NTRMMjI0IDI2Ny4zMTFMMjkwLjM0NCAzMzMuNjU0QzI5My40NzEgMzM2Ljc4MSAyOTguNTI5IDMzNi43ODEgMzAxLjY1NiAzMzMuNjU0QzMwNC43ODEgMzMwLjUyOSAzMDQuNzgxIDMyNS40NjcgMzAxLjY1NiAzMjIuMzQyTDIzNS4zMTIgMjU1Ljk5OEwzMDEuNjU2IDE4OS42NTZDMzA0Ljc4MSAxODYuNTMxIDMwNC43ODEgMTgxLjQ2OSAzMDEuNjU2IDE3OC4zNDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM432 416C432 442.469 410.467 464 384 464H64C37.533 464 16 442.469 16 416V96C16 69.531 37.533 48 64 48H384C410.467 48 432 69.531 432 96V416ZM301.656 178.344C298.531 175.219 293.469 175.219 290.344 178.344L224 244.686L157.656 178.344C154.531 175.219 149.469 175.219 146.344 178.344S143.219 186.531 146.344 189.656L212.688 255.998L146.344 322.342C143.219 325.467 143.219 330.529 146.344 333.654C149.471 336.781 154.529 336.781 157.656 333.654L224 267.311L290.344 333.654C293.471 336.781 298.529 336.781 301.656 333.654C304.781 330.529 304.781 325.467 301.656 322.342L235.312 255.998L301.656 189.656C304.781 186.531 304.781 181.469 301.656 178.344Z" />
        </Icon>
    </>
}