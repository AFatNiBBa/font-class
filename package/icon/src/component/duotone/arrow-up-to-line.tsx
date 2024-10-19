
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-to-line` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-line?s=duotone arrow-up-to-line}
 * @preview ![arrow-up-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyIDk2SDM1MkMzNjkuNjg4IDk2IDM4NCA4MS42ODggMzg0IDY0UzM2OS42ODggMzIgMzUyIDMySDMyQzE0LjMxMiAzMiAwIDQ2LjMxMiAwIDY0UzE0LjMxMiA5NiAzMiA5NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDEuMzc1IDM0Mi42MjVDMjguODc1IDMzMC4xMjUgMjguODc1IDMwOS44NzUgNDEuMzc1IDI5Ny4zNzVMMTY5LjM3NSAxNjkuMzc1QzE4MS44NzUgMTU2Ljg3NSAyMDIuMTI1IDE1Ni44NzUgMjE0LjYyNSAxNjkuMzc1TDM0Mi42MjUgMjk3LjM3NUMzNTUuMTI1IDMwOS44NzUgMzU1LjEyNSAzMzAuMTI1IDM0Mi42MjUgMzQyLjYyNUMzMzYuMzc1IDM0OC44NzUgMzI4LjE4NyAzNTIgMzIwIDM1MlMzMDMuNjI1IDM0OC44NzUgMjk3LjM3NSAzNDIuNjI1TDIyNCAyNjkuMjVWNDQ4QzIyNCA0NjUuNjg4IDIwOS42ODcgNDgwIDE5MiA0ODBTMTYwIDQ2NS42ODggMTYwIDQ0OFYyNjkuMjVMODYuNjI1IDM0Mi42MjVDNzQuMTI1IDM1NS4xMjUgNTMuODc1IDM1NS4xMjUgNDEuMzc1IDM0Mi42MjVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUpToLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M32 96H352C369.688 96 384 81.688 384 64S369.688 32 352 32H32C14.312 32 0 46.312 0 64S14.312 96 32 96Z" />
            <path d="M41.375 342.625C28.875 330.125 28.875 309.875 41.375 297.375L169.375 169.375C181.875 156.875 202.125 156.875 214.625 169.375L342.625 297.375C355.125 309.875 355.125 330.125 342.625 342.625C336.375 348.875 328.187 352 320 352S303.625 348.875 297.375 342.625L224 269.25V448C224 465.688 209.687 480 192 480S160 465.688 160 448V269.25L86.625 342.625C74.125 355.125 53.875 355.125 41.375 342.625Z" />
        </Icon>
    </>
}