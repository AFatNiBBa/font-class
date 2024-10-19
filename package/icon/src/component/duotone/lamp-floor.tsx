
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lamp-floor` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lamp-floor?s=duotone lamp-floor}
 * @preview ![lamp-floor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNC4wMDYgNDQ4SDE2MFYyMjRIMjI0LjAwNlY0NDhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1Ni4wMDYgNDQ4SDEyNy45OTRDOTkuNjE2IDQ0OCA3Mi45ODggNDY2LjUgNjQuNzM3IDQ5Mi4xMjVDNjEuNDg3IDUwMiA2OS44NjMgNTEyIDgwLjIzOSA1MTJIMzAzLjc2MUMzMTQuMTM3IDUxMiAzMjIuNTEzIDUwMiAzMTkuMjYzIDQ5Mi4xMjVDMzExLjAxMiA0NjYuNSAyODQuMzg0IDQ0OCAyNTYuMDA2IDQ0OFpNMzgxLjM5NCAxNzkuMzc1TDMxMi43NjIgMTkuMzc1QzMwNy43NjIgNy42MjUgMjk2LjI2IDAgMjgzLjM4NCAwSDEwMC42MTZDODcuNzQgMCA3Ni4yMzggNy42MjUgNzEuMjM4IDE5LjM3NUwyLjYwNiAxNzkuMzc1Qy0xLjY0NCAxODkuMjUgLTAuNjQ0IDIwMC42MjUgNS4yMzEgMjA5LjYyNUMxMS4yMzIgMjE4LjYyNSAyMS4yMzMgMjI0IDMxLjk4NCAyMjRIMzUyLjAxNkMzNjIuNzY3IDIyNCAzNzIuNzY4IDIxOC42MjUgMzc4Ljc2OSAyMDkuNjI1QzM4NC42NDQgMjAwLjYyNSAzODUuNjQ0IDE4OS4yNSAzODEuMzk0IDE3OS4zNzVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LampFloor(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M224.006 448H160V224H224.006V448Z" />
            <path d="M256.006 448H127.994C99.616 448 72.988 466.5 64.737 492.125C61.487 502 69.863 512 80.239 512H303.761C314.137 512 322.513 502 319.263 492.125C311.012 466.5 284.384 448 256.006 448ZM381.394 179.375L312.762 19.375C307.762 7.625 296.26 0 283.384 0H100.616C87.74 0 76.238 7.625 71.238 19.375L2.606 179.375C-1.644 189.25 -0.644 200.625 5.231 209.625C11.232 218.625 21.233 224 31.984 224H352.016C362.767 224 372.768 218.625 378.769 209.625C384.644 200.625 385.644 189.25 381.394 179.375Z" />
        </Icon>
    </>
}