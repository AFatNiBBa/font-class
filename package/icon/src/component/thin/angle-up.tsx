
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `angle-up` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/angle-up?s=thin angle-up}
 * @preview ![angle-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIuMDAxIDE2MEMxOTQuMDAxIDE2MCAxOTUuOTcgMTYwLjczNCAxOTcuNTMyIDE2Mi4yMTlMMzQ5LjUyOSAzMDYuMjI2QzM1Mi43MTcgMzA5LjI3MyAzNTIuODQyIDMxNC4zNTEgMzQ5Ljc3OSAzMTcuNTM5QzM0Ni42ODYgMzIwLjcyNyAzNDEuNjIzIDMyMC44MiAzMzguNDY3IDMxNy43ODlMMTkyLjAwMSAxNzkuMDc5TDQ1LjUzMyAzMTcuNzkxQzQyLjMxNCAzMjAuODIyIDM3LjI1MiAzMjAuNzI5IDM0LjIyMSAzMTcuNTQxQzMxLjE1OCAzMTQuMzU0IDMxLjI4MyAzMDkuMjc1IDM0LjQ3MSAzMDYuMjI4TDE4Ni40NyAxNjIuMjE5QzE4OC4wMzIgMTYwLjczNCAxOTAuMDAxIDE2MCAxOTIuMDAxIDE2MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function AngleUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192.001 160C194.001 160 195.97 160.734 197.532 162.219L349.529 306.226C352.717 309.273 352.842 314.351 349.779 317.539C346.686 320.727 341.623 320.82 338.467 317.789L192.001 179.079L45.533 317.791C42.314 320.822 37.252 320.729 34.221 317.541C31.158 314.354 31.283 309.275 34.471 306.228L186.47 162.219C188.032 160.734 190.001 160 192.001 160Z" />
        </Icon>
    </>
}