
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-down-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-down-left?s=solid square-down-left}
 * @preview ![square-down-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NCAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDQgNDQ4IDQxNlY5NkM0NDggNjAuNjUyIDQxOS4zNDYgMzIgMzg0IDMyWk0zMjUuODI0IDIyMi4wNTlMMjU3Ljk0MSAyODkuOTQxTDMwMy4xOTUgMzM1LjE5NUMzMDcuNzcgMzM5Ljc3IDMwOS4xNSAzNDYuNjUyIDMwNi42NjYgMzUyLjYzM0MzMDQuMTg5IDM1OC42MTcgMjk4LjM1NyAzNjIuNTA4IDI5MS44ODMgMzYyLjUwOEgxMzMuNDlDMTI0LjY1NSAzNjIuNTA4IDExNy40OTIgMzU1LjM0NSAxMTcuNDkyIDM0Ni41MVYxODguMTE3QzExNy40OTIgMTgxLjY0MSAxMjEuMzgxIDE3NS44MDkgMTI3LjM2OSAxNzMuMzM2QzEzMy4zNDggMTcwLjg0OCAxNDAuMjMgMTcyLjIyNyAxNDQuODA1IDE3Ni44MDVMMTkwLjA1OSAyMjIuMDU5TDI1Ny45NDEgMTU0LjE3NkMyNzAuNDM4IDE0MS42NzkgMjkwLjY5OSAxNDEuNjc5IDMwMy4xOTYgMTU0LjE3NkwzMjUuODI0IDE3Ni44MDRDMzM4LjMyMSAxODkuMzAxIDMzOC4zMjEgMjA5LjU2MiAzMjUuODI0IDIyMi4wNTlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareDownLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM325.824 222.059L257.941 289.941L303.195 335.195C307.77 339.77 309.15 346.652 306.666 352.633C304.189 358.617 298.357 362.508 291.883 362.508H133.49C124.655 362.508 117.492 355.345 117.492 346.51V188.117C117.492 181.641 121.381 175.809 127.369 173.336C133.348 170.848 140.23 172.227 144.805 176.805L190.059 222.059L257.941 154.176C270.438 141.679 290.699 141.679 303.196 154.176L325.824 176.804C338.321 189.301 338.321 209.562 325.824 222.059Z" />
        </Icon>
    </>
}