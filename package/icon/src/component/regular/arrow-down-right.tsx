
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-right?s=regular arrow-down-right}
 * @preview ![arrow-down-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMTUyVjM5MkMzNTIgNDA1LjI1IDM0MS4yNSA0MTYgMzI4IDQxNkg4OEM3NC43NSA0MTYgNjQgNDA1LjI1IDY0IDM5MlM3NC43NSAzNjggODggMzY4SDI3MC4wNjJMMzkuMDMxIDEzNi45NjlDMjkuNjU2IDEyNy41OTQgMjkuNjU2IDExMi40MDYgMzkuMDMxIDEwMy4wMzFTNjMuNTk0IDkzLjY1NiA3Mi45NjkgMTAzLjAzMUwzMDQgMzM0LjA2MlYxNTJDMzA0IDEzOC43NSAzMTQuNzUgMTI4IDMyOCAxMjhTMzUyIDEzOC43NSAzNTIgMTUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowDownRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M352 152V392C352 405.25 341.25 416 328 416H88C74.75 416 64 405.25 64 392S74.75 368 88 368H270.062L39.031 136.969C29.656 127.594 29.656 112.406 39.031 103.031S63.594 93.656 72.969 103.031L304 334.062V152C304 138.75 314.75 128 328 128S352 138.75 352 152Z" />
        </Icon>
    </>
}