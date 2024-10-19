
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `austral-sign` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/austral-sign?s=duotone austral-sign}
 * @preview ![austral-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMzUyQzAgMzY5LjY3MiAxNC4zMjggMzg0IDMyIDM4NEg1MS44NTRMNzguMjg5IDMyMEgzMkMxNC4zMjggMzIwIDAgMzM0LjMyOCAwIDM1MlpNMCAyNTZDMCAyNzMuNjcyIDE0LjMyOCAyODggMzIgMjg4SDkxLjUwOEwxMTcuOTQzIDIyNEgzMkMxNC4zMjggMjI0IDAgMjM4LjMyOCAwIDI1NlpNMjQzLjUxIDIyNEgyMDQuNDlMMTc4LjA1NSAyODhIMjY5Ljk0NUwyNDMuNTEgMjI0Wk00NDggMjU2QzQ0OCAyMzguMzI4IDQzMy42NzIgMjI0IDQxNiAyMjRIMzMwLjA1N0wzNTYuNDkyIDI4OEg0MTZDNDMzLjY3MiAyODggNDQ4IDI3My42NzIgNDQ4IDI1NlpNNDE2IDMyMEgzNjkuNzExTDM5Ni4xNDYgMzg0SDQxNkM0MzMuNjcyIDM4NCA0NDggMzY5LjY3MiA0NDggMzUyUzQzMy42NzIgMzIwIDQxNiAzMjBaTTE2NC44MzYgMzIwTDEzOC4zOTggMzg0SDMwOS42MDJMMjgzLjE2NCAzMjBIMTY0LjgzNloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzc2LjAwNyA0NzkuOTgzQzM2MC4yODkgNDc5Ljk4MyAzNDUuNCA0NzAuNjU2IDMzOS4wMjUgNDU1LjIzNUwyMjQgMTc2Ljc3MUwxMDguOTc1IDQ1NS4yMzVDMTAwLjUzOCA0NzUuNjcxIDc3LjExNyA0ODUuNDIxIDU2Ljc0MyA0NzYuOTM3QzM2LjMyMyA0NjguNSAyNi42MDQgNDQ1LjExMSAzNS4wNDIgNDI0LjcwNkwxODcuMDMzIDU2LjczM0MxOTMuMjIgNDEuNzY1IDIwNy44MTMgMzIgMjI0IDMyUzI1NC43OCA0MS43NjUgMjYwLjk2NyA1Ni43MzNMNDEyLjk1OCA0MjQuNzA2QzQyMS4zOTYgNDQ1LjExMSA0MTEuNjc3IDQ2OC41IDM5MS4yNTcgNDc2LjkzN0MzODYuMjcyIDQ3OC45OTkgMzgxLjEwMSA0NzkuOTgzIDM3Ni4wMDcgNDc5Ljk4M1oiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function AustralSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M0 352C0 369.672 14.328 384 32 384H51.854L78.289 320H32C14.328 320 0 334.328 0 352ZM0 256C0 273.672 14.328 288 32 288H91.508L117.943 224H32C14.328 224 0 238.328 0 256ZM243.51 224H204.49L178.055 288H269.945L243.51 224ZM448 256C448 238.328 433.672 224 416 224H330.057L356.492 288H416C433.672 288 448 273.672 448 256ZM416 320H369.711L396.146 384H416C433.672 384 448 369.672 448 352S433.672 320 416 320ZM164.836 320L138.398 384H309.602L283.164 320H164.836Z" />
            <path d="M376.007 479.983C360.289 479.983 345.4 470.656 339.025 455.235L224 176.771L108.975 455.235C100.538 475.671 77.117 485.421 56.743 476.937C36.323 468.5 26.604 445.111 35.042 424.706L187.033 56.733C193.22 41.765 207.813 32 224 32S254.78 41.765 260.967 56.733L412.958 424.706C421.396 445.111 411.677 468.5 391.257 476.937C386.272 478.999 381.101 479.983 376.007 479.983Z" />
        </Icon>
    </>
}