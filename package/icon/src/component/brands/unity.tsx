
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `unity` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/unity?s=brands unity}
 * @preview ![unity](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTguMTEsMjA2LjQsNDQ1LjMxLDE0LjcyLDI0OC4yLDY2LjA4LDIxOSwxMTYuMTRsLTU5LjItLjQzTDE1LjU0LDI1NiwxNTkuODIsMzk2LjMybDU5LjE3LS40MywyOS4yNCw1MCwxOTcuMDgsNTEuMzYsNTIuOC0xOTEuNjItMzAtNDkuNjNaTTIyMy43NywxMjQuMiwzNzQuNTUsODYuNTEsMjg4LDIzMi4zM0gxMTQuODdabTAsMjYzLjYzTDExNC44NywyNzkuNzFIMjg4bDg2LjU1LDE0NS44MVptMTkzLDE0TDMzMC4xNywyNTZsODYuNTgtMTQ1Ljg0TDQ1OC41NiwyNTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Unity(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M498.11,206.4,445.31,14.72,248.2,66.08,219,116.14l-59.2-.43L15.54,256,159.82,396.32l59.17-.43,29.24,50,197.08,51.36,52.8-191.62-30-49.63ZM223.77,124.2,374.55,86.51,288,232.33H114.87Zm0,263.63L114.87,279.71H288l86.55,145.81Zm193,14L330.17,256l86.58-145.84L458.56,256Z" />
        </Icon>
    </>
}