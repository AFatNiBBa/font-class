
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `think-peaks` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/think-peaks?s=brands think-peaks}
 * @preview ![think-peaks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjUuNCA0MDkuNGw4Ny4xLTE1MC4yLTMyLS4zLTU1LjEgOTVMMjU5LjIgMCAyMyA0MDcuNGwzMiAuM0wyNTkuMiA1NS42em0tMzU1LjMtNDQuMWgzMi4xbDExNy40LTIwMi41TDQ2MyA1MTEuOWwzMi41LjEtMjM1LjgtNDA0LjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ThinkPeaks(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M465.4 409.4l87.1-150.2-32-.3-55.1 95L259.2 0 23 407.4l32 .3L259.2 55.6zm-355.3-44.1h32.1l117.4-202.5L463 511.9l32.5.1-235.8-404.6z" />
        </Icon>
    </>
}