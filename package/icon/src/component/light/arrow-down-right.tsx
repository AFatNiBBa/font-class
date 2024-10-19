
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-right` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-right?s=light arrow-down-right}
 * @preview ![arrow-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMTc2VjM5OS4zNDRDMzUyIDQwOC4xNTYgMzQ0Ljg1OSA0MTUuMzEyIDMzNi4wNDcgNDE1LjM0NEwxMTIuMDQ3IDQxNkgxMTJDMTAzLjE4OCA0MTYgOTYuMDMxIDQwOC44NzUgOTYgNDAwLjAzMUM5NS45NjkgMzkxLjIxOSAxMDMuMTA5IDM4NC4wMzEgMTExLjk1MyAzODRMMjk3LjU2OCAzODMuNDQ1TDM2LjY4OCAxMjIuNTYyQzMwLjQzOCAxMTYuMzEyIDMwLjQzOCAxMDYuMTg3IDM2LjY4OCA5OS45MzhTNTMuMDYzIDkzLjY4OCA1OS4zMTIgOTkuOTM4TDMyMCAzNjAuNjI1VjE3NkMzMjAgMTY3LjE1NiAzMjcuMTU2IDE2MCAzMzYgMTYwUzM1MiAxNjcuMTU2IDM1MiAxNzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowDownRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M352 176V399.344C352 408.156 344.859 415.312 336.047 415.344L112.047 416H112C103.188 416 96.031 408.875 96 400.031C95.969 391.219 103.109 384.031 111.953 384L297.568 383.445L36.688 122.562C30.438 116.312 30.438 106.187 36.688 99.938S53.063 93.688 59.312 99.938L320 360.625V176C320 167.156 327.156 160 336 160S352 167.156 352 176Z" />
        </Icon>
    </>
}