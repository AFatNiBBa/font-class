
import { Icon } from "../../index";

/**
 * A component that renders the `face-rolling-eyes` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-rolling-eyes?s=thin face-rolling-eyes}
 * @preview ![face-rolling-eyes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQxOCAxNiAxNiAxMjMuNDIyIDE2IDI1NlMxMjMuNDE4IDQ5NiAyNTYgNDk2UzQ5NiAzODguNTc4IDQ5NiAyNTZTMzg4LjU4MiAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NCA0ODAgMzIgMzc5LjUxNiAzMiAyNTZTMTMyLjQ4NCAzMiAyNTYgMzJTNDgwIDEzMi40ODQgNDgwIDI1NlMzNzkuNTE2IDQ4MCAyNTYgNDgwWk0zMjAgMzc2SDE5MkMxODcuNTk0IDM3NiAxODQgMzc5LjU3OCAxODQgMzg0UzE4Ny41OTQgMzkyIDE5MiAzOTJIMzIwQzMyNC40MDYgMzkyIDMyOCAzODguNDIyIDMyOCAzODRTMzI0LjQwNiAzNzYgMzIwIDM3NlpNMzUyIDE2MEMzMTYuNjU0IDE2MCAyODggMTg4LjY1MiAyODggMjI0UzMxNi42NTQgMjg4IDM1MiAyODhDMzg3LjM0OCAyODggNDE2IDI1OS4zNDggNDE2IDIyNFMzODcuMzQ4IDE2MCAzNTIgMTYwWk0zNTIgMTc2QzM2MC44MjIgMTc2IDM2OCAxODMuMTc2IDM2OCAxOTJTMzYwLjgyMiAyMDggMzUyIDIwOFMzMzYgMjAwLjgyNCAzMzYgMTkyUzM0My4xNzggMTc2IDM1MiAxNzZaTTM1MiAyNzJDMzI1LjUzMyAyNzIgMzA0IDI1MC40NjkgMzA0IDIyNEMzMDQgMjA5LjQ3MyAzMTAuNjIzIDE5Ni41OSAzMjAuODUyIDE4Ny43ODFDMzIwLjY1MiAxODkuMjIzIDMyMCAxOTAuNTA0IDMyMCAxOTJDMzIwIDIwOS42NzIgMzM0LjMyOCAyMjQgMzUyIDIyNEMzNjkuNjc0IDIyNCAzODQgMjA5LjY3MiAzODQgMTkyQzM4NCAxOTAuNTA0IDM4My4zNDggMTg5LjIyNyAzODMuMTQ4IDE4Ny43ODFDMzkzLjM3NyAxOTYuNTk0IDQwMCAyMDkuNDczIDQwMCAyMjRDNDAwIDI1MC40NjkgMzc4LjQ2NyAyNzIgMzUyIDI3MlpNMjI0IDIyNEMyMjQgMTg4LjY1MiAxOTUuMzQ4IDE2MCAxNjAgMTYwQzEyNC42NTQgMTYwIDk2IDE4OC42NTIgOTYgMjI0UzEyNC42NTQgMjg4IDE2MCAyODhDMTk1LjM0OCAyODggMjI0IDI1OS4zNDggMjI0IDIyNFpNMTYwIDE3NkMxNjguODIyIDE3NiAxNzYgMTgzLjE3NiAxNzYgMTkyUzE2OC44MjIgMjA4IDE2MCAyMDhTMTQ0IDIwMC44MjQgMTQ0IDE5MlMxNTEuMTc4IDE3NiAxNjAgMTc2Wk0xNjAgMjcyQzEzMy41MzMgMjcyIDExMiAyNTAuNDY5IDExMiAyMjRDMTEyIDIwOS40NzMgMTE4LjYyMyAxOTYuNTkgMTI4Ljg1MiAxODcuNzgxQzEyOC42NTIgMTg5LjIyMyAxMjggMTkwLjUwNCAxMjggMTkyQzEyOCAyMDkuNjcyIDE0Mi4zMjggMjI0IDE2MCAyMjRDMTc3LjY3NCAyMjQgMTkyIDIwOS42NzIgMTkyIDE5MkMxOTIgMTkwLjUwNCAxOTEuMzQ4IDE4OS4yMjcgMTkxLjE0OCAxODcuNzgxQzIwMS4zNzcgMTk2LjU5NCAyMDggMjA5LjQ3MyAyMDggMjI0QzIwOCAyNTAuNDY5IDE4Ni40NjcgMjcyIDE2MCAyNzJaIi8+PC9zdmc+|width=32|height=32)
 */
const FaceRollingEyes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.418 16 16 123.422 16 256S123.418 496 256 496S496 388.578 496 256S388.582 16 256 16ZM256 480C132.484 480 32 379.516 32 256S132.484 32 256 32S480 132.484 480 256S379.516 480 256 480ZM320 376H192C187.594 376 184 379.578 184 384S187.594 392 192 392H320C324.406 392 328 388.422 328 384S324.406 376 320 376ZM352 160C316.654 160 288 188.652 288 224S316.654 288 352 288C387.348 288 416 259.348 416 224S387.348 160 352 160ZM352 176C360.822 176 368 183.176 368 192S360.822 208 352 208S336 200.824 336 192S343.178 176 352 176ZM352 272C325.533 272 304 250.469 304 224C304 209.473 310.623 196.59 320.852 187.781C320.652 189.223 320 190.504 320 192C320 209.672 334.328 224 352 224C369.674 224 384 209.672 384 192C384 190.504 383.348 189.227 383.148 187.781C393.377 196.594 400 209.473 400 224C400 250.469 378.467 272 352 272ZM224 224C224 188.652 195.348 160 160 160C124.654 160 96 188.652 96 224S124.654 288 160 288C195.348 288 224 259.348 224 224ZM160 176C168.822 176 176 183.176 176 192S168.822 208 160 208S144 200.824 144 192S151.178 176 160 176ZM160 272C133.533 272 112 250.469 112 224C112 209.473 118.623 196.59 128.852 187.781C128.652 189.223 128 190.504 128 192C128 209.672 142.328 224 160 224C177.674 224 192 209.672 192 192C192 190.504 191.348 189.227 191.148 187.781C201.377 196.594 208 209.473 208 224C208 250.469 186.467 272 160 272Z" />
    </Icon>
);

export default FaceRollingEyes;