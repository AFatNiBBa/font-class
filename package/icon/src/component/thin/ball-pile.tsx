
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ball-pile` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ball-pile?s=thin ball-pile}
 * @preview ![ball-pile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMzIwQzQ2OS41ODIgMzIwIDQ1OS43MzggMzIyLjA4MiA0NTAuMzQ2IDMyNS4xNDhDNDY4LjU1MyAzMDcuNjggNDgwIDI4My4yMjcgNDgwIDI1NkM0ODAgMjAyLjk4IDQzNy4wMiAxNjAgMzg0IDE2MEMzNzMuNTgyIDE2MCAzNjMuNzM4IDE2Mi4wODIgMzU0LjM0NiAxNjUuMTQ4QzM3Mi41NTMgMTQ3LjY4IDM4NCAxMjMuMjI3IDM4NCA5NkMzODQgNDIuOTggMzQxLjAyIDAgMjg4IDBTMTkyIDQyLjk4IDE5MiA5NkMxOTIgMTIzLjIyNyAyMDMuNDQ3IDE0Ny42OCAyMjEuNjU0IDE2NS4xNDhDMjEyLjI2MiAxNjIuMDgyIDIwMi40MTggMTYwIDE5MiAxNjBDMTM4Ljk4IDE2MCA5NiAyMDIuOTggOTYgMjU2Qzk2IDI4My4yMjcgMTA3LjQ0NyAzMDcuNjggMTI1LjY1NCAzMjUuMTQ4QzExNi4yNjIgMzIyLjA4MiAxMDYuNDE4IDMyMCA5NiAzMjBDNDIuOTggMzIwIDAgMzYyLjk4IDAgNDE2UzQyLjk4IDUxMiA5NiA1MTJTMTkyIDQ2OS4wMiAxOTIgNDE2QzE5MiAzODguNzczIDE4MC41NTMgMzY0LjMyIDE2Mi4zNDYgMzQ2Ljg1MkMxNzEuNzM4IDM0OS45MTggMTgxLjU4MiAzNTIgMTkyIDM1MlMyMTIuMjYyIDM0OS45MTggMjIxLjY1NCAzNDYuODUyQzIwMy40NDcgMzY0LjMyIDE5MiAzODguNzczIDE5MiA0MTZDMTkyIDQ2OS4wMiAyMzQuOTggNTEyIDI4OCA1MTJTMzg0IDQ2OS4wMiAzODQgNDE2QzM4NCAzODguNzczIDM3Mi41NTMgMzY0LjMyIDM1NC4zNDYgMzQ2Ljg1MkMzNjMuNzM4IDM0OS45MTggMzczLjU4MiAzNTIgMzg0IDM1MlM0MDQuMjYyIDM0OS45MTggNDEzLjY1NCAzNDYuODUyQzM5NS40NDcgMzY0LjMyIDM4NCAzODguNzczIDM4NCA0MTZDMzg0IDQ2OS4wMiA0MjYuOTggNTEyIDQ4MCA1MTJTNTc2IDQ2OS4wMiA1NzYgNDE2UzUzMy4wMiAzMjAgNDgwIDMyMFpNMTc2IDQxNkMxNzYgNDYwLjExMyAxNDAuMTEzIDQ5NiA5NiA0OTZDNTEuODg5IDQ5NiAxNiA0NjAuMTEzIDE2IDQxNlM1MS44ODkgMzM2IDk2IDMzNkMxNDAuMTEzIDMzNiAxNzYgMzcxLjg4NyAxNzYgNDE2Wk0yMDggOTZDMjA4IDUxLjg4NyAyNDMuODg5IDE2IDI4OCAxNkMzMzIuMTEzIDE2IDM2OCA1MS44ODcgMzY4IDk2UzMzMi4xMTMgMTc2IDI4OCAxNzZDMjQzLjg4OSAxNzYgMjA4IDE0MC4xMTMgMjA4IDk2Wk0xMTIgMjU2QzExMiAyMTEuODg3IDE0Ny44ODkgMTc2IDE5MiAxNzZDMjM2LjExMyAxNzYgMjcyIDIxMS44ODcgMjcyIDI1NlMyMzYuMTEzIDMzNiAxOTIgMzM2QzE0Ny44ODkgMzM2IDExMiAzMDAuMTEzIDExMiAyNTZaTTM2OCA0MTZDMzY4IDQ2MC4xMTMgMzMyLjExMyA0OTYgMjg4IDQ5NkMyNDMuODg5IDQ5NiAyMDggNDYwLjExMyAyMDggNDE2UzI0My44ODkgMzM2IDI4OCAzMzZDMzMyLjExMyAzMzYgMzY4IDM3MS44ODcgMzY4IDQxNlpNMjg4IDMyMEMyNzcuNTgyIDMyMCAyNjcuNzM4IDMyMi4wODIgMjU4LjM0NiAzMjUuMTQ4QzI3Ni41NTMgMzA3LjY4IDI4OCAyODMuMjI3IDI4OCAyNTZTMjc2LjU1MyAyMDQuMzIgMjU4LjM0NiAxODYuODUyQzI2Ny43MzggMTg5LjkxOCAyNzcuNTgyIDE5MiAyODggMTkyUzMwOC4yNjIgMTg5LjkxOCAzMTcuNjU0IDE4Ni44NTJDMjk5LjQ0NyAyMDQuMzIgMjg4IDIyOC43NzMgMjg4IDI1NlMyOTkuNDQ3IDMwNy42OCAzMTcuNjU0IDMyNS4xNDhDMzA4LjI2MiAzMjIuMDgyIDI5OC40MTggMzIwIDI4OCAzMjBaTTMwNCAyNTZDMzA0IDIxMS44ODcgMzM5Ljg4OSAxNzYgMzg0IDE3NkM0MjguMTEzIDE3NiA0NjQgMjExLjg4NyA0NjQgMjU2UzQyOC4xMTMgMzM2IDM4NCAzMzZDMzM5Ljg4OSAzMzYgMzA0IDMwMC4xMTMgMzA0IDI1NlpNNDgwIDQ5NkM0MzUuODg5IDQ5NiA0MDAgNDYwLjExMyA0MDAgNDE2UzQzNS44ODkgMzM2IDQ4MCAzMzZDNTI0LjExMyAzMzYgNTYwIDM3MS44ODcgNTYwIDQxNlM1MjQuMTEzIDQ5NiA0ODAgNDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BallPile(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M480 320C469.582 320 459.738 322.082 450.346 325.148C468.553 307.68 480 283.227 480 256C480 202.98 437.02 160 384 160C373.582 160 363.738 162.082 354.346 165.148C372.553 147.68 384 123.227 384 96C384 42.98 341.02 0 288 0S192 42.98 192 96C192 123.227 203.447 147.68 221.654 165.148C212.262 162.082 202.418 160 192 160C138.98 160 96 202.98 96 256C96 283.227 107.447 307.68 125.654 325.148C116.262 322.082 106.418 320 96 320C42.98 320 0 362.98 0 416S42.98 512 96 512S192 469.02 192 416C192 388.773 180.553 364.32 162.346 346.852C171.738 349.918 181.582 352 192 352S212.262 349.918 221.654 346.852C203.447 364.32 192 388.773 192 416C192 469.02 234.98 512 288 512S384 469.02 384 416C384 388.773 372.553 364.32 354.346 346.852C363.738 349.918 373.582 352 384 352S404.262 349.918 413.654 346.852C395.447 364.32 384 388.773 384 416C384 469.02 426.98 512 480 512S576 469.02 576 416S533.02 320 480 320ZM176 416C176 460.113 140.113 496 96 496C51.889 496 16 460.113 16 416S51.889 336 96 336C140.113 336 176 371.887 176 416ZM208 96C208 51.887 243.889 16 288 16C332.113 16 368 51.887 368 96S332.113 176 288 176C243.889 176 208 140.113 208 96ZM112 256C112 211.887 147.889 176 192 176C236.113 176 272 211.887 272 256S236.113 336 192 336C147.889 336 112 300.113 112 256ZM368 416C368 460.113 332.113 496 288 496C243.889 496 208 460.113 208 416S243.889 336 288 336C332.113 336 368 371.887 368 416ZM288 320C277.582 320 267.738 322.082 258.346 325.148C276.553 307.68 288 283.227 288 256S276.553 204.32 258.346 186.852C267.738 189.918 277.582 192 288 192S308.262 189.918 317.654 186.852C299.447 204.32 288 228.773 288 256S299.447 307.68 317.654 325.148C308.262 322.082 298.418 320 288 320ZM304 256C304 211.887 339.889 176 384 176C428.113 176 464 211.887 464 256S428.113 336 384 336C339.889 336 304 300.113 304 256ZM480 496C435.889 496 400 460.113 400 416S435.889 336 480 336C524.113 336 560 371.887 560 416S524.113 496 480 496Z" />
        </Icon>
    </>
}