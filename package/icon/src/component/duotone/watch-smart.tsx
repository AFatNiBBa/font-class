
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `watch-smart` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/watch-smart?s=duotone watch-smart}
 * @preview ![watch-smart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMCA4MEg2NEMyOC42MjUgODAgMCAxMDguNjI1IDAgMTQ0VjM2OEMwIDQwMy4zNzUgMjguNjI1IDQzMiA2NCA0MzJIMzIwQzM1NS4zNzUgNDMyIDM4NCA0MDMuMzc1IDM4NCAzNjhWMTQ0QzM4NCAxMDguNjI1IDM1NS4zNzUgODAgMzIwIDgwWk0yNTguNDM4IDMxMS4zNzVDMjUzLjY4OCAzMTcuMDYyIDI0Ni44NzUgMzIwIDI0MCAzMjBDMjM0LjU2MiAzMjAgMjI5LjEyNSAzMTguMTg4IDIyNC42MjUgMzE0LjQzOEwxNzYuNjI1IDI3NC40MzhDMTcxLjE1NiAyNjkuODc1IDE2OCAyNjMuMTI1IDE2OCAyNTZWMTg0QzE2OCAxNzAuNzUgMTc4Ljc1IDE2MCAxOTIgMTYwUzIxNiAxNzAuNzUgMjE2IDE4NFYyNDQuNzVMMjU1LjM3NSAyNzcuNTYyQzI2NS41NjIgMjg2LjA2MiAyNjYuOTM4IDMwMS4xODggMjU4LjQzOCAzMTEuMzc1WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yODggMEg5NkM3OC4zNzUgMCA2NCAxNC4zNzUgNjQgMzJWODBIMzIwVjMyQzMyMCAxNC4zNzUgMzA1LjYyNSAwIDI4OCAwWk02NCA0ODBDNjQgNDk3LjYyNSA3OC4zNzUgNTEyIDk2IDUxMkgyODhDMzA1LjYyNSA1MTIgMzIwIDQ5Ny42MjUgMzIwIDQ4MFY0MzJINjRWNDgwWk0xOTIgMTYwQzE3OC43NSAxNjAgMTY4IDE3MC43NSAxNjggMTg0VjI1NkMxNjggMjYzLjEyNSAxNzEuMTU2IDI2OS44NzUgMTc2LjYyNSAyNzQuNDM4TDIyNC42MjUgMzE0LjQzOEMyMjkuMTI1IDMxOC4xODggMjM0LjU2MiAzMjAgMjQwIDMyMEMyNDYuODc1IDMyMCAyNTMuNjg4IDMxNy4wNjIgMjU4LjQzOCAzMTEuMzc1QzI2Ni45MzggMzAxLjE4OCAyNjUuNTYyIDI4Ni4wNjMgMjU1LjM3NSAyNzcuNTYzTDIxNiAyNDQuNzVWMTg0QzIxNiAxNzAuNzUgMjA1LjI1IDE2MCAxOTIgMTYwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WatchSmart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M320 80H64C28.625 80 0 108.625 0 144V368C0 403.375 28.625 432 64 432H320C355.375 432 384 403.375 384 368V144C384 108.625 355.375 80 320 80ZM258.438 311.375C253.688 317.062 246.875 320 240 320C234.562 320 229.125 318.188 224.625 314.438L176.625 274.438C171.156 269.875 168 263.125 168 256V184C168 170.75 178.75 160 192 160S216 170.75 216 184V244.75L255.375 277.562C265.562 286.062 266.938 301.188 258.438 311.375Z" />
            <path d="M288 0H96C78.375 0 64 14.375 64 32V80H320V32C320 14.375 305.625 0 288 0ZM64 480C64 497.625 78.375 512 96 512H288C305.625 512 320 497.625 320 480V432H64V480ZM192 160C178.75 160 168 170.75 168 184V256C168 263.125 171.156 269.875 176.625 274.438L224.625 314.438C229.125 318.188 234.562 320 240 320C246.875 320 253.688 317.062 258.438 311.375C266.938 301.188 265.562 286.063 255.375 277.563L216 244.75V184C216 170.75 205.25 160 192 160Z" />
        </Icon>
    </>
}