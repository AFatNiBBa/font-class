
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-left` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left?s=solid arrow-down-left}
 * @preview ![arrow-down-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTYuMjgxIDgwQzM0MC42NTYgNjQuMzc1IDMxNS4zNDQgNjQuMzc1IDI5OS43MTkgODBMOTYgMjgzLjcxOVYxNzIuMjgxQzk2IDE1MC4xODggNzguMDk0IDEzMi4yODEgNTYgMTMyLjI4MVMxNiAxNTAuMTg4IDE2IDE3Mi4yODFWMzgwLjI4MUMxNiA0MDIuMzc1IDMzLjkwNiA0MjAuMjgxIDU2IDQyMC4yODFIMjY0QzI4Ni4wOTQgNDIwLjI4MSAzMDQgNDAyLjM3NSAzMDQgMzgwLjI4MVMyODYuMDk0IDM0MC4yODEgMjY0IDM0MC4yODFIMTUyLjU2MkwzNTYuMjgxIDEzNi41NjNDMzcxLjkwNiAxMjAuOTM4IDM3MS45MDYgOTUuNjI1IDM1Ni4yODEgODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowDownLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M356.281 80C340.656 64.375 315.344 64.375 299.719 80L96 283.719V172.281C96 150.188 78.094 132.281 56 132.281S16 150.188 16 172.281V380.281C16 402.375 33.906 420.281 56 420.281H264C286.094 420.281 304 402.375 304 380.281S286.094 340.281 264 340.281H152.562L356.281 136.563C371.906 120.938 371.906 95.625 356.281 80Z" />
        </Icon>
    </>
}