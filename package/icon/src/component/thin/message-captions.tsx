
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `message-captions` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-captions?s=thin message-captions}
 * @preview ![message-captions](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMEg2NEMyOC43NSAwIDAgMjguNzQ4IDAgNjMuOTk1VjM1MS45NzJDMCAzODcuMjE5IDI4Ljc1IDQxNS45NjcgNjQgNDE1Ljk2N0gxNjBWNDk5Ljk2QzE2MCA1MDcuMDMyIDE2NS45MiA1MTIgMTcyLjE3OCA1MTJDMTc0LjU0NyA1MTIgMTc2Ljk2MyA1MTEuMjg3IDE3OS4xMjUgNTA5LjcwOUwzMDQgNDE1Ljk2N0g0NDhDNDgzLjI1IDQxNS45NjcgNTEyIDM4Ny4yMTkgNTEyIDM1MS45NzJWNjMuOTk1QzUxMiAyOC43NDggNDgzLjI1IDAgNDQ4IDBaTTQ5NiAzNTEuOTcyQzQ5NiAzNzguNDM2IDQ3NC40NjcgMzk5Ljk2OCA0NDggMzk5Ljk2OEgyOTguNjYyTDI5NC4zOTUgNDAzLjE3M0wxNzYgNDkyLjA1MlYzOTkuOTY4SDY0QzM3LjUzMyAzOTkuOTY4IDE2IDM3OC40MzYgMTYgMzUxLjk3MlY2My45OTVDMTYgMzcuNTMgMzcuNTMzIDE1Ljk5OSA2NCAxNS45OTlINDQ4QzQ3NC40NjcgMTUuOTk5IDQ5NiAzNy41MyA0OTYgNjMuOTk1VjM1MS45NzJaTTIyNCAyNDcuOThDMjI0IDI0My41NzQgMjIwLjQwNiAyMzkuOTgxIDIxNiAyMzkuOTgxSDcyQzY3LjU5NCAyMzkuOTgxIDY0IDI0My41NzQgNjQgMjQ3Ljk4UzY3LjU5NCAyNTUuOTc5IDcyIDI1NS45NzlIMjE2QzIyMC40MDYgMjU1Ljk3OSAyMjQgMjUyLjM4NiAyMjQgMjQ3Ljk4Wk00NDAgMjM5Ljk4MUgyNjRDMjU5LjU5NCAyMzkuOTgxIDI1NiAyNDMuNTc0IDI1NiAyNDcuOThTMjU5LjU5NCAyNTUuOTc5IDI2NCAyNTUuOTc5SDQ0MEM0NDQuNDA2IDI1NS45NzkgNDQ4IDI1Mi4zODYgNDQ4IDI0Ny45OFM0NDQuNDA2IDIzOS45ODEgNDQwIDIzOS45ODFaTTE1MiAzMDMuOTc2SDcyQzY3LjU5NCAzMDMuOTc2IDY0IDMwNy41NjkgNjQgMzExLjk3NUM2NCAzMTYuMzgxIDY3LjU5NCAzMTkuOTc0IDcyIDMxOS45NzRIMTUyQzE1Ni40MDYgMzE5Ljk3NCAxNjAgMzE2LjM4MSAxNjAgMzExLjk3NUMxNjAgMzA3LjU2OSAxNTYuNDA2IDMwMy45NzYgMTUyIDMwMy45NzZaTTQ0MCAzMDMuOTc2SDM2MEMzNTUuNTk0IDMwMy45NzYgMzUyIDMwNy41NjkgMzUyIDMxMS45NzVDMzUyIDMxNi4zODEgMzU1LjU5NCAzMTkuOTc0IDM2MCAzMTkuOTc0SDQ0MEM0NDQuNDA2IDMxOS45NzQgNDQ4IDMxNi4zODEgNDQ4IDMxMS45NzVDNDQ4IDMwNy41NjkgNDQ0LjQwNiAzMDMuOTc2IDQ0MCAzMDMuOTc2Wk0zMTIgMzAzLjk3NkgyMDBDMTk1LjU5NCAzMDMuOTc2IDE5MiAzMDcuNTY5IDE5MiAzMTEuOTc1QzE5MiAzMTYuMzgxIDE5NS41OTQgMzE5Ljk3NCAyMDAgMzE5Ljk3NEgzMTJDMzE2LjQwNiAzMTkuOTc0IDMyMCAzMTYuMzgxIDMyMCAzMTEuOTc1QzMyMCAzMDcuNTY5IDMxNi40MDYgMzAzLjk3NiAzMTIgMzAzLjk3NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MessageCaptions(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 0H64C28.75 0 0 28.748 0 63.995V351.972C0 387.219 28.75 415.967 64 415.967H160V499.96C160 507.032 165.92 512 172.178 512C174.547 512 176.963 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.972V63.995C512 28.748 483.25 0 448 0ZM496 351.972C496 378.436 474.467 399.968 448 399.968H298.662L294.395 403.173L176 492.052V399.968H64C37.533 399.968 16 378.436 16 351.972V63.995C16 37.53 37.533 15.999 64 15.999H448C474.467 15.999 496 37.53 496 63.995V351.972ZM224 247.98C224 243.574 220.406 239.981 216 239.981H72C67.594 239.981 64 243.574 64 247.98S67.594 255.979 72 255.979H216C220.406 255.979 224 252.386 224 247.98ZM440 239.981H264C259.594 239.981 256 243.574 256 247.98S259.594 255.979 264 255.979H440C444.406 255.979 448 252.386 448 247.98S444.406 239.981 440 239.981ZM152 303.976H72C67.594 303.976 64 307.569 64 311.975C64 316.381 67.594 319.974 72 319.974H152C156.406 319.974 160 316.381 160 311.975C160 307.569 156.406 303.976 152 303.976ZM440 303.976H360C355.594 303.976 352 307.569 352 311.975C352 316.381 355.594 319.974 360 319.974H440C444.406 319.974 448 316.381 448 311.975C448 307.569 444.406 303.976 440 303.976ZM312 303.976H200C195.594 303.976 192 307.569 192 311.975C192 316.381 195.594 319.974 200 319.974H312C316.406 319.974 320 316.381 320 311.975C320 307.569 316.406 303.976 312 303.976Z" />
        </Icon>
    </>
}