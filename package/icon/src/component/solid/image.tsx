
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `image` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/image?s=solid image}
 * @preview ![image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjU0IDQ4My4zNDYgMzIgNDQ4IDMyWk0xMTIgOTZDMTM4LjUxIDk2IDE2MCAxMTcuNDkyIDE2MCAxNDRTMTM4LjUxIDE5MiAxMTIgMTkyUzY0IDE3MC41MDggNjQgMTQ0Uzg1LjQ5IDk2IDExMiA5NlpNNDQ2LjEyMSA0MDcuNTUxQzQ0My4zMzYgNDEyLjc1NCA0MzcuOTE0IDQxNiA0MzIuMDE0IDQxNkg4Mi4wMTNDNzUuOTkyIDQxNiA3MC40OCA0MTIuNjIxIDY3Ljc1MiA0MDcuMjVDNjUuMDIxIDQwMS44ODMgNjUuNTM3IDM5NS40MzggNjkuMDg2IDM5MC41NzRMMTM5LjA4NiAyOTQuNTc0QzE0Mi4wOTggMjkwLjQ0MSAxNDYuOTAyIDI4OCAxNTIuMDE0IDI4OFMxNjEuOTMgMjkwLjQ0MSAxNjQuOTQxIDI5NC41NzRMMTk3LjM5NiAzMzkuMDg2TDI5MC43MDEgMTk5LjEyNUMyOTMuNjY4IDE5NC42NzIgMjk4LjY2NCAxOTIgMzA0LjAxNCAxOTJTMzE0LjM1OSAxOTQuNjcyIDMxNy4zMjYgMTk5LjEyNUw0NDUuMzI2IDM5MS4xMjVDNDQ4LjYgMzk2LjAzNSA0NDguOTA0IDQwMi4zNDggNDQ2LjEyMSA0MDcuNTUxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Image(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32ZM112 96C138.51 96 160 117.492 160 144S138.51 192 112 192S64 170.508 64 144S85.49 96 112 96ZM446.121 407.551C443.336 412.754 437.914 416 432.014 416H82.013C75.992 416 70.48 412.621 67.752 407.25C65.021 401.883 65.537 395.438 69.086 390.574L139.086 294.574C142.098 290.441 146.902 288 152.014 288S161.93 290.441 164.941 294.574L197.396 339.086L290.701 199.125C293.668 194.672 298.664 192 304.014 192S314.359 194.672 317.326 199.125L445.326 391.125C448.6 396.035 448.904 402.348 446.121 407.551Z" />
        </Icon>
    </>
}