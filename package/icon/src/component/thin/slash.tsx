
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `slash` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/slash?s=thin slash}
 * @preview ![slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMi45ODggMS43M0MxMS41MjUgMC41NjYgOS43NzEgMCA4LjAyNSAwQzUuNjczIDAgMy4zMzUgMS4wMjkgMS43MzggMy4wMTJDLTEuMDEyIDYuNDggLTAuNDM0IDExLjUxMiAzLjAxOSAxNC4yNjJMNjI3LjAxMyA1MTAuMjY2QzYyOC40OTcgNTExLjQzOCA2MzAuMjQ3IDUxMiA2MzEuOTk3IDUxMkM2MzQuMzQxIDUxMiA2MzYuNjg1IDUxMC45NjkgNjM4LjI2MyA1MDguOTg0QzY0MS4wMTMgNTA1LjUxNiA2NDAuNDM1IDUwMC40ODQgNjM2Ljk4MiA0OTcuNzM0TDEyLjk4OCAxLjczWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Slash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.029 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.013 510.266C628.497 511.438 630.247 512 631.997 512C634.341 512 636.685 510.969 638.263 508.984C641.013 505.516 640.435 500.484 636.982 497.734L12.988 1.73Z" />
        </Icon>
    </>
}