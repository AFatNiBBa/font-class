
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-up-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-right?s=solid square-up-right}
 * @preview ![square-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NCAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDQgNDQ4IDQxNlY5NkM0NDggNjAuNjUyIDQxOS4zNDYgMzIgMzg0IDMyWk0zMzAuNTA4IDMyMy44ODNDMzMwLjUwOCAzMzAuMzU1IDMyNi42MTkgMzM2LjE4OCAzMjAuNjMxIDMzOC42NjRDMzE0LjY1MiAzNDEuMTQ4IDMwNy43NyAzMzkuNzcgMzAzLjE5NSAzMzUuMTk1TDI1Ny45NDEgMjg5Ljk0MUwxOTAuMDU5IDM1Ny44MjRDMTc3LjU2MiAzNzAuMzIxIDE1Ny4zMDEgMzcwLjMyMSAxNDQuODA0IDM1Ny44MjRMMTIyLjE3NiAzMzUuMTk2QzEwOS42NzkgMzIyLjY5OSAxMDkuNjc5IDMwMi40MzggMTIyLjE3NiAyODkuOTQxTDE5MC4wNTkgMjIyLjA1OUwxNDQuODA1IDE3Ni44MDVDMTQwLjIzIDE3Mi4yMjcgMTM4Ljg1IDE2NS4zNDQgMTQxLjMzNCAxNTkuMzY3QzE0My44MTEgMTUzLjM4MyAxNDkuNjQzIDE0OS40OTIgMTU2LjExNyAxNDkuNDkySDMxNC41MUMzMjMuMzQ1IDE0OS40OTIgMzMwLjUwOCAxNTYuNjU1IDMzMC41MDggMTY1LjQ5VjMyMy44ODNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareUpRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM330.508 323.883C330.508 330.355 326.619 336.188 320.631 338.664C314.652 341.148 307.77 339.77 303.195 335.195L257.941 289.941L190.059 357.824C177.562 370.321 157.301 370.321 144.804 357.824L122.176 335.196C109.679 322.699 109.679 302.438 122.176 289.941L190.059 222.059L144.805 176.805C140.23 172.227 138.85 165.344 141.334 159.367C143.811 153.383 149.643 149.492 156.117 149.492H314.51C323.345 149.492 330.508 156.655 330.508 165.49V323.883Z" />
        </Icon>
    </>
}