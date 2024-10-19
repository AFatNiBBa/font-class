
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-user` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-user?s=duotone circle-user}
 * @preview ![circle-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDEyOEMyOTUuNzY2IDEyOCAzMjggMTYwLjIzNiAzMjggMjAwUzI5NS43NjYgMjcyIDI1NiAyNzJDMjE2LjIzOCAyNzIgMTg0IDIzOS43NjQgMTg0IDIwMFMyMTYuMjM4IDEyOCAyNTYgMTI4Wk0yNTYgNDMyQzIwMi44MDcgNDMyIDE1NS4xNTQgNDA4LjE4NCAxMjIuODU1IDM3MC43NjZDMTQxLjY1OCAzNDAuNDAyIDE3NC45OTggMzIwIDIxMy4zMzQgMzIwSDI5OC42NjZDMzM3LjAwNiAzMjAgMzcwLjM0NCAzNDAuNCAzODkuMTQ1IDM3MC43NjRDMzU2Ljg0NCA0MDguMTg0IDMwOS4xOTMgNDMyIDI1NiA0MzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1Ni4xNDUgMjcyQzI5NS45MSAyNzIgMzI4LjE0NSAyMzkuNzY0IDMyOC4xNDUgMjAwUzI5NS45MSAxMjggMjU2LjE0NSAxMjhDMjE2LjM4MyAxMjggMTg0LjE0NSAxNjAuMjM2IDE4NC4xNDUgMjAwUzIxNi4zODMgMjcyIDI1Ni4xNDUgMjcyWk0yOTguODExIDMyMEgyMTMuNDc5QzE3NS4xNDMgMzIwIDE0MS44MDMgMzQwLjQwMiAxMjMgMzcwLjc2NkMxNTUuMjk5IDQwOC4xODQgMjAyLjk1MSA0MzIgMjU2LjE0NSA0MzJTMzU2Ljk4OCA0MDguMTg0IDM4OS4yODkgMzcwLjc2NEMzNzAuNDg4IDM0MC40IDMzNy4xNSAzMjAgMjk4LjgxMSAzMjBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 128C295.766 128 328 160.236 328 200S295.766 272 256 272C216.238 272 184 239.764 184 200S216.238 128 256 128ZM256 432C202.807 432 155.154 408.184 122.855 370.766C141.658 340.402 174.998 320 213.334 320H298.666C337.006 320 370.344 340.4 389.145 370.764C356.844 408.184 309.193 432 256 432Z" />
            <path d="M256.145 272C295.91 272 328.145 239.764 328.145 200S295.91 128 256.145 128C216.383 128 184.145 160.236 184.145 200S216.383 272 256.145 272ZM298.811 320H213.479C175.143 320 141.803 340.402 123 370.766C155.299 408.184 202.951 432 256.145 432S356.988 408.184 389.289 370.764C370.488 340.4 337.15 320 298.811 320Z" />
        </Icon>
    </>
}