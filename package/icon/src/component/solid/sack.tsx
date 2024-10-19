
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sack` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sack?s=solid sack}
 * @preview ![sack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIuMDAxIDk2SDMyMC4wMjNMMzY3LjQwNyAyNC44NzVDMzcwLjY1NyAyMCAzNzEuMDMyIDEzLjYyNSAzNjguMjgyIDguNUMzNjUuNDA2IDMuMjUgMzYwLjAzIDAgMzU0LjE1NCAwSDE1Ny45OTVDMTUxLjk5NCAwIDE0Ni42MTggMy4yNSAxNDMuODY4IDguNUMxNDAuOTkyIDEzLjYyNSAxNDEuMzY3IDIwIDE0NC42MTggMjQuODc1TDE5Mi4wMDEgOTZaTTMyMC4wMjMgMTI4SDE5Mi4wMDFDLTEwLjQwOSAyNDMuMzc1IDAuMDkzIDM5Ni42MjUgMC4wOTMgNDE2QzAuMDkzIDQ2OSA0OS4yMjYgNTEyIDEwOS43MzcgNTEySDQwMi4yODhDNDYyLjkyMyA1MTIgNTExLjkzMiA0NjkgNTExLjkzMiA0MTZDNTExLjkzMiAzOTcgNTIxLjMwOSAyNDIuNzUgMzIwLjAyMyAxMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Sack(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M192.001 96H320.023L367.407 24.875C370.657 20 371.032 13.625 368.282 8.5C365.406 3.25 360.03 0 354.154 0H157.995C151.994 0 146.618 3.25 143.868 8.5C140.992 13.625 141.367 20 144.618 24.875L192.001 96ZM320.023 128H192.001C-10.409 243.375 0.093 396.625 0.093 416C0.093 469 49.226 512 109.737 512H402.288C462.923 512 511.932 469 511.932 416C511.932 397 521.309 242.75 320.023 128Z" />
        </Icon>
    </>
}