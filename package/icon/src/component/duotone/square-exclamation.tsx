
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-exclamation` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-exclamation?s=duotone square-exclamation}
 * @preview ![square-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTQgNDE5LjM0NiAzMiAzODQgMzJaTTIwMCAxNTJDMjAwIDEzOC43NSAyMTAuNzUgMTI4IDIyNCAxMjhTMjQ4IDEzOC43NSAyNDggMTUyVjI4MEMyNDggMjkzLjI1IDIzNy4yNSAzMDQgMjI0IDMwNFMyMDAgMjkzLjI1IDIwMCAyODBWMTUyWk0yMjQgNDAwQzIwNi42MzcgNDAwIDE5Mi41NjIgMzg1LjkyNCAxOTIuNTYyIDM2OC41NjFDMTkyLjU2MiAzNTEuMTk5IDIwNi42MzcgMzM3LjEyMyAyMjQgMzM3LjEyM1MyNTUuNDM4IDM1MS4xOTkgMjU1LjQzOCAzNjguNTYxQzI1NS40MzggMzg1LjkyNCAyNDEuMzYzIDQwMCAyMjQgNDAwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMjQuNDM4IDMzNy4xMjNDMjA3LjA3NCAzMzcuMTIzIDE5MyAzNTEuMTk5IDE5MyAzNjguNTYxQzE5MyAzODUuOTI0IDIwNy4wNzQgNDAwIDIyNC40MzggNDAwUzI1NS44NzUgMzg1LjkyNCAyNTUuODc1IDM2OC41NjFDMjU1Ljg3NSAzNTEuMTk5IDI0MS44MDEgMzM3LjEyMyAyMjQuNDM4IDMzNy4xMjNaTTIyNC40MzggMzA0QzIzNy42ODggMzA0IDI0OC40MzggMjkzLjI1IDI0OC40MzggMjgwVjE1MkMyNDguNDM4IDEzOC43NSAyMzcuNjg4IDEyOCAyMjQuNDM4IDEyOFMyMDAuNDM4IDEzOC43NSAyMDAuNDM4IDE1MlYyODBDMjAwLjQzOCAyOTMuMjUgMjExLjE4OCAzMDQgMjI0LjQzOCAzMDRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM200 152C200 138.75 210.75 128 224 128S248 138.75 248 152V280C248 293.25 237.25 304 224 304S200 293.25 200 280V152ZM224 400C206.637 400 192.562 385.924 192.562 368.561C192.562 351.199 206.637 337.123 224 337.123S255.438 351.199 255.438 368.561C255.438 385.924 241.363 400 224 400Z" />
            <path d="M224.438 337.123C207.074 337.123 193 351.199 193 368.561C193 385.924 207.074 400 224.438 400S255.875 385.924 255.875 368.561C255.875 351.199 241.801 337.123 224.438 337.123ZM224.438 304C237.688 304 248.438 293.25 248.438 280V152C248.438 138.75 237.688 128 224.438 128S200.438 138.75 200.438 152V280C200.438 293.25 211.188 304 224.438 304Z" />
        </Icon>
    </>
}