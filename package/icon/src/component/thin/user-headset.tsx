
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-headset` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-headset?s=thin user-headset}
 * @preview ![user-headset](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTQuNjY0IDM1MkgxMzMuMzM2QzU5LjY5OSAzNTIgMCA0MTEuNjk1IDAgNDg1LjMzMkMwIDUwMC4wNTkgMTEuOTQxIDUxMiAyNi42NjQgNTEySDQyMS4zMzZDNDM2LjA1OSA1MTIgNDQ4IDUwMC4wNTkgNDQ4IDQ4NS4zMzJDNDQ4IDQxMS42OTUgMzg4LjMwNyAzNTIgMzE0LjY2NCAzNTJaTTQyMS4zMzYgNDk2SDI2LjY2NEMyMC43ODMgNDk2IDE2IDQ5MS4yMTUgMTYgNDg1LjMzMkMxNiA0MjAuNjM1IDY4LjYzNyAzNjggMTMzLjMzNiAzNjhIMzE0LjY2NEMzNzkuMzYzIDM2OCA0MzIgNDIwLjYzNSA0MzIgNDg1LjMzMkM0MzIgNDkxLjIxNSA0MjcuMjE3IDQ5NiA0MjEuMzM2IDQ5NlpNNjQgMTc2QzY0IDg1LjcyOCAxMzkuMTYyIDEyLjY2NyAyMzAuMTg3IDE2LjExN0MzMTYuNzY1IDE5LjM5OSAzODQgOTMuMjkyIDM4NCAxNzkuOTMzVjIxNkMzODQgMjY0LjYwMSAzNDQuNjAxIDMwNCAyOTYgMzA0SDI2Ny4wOTZDMjcxLjU4NiAyOTYuNDM2IDI3NC4xNTIgMjg3LjY0OCAyNjkuNjMgMjc2LjgyOUMyNjQuMjUyIDI2My45NjEgMjUxLjE0IDI1NiAyMzcuMTkzIDI1NkwyMDkuMzc2IDI1NkMxOTIuNjY0IDI1NiAxNzcuNzM5IDI2OC4yMTcgMTc2LjE1MSAyODQuODU0QzE3NC4zMjkgMzAzLjkzOSAxODkuMjg4IDMyMCAyMDggMzIwSDI5NkMzNTMuNDM4IDMyMCA0MDAgMjczLjQzOCA0MDAgMjE2VjE4MC4zMzNDNDAwIDg1LjAzNiAzMjYuMDU2IDMuNzUzIDIzMC44MjggMC4xM0MxMzAuNzAxIC0zLjY3OSA0OCA3Ni43MDIgNDggMTc2VjIxNkM0OCAyMjAuNDE4IDUxLjU4MiAyMjQgNTYgMjI0SDU2QzYwLjQxOCAyMjQgNjQgMjIwLjQxOCA2NCAyMTZWMTc2Wk0yNDAgMzA0SDIwOEMxOTkuMTc4IDMwNCAxOTIgMjk2LjgyMiAxOTIgMjg4UzE5OS4xNzggMjcyIDIwOCAyNzJIMjQwQzI0OC44MjIgMjcyIDI1NiAyNzkuMTc4IDI1NiAyODhTMjQ4LjgyMiAzMDQgMjQwIDMwNFpNMjI0IDgwQzI4NS43NSA4MCAzMzYgMTMwLjI1IDMzNiAxOTJDMzM2IDIxNi40MzggMzI4LjI1IDIzOS42ODggMzEzLjU5NCAyNTkuMTg4QzMxMC45MzggMjYyLjcxOSAzMTEuNjU2IDI2Ny43NSAzMTUuMTg4IDI3MC40MDZDMzE2LjYyNSAyNzEuNDY5IDMxOC4zMTIgMjcyIDMyMCAyNzJDMzIyLjQzOCAyNzIgMzI0LjgxMiAyNzAuOTA2IDMyNi40MDYgMjY4LjgxMkMzNDMuMTU2IDI0Ni41IDM1MiAyMTkuOTM4IDM1MiAxOTJDMzUyIDEyMS40MDYgMjk0LjU5NCA2NCAyMjQgNjRTOTYgMTIxLjQwNiA5NiAxOTJDOTYgMjE5LjkzOCAxMDQuODQ0IDI0Ni41IDEyMS41OTQgMjY4LjgxMkMxMjQuMzEyIDI3Mi4zNzUgMTI5LjMxMiAyNzMgMTMyLjgxMiAyNzAuNDA2QzEzNi4zNDQgMjY3Ljc1IDEzNy4wNjIgMjYyLjcxOSAxMzQuNDA2IDI1OS4xODhDMTE5Ljc1IDIzOS42ODggMTEyIDIxNi40MzggMTEyIDE5MkMxMTIgMTMwLjI1IDE2Mi4yNSA4MCAyMjQgODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UserHeadset(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M314.664 352H133.336C59.699 352 0 411.695 0 485.332C0 500.059 11.941 512 26.664 512H421.336C436.059 512 448 500.059 448 485.332C448 411.695 388.307 352 314.664 352ZM421.336 496H26.664C20.783 496 16 491.215 16 485.332C16 420.635 68.637 368 133.336 368H314.664C379.363 368 432 420.635 432 485.332C432 491.215 427.217 496 421.336 496ZM64 176C64 85.728 139.162 12.667 230.187 16.117C316.765 19.399 384 93.292 384 179.933V216C384 264.601 344.601 304 296 304H267.096C271.586 296.436 274.152 287.648 269.63 276.829C264.252 263.961 251.14 256 237.193 256L209.376 256C192.664 256 177.739 268.217 176.151 284.854C174.329 303.939 189.288 320 208 320H296C353.438 320 400 273.438 400 216V180.333C400 85.036 326.056 3.753 230.828 0.13C130.701 -3.679 48 76.702 48 176V216C48 220.418 51.582 224 56 224H56C60.418 224 64 220.418 64 216V176ZM240 304H208C199.178 304 192 296.822 192 288S199.178 272 208 272H240C248.822 272 256 279.178 256 288S248.822 304 240 304ZM224 80C285.75 80 336 130.25 336 192C336 216.438 328.25 239.688 313.594 259.188C310.938 262.719 311.656 267.75 315.188 270.406C316.625 271.469 318.312 272 320 272C322.438 272 324.812 270.906 326.406 268.812C343.156 246.5 352 219.938 352 192C352 121.406 294.594 64 224 64S96 121.406 96 192C96 219.938 104.844 246.5 121.594 268.812C124.312 272.375 129.312 273 132.812 270.406C136.344 267.75 137.062 262.719 134.406 259.188C119.75 239.688 112 216.438 112 192C112 130.25 162.25 80 224 80Z" />
        </Icon>
    </>
}