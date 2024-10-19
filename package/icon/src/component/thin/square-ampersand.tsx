
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-ampersand` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-ampersand?s=thin square-ampersand}
 * @preview ![square-ampersand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0NiA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDYgMzIgMzg0IDMyWk00MzIgNDE2QzQzMiA0NDIuNDY3IDQxMC40NjcgNDY0IDM4NCA0NjRINjRDMzcuNTMzIDQ2NCAxNiA0NDIuNDY3IDE2IDQxNlY5NkMxNiA2OS41MzMgMzcuNTMzIDQ4IDY0IDQ4SDM4NEM0MTAuNDY3IDQ4IDQzMiA2OS41MzMgNDMyIDk2VjQxNlpNMjkwLjg2OSAzMjUuOTQxTDMzMy4zNzUgMjY1Ljg0NEMzMzUuOTM3IDI2Mi4yMzQgMzM1LjA2MiAyNTcuMjM0IDMzMS40NjkgMjU0LjY4N0MzMjcuODQ0IDI1Mi4xMjUgMzIyLjg3NSAyNTIuOTY5IDMyMC4zMTIgMjU2LjU5NEwyNzkuNjkzIDMxNC4wMjNMMjExLjMxMiAyNDEuMTA5TDI0OC4yMTkgMjExLjM1OUMyNTkuNjg3IDIwMi40MjIgMjY2LjI4MSAxODkuMTA5IDI2Ni4yODEgMTc0Ljg0NEMyNjYuMjgxIDE0OS4wMTYgMjQ0LjYyNSAxMjggMjE4IDEyOEgxOTUuNzE5QzE2OS4wOTQgMTI4IDE0Ny40MzggMTQ5LjAxNiAxNDcuNDM4IDE3NC44NDRDMTQ3LjQzOCAxODguODc1IDE1Mi44MTMgMjAyLjI4MSAxNjIuNTYyIDIxMi41NDdMMTg3Ljg0NCAyMzkuNDg0TDEzNS4zMTIgMjgxLjgxMkMxMjEuMjE5IDI5Mi43NSAxMTMuMTU2IDMwOS4wNjIgMTEzLjE1NiAzMjYuNTc4QzExMy4xNTYgMzU4LjIzNCAxMzkuNzUgMzg0IDE3Mi40MzggMzg0SDIxMS4zMTNDMjM1LjQwNiAzODQgMjU3LjkzOCAzNzIuNTE2IDI3MS41MzEgMzUzLjI4MUwyODEuNDM0IDMzOS4yODFMMzIxIDM4MS40NjlDMzI0LjA5NCAzODQuNzE5IDMyOS4xMjUgMzg0Ljg1OSAzMzIuMzEyIDM4MS44MjhDMzM1LjUzMSAzNzguODEzIDMzNS42ODggMzczLjc1IDMzMi42ODggMzcwLjUzMUwyOTAuODY5IDMyNS45NDFaTTE3NC4yMTkgMjAxLjU3OEMxNjcuMjUgMTk0LjI1IDE2My40MzggMTg0Ljc1IDE2My40MzggMTc0Ljg0NEMxNjMuNDM4IDE1Ny44NDQgMTc3LjkwNiAxNDQgMTk1LjcxOSAxNDRIMjE4QzIzNS44MTIgMTQ0IDI1MC4yODEgMTU3Ljg0NCAyNTAuMjgxIDE3NC44NDRDMjUwLjI4MSAxODQuMTQxIDI0NS45MzcgMTkyLjg1OSAyMzguMjgxIDE5OC44MTJMMjAwLjMxMiAyMjkuNDIyTDE3NC4yMTkgMjAxLjU3OFpNMjU4LjQ2OSAzNDQuMDMxQzI0Ny44NzUgMzU5LjA0NyAyMzAuMjE5IDM2OCAyMTEuMzEyIDM2OEgxNzIuNDM4QzE0OC41NjIgMzY4IDEyOS4xNTYgMzQ5LjQyMiAxMjkuMTU2IDMyNi41NzhDMTI5LjE1NiAzMTQuMDQ3IDEzNC45NjkgMzAyLjMyOCAxNDUuMjUgMjk0LjM1OUwxOTguODEyIDI1MS4xODhMMjcwLjI1OCAzMjcuMzY1TDI1OC40NjkgMzQ0LjAzMVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareAmpersand(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM290.869 325.941L333.375 265.844C335.937 262.234 335.062 257.234 331.469 254.687C327.844 252.125 322.875 252.969 320.312 256.594L279.693 314.023L211.312 241.109L248.219 211.359C259.687 202.422 266.281 189.109 266.281 174.844C266.281 149.016 244.625 128 218 128H195.719C169.094 128 147.438 149.016 147.438 174.844C147.438 188.875 152.813 202.281 162.562 212.547L187.844 239.484L135.312 281.812C121.219 292.75 113.156 309.062 113.156 326.578C113.156 358.234 139.75 384 172.438 384H211.313C235.406 384 257.938 372.516 271.531 353.281L281.434 339.281L321 381.469C324.094 384.719 329.125 384.859 332.312 381.828C335.531 378.813 335.688 373.75 332.688 370.531L290.869 325.941ZM174.219 201.578C167.25 194.25 163.438 184.75 163.438 174.844C163.438 157.844 177.906 144 195.719 144H218C235.812 144 250.281 157.844 250.281 174.844C250.281 184.141 245.937 192.859 238.281 198.812L200.312 229.422L174.219 201.578ZM258.469 344.031C247.875 359.047 230.219 368 211.312 368H172.438C148.562 368 129.156 349.422 129.156 326.578C129.156 314.047 134.969 302.328 145.25 294.359L198.812 251.188L270.258 327.365L258.469 344.031Z" />
        </Icon>
    </>
}