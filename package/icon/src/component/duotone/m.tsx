
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `m` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/m?s=duotone m}
 * @preview ![m](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMCA0ODBDMzczLjUgNDgwIDM1MiA0NTguNTAxIDM1MiA0MzIuMDAyVjIzNC41NDFMMjYzLjU2MiAzNjMuMTkyQzI0NS42MjUgMzg5LjI1NCAyMDIuMzc1IDM4OS4yNTQgMTg0LjQzOCAzNjMuMTkyTDk2IDIzNC41NDFWNDMyLjAwMkM5NiA0NTguNTAxIDc0LjUgNDgwIDQ4IDQ4MFMwIDQ1OC41MDEgMCA0MzIuMDAyVjgwLjAxNkMwIDU4Ljk4NiAxMy42ODggNDAuNDI0IDMzLjc1IDM0LjE3NEM1My44NDQgMjcuOTI0IDc1LjYyNSAzNS40NTUgODcuNTYyIDUyLjgzTDIyNCAyNTEuMjlMMzYwLjQzOCA1Mi44M0MzNzIuMzQ0IDM1LjQ1NSAzOTQuMTI1IDI3LjkyNCA0MTQuMjUgMzQuMTc0QzQzNC4zMTIgNDAuNDI0IDQ0OCA1OC45ODYgNDQ4IDgwLjAxNlY0MzIuMDAyQzQ0OCA0NTguNTAxIDQyNi41IDQ4MCA0MDAgNDgwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function M(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M400 480C373.5 480 352 458.501 352 432.002V234.541L263.562 363.192C245.625 389.254 202.375 389.254 184.438 363.192L96 234.541V432.002C96 458.501 74.5 480 48 480S0 458.501 0 432.002V80.016C0 58.986 13.688 40.424 33.75 34.174C53.844 27.924 75.625 35.455 87.562 52.83L224 251.29L360.438 52.83C372.344 35.455 394.125 27.924 414.25 34.174C434.312 40.424 448 58.986 448 80.016V432.002C448 458.501 426.5 480 400 480Z" />
        </Icon>
    </>
}