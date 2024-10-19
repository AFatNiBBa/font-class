
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-captions` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-captions?s=duotone comment-captions}
 * @preview ![comment-captions](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAzMkMxMTQuNjI1IDMyIDAgMTI1LjEyNSAwIDI0MEMwIDI4OS42MjUgMjEuMzc1IDMzNSA1NyAzNzAuNzVDNDQuNSA0MjEuMTI1IDIuNzUgNDY2IDIuMjUgNDY2LjVDMCA0NjguNzUgLTAuNjI1IDQ3Mi4yNSAwLjc1IDQ3NS4yNUMyIDQ3OC4yNSA0Ljc1IDQ4MCA4IDQ4MEM3NC4yNSA0ODAgMTI0IDQ0OC4yNSAxNDguNjI1IDQyOC42MjVDMTgxLjI1IDQ0MC44NzUgMjE3LjYyNSA0NDggMjU2IDQ0OEMzOTcuMzc1IDQ0OCA1MTIgMzU0Ljg3NSA1MTIgMjQwUzM5Ny4zNzUgMzIgMjU2IDMyWk0xMTkuOTg0IDIyNEgyMTUuOTcxQzIyOS4yMTkgMjI0IDIzOS45NjkgMjM0Ljc1IDIzOS45NjkgMjQ4UzIyOS4yMTkgMjcyIDIxNS45NzEgMjcySDExOS45ODRDMTA2LjczNiAyNzIgOTUuOTg2IDI2MS4yNSA5NS45ODYgMjQ4UzEwNi43MzYgMjI0IDExOS45ODQgMjI0Wk0xMzUuOTgyIDM1MkgxMTkuOTg0QzEwNi43MzYgMzUyIDk1Ljk4NiAzNDEuMjUgOTUuOTg2IDMyOFMxMDYuNzM2IDMwNCAxMTkuOTg0IDMwNEgxMzUuOTgyQzE0OS4yMyAzMDQgMTU5Ljk3OSAzMTQuNzUgMTU5Ljk3OSAzMjhTMTQ5LjIzIDM1MiAxMzUuOTgyIDM1MlpNMjk1Ljk2MSAzNTJIMjE1Ljk3MUMyMDIuNzIzIDM1MiAxOTEuOTc1IDM0MS4yNSAxOTEuOTc1IDMyOFMyMDIuNzIzIDMwNCAyMTUuOTcxIDMwNEgyOTUuOTYxQzMwOS4yMDkgMzA0IDMxOS45NTcgMzE0Ljc1IDMxOS45NTcgMzI4UzMwOS4yMDkgMzUyIDI5NS45NjEgMzUyWk0zOTEuOTQ3IDM1MkgzNzUuOTQ5QzM2Mi43MDEgMzUyIDM1MS45NTMgMzQxLjI1IDM1MS45NTMgMzI4UzM2Mi43MDEgMzA0IDM3NS45NDkgMzA0SDM5MS45NDdDNDA1LjE5NSAzMDQgNDE1Ljk0NSAzMTQuNzUgNDE1Ljk0NSAzMjhTNDA1LjE5NSAzNTIgMzkxLjk0NyAzNTJaTTM5MS45NDcgMjcySDI5NS45NjFDMjgyLjcxMyAyNzIgMjcxLjk2MyAyNjEuMjUgMjcxLjk2MyAyNDhTMjgyLjcxMyAyMjQgMjk1Ljk2MSAyMjRIMzkxLjk0N0M0MDUuMTk1IDIyNCA0MTUuOTQ1IDIzNC43NSA0MTUuOTQ1IDI0OFM0MDUuMTk1IDI3MiAzOTEuOTQ3IDI3MloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTE5Ljk5OCAyNzJIMjE1Ljk4NEMyMjkuMjMyIDI3MiAyMzkuOTgyIDI2MS4yNSAyMzkuOTgyIDI0OFMyMjkuMjMyIDIyNCAyMTUuOTg0IDIyNEgxMTkuOTk4QzEwNi43NSAyMjQgOTYgMjM0Ljc1IDk2IDI0OFMxMDYuNzUgMjcyIDExOS45OTggMjcyWk0yOTUuOTc1IDMwNEgyMTUuOTg0QzIwMi43MzYgMzA0IDE5MS45ODggMzE0Ljc1IDE5MS45ODggMzI4UzIwMi43MzYgMzUyIDIxNS45ODQgMzUySDI5NS45NzVDMzA5LjIyMyAzNTIgMzE5Ljk3MSAzNDEuMjUgMzE5Ljk3MSAzMjhTMzA5LjIyMyAzMDQgMjk1Ljk3NSAzMDRaTTEzNS45OTYgMzA0SDExOS45OThDMTA2Ljc1IDMwNCA5NiAzMTQuNzUgOTYgMzI4UzEwNi43NSAzNTIgMTE5Ljk5OCAzNTJIMTM1Ljk5NkMxNDkuMjQ0IDM1MiAxNTkuOTkyIDM0MS4yNSAxNTkuOTkyIDMyOFMxNDkuMjQ0IDMwNCAxMzUuOTk2IDMwNFpNMzkxLjk2MSAzMDRIMzc1Ljk2M0MzNjIuNzE1IDMwNCAzNTEuOTY3IDMxNC43NSAzNTEuOTY3IDMyOFMzNjIuNzE1IDM1MiAzNzUuOTYzIDM1MkgzOTEuOTYxQzQwNS4yMDkgMzUyIDQxNS45NTkgMzQxLjI1IDQxNS45NTkgMzI4UzQwNS4yMDkgMzA0IDM5MS45NjEgMzA0Wk0yOTUuOTc1IDI3MkgzOTEuOTYxQzQwNS4yMDkgMjcyIDQxNS45NTkgMjYxLjI1IDQxNS45NTkgMjQ4UzQwNS4yMDkgMjI0IDM5MS45NjEgMjI0SDI5NS45NzVDMjgyLjcyNyAyMjQgMjcxLjk3NyAyMzQuNzUgMjcxLjk3NyAyNDhTMjgyLjcyNyAyNzIgMjk1Ljk3NSAyNzJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CommentCaptions(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C2 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32ZM119.984 224H215.971C229.219 224 239.969 234.75 239.969 248S229.219 272 215.971 272H119.984C106.736 272 95.986 261.25 95.986 248S106.736 224 119.984 224ZM135.982 352H119.984C106.736 352 95.986 341.25 95.986 328S106.736 304 119.984 304H135.982C149.23 304 159.979 314.75 159.979 328S149.23 352 135.982 352ZM295.961 352H215.971C202.723 352 191.975 341.25 191.975 328S202.723 304 215.971 304H295.961C309.209 304 319.957 314.75 319.957 328S309.209 352 295.961 352ZM391.947 352H375.949C362.701 352 351.953 341.25 351.953 328S362.701 304 375.949 304H391.947C405.195 304 415.945 314.75 415.945 328S405.195 352 391.947 352ZM391.947 272H295.961C282.713 272 271.963 261.25 271.963 248S282.713 224 295.961 224H391.947C405.195 224 415.945 234.75 415.945 248S405.195 272 391.947 272Z" />
            <path d="M119.998 272H215.984C229.232 272 239.982 261.25 239.982 248S229.232 224 215.984 224H119.998C106.75 224 96 234.75 96 248S106.75 272 119.998 272ZM295.975 304H215.984C202.736 304 191.988 314.75 191.988 328S202.736 352 215.984 352H295.975C309.223 352 319.971 341.25 319.971 328S309.223 304 295.975 304ZM135.996 304H119.998C106.75 304 96 314.75 96 328S106.75 352 119.998 352H135.996C149.244 352 159.992 341.25 159.992 328S149.244 304 135.996 304ZM391.961 304H375.963C362.715 304 351.967 314.75 351.967 328S362.715 352 375.963 352H391.961C405.209 352 415.959 341.25 415.959 328S405.209 304 391.961 304ZM295.975 272H391.961C405.209 272 415.959 261.25 415.959 248S405.209 224 391.961 224H295.975C282.727 224 271.977 234.75 271.977 248S282.727 272 295.975 272Z" />
        </Icon>
    </>
}