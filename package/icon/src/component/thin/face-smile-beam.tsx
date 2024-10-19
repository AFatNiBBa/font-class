
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-beam` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-beam?s=thin face-smile-beam}
 * @preview ![face-smile-beam](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTkuOTM4IDMyNEMzMzguNTYyIDM2MSAyOTguNzE5IDM4NCAyNTYgMzg0UzE3My40MzggMzYxIDE1Mi4wNjIgMzI0QzE0OS43ODEgMzIwLjE1NiAxNDQuODQ0IDMxOC44NDQgMTQxLjEyNSAzMjEuMDc4QzEzNy4yODEgMzIzLjI4MSAxMzYgMzI4LjE3MiAxMzguMTg4IDMzMkMxNjIuNDM4IDM3My45NTMgMjA3LjU5NCA0MDAgMjU2IDQwMFMzNDkuNTYyIDM3My45NTMgMzczLjgxMiAzMzJDMzc2IDMyOC4xNzIgMzc0LjcxOSAzMjMuMjgxIDM3MC44NzUgMzIxLjA3OEMzNjcuMDk0IDMxOC44NDQgMzYyLjE1NiAzMjAuMTU2IDM1OS45MzggMzI0Wk0xNzYgMTY4QzE5Ni45NjkgMTY4IDIxMi40NjkgMjEwLjkwNiAyMTYuMjM0IDIyNS45MzhDMjE3LjE1NiAyMjkuNTYyIDIyMC40MDYgMjMyIDIyNCAyMzJDMjI0LjY0MSAyMzIgMjI1LjI5NyAyMzEuOTA2IDIyNS45MzggMjMxLjc1QzIzMC4yMzQgMjMwLjY4OCAyMzIuODI4IDIyNi4zNDQgMjMxLjc2NiAyMjIuMDYyQzIyOS45NjkgMjE0Ljg3NSAyMTMuMTcyIDE1MiAxNzYgMTUyUzEyMi4wMzEgMjE0Ljg3NSAxMjAuMjM0IDIyMi4wNjJDMTE5LjE3MiAyMjYuMzQ0IDEyMS43NjYgMjMwLjY4OCAxMjYuMDYyIDIzMS43NUMxMzAuMjUgMjMyLjc4MSAxMzQuNjcyIDIzMC4xODggMTM1Ljc2NiAyMjUuOTM4QzEzOS41MzEgMjEwLjkwNiAxNTUuMDMxIDE2OCAxNzYgMTY4Wk0zMzYgMTUyQzI5OC44MjggMTUyIDI4Mi4wMzEgMjE0Ljg3NSAyODAuMjM0IDIyMi4wNjJDMjc5LjE3MiAyMjYuMzQ0IDI4MS43NjYgMjMwLjY4NyAyODYuMDYyIDIzMS43NUMyOTAuMjE5IDIzMi43ODEgMjk0LjY3MiAyMzAuMTg4IDI5NS43NjYgMjI1LjkzOEMyOTkuNTMxIDIxMC45MDYgMzE1LjAzMSAxNjggMzM2IDE2OFMzNzIuNDY5IDIxMC45MDYgMzc2LjIzNCAyMjUuOTM4QzM3Ny4xNTYgMjI5LjU2MiAzODAuNDA2IDIzMiAzODQgMjMyQzM4NC42NDEgMjMyIDM4NS4yOTcgMjMxLjkwNiAzODUuOTM4IDIzMS43NUMzOTAuMjM0IDIzMC42ODggMzkyLjgyOCAyMjYuMzQ0IDM5MS43NjYgMjIyLjA2MkMzODkuOTY5IDIxNC44NzUgMzczLjE3MiAxNTIgMzM2IDE1MlpNMjU2IDE2QzEyMy40NTMgMTYgMTYgMTIzLjQ1MyAxNiAyNTZTMTIzLjQ1MyA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0NyA0OTYgMjU2UzM4OC41NDcgMTYgMjU2IDE2Wk0yNTYgNDgwQzEzMi40ODQgNDgwIDMyIDM3OS41MTYgMzIgMjU2UzEzMi40ODQgMzIgMjU2IDMyUzQ4MCAxMzIuNDg0IDQ4MCAyNTZTMzc5LjUxNiA0ODAgMjU2IDQ4MFoiLz48L3N2Zz4=|width=32|height=32)
 */
const FaceSmileBeam: typeof Icon = x => (
    <Icon {...x}>
        <path d="M359.938 324C338.562 361 298.719 384 256 384S173.438 361 152.062 324C149.781 320.156 144.844 318.844 141.125 321.078C137.281 323.281 136 328.172 138.188 332C162.438 373.953 207.594 400 256 400S349.562 373.953 373.812 332C376 328.172 374.719 323.281 370.875 321.078C367.094 318.844 362.156 320.156 359.938 324ZM176 168C196.969 168 212.469 210.906 216.234 225.938C217.156 229.562 220.406 232 224 232C224.641 232 225.297 231.906 225.938 231.75C230.234 230.688 232.828 226.344 231.766 222.062C229.969 214.875 213.172 152 176 152S122.031 214.875 120.234 222.062C119.172 226.344 121.766 230.688 126.062 231.75C130.25 232.781 134.672 230.188 135.766 225.938C139.531 210.906 155.031 168 176 168ZM336 152C298.828 152 282.031 214.875 280.234 222.062C279.172 226.344 281.766 230.687 286.062 231.75C290.219 232.781 294.672 230.188 295.766 225.938C299.531 210.906 315.031 168 336 168S372.469 210.906 376.234 225.938C377.156 229.562 380.406 232 384 232C384.641 232 385.297 231.906 385.938 231.75C390.234 230.688 392.828 226.344 391.766 222.062C389.969 214.875 373.172 152 336 152ZM256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256S388.547 16 256 16ZM256 480C132.484 480 32 379.516 32 256S132.484 32 256 32S480 132.484 480 256S379.516 480 256 480Z" />
    </Icon>
);

export default FaceSmileBeam;