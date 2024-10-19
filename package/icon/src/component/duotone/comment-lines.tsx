
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-lines` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-lines?s=duotone comment-lines}
 * @preview ![comment-lines](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAzMkMxMTQuNjI1IDMyIDAgMTI1LjEyNSAwIDI0MEMwIDI4OS42MjUgMjEuMzc1IDMzNSA1NyAzNzAuNzVDNDQuNSA0MjEuMTI1IDIuNzUgNDY2IDIuMjUgNDY2LjVDMCA0NjguNzUgLTAuNjI1IDQ3Mi4yNSAwLjc1IDQ3NS4yNUMyIDQ3OC4yNSA0Ljc1IDQ4MCA4IDQ4MEM3NC4yNSA0ODAgMTI0IDQ0OC4yNSAxNDguNjI1IDQyOC42MjVDMTgxLjI1IDQ0MC44NzUgMjE3LjYyNSA0NDggMjU2IDQ0OEMzOTcuMzc1IDQ0OCA1MTIgMzU0Ljg3NSA1MTIgMjQwUzM5Ny4zNzUgMzIgMjU2IDMyWk0yNjQgMzIwSDE1MkMxMzguNzUgMzIwIDEyOCAzMDkuMjUgMTI4IDI5NlMxMzguNzUgMjcyIDE1MiAyNzJIMjY0QzI3Ny4yNSAyNzIgMjg4IDI4Mi43NSAyODggMjk2UzI3Ny4yNSAzMjAgMjY0IDMyMFpNMzYwIDIyNEgxNTJDMTM4Ljc1IDIyNCAxMjggMjEzLjI1IDEyOCAyMDBTMTM4Ljc1IDE3NiAxNTIgMTc2SDM2MEMzNzMuMjUgMTc2IDM4NCAxODYuNzUgMzg0IDIwMFMzNzMuMjUgMjI0IDM2MCAyMjRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI2NCAyNzJIMTUyQzEzOC43NSAyNzIgMTI4IDI4Mi43NSAxMjggMjk2UzEzOC43NSAzMjAgMTUyIDMyMEgyNjRDMjc3LjI1IDMyMCAyODggMzA5LjI1IDI4OCAyOTZTMjc3LjI1IDI3MiAyNjQgMjcyWk0zNjAgMTc2SDE1MkMxMzguNzUgMTc2IDEyOCAxODYuNzUgMTI4IDIwMFMxMzguNzUgMjI0IDE1MiAyMjRIMzYwQzM3My4yNSAyMjQgMzg0IDIxMy4yNSAzODQgMjAwUzM3My4yNSAxNzYgMzYwIDE3NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CommentLines(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C2 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32ZM264 320H152C138.75 320 128 309.25 128 296S138.75 272 152 272H264C277.25 272 288 282.75 288 296S277.25 320 264 320ZM360 224H152C138.75 224 128 213.25 128 200S138.75 176 152 176H360C373.25 176 384 186.75 384 200S373.25 224 360 224Z" />
            <path d="M264 272H152C138.75 272 128 282.75 128 296S138.75 320 152 320H264C277.25 320 288 309.25 288 296S277.25 272 264 272ZM360 176H152C138.75 176 128 186.75 128 200S138.75 224 152 224H360C373.25 224 384 213.25 384 200S373.25 176 360 176Z" />
        </Icon>
    </>
}