
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cheese` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cheese?s=light cheese}
 * @preview ![cheese](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTkuODc1IDMySDI5OC4zNzVDMjkxLjI1IDMyLjEyNSAyODQuMjUgMzQuNSAyNzguNzUgMzlMMTIuMzUgMjQ2LjI2NkM0LjU1OCAyNTIuMzI5IDAgMjYxLjY0OSAwIDI3MS41MjNWNDQ4QzAgNDY1LjYgMTQuNCA0ODAgMzIgNDgwSDQ4MEM0OTcuNiA0ODAgNTEyIDQ2NS42IDUxMiA0NDhWMjU1Ljg3NUM1MTIgMTM2IDQxNy45OTkgMzguMjUgMjk5Ljg3NSAzMlpNNDgwIDQ0OEgzMlYyODcuODc1SDQ4MFY0NDhaTTUyLjEyNSAyNTUuODc1TDI5OC43NSA2NEM0MDAuMzc1IDY5LjYyNSA0ODAgMTUzLjc1IDQ4MCAyNTUuODc1SDUyLjEyNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Cheese(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M299.875 32H298.375C291.25 32.125 284.25 34.5 278.75 39L12.35 246.266C4.558 252.329 0 261.649 0 271.523V448C0 465.6 14.4 480 32 480H480C497.6 480 512 465.6 512 448V255.875C512 136 417.999 38.25 299.875 32ZM480 448H32V287.875H480V448ZM52.125 255.875L298.75 64C400.375 69.625 480 153.75 480 255.875H52.125Z" />
        </Icon>
    </>
}