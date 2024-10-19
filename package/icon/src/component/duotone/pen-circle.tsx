
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pen-circle` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-circle?s=duotone pen-circle}
 * @preview ![pen-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkgyNTZDMTIzLjQ1MiAxNiAxNiAxMjMuNDUyIDE2IDI1NlYyNTZDMTYgMzg4LjU0OCAxMjMuNDUyIDQ5NiAyNTYgNDk2SDI1NkMzODguNTQ4IDQ5NiA0OTYgMzg4LjU0OCA0OTYgMjU2VjI1NkM0OTYgMTIzLjQ1MiAzODguNTQ4IDE2IDI1NiAxNlpNMjEwLjc3MSAzNjguMTAyQzE4OC41MjEgMzczLjM0MiAxMzkuMTY2IDM4My44MTIgMTM5LjE2NiAzODMuODEyQzEzOC41MzUgMzgzLjkzOSAxMzcuOTEyIDM4NCAxMzcuMzAzIDM4NEMxMzEuNTkyIDM4NCAxMjcuMDA4IDM3OC43MyAxMjguMTg2IDM3Mi44M0wxNDQuMjg5IDMwMS4yMjFDMTQ1Ljg0IDI5NC4zMjYgMTQ5LjMxNiAyODguMDE0IDE1NC4zMTQgMjgzLjAxNkwyNTUuMzQ0IDE4MS45NjlMMzMwLjAxNiAyNTYuNjM5QzI4OS45NDkgMjk2LjcwNSAyNDkuMzUyIDMzNy4zMDUgMjI4LjQxNCAzNTguMjQyQzIyMy41MjUgMzYzLjEzMSAyMTcuNTAyIDM2Ni41MTggMjEwLjc3MSAzNjguMTAyWk0zNzMuMDkyIDIxMy41NjFMMzUyLjYzOSAyMzQuMDE0TDI3Ny45NjUgMTU5LjM0TDI5OC4zNjUgMTM4LjkzOEMzMDUuNjU2IDEzMS42NDUgMzE1LjIwNyAxMjggMzI0Ljc2NCAxMjhDMzM0LjMxNiAxMjggMzQzLjg3MSAxMzEuNjQ2IDM1MS4xNiAxMzguOTM2TDM3My4wNDEgMTYwLjgxOEMzODcuNjE3IDE3NS4zOTggMzg3LjY3MiAxOTguOTgyIDM3My4wOTIgMjEzLjU2MVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzczLjA0MSAxNjAuODE4TDM1MS4xNiAxMzguOTM2QzM0My44NzEgMTMxLjY0NiAzMzQuMzE3IDEyOCAzMjQuNzY0IDEyOEMzMTUuMjA3IDEyOCAzMDUuNjU3IDEzMS42NDUgMjk4LjM2NiAxMzguOTM4TDI3Ny45NjUgMTU5LjM0TDM1Mi42MzkgMjM0LjAxNEwzNzMuMDkyIDIxMy41NjFDMzg3LjY3MiAxOTguOTgyIDM4Ny42MTcgMTc1LjM5OCAzNzMuMDQxIDE2MC44MThaTTE1NC4zMTUgMjgzLjAxNkMxNDkuMzE3IDI4OC4wMTQgMTQ1Ljg0IDI5NC4zMjYgMTQ0LjI4OSAzMDEuMjIxTDEyOC4xODYgMzcyLjgzQzEyNy4wMDggMzc4LjczIDEzMS41OTIgMzg0IDEzNy4zMDMgMzg0QzEzNy45MTIgMzg0IDEzOC41MzUgMzgzLjkzOSAxMzkuMTY2IDM4My44MTJDMTM5LjE2NiAzODMuODEyIDE4OC41MjIgMzczLjM0MiAyMTAuNzcyIDM2OC4xMDJDMjE3LjUwMiAzNjYuNTE4IDIyMy41MjYgMzYzLjEzMSAyMjguNDE0IDM1OC4yNDJDMjQ5LjM1MiAzMzcuMzA1IDI4OS45NSAyOTYuNzA1IDMzMC4wMTYgMjU2LjYzOUwyNTUuMzQ0IDE4MS45NjlMMTU0LjMxNSAyODMuMDE2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PenCircle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 16H256C123.452 16 16 123.452 16 256V256C16 388.548 123.452 496 256 496H256C388.548 496 496 388.548 496 256V256C496 123.452 388.548 16 256 16ZM210.771 368.102C188.521 373.342 139.166 383.812 139.166 383.812C138.535 383.939 137.912 384 137.303 384C131.592 384 127.008 378.73 128.186 372.83L144.289 301.221C145.84 294.326 149.316 288.014 154.314 283.016L255.344 181.969L330.016 256.639C289.949 296.705 249.352 337.305 228.414 358.242C223.525 363.131 217.502 366.518 210.771 368.102ZM373.092 213.561L352.639 234.014L277.965 159.34L298.365 138.938C305.656 131.645 315.207 128 324.764 128C334.316 128 343.871 131.646 351.16 138.936L373.041 160.818C387.617 175.398 387.672 198.982 373.092 213.561Z" />
            <path d="M373.041 160.818L351.16 138.936C343.871 131.646 334.317 128 324.764 128C315.207 128 305.657 131.645 298.366 138.938L277.965 159.34L352.639 234.014L373.092 213.561C387.672 198.982 387.617 175.398 373.041 160.818ZM154.315 283.016C149.317 288.014 145.84 294.326 144.289 301.221L128.186 372.83C127.008 378.73 131.592 384 137.303 384C137.912 384 138.535 383.939 139.166 383.812C139.166 383.812 188.522 373.342 210.772 368.102C217.502 366.518 223.526 363.131 228.414 358.242C249.352 337.305 289.95 296.705 330.016 256.639L255.344 181.969L154.315 283.016Z" />
        </Icon>
    </>
}