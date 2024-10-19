
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `option` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/option?s=duotone option}
 * @preview ![option](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM2MCAxMTJINDcyQzQ5NC4wOTIgMTEyIDUxMiA5NC4wOTIgNTEyIDcyUzQ5NC4wOTIgMzIgNDcyIDMySDM2MEMzMzcuOTA4IDMyIDMyMCA0OS45MDggMzIwIDcyUzMzNy45MDggMTEyIDM2MCAxMTJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ3MiA0MDBINDEyLjE4OEwxNTIuMTU2IDQ4LjIxOUMxNDQuNjI1IDM4LjAzMSAxMzIuNjg4IDMyIDEyMCAzMkg0MEMxNy45MDYgMzIgMCA0OS45MDYgMCA3MlMxNy45MDYgMTEyIDQwIDExMkg5OS44MTJMMzU5Ljg0NCA0NjMuNzgxQzM2Ny4zNzUgNDczLjk2OSAzNzkuMzEyIDQ4MCAzOTIgNDgwSDQ3MkM0OTQuMDk0IDQ4MCA1MTIgNDYyLjA5NCA1MTIgNDQwUzQ5NC4wOTQgNDAwIDQ3MiA0MDBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Option(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M360 112H472C494.092 112 512 94.092 512 72S494.092 32 472 32H360C337.908 32 320 49.908 320 72S337.908 112 360 112Z" />
            <path d="M472 400H412.188L152.156 48.219C144.625 38.031 132.688 32 120 32H40C17.906 32 0 49.906 0 72S17.906 112 40 112H99.812L359.844 463.781C367.375 473.969 379.312 480 392 480H472C494.094 480 512 462.094 512 440S494.094 400 472 400Z" />
        </Icon>
    </>
}