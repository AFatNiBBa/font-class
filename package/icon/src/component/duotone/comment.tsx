
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `comment` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment?s=duotone comment}
 * @preview ![comment](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAzMkMxMTQuNjI1IDMyIDAgMTI1LjEyNSAwIDI0MEMwIDI4OS42MjUgMjEuMzc1IDMzNSA1NyAzNzAuNzVDNDQuNSA0MjEuMTI1IDIuNzUgNDY2IDIuMjUgNDY2LjVDMCA0NjguNzUgLTAuNjI1IDQ3Mi4yNSAwLjc1IDQ3NS4yNUMyIDQ3OC4yNSA0Ljc1IDQ4MCA4IDQ4MEM3NC4yNSA0ODAgMTI0IDQ0OC4yNSAxNDguNjI1IDQyOC42MjVDMTgxLjI1IDQ0MC44NzUgMjE3LjYyNSA0NDggMjU2IDQ0OEMzOTcuMzc1IDQ0OCA1MTIgMzU0Ljg3NSA1MTIgMjQwUzM5Ny4zNzUgMzIgMjU2IDMyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Comment(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C2 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32Z" />
        </Icon>
    </>
}