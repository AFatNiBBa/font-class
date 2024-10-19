
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ghost` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ghost?s=duotone ghost}
 * @preview ![ghost](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE4Ni4xMjUgMC4wODhDODEgMy4yMTQgMCA5NC44NTYgMCAyMDAuMDAyVjQ2NC4wNTNDMCA0NzguMzA2IDE3LjI1IDQ4NS40MzIgMjcuMjUgNDc1LjMwNUw1Mi4yNSA0NTYuODAyQzU4Ljg3NSA0NTEuODAxIDY4LjI1IDQ1Mi44MDEgNzMuNzUgNDU5LjA1MkwxMTYuNzUgNTA3LjMxMkMxMjMgNTEzLjU2MyAxMzMuMTI1IDUxMy41NjMgMTM5LjM3NSA1MDcuMzEyTDE4MCA0NjEuNTUzQzE4Ni4zNzUgNDU0LjMwMSAxOTcuNjI1IDQ1NC4zMDEgMjA0IDQ2MS41NTNMMjQ0LjYyNSA1MDcuMzEyQzI1MC44NzUgNTEzLjU2MyAyNjEgNTEzLjU2MyAyNjcuMjUgNTA3LjMxMkwzMTAuMjUgNDU5LjA1MkMzMTUuNzUgNDUyLjgwMSAzMjUuMTI1IDQ1MS44MDEgMzMxLjc1IDQ1Ni44MDJMMzU2Ljc1IDQ3NS4zMDVDMzY2Ljc1IDQ4NS40MzIgMzg0IDQ3OC4zMDYgMzg0IDQ2NC4wNTNWMTkyQzM4NCA4My45NzkgMjk0Ljg3NSAtMy4xNjMgMTg2LjEyNSAwLjA4OFpNMTI4IDIyNC4wMDdDMTEwLjM3NSAyMjQuMDA3IDk2IDIwOS42MjkgOTYgMTkyUzExMC4zNzUgMTU5Ljk5NCAxMjggMTU5Ljk5NEMxNDUuNjI1IDE1OS45OTQgMTYwIDE3NC4zNzIgMTYwIDE5MlMxNDUuNjI1IDIyNC4wMDcgMTI4IDIyNC4wMDdaTTI1NiAyMjQuMDA3QzIzOC4zNzUgMjI0LjAwNyAyMjQgMjA5LjYyOSAyMjQgMTkyUzIzOC4zNzUgMTU5Ljk5NCAyNTYgMTU5Ljk5NFMyODggMTc0LjM3MiAyODggMTkyUzI3My42MjUgMjI0LjAwNyAyNTYgMjI0LjAwN1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTI4IDE1OS45OTJDMTEwLjM3NSAxNTkuOTkyIDk2IDE3NC4zNzEgOTYgMTkyUzExMC4zNzUgMjI0LjAwOCAxMjggMjI0LjAwOFMxNjAgMjA5LjYyOSAxNjAgMTkyUzE0NS42MjUgMTU5Ljk5MiAxMjggMTU5Ljk5MlpNMjU2IDE1OS45OTJDMjM4LjM3NSAxNTkuOTkyIDIyNCAxNzQuMzcxIDIyNCAxOTJTMjM4LjM3NSAyMjQuMDA4IDI1NiAyMjQuMDA4UzI4OCAyMDkuNjI5IDI4OCAxOTJTMjczLjYyNSAxNTkuOTkyIDI1NiAxNTkuOTkyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const Ghost: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M186.125 0.088C81 3.214 0 94.856 0 200.002V464.053C0 478.306 17.25 485.432 27.25 475.305L52.25 456.802C58.875 451.801 68.25 452.801 73.75 459.052L116.75 507.312C123 513.563 133.125 513.563 139.375 507.312L180 461.553C186.375 454.301 197.625 454.301 204 461.553L244.625 507.312C250.875 513.563 261 513.563 267.25 507.312L310.25 459.052C315.75 452.801 325.125 451.801 331.75 456.802L356.75 475.305C366.75 485.432 384 478.306 384 464.053V192C384 83.979 294.875 -3.163 186.125 0.088ZM128 224.007C110.375 224.007 96 209.629 96 192S110.375 159.994 128 159.994C145.625 159.994 160 174.372 160 192S145.625 224.007 128 224.007ZM256 224.007C238.375 224.007 224 209.629 224 192S238.375 159.994 256 159.994S288 174.372 288 192S273.625 224.007 256 224.007Z" />
            <path d="M128 159.992C110.375 159.992 96 174.371 96 192S110.375 224.008 128 224.008S160 209.629 160 192S145.625 159.992 128 159.992ZM256 159.992C238.375 159.992 224 174.371 224 192S238.375 224.008 256 224.008S288 209.629 288 192S273.625 159.992 256 159.992Z" />
    </Icon>
);

export default Ghost;