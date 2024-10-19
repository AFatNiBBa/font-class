
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `wine-glass` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass?s=regular wine-glass}
 * @preview ![wine-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDggNDY0SDE4NC4wMDZWMzQ4LjVDMjU2LjY0NyAzMzYgMzEwLjI4MyAyNjkuNzUgMzAzLjQwNiAxOTIuNjI1TDI4Ny41MyAxNC41QzI4Ni43NzggNi4yNSAyNzkuOTAzIDAgMjcxLjc3NiAwSDQ4LjIyNUM0MC4wOTggMCAzMy4yMjMgNi4yNSAzMi40NzEgMTQuNUwxNi41OTQgMTkyLjYyNUM5LjcxNyAyNjkuNzUgNjMuMzU0IDMzNiAxMzUuOTk0IDM0OC41VjQ2NEg3MkM1OC43NSA0NjQgNDggNDc0Ljc1IDQ4IDQ4OFM1OC43NSA1MTIgNzIgNTEySDI0OEMyNjEuMjUgNTEyIDI3MiA1MDEuMjUgMjcyIDQ4OFMyNjEuMjUgNDY0IDI0OCA0NjRaTTI0Mi4yNjggNDhMMjQ5LjQ1MSAxMjhINzAuNTQ5TDc3LjczMyA0OEgyNDIuMjY4Wk02NC4zNTQgMTk3TDY2LjIzOSAxNzZIMjUzLjc2MkwyNTUuNjQ3IDE5N0MyNjAuNjQzIDI1My41NDcgMjE3LjgwMSAzMDQgMTYwIDMwNEMxMDIuMTM3IDMwNCA1OS4zNTggMjUzLjUzMyA2NC4zNTQgMTk3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WineGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M248 464H184.006V348.5C256.647 336 310.283 269.75 303.406 192.625L287.53 14.5C286.778 6.25 279.903 0 271.776 0H48.225C40.098 0 33.223 6.25 32.471 14.5L16.594 192.625C9.717 269.75 63.354 336 135.994 348.5V464H72C58.75 464 48 474.75 48 488S58.75 512 72 512H248C261.25 512 272 501.25 272 488S261.25 464 248 464ZM242.268 48L249.451 128H70.549L77.733 48H242.268ZM64.354 197L66.239 176H253.762L255.647 197C260.643 253.547 217.801 304 160 304C102.137 304 59.358 253.533 64.354 197Z" />
        </Icon>
    </>
}