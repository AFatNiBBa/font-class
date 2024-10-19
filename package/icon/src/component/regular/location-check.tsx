
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `location-check` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-check?s=regular location-check}
 * @preview ![location-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMEM4NS45NjkgMCAwIDg1Ljk2OSAwIDE5MkMwIDI2OS40MSAyNi45NjkgMjkxLjAzNSAxNzIuMjgxIDUwMS42NzZDMTc3LjA0NyA1MDguNTU5IDE4NC41MjMgNTEyIDE5MiA1MTJTMjA2Ljk1MyA1MDguNTU5IDIxMS43MTkgNTAxLjY3NkMzNTcuMDMxIDI5MS4wMzUgMzg0IDI2OS40MSAzODQgMTkyQzM4NCA4NS45NjkgMjk4LjAzMSAwIDE5MiAwWk0xOTIgNDQ1LjgzNkMxNzQuMzA3IDQyMC4zNzEgMTU4LjU4MiAzOTcuOTY5IDE0NC42MjMgMzc4LjA4NkM1Ny41NjIgMjU0LjA2NiA0OCAyMzguODc1IDQ4IDE5MkM0OCAxMTIuNTk4IDExMi41OTggNDggMTkyIDQ4UzMzNiAxMTIuNTk4IDMzNiAxOTJDMzM2IDIzOC44NzUgMzI2LjQzOCAyNTQuMDY2IDIzOS4zNzcgMzc4LjA4NkMyMjUuNDEyIDM5Ny45OCAyMDkuNjg0IDQyMC4zODMgMTkyIDQ0NS44MzZaTTI0OS43ODEgMTM2LjM3NUwxNzAuNjU2IDIyOC43MTlMMTMyLjk2OSAxOTEuMDMxQzEyMy41OTQgMTgxLjY1NiAxMDguNDA2IDE4MS42NTYgOTkuMDMxIDE5MS4wMzFTODkuNjU2IDIxNS41OTQgOTkuMDMxIDIyNC45NjlMMTU1LjAzMSAyODAuOTY5QzE1OS41MzEgMjg1LjQ2OSAxNjUuNjU2IDI4OCAxNzIgMjg4QzE3Mi4zMTIgMjg4IDE3Mi42MjUgMjg4IDE3Mi45MDYgMjg3Ljk2OUMxNzkuNTk0IDI4Ny43MTkgMTg1Ljg3NSAyODQuNjg3IDE5MC4yMTkgMjc5LjYyNUwyODYuMjE5IDE2Ny42MjVDMjk0Ljg0NCAxNTcuNTYyIDI5My42ODcgMTQyLjQwNiAyODMuNjI1IDEzMy43ODFDMjczLjU5NCAxMjUuMTg4IDI1OC40MzggMTI2LjM0NCAyNDkuNzgxIDEzNi4zNzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LocationCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 445.836C174.307 420.371 158.582 397.969 144.623 378.086C57.562 254.066 48 238.875 48 192C48 112.598 112.598 48 192 48S336 112.598 336 192C336 238.875 326.438 254.066 239.377 378.086C225.412 397.98 209.684 420.383 192 445.836ZM249.781 136.375L170.656 228.719L132.969 191.031C123.594 181.656 108.406 181.656 99.031 191.031S89.656 215.594 99.031 224.969L155.031 280.969C159.531 285.469 165.656 288 172 288C172.312 288 172.625 288 172.906 287.969C179.594 287.719 185.875 284.687 190.219 279.625L286.219 167.625C294.844 157.562 293.687 142.406 283.625 133.781C273.594 125.188 258.438 126.344 249.781 136.375Z" />
        </Icon>
    </>
}