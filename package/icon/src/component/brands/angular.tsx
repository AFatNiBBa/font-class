
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `angular` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angular?s=brands angular}
 * @preview ![angular](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODUuNyAyNjguMWg3Ni4ybC0zOC4xLTkxLjYtMzguMSA5MS42ek0yMjMuOCAzMkwxNiAxMDYuNGwzMS44IDI3NS43IDE3NiA5Ny45IDE3Ni05Ny45IDMxLjgtMjc1Ljd6TTM1NCAzNzMuOGgtNDguNmwtMjYuMi02NS40SDE2OC42bC0yNi4yIDY1LjRIOTMuN0wyMjMuOCA4MS41eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Angular(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z" />
        </Icon>
    </>
}