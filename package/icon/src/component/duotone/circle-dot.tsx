
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-dot` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dot?s=duotone circle-dot}
 * @preview ![circle-dot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDE5IDE2IDE2IDEyMy40MTkgMTYgMjU2UzEyMy40MTkgNDk2IDI1NiA0OTZTNDk2IDM4OC41ODEgNDk2IDI1NlMzODguNTgxIDE2IDI1NiAxNlpNMzUyIDI1NkMzNTIgMzA4Ljk1IDMwOC45NSAzNTIgMjU2IDM1MlMxNjAgMzA4Ljk1IDE2MCAyNTZTMjAzLjA1IDE2MCAyNTYgMTYwUzM1MiAyMDMuMDUgMzUyIDI1NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzUyIDI1NkMzNTIgMzA4Ljk1IDMwOC45NSAzNTIgMjU2IDM1MlMxNjAgMzA4Ljk1IDE2MCAyNTZTMjAzLjA1IDE2MCAyNTYgMTYwUzM1MiAyMDMuMDUgMzUyIDI1NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleDot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 16C123.419 16 16 123.419 16 256S123.419 496 256 496S496 388.581 496 256S388.581 16 256 16ZM352 256C352 308.95 308.95 352 256 352S160 308.95 160 256S203.05 160 256 160S352 203.05 352 256Z" />
            <path d="M352 256C352 308.95 308.95 352 256 352S160 308.95 160 256S203.05 160 256 160S352 203.05 352 256Z" />
    </Icon>
);

export default CircleDot;