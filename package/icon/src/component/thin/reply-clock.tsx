
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `reply-clock` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/reply-clock?s=thin reply-clock}
 * @preview ![reply-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgMEMzODQuNDcxIDAgMzIwIDY0LjQ3MyAzMjAgMTQ0UzM4NC40NzEgMjg4IDQ2NCAyODhTNjA4IDIyMy41MjcgNjA4IDE0NFM1NDMuNTI5IDAgNDY0IDBaTTQ2NCAyNzJDMzkzLjQyIDI3MiAzMzYgMjE0LjU3OCAzMzYgMTQ0UzM5My40MiAxNiA0NjQgMTZTNTkyIDczLjQyMiA1OTIgMTQ0UzUzNC41OCAyNzIgNDY0IDI3MlpNNTIwIDE0NEg0NjRWNzJDNDY0IDY3LjU5NCA0NjAuNDA2IDY0IDQ1NiA2NFM0NDggNjcuNTk0IDQ0OCA3MlYxNTJDNDQ4IDE1Ni40MDYgNDUxLjU5NCAxNjAgNDU2IDE2MEg1MjBDNTI0LjQwNiAxNjAgNTI4IDE1Ni40MDYgNTI4IDE1MlM1MjQuNDA2IDE0NCA1MjAgMTQ0Wk01MjIuMjg5IDMwOS45ODRDNTIyLjIzOCAzMTAgNTIyLjE4NiAzMTAuMDIgNTIyLjEzNSAzMTAuMDM5QzUxNy44NzkgMzExLjUzOSA1MTUuODIyIDMxNi40MSA1MTcuNjU0IDMyMC41MzFDNTI0LjEyOSAzMzUuMTA5IDUyOCAzNTEuMDQ3IDUyOCAzNjhWNDQwQzUyOCA0NDQuNDA2IDUzMS41NzggNDQ4IDUzNiA0NDhTNTQ0IDQ0NC40MDYgNTQ0IDQ0MFYzNjhDNTQ0IDM0OC43MTEgNTM5LjU5IDMzMC41ODIgNTMyLjIzMiAzMTRDNTMwLjU2MSAzMTAuMjM0IDUyNi4xNzQgMzA4LjYwNSA1MjIuMjg5IDMwOS45ODRaTTMxNC4wMDIgMjM1Ljc4OUMzMTIuNTY0IDIzMy40NTMgMzEwLjA2NiAyMzEuOTk2IDMwNy4zMjIgMjMxLjk5Nkg2MS4yOTlMMjM3LjI2NiA3OC4wMjNDMjQwLjU5NCA3NS4xMTcgMjQwLjkzOCA3MC4wNTUgMjM4LjAxNiA2Ni43MTFDMjM1LjA5NCA2My4zOTggMjMwLjA0NyA2My4wODYgMjI2LjczNCA2NS45NjFMMzQuNzM0IDIzMy45NjVDMzMgMjM1LjQ5NiAzMiAyMzcuNjg0IDMyIDIzOS45OTZTMzMgMjQ0LjQ5NiAzNC43MzQgMjQ2LjAyN0wyMjYuNzM0IDQxNC4wMzFDMjI4LjI1IDQxNS4zNDQgMjMwLjEyNSA0MTYgMjMyIDQxNkMyMzQuMjE5IDQxNiAyMzYuNDM4IDQxNS4wNjIgMjM4LjAxNiA0MTMuMjgxQzI0MC45MzggNDA5LjkzOCAyNDAuNTk0IDQwNC44NzUgMjM3LjI2NiA0MDEuOTY5TDYxLjI5OSAyNDcuOTk2SDMwNy40MjJDMzEzLjYyNSAyNDcuOTk2IDMxNy4zNTkgMjQxLjIzNCAzMTQuMTA0IDIzNS45NTNDMzE0LjA2OCAyMzUuODk4IDMxNC4wMzUgMjM1Ljg0NCAzMTQuMDAyIDIzNS43ODlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ReplyClock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M464 0C384.471 0 320 64.473 320 144S384.471 288 464 288S608 223.527 608 144S543.529 0 464 0ZM464 272C393.42 272 336 214.578 336 144S393.42 16 464 16S592 73.422 592 144S534.58 272 464 272ZM520 144H464V72C464 67.594 460.406 64 456 64S448 67.594 448 72V152C448 156.406 451.594 160 456 160H520C524.406 160 528 156.406 528 152S524.406 144 520 144ZM522.289 309.984C522.238 310 522.186 310.02 522.135 310.039C517.879 311.539 515.822 316.41 517.654 320.531C524.129 335.109 528 351.047 528 368V440C528 444.406 531.578 448 536 448S544 444.406 544 440V368C544 348.711 539.59 330.582 532.232 314C530.561 310.234 526.174 308.605 522.289 309.984ZM314.002 235.789C312.564 233.453 310.066 231.996 307.322 231.996H61.299L237.266 78.023C240.594 75.117 240.938 70.055 238.016 66.711C235.094 63.398 230.047 63.086 226.734 65.961L34.734 233.965C33 235.496 32 237.684 32 239.996S33 244.496 34.734 246.027L226.734 414.031C228.25 415.344 230.125 416 232 416C234.219 416 236.438 415.062 238.016 413.281C240.938 409.938 240.594 404.875 237.266 401.969L61.299 247.996H307.422C313.625 247.996 317.359 241.234 314.104 235.953C314.068 235.898 314.035 235.844 314.002 235.789Z" />
        </Icon>
    </>
}