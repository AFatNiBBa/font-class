
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `lightbulb-exclamation` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-exclamation?s=regular lightbulb-exclamation}
 * @preview ![lightbulb-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMEM5MC4wMDQgMC4zMiAxNiA4Mi45NzMgMTYgMTc1Ljk5MkMxNiAyMjAuMzY3IDMyLjQzOCAyNjAuODM2IDU5LjU2MiAyOTEuNzczQzc2LjA5NCAzMTAuNjE3IDEwMS45MDYgMzUwLjAwNCAxMTEuNzgxIDM4My4yMjNDMTExLjgxMiAzODMuNDczIDExMS44NDQgMzgzLjczOCAxMTEuODc1IDM4NC4wMDRIMjcyLjEyNUMyNzIuMTU2IDM4My43MzggMjcyLjE4NyAzODMuNDg4IDI3Mi4yMTkgMzgzLjIyM0MyODIuMDk0IDM1MC4wMDQgMzA3LjkwNiAzMTAuNjE3IDMyNC40MzcgMjkxLjc3M0MzNTEuNTYyIDI2MC44MzYgMzY4IDIyMC4zNjcgMzY4IDE3NS45OTJDMzY4IDc4Ljc5NyAyODkuMjEzIDAuMDA0IDE5MiAwWk0yODguMzU1IDI2MC4xMTdDMjcyLjY5OSAyNzcuOTY1IDI1My4zMTggMzA2LjQxNCAyMzkuMzA3IDMzNi4wMDRIMTQ0LjY5M0MxMzAuNjg0IDMwNi40MTQgMTExLjMwNSAyNzcuOTY5IDk1LjY1NCAyNjAuMTI5Qzc1LjI0MiAyMzYuODQ4IDY0IDIwNi45NjUgNjQgMTc1Ljk5MkM2NCAxMTMuMjczIDExMi4xMTUgNDguMjUgMTkxLjk5NCA0OEMyNjIuNTggNDguMDA0IDMyMCAxMDUuNDIyIDMyMCAxNzUuOTkyQzMyMCAyMDYuOTY1IDMwOC43NTggMjM2Ljg0OCAyODguMzU1IDI2MC4xMTdaTTExMi4wNjIgNDU0LjMyOEMxMTIuMDYyIDQ2MC42MjUgMTEzLjkzOCA0NjYuNzgxIDExNy40MDYgNDcyLjAzMUwxMzQuNSA0OTcuNzE5QzEzOS43NSA1MDUuNTk0IDE1MS42ODggNTEyIDE2MS4xNTYgNTEySDIyMi44NzVDMjMyLjMxMiA1MTIgMjQ0LjI1IDUwNS41OTQgMjQ5LjUgNDk3LjcxOUwyNjYuNTk0IDQ3Mi4wMzFDMjY5LjUzMSA0NjcuNTk0IDI3MS45MzcgNDU5LjY1NiAyNzEuOTM3IDQ1NC4zMjhMMjcyIDQxNS45ODRIMTEyTDExMi4wNjIgNDU0LjMyOFpNMTkyIDI0MEMxNzQuMzI2IDI0MCAxNjAgMjU0LjMyOCAxNjAgMjcyUzE3NC4zMjYgMzA0IDE5MiAzMDRTMjI0IDI4OS42NzIgMjI0IDI3MlMyMDkuNjc0IDI0MCAxOTIgMjQwWk0xOTIgMjA4QzIwNS4yNSAyMDggMjE2IDE5Ny4yNSAyMTYgMTg0VjEwNEMyMTYgOTAuNzUgMjA1LjI1IDgwIDE5MiA4MFMxNjggOTAuNzUgMTY4IDEwNFYxODRDMTY4IDE5Ny4yNSAxNzguNzUgMjA4IDE5MiAyMDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LightbulbExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 0C90.004 0.32 16 82.973 16 175.992C16 220.367 32.438 260.836 59.562 291.773C76.094 310.617 101.906 350.004 111.781 383.223C111.812 383.473 111.844 383.738 111.875 384.004H272.125C272.156 383.738 272.187 383.488 272.219 383.223C282.094 350.004 307.906 310.617 324.437 291.773C351.562 260.836 368 220.367 368 175.992C368 78.797 289.213 0.004 192 0ZM288.355 260.117C272.699 277.965 253.318 306.414 239.307 336.004H144.693C130.684 306.414 111.305 277.969 95.654 260.129C75.242 236.848 64 206.965 64 175.992C64 113.273 112.115 48.25 191.994 48C262.58 48.004 320 105.422 320 175.992C320 206.965 308.758 236.848 288.355 260.117ZM112.062 454.328C112.062 460.625 113.938 466.781 117.406 472.031L134.5 497.719C139.75 505.594 151.688 512 161.156 512H222.875C232.312 512 244.25 505.594 249.5 497.719L266.594 472.031C269.531 467.594 271.937 459.656 271.937 454.328L272 415.984H112L112.062 454.328ZM192 240C174.326 240 160 254.328 160 272S174.326 304 192 304S224 289.672 224 272S209.674 240 192 240ZM192 208C205.25 208 216 197.25 216 184V104C216 90.75 205.25 80 192 80S168 90.75 168 104V184C168 197.25 178.75 208 192 208Z" />
        </Icon>
    </>
}