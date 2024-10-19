
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `v` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/v?s=thin v}
 * @preview ![v](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgNDgwQzE4OC43OTcgNDgwIDE4NS44OTEgNDc4LjA5NCAxODQuNjQxIDQ3NS4xMjVMMC42NDQgNDMuMDk4Qy0xLjA5MSAzOS4wMzUgMC44IDM0LjM0NyA0Ljg2MiAzMi41OTdDOC45MjUgMzAuOTcyIDEzLjYyOCAzMi43NTMgMTUuMzYyIDM2Ljg0N0wxOTIgNDUxLjU5MkwzNjguNjM4IDM2Ljg0OEMzNzAuMzcyIDMyLjc1MyAzNzUuMDQ0IDMwLjk3MiAzNzkuMTM4IDMyLjU5N0MzODMuMiAzNC4zNDcgMzg1LjA5MSAzOS4wMzUgMzgzLjM1NiA0My4wOThMMTk5LjM1OSA0NzUuMTI1QzE5OC4xMDkgNDc4LjA5NCAxOTUuMjAzIDQ4MCAxOTIgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function V(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 480C188.797 480 185.891 478.094 184.641 475.125L0.644 43.098C-1.091 39.035 0.8 34.347 4.862 32.597C8.925 30.972 13.628 32.753 15.362 36.847L192 451.592L368.638 36.848C370.372 32.753 375.044 30.972 379.138 32.597C383.2 34.347 385.091 39.035 383.356 43.098L199.359 475.125C198.109 478.094 195.203 480 192 480Z" />
        </Icon>
    </>
}