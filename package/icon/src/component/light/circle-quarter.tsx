
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter?s=light circle-quarter}
 * @preview ![circle-quarter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDAuNzM5IDE2LjUzOUMyNDAuMzkzIDE2LjUzOSAyNDAuMDQ2IDE2LjU1MSAyMzkuNjk2IDE2LjU3NkMxMjAuNTA5IDI0Ljc5OSAyNS4yNjEgMTIwLjA0NyAxNy4wMzYgMjM5LjIzNkMxNi40MDkgMjQ4LjMzMiAyNC4wNzcgMjU2IDMzLjE5NCAyNTZIMjQwLjQ2QzI0OS4yOTggMjU2IDI1Ni40NiAyNDguODM2IDI1Ni40NiAyNDBWMzIuNzM0QzI1Ni40NiAyMy45NjcgMjQ5LjM3MiAxNi41MzkgMjQwLjczOSAxNi41MzlaTTIyNC40NiAyMjRINTAuOTExQzY0LjcyIDEzNS4wNTEgMTM1LjUxOCA2NC4yNSAyMjQuNDYgNTAuNDQ5VjIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleQuarter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M240.739 16.539C240.393 16.539 240.046 16.551 239.696 16.576C120.509 24.799 25.261 120.047 17.036 239.236C16.409 248.332 24.077 256 33.194 256H240.46C249.298 256 256.46 248.836 256.46 240V32.734C256.46 23.967 249.372 16.539 240.739 16.539ZM224.46 224H50.911C64.72 135.051 135.518 64.25 224.46 50.449V224Z" />
        </Icon>
    </>
}