
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `database` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/database?s=solid database}
 * @preview ![database](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggNzMuMTI1VjExOC44NzVDNDQ4IDE1OS4xMjUgMzQ3LjYyNSAxOTIgMjI0IDE5MlMwIDE1OS4xMjUgMCAxMTguODc1VjczLjEyNUMwIDMyLjg3NSAxMDAuMzc1IDAgMjI0IDBTNDQ4IDMyLjg3NSA0NDggNzMuMTI1Wk00NDggMTc2VjI3OC44NzVDNDQ4IDMxOS4xMjUgMzQ3LjYyNSAzNTIgMjI0IDM1MlMwIDMxOS4xMjUgMCAyNzguODc1VjE3NkM0OC4xMjUgMjA5LjEyNSAxMzYuMjUgMjI0LjYyNSAyMjQgMjI0LjYyNVMzOTkuODc1IDIwOS4xMjUgNDQ4IDE3NlpNNDQ4IDMzNlY0MzguODc1QzQ0OCA0NzkuMTI1IDM0Ny42MjUgNTEyIDIyNCA1MTJTMCA0NzkuMTI1IDAgNDM4Ljg3NVYzMzZDNDguMTI1IDM2OS4xMjUgMTM2LjI1IDM4NC42MjUgMjI0IDM4NC42MjVTMzk5Ljg3NSAzNjkuMTI1IDQ0OCAzMzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Database(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 73.125V118.875C448 159.125 347.625 192 224 192S0 159.125 0 118.875V73.125C0 32.875 100.375 0 224 0S448 32.875 448 73.125ZM448 176V278.875C448 319.125 347.625 352 224 352S0 319.125 0 278.875V176C48.125 209.125 136.25 224.625 224 224.625S399.875 209.125 448 176ZM448 336V438.875C448 479.125 347.625 512 224 512S0 479.125 0 438.875V336C48.125 369.125 136.25 384.625 224 384.625S399.875 369.125 448 336Z" />
        </Icon>
    </>
}