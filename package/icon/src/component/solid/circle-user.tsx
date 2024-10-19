
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-user` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-user?s=solid circle-user}
 * @preview ![circle-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiAxMjhDMjk1Ljc2NiAxMjggMzI4IDE2MC4yMzYgMzI4IDIwMFMyOTUuNzY2IDI3MiAyNTYgMjcyQzIxNi4yMzggMjcyIDE4NCAyMzkuNzY0IDE4NCAyMDBTMjE2LjIzOCAxMjggMjU2IDEyOFpNMjU2IDQzMkMyMDIuODA3IDQzMiAxNTUuMTU0IDQwOC4xODQgMTIyLjg1NSAzNzAuNzY2QzE0MS42NTggMzQwLjQwMiAxNzQuOTk4IDMyMCAyMTMuMzM0IDMyMEgyOTguNjY2QzMzNy4wMDYgMzIwIDM3MC4zNDQgMzQwLjQgMzg5LjE0NSAzNzAuNzY0QzM1Ni44NDQgNDA4LjE4NCAzMDkuMTkzIDQzMiAyNTYgNDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 128C295.766 128 328 160.236 328 200S295.766 272 256 272C216.238 272 184 239.764 184 200S216.238 128 256 128ZM256 432C202.807 432 155.154 408.184 122.855 370.766C141.658 340.402 174.998 320 213.334 320H298.666C337.006 320 370.344 340.4 389.145 370.764C356.844 408.184 309.193 432 256 432Z" />
        </Icon>
    </>
}