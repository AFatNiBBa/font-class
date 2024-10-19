
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `lamp-floor` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lamp-floor?s=solid lamp-floor}
 * @preview ![lamp-floor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYuMDA2IDQ0OEgyMjQuMDAzVjI1NS43NUgxNTkuOTk3VjQ0OEgxMjcuOTk0Qzk5LjYxNiA0NDggNzIuOTg4IDQ2Ni41IDY0LjczNyA0OTIuMTI1QzYxLjQ4NyA1MDIgNjkuODYzIDUxMiA4MC4yMzkgNTEySDMwMy43NjFDMzE0LjEzNyA1MTIgMzIyLjUxMyA1MDIgMzE5LjI2MyA0OTIuMTI1QzMxMS4wMTIgNDY2LjUgMjg0LjM4NCA0NDggMjU2LjAwNiA0NDhaTTM4MS4zOTQgMTc5LjM3NUwzMTIuNzYyIDE5LjM3NUMzMDcuNzYyIDcuNjI1IDI5Ni4yNiAwIDI4My4zODQgMEgxMDAuNjE2Qzg3Ljc0IDAgNzYuMjM4IDcuNjI1IDcxLjIzOCAxOS4zNzVMMi42MDYgMTc5LjM3NUMtMS42NDQgMTg5LjI1IC0wLjY0NCAyMDAuNjI1IDUuMjMxIDIwOS42MjVDMTEuMjMyIDIxOC42MjUgMjEuMjMzIDIyNCAzMS45ODQgMjI0SDM1Mi4wMTZDMzYyLjc2NyAyMjQgMzcyLjc2OCAyMTguNjI1IDM3OC43NjkgMjA5LjYyNUMzODQuNjQ0IDIwMC42MjUgMzg1LjY0NCAxODkuMjUgMzgxLjM5NCAxNzkuMzc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LampFloor(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M256.006 448H224.003V255.75H159.997V448H127.994C99.616 448 72.988 466.5 64.737 492.125C61.487 502 69.863 512 80.239 512H303.761C314.137 512 322.513 502 319.263 492.125C311.012 466.5 284.384 448 256.006 448ZM381.394 179.375L312.762 19.375C307.762 7.625 296.26 0 283.384 0H100.616C87.74 0 76.238 7.625 71.238 19.375L2.606 179.375C-1.644 189.25 -0.644 200.625 5.231 209.625C11.232 218.625 21.233 224 31.984 224H352.016C362.767 224 372.768 218.625 378.769 209.625C384.644 200.625 385.644 189.25 381.394 179.375Z" />
        </Icon>
    </>
}