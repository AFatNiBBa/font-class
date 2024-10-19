
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-left` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left?s=duotone arrow-down-left}
 * @preview ![arrow-down-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk2IDM0MC4yODFWMjgzLjcxOUwyOTkuNzE5IDgwQzMxNS4zNDQgNjQuMzc1IDM0MC42NTYgNjQuMzc1IDM1Ni4yODEgODBTMzcxLjkwNiAxMjAuOTM4IDM1Ni4yODEgMTM2LjU2M0wxNTIuNTYyIDM0MC4yODFIOTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI2NCAzNTJDMjg2LjA5NCAzNTIgMzA0IDM2OS45MDYgMzA0IDM5MlMyODYuMDk0IDQzMiAyNjQgNDMySDU2QzMzLjkwNiA0MzIgMTYgNDE0LjA5NCAxNiAzOTJWMTg0QzE2IDE2MS45MDYgMzMuOTA2IDE0NCA1NiAxNDRTOTYgMTYxLjkwNiA5NiAxODRWMzUySDI2NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ArrowDownLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M96 340.281V283.719L299.719 80C315.344 64.375 340.656 64.375 356.281 80S371.906 120.938 356.281 136.563L152.562 340.281H96Z" />
            <path d="M264 352C286.094 352 304 369.906 304 392S286.094 432 264 432H56C33.906 432 16 414.094 16 392V184C16 161.906 33.906 144 56 144S96 161.906 96 184V352H264Z" />
        </Icon>
    </>
}