
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `plus-minus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plus-minus?s=duotone plus-minus}
 * @preview ![plus-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM0NCA1MTJINDBDMTcuOTA2IDUxMiAwIDQ5NC4wOTQgMCA0NzJTMTcuOTA2IDQzMiA0MCA0MzJIMzQ0QzM2Ni4wOTQgNDMyIDM4NCA0NDkuOTA2IDM4NCA0NzJTMzY2LjA5NCA1MTIgMzQ0IDUxMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzY4IDE3NkMzNjggMTk4LjA5NCAzNTAuMDk0IDIxNiAzMjggMjE2SDIzMlYzMTJDMjMyIDMzNC4wOTQgMjE0LjA5NCAzNTIgMTkyIDM1MlMxNTIgMzM0LjA5NCAxNTIgMzEyVjIxNkg1NkMzMy45MDYgMjE2IDE2IDE5OC4wOTQgMTYgMTc2UzMzLjkwNiAxMzYgNTYgMTM2SDE1MlY0MEMxNTIgMTcuOTA2IDE2OS45MDYgMCAxOTIgMFMyMzIgMTcuOTA2IDIzMiA0MFYxMzZIMzI4QzM1MC4wOTQgMTM2IDM2OCAxNTMuOTA2IDM2OCAxNzZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PlusMinus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M344 512H40C17.906 512 0 494.094 0 472S17.906 432 40 432H344C366.094 432 384 449.906 384 472S366.094 512 344 512Z" />
            <path d="M368 176C368 198.094 350.094 216 328 216H232V312C232 334.094 214.094 352 192 352S152 334.094 152 312V216H56C33.906 216 16 198.094 16 176S33.906 136 56 136H152V40C152 17.906 169.906 0 192 0S232 17.906 232 40V136H328C350.094 136 368 153.906 368 176Z" />
        </Icon>
    </>
}