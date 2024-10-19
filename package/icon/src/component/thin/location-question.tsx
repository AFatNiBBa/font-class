
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `location-question` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-question?s=thin location-question}
 * @preview ![location-question](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMEM4NS45NjkgMCAwIDg1Ljk2OSAwIDE5MkMwIDI2OS40MDYgMjYuOTY5IDI5MS4wMzEgMTcyLjI4MSA1MDEuNjc2QzE3Ny4wNDcgNTA4LjU1OSAxODQuNTIzIDUxMiAxOTIgNTEyUzIwNi45NTMgNTA4LjU1OSAyMTEuNzE5IDUwMS42NzZDMzU3LjAzMSAyOTEuMDMxIDM4NCAyNjkuNDA2IDM4NCAxOTJDMzg0IDg1Ljk2OSAyOTguMDMxIDAgMTkyIDBaTTE5OC41NjQgNDkyLjU2NkMxOTYuNDk2IDQ5NS41NTUgMTkzLjU2NCA0OTYgMTkyIDQ5NlMxODcuNTA0IDQ5NS41NTUgMTg1LjQ1MSA0OTIuNTlDMTU5LjUyIDQ1NSAxMzcuMzUyIDQyMy40MjIgMTE4LjQzMiAzOTYuNDY5QzMxLjYzOSAyNzIuODMyIDE2IDI1MC41NTUgMTYgMTkyQzE2IDk0Ljk1MyA5NC45NTMgMTYgMTkyIDE2UzM2OCA5NC45NTMgMzY4IDE5MkMzNjggMjUwLjU1NSAzNTIuMzYxIDI3Mi44MzIgMjY1LjU2OCAzOTYuNDY5QzI0Ni42NDggNDIzLjQyMiAyMjQuNDggNDU1IDE5OC41NjQgNDkyLjU2NlpNMTkyIDMxMkMxODMuMTc4IDMxMiAxNzYgMzE5LjE4IDE3NiAzMjguMDA0QzE3NiAzMzYuODI0IDE4My4xNzggMzQ0IDE5MiAzNDRTMjA4IDMzNi44MjQgMjA4IDMyOC4wMDRDMjA4IDMxOS4xOCAyMDAuODIyIDMxMiAxOTIgMzEyWk0xOTIgOTZDMTUyLjMxMiA5NiAxMjAgMTI0LjM3NSAxMjAgMTU5LjI2NkMxMjAgMTYzLjY4OCAxMjMuNTk0IDE2Ny4yNjYgMTI4IDE2Ny4yNjZTMTM2IDE2My42ODggMTM2IDE1OS4yNjZDMTM2IDEzMy4yMDMgMTYxLjEyNSAxMTIgMTkyIDExMlMyNDggMTMzLjIwMyAyNDggMTU5LjI2NkMyNDggMTc1LjkyMiAyMzcuOTA2IDE5MS4wMzEgMjIxIDE5OS43MDNDMTk4LjE4OCAyMTEuNDIyIDE4NCAyMzQuOTUzIDE4NCAyNjEuMDc4QzE4NCAyNjUuNSAxODcuNTk0IDI2OS4wNzggMTkyIDI2OS4wNzhTMjAwIDI2NS41IDIwMCAyNjEuMDc4QzIwMCAyNDAuOTY5IDIxMC44NDQgMjIyLjkwNiAyMjguMzEyIDIxMy45MzhDMjUwLjMxMiAyMDIuNjQxIDI2NCAxODEuNzAzIDI2NCAxNTkuMjY2QzI2NCAxMjQuMzc1IDIzMS42ODggOTYgMTkyIDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LocationQuestion(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 0C85.969 0 0 85.969 0 192C0 269.406 26.969 291.031 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.031 384 269.406 384 192C384 85.969 298.031 0 192 0ZM198.564 492.566C196.496 495.555 193.564 496 192 496S187.504 495.555 185.451 492.59C159.52 455 137.352 423.422 118.432 396.469C31.639 272.832 16 250.555 16 192C16 94.953 94.953 16 192 16S368 94.953 368 192C368 250.555 352.361 272.832 265.568 396.469C246.648 423.422 224.48 455 198.564 492.566ZM192 312C183.178 312 176 319.18 176 328.004C176 336.824 183.178 344 192 344S208 336.824 208 328.004C208 319.18 200.822 312 192 312ZM192 96C152.312 96 120 124.375 120 159.266C120 163.688 123.594 167.266 128 167.266S136 163.688 136 159.266C136 133.203 161.125 112 192 112S248 133.203 248 159.266C248 175.922 237.906 191.031 221 199.703C198.188 211.422 184 234.953 184 261.078C184 265.5 187.594 269.078 192 269.078S200 265.5 200 261.078C200 240.969 210.844 222.906 228.312 213.938C250.312 202.641 264 181.703 264 159.266C264 124.375 231.688 96 192 96Z" />
        </Icon>
    </>
}