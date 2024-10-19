
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `star-sharp-half` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp-half?s=solid star-sharp-half}
 * @preview ![star-sharp-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggNDAzLjk1MUwxNDQuMzAxIDUwOC40NDNDMTMwLjA1OSA1MTguNzk5IDExMC44OTggNTA0Ljg2NSAxMTYuMzM2IDQ4OC4xMDlMMTcxLjIyNSAzMTkuMDM1TDI3LjUyNSAyMTQuNTQzQzEzLjI4NCAyMDQuMTg2IDIwLjYwNCAxODEuNjQxIDM4LjIwOCAxODEuNjQxSDIxNS44MjlMMjcwLjcxOCAxMi41NjZDMjczLjQzOCA0LjE4OCAyODAuNzE3IDAgMjg4IDBWNDAzLjk1MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function StarSharpHalf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M288 403.951L144.301 508.443C130.059 518.799 110.898 504.865 116.336 488.109L171.225 319.035L27.525 214.543C13.284 204.186 20.604 181.641 38.208 181.641H215.829L270.718 12.566C273.438 4.188 280.717 0 288 0V403.951Z" />
        </Icon>
    </>
}