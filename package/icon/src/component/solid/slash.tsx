
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `slash` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/slash?s=solid slash}
 * @preview ![slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNC4wMzIgMEMyOS4xODkgMCAzNC40MDcgMS42NzIgMzguODE0IDUuMTA5TDYzMC44MTEgNDY5LjEwMkM2NDEuMjQ5IDQ3Ny4yNzQgNjQzLjA2MSA0OTIuMzY3IDYzNC44NzQgNTAyLjgwNUM2MjYuNzQ5IDUxMy4yMTEgNjExLjY4NiA1MTUuMDg2IDYwMS4xODYgNTA2Ljg4M0w5LjE4OSA0Mi44OUMtMS4yNDkgMzQuNzE4IC0zLjA2MSAxOS42MjUgNS4xMjYgOS4xODdDOS44NDUgMy4xNTYgMTYuOTA3IDAgMjQuMDMyIDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Slash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.811 469.102C641.249 477.274 643.061 492.367 634.874 502.805C626.749 513.211 611.686 515.086 601.186 506.883L9.189 42.89C-1.249 34.718 -3.061 19.625 5.126 9.187C9.845 3.156 16.907 0 24.032 0Z" />
        </Icon>
    </>
}