
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mp3-player` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mp3-player?s=solid mp3-player}
 * @preview ![mp3-player](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMEg0OEMyMS41IDAgMCAyMS41IDAgNDhWNDY0QzAgNDkwLjUgMjEuNSA1MTIgNDggNTEySDMzNkMzNjIuNSA1MTIgMzg0IDQ5MC41IDM4NCA0NjRWNDhDMzg0IDIxLjUgMzYyLjUgMCAzMzYgMFpNMTkyIDQ0OEMxMzkgNDQ4IDk2IDQwNSA5NiAzNTJTMTM5IDI1NiAxOTIgMjU2UzI4OCAyOTkgMjg4IDM1MlMyNDUgNDQ4IDE5MiA0NDhaTTMyMCAxOTJINjRWNjRIMzIwVjE5MlpNMTkyIDMyMEMxNzQuMzc1IDMyMCAxNjAgMzM0LjM3NSAxNjAgMzUyUzE3NC4zNzUgMzg0IDE5MiAzODRTMjI0IDM2OS42MjUgMjI0IDM1MlMyMDkuNjI1IDMyMCAxOTIgMzIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Mp3Player(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M336 0H48C21.5 0 0 21.5 0 48V464C0 490.5 21.5 512 48 512H336C362.5 512 384 490.5 384 464V48C384 21.5 362.5 0 336 0ZM192 448C139 448 96 405 96 352S139 256 192 256S288 299 288 352S245 448 192 448ZM320 192H64V64H320V192ZM192 320C174.375 320 160 334.375 160 352S174.375 384 192 384S224 369.625 224 352S209.625 320 192 320Z" />
        </Icon>
    </>
}