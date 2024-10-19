
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `plus-minus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plus-minus?s=solid plus-minus}
 * @preview ![plus-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NiAyMTZIMTUyVjMxMkMxNTIgMzM0LjA5NCAxNjkuOTA2IDM1MiAxOTIgMzUyUzIzMiAzMzQuMDk0IDIzMiAzMTJWMjE2SDMyOEMzNTAuMDk0IDIxNiAzNjggMTk4LjA5NCAzNjggMTc2UzM1MC4wOTQgMTM2IDMyOCAxMzZIMjMyVjQwQzIzMiAxNy45MDYgMjE0LjA5NCAwIDE5MiAwUzE1MiAxNy45MDYgMTUyIDQwVjEzNkg1NkMzMy45MDYgMTM2IDE2IDE1My45MDYgMTYgMTc2UzMzLjkwNiAyMTYgNTYgMjE2Wk0zNDQgNDMySDQwQzE3LjkwNiA0MzIgMCA0NDkuOTA2IDAgNDcyUzE3LjkwNiA1MTIgNDAgNTEySDM0NEMzNjYuMDk0IDUxMiAzODQgNDk0LjA5NCAzODQgNDcyUzM2Ni4wOTQgNDMyIDM0NCA0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function PlusMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M56 216H152V312C152 334.094 169.906 352 192 352S232 334.094 232 312V216H328C350.094 216 368 198.094 368 176S350.094 136 328 136H232V40C232 17.906 214.094 0 192 0S152 17.906 152 40V136H56C33.906 136 16 153.906 16 176S33.906 216 56 216ZM344 432H40C17.906 432 0 449.906 0 472S17.906 512 40 512H344C366.094 512 384 494.094 384 472S366.094 432 344 432Z" />
        </Icon>
    </>
}