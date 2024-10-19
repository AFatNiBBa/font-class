
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lightbulb` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb?s=regular lightbulb}
 * @preview ![lightbulb](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTIuMDYyIDQ1NC4zMjhDMTEyLjA2MiA0NjAuNjI1IDExMy45MzggNDY2Ljc4MSAxMTcuNDA2IDQ3Mi4wMzFMMTM0LjUgNDk3LjcxOUMxMzkuNzUgNTA1LjU5NCAxNTEuNjg4IDUxMiAxNjEuMTU2IDUxMkgyMjIuODc1QzIzMi4zMTIgNTEyIDI0NC4yNSA1MDUuNTk0IDI0OS41IDQ5Ny43MTlMMjY2LjU5NCA0NzIuMDMxQzI2OS41MzEgNDY3LjU5NCAyNzEuOTM3IDQ1OS42NTYgMjcxLjkzNyA0NTQuMzI4TDI3MiA0MTUuOTg0SDExMkwxMTIuMDYyIDQ1NC4zMjhaTTE5MiAwQzkwLjAwNCAwLjMyIDE2IDgyLjk3MyAxNiAxNzUuOTkyQzE2IDIyMC4zNjcgMzIuNDM4IDI2MC44MzYgNTkuNTYyIDI5MS43NzNDNzYuMDk0IDMxMC42MTcgMTAxLjkwNiAzNTAuMDA0IDExMS43ODEgMzgzLjIyM0MxMTEuODEyIDM4My40NzMgMTExLjg0NCAzODMuNzM4IDExMS44NzUgMzg0LjAwNEgyNzIuMTI1QzI3Mi4xNTYgMzgzLjczOCAyNzIuMTg3IDM4My40ODggMjcyLjIxOSAzODMuMjIzQzI4Mi4wOTQgMzUwLjAwNCAzMDcuOTA2IDMxMC42MTcgMzI0LjQzNyAyOTEuNzczQzM1MS41NjIgMjYwLjgzNiAzNjggMjIwLjM2NyAzNjggMTc1Ljk5MkMzNjggNzguNzk3IDI4OS4yMTMgMC4wMDQgMTkyIDBaTTI4OC4zNTUgMjYwLjExN0MyNzIuNjk5IDI3Ny45NjUgMjUzLjMxOCAzMDYuNDE0IDIzOS4zMDcgMzM2LjAwNEgxNDQuNjkzQzEzMC42ODQgMzA2LjQxNCAxMTEuMzA1IDI3Ny45NjkgOTUuNjU0IDI2MC4xMjlDNzUuMjQyIDIzNi44NDggNjQgMjA2Ljk2NSA2NCAxNzUuOTkyQzY0IDExMy4yNzMgMTEyLjExNSA0OC4yNSAxOTEuOTk0IDQ4QzI2Mi41OCA0OC4wMDQgMzIwIDEwNS40MjIgMzIwIDE3NS45OTJDMzIwIDIwNi45NjUgMzA4Ljc1OCAyMzYuODQ4IDI4OC4zNTUgMjYwLjExN1pNMTc2IDgwQzEzMS44OTEgODAgOTYgMTE1Ljg3NSA5NiAxNjBDOTYgMTY4Ljg0NCAxMDMuMTU2IDE3NiAxMTIgMTc2UzEyOCAxNjguODQ0IDEyOCAxNjBDMTI4IDEzMy41MzEgMTQ5LjUzMSAxMTIgMTc2IDExMkMxODQuODQ0IDExMiAxOTIgMTA0Ljg0NCAxOTIgOTZTMTg0Ljg0NCA4MCAxNzYgODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Lightbulb(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M112.062 454.328C112.062 460.625 113.938 466.781 117.406 472.031L134.5 497.719C139.75 505.594 151.688 512 161.156 512H222.875C232.312 512 244.25 505.594 249.5 497.719L266.594 472.031C269.531 467.594 271.937 459.656 271.937 454.328L272 415.984H112L112.062 454.328ZM192 0C90.004 0.32 16 82.973 16 175.992C16 220.367 32.438 260.836 59.562 291.773C76.094 310.617 101.906 350.004 111.781 383.223C111.812 383.473 111.844 383.738 111.875 384.004H272.125C272.156 383.738 272.187 383.488 272.219 383.223C282.094 350.004 307.906 310.617 324.437 291.773C351.562 260.836 368 220.367 368 175.992C368 78.797 289.213 0.004 192 0ZM288.355 260.117C272.699 277.965 253.318 306.414 239.307 336.004H144.693C130.684 306.414 111.305 277.969 95.654 260.129C75.242 236.848 64 206.965 64 175.992C64 113.273 112.115 48.25 191.994 48C262.58 48.004 320 105.422 320 175.992C320 206.965 308.758 236.848 288.355 260.117ZM176 80C131.891 80 96 115.875 96 160C96 168.844 103.156 176 112 176S128 168.844 128 160C128 133.531 149.531 112 176 112C184.844 112 192 104.844 192 96S184.844 80 176 80Z" />
        </Icon>
    </>
}