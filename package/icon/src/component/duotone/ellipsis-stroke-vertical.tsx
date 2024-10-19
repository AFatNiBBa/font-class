
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis-stroke-vertical` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-stroke-vertical?s=duotone ellipsis-stroke-vertical}
 * @preview ![ellipsis-stroke-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk2IDE3NkM1MS44MzQgMTc2IDE2IDIxMS44MzQgMTYgMjU2UzUxLjgzNCAzMzYgOTYgMzM2UzE3NiAzMDAuMTY2IDE3NiAyNTZTMTQwLjE2NiAxNzYgOTYgMTc2Wk05NiAyNzJDODcuMTc4IDI3MiA4MCAyNjQuODIyIDgwIDI1NlM4Ny4xNzggMjQwIDk2IDI0MFMxMTIgMjQ3LjE3OCAxMTIgMjU2UzEwNC44MjIgMjcyIDk2IDI3MloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNOTYgMTYwQzE0MC4xNjYgMTYwIDE3NiAxMjQuMTY2IDE3NiA4MFMxNDAuMTY2IDAgOTYgMFMxNiAzNS44MzQgMTYgODBTNTEuODM0IDE2MCA5NiAxNjBaTTk2IDY0QzEwNC44MjIgNjQgMTEyIDcxLjE3OCAxMTIgODBTMTA0LjgyMiA5NiA5NiA5NlM4MCA4OC44MjIgODAgODBTODcuMTc4IDY0IDk2IDY0Wk05NiAzNTJDNTEuODM0IDM1MiAxNiAzODcuODM0IDE2IDQzMlM1MS44MzQgNTEyIDk2IDUxMlMxNzYgNDc2LjE2NiAxNzYgNDMyUzE0MC4xNjYgMzUyIDk2IDM1MlpNOTYgNDQ4Qzg3LjE3OCA0NDggODAgNDQwLjgyMiA4MCA0MzJTODcuMTc4IDQxNiA5NiA0MTZTMTEyIDQyMy4xNzggMTEyIDQzMlMxMDQuODIyIDQ0OCA5NiA0NDhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function EllipsisStrokeVertical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path opacity={.4} d="M96 176C51.834 176 16 211.834 16 256S51.834 336 96 336S176 300.166 176 256S140.166 176 96 176ZM96 272C87.178 272 80 264.822 80 256S87.178 240 96 240S112 247.178 112 256S104.822 272 96 272Z" />
            <path d="M96 160C140.166 160 176 124.166 176 80S140.166 0 96 0S16 35.834 16 80S51.834 160 96 160ZM96 64C104.822 64 112 71.178 112 80S104.822 96 96 96S80 88.822 80 80S87.178 64 96 64ZM96 352C51.834 352 16 387.834 16 432S51.834 512 96 512S176 476.166 176 432S140.166 352 96 352ZM96 448C87.178 448 80 440.822 80 432S87.178 416 96 416S112 423.178 112 432S104.822 448 96 448Z" />
        </Icon>
    </>
}