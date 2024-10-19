
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-user` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-user?s=thin circle-user}
 * @preview ![circle-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMjAyLjY1IDQ4MCAxNTMuNjUgNDYxLjE4OCAxMTUuMTM1IDQyOS45MzZDMTE3LjY2NiAzNzcuNzY4IDE2MC41NTkgMzM2IDIxMy4zNDQgMzM2SDI5OC42NTZDMzUxLjQ0MSAzMzYgMzk0LjMzNCAzNzcuNzY4IDM5Ni44NjUgNDI5LjkzNkMzNTguMzUgNDYxLjE4OCAzMDkuMzUgNDgwIDI1NiA0ODBaTTQxMS41NDEgNDE2Ljg0NEM0MDIuOTAyIDM2Mi4xMDcgMzU1Ljc5OSAzMjAgMjk4LjY1NiAzMjBIMjEzLjM0NEMxNTYuMjAxIDMyMCAxMDkuMDk4IDM2Mi4xMDcgMTAwLjQ1OSA0MTYuODQ0QzU4LjMzIDM3Ni4wOTIgMzIgMzE5LjEwNCAzMiAyNTZDMzIgMTMyLjQ4NiAxMzIuNDg2IDMyIDI1NiAzMlM0ODAgMTMyLjQ4NiA0ODAgMjU2QzQ4MCAzMTkuMTA0IDQ1My42NyAzNzYuMDkyIDQxMS41NDEgNDE2Ljg0NFpNMjU2IDEyOEMyMTEuODIgMTI4IDE3NiAxNjMuODE4IDE3NiAyMDhTMjExLjgyIDI4OCAyNTYgMjg4QzMwMC4xODQgMjg4IDMzNiAyNTIuMTgyIDMzNiAyMDhTMzAwLjE4NCAxMjggMjU2IDEyOFpNMjU2IDI3MkMyMjAuNzExIDI3MiAxOTIgMjQzLjI4OSAxOTIgMjA4UzIyMC43MTEgMTQ0IDI1NiAxNDRTMzIwIDE3Mi43MTEgMzIwIDIwOFMyOTEuMjg5IDI3MiAyNTYgMjcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C202.65 480 153.65 461.188 115.135 429.936C117.666 377.768 160.559 336 213.344 336H298.656C351.441 336 394.334 377.768 396.865 429.936C358.35 461.188 309.35 480 256 480ZM411.541 416.844C402.902 362.107 355.799 320 298.656 320H213.344C156.201 320 109.098 362.107 100.459 416.844C58.33 376.092 32 319.104 32 256C32 132.486 132.486 32 256 32S480 132.486 480 256C480 319.104 453.67 376.092 411.541 416.844ZM256 128C211.82 128 176 163.818 176 208S211.82 288 256 288C300.184 288 336 252.182 336 208S300.184 128 256 128ZM256 272C220.711 272 192 243.289 192 208S220.711 144 256 144S320 172.711 320 208S291.289 272 256 272Z" />
        </Icon>
    </>
}