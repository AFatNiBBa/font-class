
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `badge-check` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/badge-check?s=light badge-check}
 * @preview ![badge-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDQgMjU2QzU0NCAyMjAuNSA1MjQuNjI1IDE4Ny43NSA0OTQuMzc1IDE3MC41QzUwMy41IDEzNi44NzUgNDk0LjEyNSAxMDAuMTI1IDQ2OSA3NVM0MDcuMTI1IDQwLjUgMzczLjUgNDkuNjI1QzM1Ni4yNSAxOS4zNzUgMzIzLjUgMCAyODggMFMyMTkuNzUgMTkuMzc1IDIwMi41IDQ5LjYyNUMxNjguODc1IDQwLjUgMTMyLjEyNSA0OS44NzUgMTA3IDc1UzcyLjUgMTM2Ljg3NSA4MS42MjUgMTcwLjVDNTEuMzc1IDE4Ny43NSAzMiAyMjAuNSAzMiAyNTZTNTEuMzc1IDMyNC4yNSA4MS42MjUgMzQxLjVDNzIuNSAzNzUuMTI1IDgxLjg3NSA0MTEuODc1IDEwNyA0MzdDMTMzLjUgNDYzLjUgMTcwLjM3NSA0NzEuMTI1IDIwMi41IDQ2Mi4zNzVDMjE5Ljg3NSA0OTIuNjI1IDI1Mi41IDUxMiAyODggNTEyUzM1Ni4xMjUgNDkyLjYyNSAzNzMuNSA0NjIuMzc1QzQwNi4yNSA0NzEuMjUgNDQyLjg3NSA0NjMuMTI1IDQ2OSA0MzdDNDk0LjEyNSA0MTEuODc1IDUwMy41IDM3NS4xMjUgNDk0LjM3NSAzNDEuNUM1MjQuNjI1IDMyNC4yNSA1NDQgMjkxLjUgNTQ0IDI1NlpNNDUyLjg3NSAzMjQuMjVDNDU4LjI1IDMzNi4xMjUgNDgyLjM3NSAzNzguMzc1IDQ0Ni4zNzUgNDE0LjM3NUM0MTcuNSA0NDMuMjUgMzg4Ljg3NSA0MzUuNzUgMzU2LjI1IDQyMC44NzVDMzUxLjc1IDQzMyAzMzkgNDgwIDI4OCA0ODBDMjM1Ljg3NSA0ODAgMjIzLjI1IDQzMC41IDIxOS43NSA0MjAuODc1QzE4Ny4xMjUgNDM1Ljc1IDE1OC4zNzUgNDQzLjEyNSAxMjkuNjI1IDQxNC4zNzVDOTIuNzUgMzc3Ljc1IDExOC43NSAzMzMuODc1IDEyMy4xMjUgMzI0LjI1QzExMSAzMTkuNzUgNjQgMzA3IDY0IDI1NkM2NCAyMDMuODc1IDExMy41IDE5MS4yNSAxMjMuMTI1IDE4Ny43NUMxMTcuNzUgMTc1Ljg3NSA5My42MjUgMTMzLjYyNSAxMjkuNjI1IDk3LjYyNUMxNjYuMzc1IDYwLjc1IDIxMC4zNzUgODYuODc1IDIxOS43NSA5MS4xMjVDMjI0LjI1IDc5IDIzNyAzMiAyODggMzJDMzQwLjEyNSAzMiAzNTIuNzUgODEuNSAzNTYuMjUgOTEuMTI1QzM2OC4xMjUgODUuNzUgNDEwLjM3NSA2MS42MjUgNDQ2LjM3NSA5Ny42MjVDNDgzLjI1IDEzNC4yNSA0NTcuMjUgMTc4LjEyNSA0NTIuODc1IDE4Ny43NUM0NjUgMTkyLjI1IDUxMiAyMDUgNTEyIDI1NkM1MTIgMzA4LjEyNSA0NjIuNSAzMjAuNzUgNDUyLjg3NSAzMjQuMjVaTTM1Ni42ODggMTkxLjM1OUwyNjEuMzQ0IDI4Ni43MDNMMjE5LjMxMiAyNDQuNjg4QzIxMy4wNjIgMjM4LjQzOCAyMDIuOTM3IDIzOC40MzggMTk2LjY4OCAyNDQuNjg4UzE5MC40MzggMjYxLjA2MyAxOTYuNjg4IDI2Ny4zMTJMMjUwLjAzMSAzMjAuNjQxQzI1My4xNTYgMzIzLjc2NiAyNTcuMjUgMzI1LjMyOCAyNjEuMzQ0IDMyNS4zMjhTMjY5LjUzMSAzMjMuNzY2IDI3Mi42NTYgMzIwLjY0MUwzNzkuMzEyIDIxMy45ODRDMzg1LjU2MiAyMDcuNzM0IDM4NS41NjIgMTk3LjYwOSAzNzkuMzEyIDE5MS4zNTlTMzYyLjkzOCAxODUuMTA5IDM1Ni42ODggMTkxLjM1OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BadgeCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M544 256C544 220.5 524.625 187.75 494.375 170.5C503.5 136.875 494.125 100.125 469 75S407.125 40.5 373.5 49.625C356.25 19.375 323.5 0 288 0S219.75 19.375 202.5 49.625C168.875 40.5 132.125 49.875 107 75S72.5 136.875 81.625 170.5C51.375 187.75 32 220.5 32 256S51.375 324.25 81.625 341.5C72.5 375.125 81.875 411.875 107 437C133.5 463.5 170.375 471.125 202.5 462.375C219.875 492.625 252.5 512 288 512S356.125 492.625 373.5 462.375C406.25 471.25 442.875 463.125 469 437C494.125 411.875 503.5 375.125 494.375 341.5C524.625 324.25 544 291.5 544 256ZM452.875 324.25C458.25 336.125 482.375 378.375 446.375 414.375C417.5 443.25 388.875 435.75 356.25 420.875C351.75 433 339 480 288 480C235.875 480 223.25 430.5 219.75 420.875C187.125 435.75 158.375 443.125 129.625 414.375C92.75 377.75 118.75 333.875 123.125 324.25C111 319.75 64 307 64 256C64 203.875 113.5 191.25 123.125 187.75C117.75 175.875 93.625 133.625 129.625 97.625C166.375 60.75 210.375 86.875 219.75 91.125C224.25 79 237 32 288 32C340.125 32 352.75 81.5 356.25 91.125C368.125 85.75 410.375 61.625 446.375 97.625C483.25 134.25 457.25 178.125 452.875 187.75C465 192.25 512 205 512 256C512 308.125 462.5 320.75 452.875 324.25ZM356.688 191.359L261.344 286.703L219.312 244.688C213.062 238.438 202.937 238.438 196.688 244.688S190.438 261.063 196.688 267.312L250.031 320.641C253.156 323.766 257.25 325.328 261.344 325.328S269.531 323.766 272.656 320.641L379.312 213.984C385.562 207.734 385.562 197.609 379.312 191.359S362.938 185.109 356.688 191.359Z" />
        </Icon>
    </>
}