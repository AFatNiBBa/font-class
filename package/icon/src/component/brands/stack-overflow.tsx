
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `stack-overflow` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stack-overflow?s=brands stack-overflow}
 * @preview ![stack-overflow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTAuNyAzMTFMOTUgMjY5LjcgODYuOCAzMDlsMTk1LjcgNDF6bTUxLTg3TDE4OC4yIDk1LjdsLTI1LjUgMzAuOCAxNTMuNSAxMjguM3ptLTMxLjIgMzkuN0wxMjkuMiAxNzlsLTE2LjcgMzYuNUwyOTMuNyAzMDB6TTI2MiAzMmwtMzIgMjQgMTE5LjMgMTYwLjMgMzItMjR6bTIwLjUgMzI4aC0yMDB2MzkuN2gyMDB6bTM5LjcgODBINDIuN1YzMjBoLTQwdjE2MGgzNTkuNVYzMjBoLTQweiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function StackOverflow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" />
        </Icon>
    </>
}