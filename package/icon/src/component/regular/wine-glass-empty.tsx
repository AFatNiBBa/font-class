
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wine-glass-empty` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass-empty?s=regular wine-glass-empty}
 * @preview ![wine-glass-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDggNDY0SDE4NC4wMDZWMzQ4LjVDMjU2LjY0NiAzMzYgMzEwLjI4MyAyNjkuNzUgMzAzLjQwNiAxOTIuNjI1TDI4Ny41MjkgMTQuNUMyODYuNzc3IDYuMjUgMjc5LjkwMiAwIDI3MS43NzUgMEg0OC4yMjVDNDAuMDk4IDAgMzMuMjIzIDYuMjUgMzIuNDcxIDE0LjVMMTYuNTk0IDE5Mi42MjVDOS43MTcgMjY5Ljc1IDYzLjM1NCAzMzYgMTM1Ljk5NCAzNDguNVY0NjRINzJDNTguNzUgNDY0IDQ4IDQ3NC43NSA0OCA0ODhTNTguNzUgNTEyIDcyIDUxMkgyNDhDMjYxLjI1IDUxMiAyNzIgNTAxLjI1IDI3MiA0ODhTMjYxLjI1IDQ2NCAyNDggNDY0Wk02NC4zNTQgMTk3TDc3LjczMyA0OEgyNDIuMjY3TDI1NS42NDYgMTk3QzI2MC42NDIgMjUzLjU0NyAyMTcuODAxIDMwNCAxNjAgMzA0QzEwMi4xMzcgMzA0IDU5LjM1OCAyNTMuNTMzIDY0LjM1NCAxOTdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function WineGlassEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M248 464H184.006V348.5C256.646 336 310.283 269.75 303.406 192.625L287.529 14.5C286.777 6.25 279.902 0 271.775 0H48.225C40.098 0 33.223 6.25 32.471 14.5L16.594 192.625C9.717 269.75 63.354 336 135.994 348.5V464H72C58.75 464 48 474.75 48 488S58.75 512 72 512H248C261.25 512 272 501.25 272 488S261.25 464 248 464ZM64.354 197L77.733 48H242.267L255.646 197C260.642 253.547 217.801 304 160 304C102.137 304 59.358 253.533 64.354 197Z" />
        </Icon>
    </>
}