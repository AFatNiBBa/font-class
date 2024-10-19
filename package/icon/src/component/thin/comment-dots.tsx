
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `comment-dots` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-dots?s=thin comment-dots}
 * @preview ![comment-dots](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzEuOTk5QzExNC41OTQgMzEuOTk5IDAgMTI1LjA5MyAwIDIzOS45OTlDMCAyODkuNTkzIDIxLjQwNiAzMzQuOTk5IDU3IDM3MC43MDJDNDQuNSA0MjEuMDkzIDIuNjg3IDQ2NS45OTkgMi4xODcgNDY2LjQ5OUMwIDQ2OC43OTYgLTAuNTk0IDQ3Mi4yMDIgMC42ODcgNDc1LjIwMkMxLjk5OSA0NzguMjAyIDQuODEyIDQ3OS45OTkgOCA0NzkuOTk5Qzc0LjMxMyA0NzkuOTk5IDEyNCA0NDguMjAyIDE0OC41OTQgNDI4LjU5M0MxODEuMzEyIDQ0MC45MDUgMjE3LjU5NCA0NDcuOTk5IDI1NiA0NDcuOTk5QzM5Ny40MDYgNDQ3Ljk5OSA1MTIgMzU0LjkwNSA1MTIgMjM5Ljk5OVMzOTcuNDA2IDMxLjk5OSAyNTYgMzEuOTk5Wk0yNTYgNDMxLjk5OUMyMjAuODc5IDQzMS45OTkgMTg2LjY0MSA0MjUuODE1IDE1NC4yMyA0MTMuNjE4TDE0NS43MjMgNDEwLjQxN0wxMzguNjE3IDQxNi4wODNDMTE4LjQxOCA0MzIuMTg4IDc4LjQ3NyA0NTguMTE4IDI1Ljk1NyA0NjMuMTQxQzQwLjM5NSA0NDQuODQ2IDYzLjM3NSA0MTEuNDYgNzIuNTMxIDM3NC41NTNMNzQuNzAzIDM2NS43OTZMNjguMzMyIDM1OS40MDVDMzQuMDk4IDMyNS4wNjUgMTYgMjgzLjc3NCAxNiAyMzkuOTk5QzE2IDEzNC4xMyAxMjMuNjY0IDQ3Ljk5OSAyNTYgNDcuOTk5UzQ5NiAxMzQuMTMgNDk2IDIzOS45OTlTMzg4LjMzNiA0MzEuOTk5IDI1NiA0MzEuOTk5Wk0yNTYgMjA3Ljk5OUMyMzguMzI4IDIwNy45OTkgMjI0IDIyMi4zMjUgMjI0IDIzOS45OTlTMjM4LjMyOCAyNzEuOTk5IDI1NiAyNzEuOTk5UzI4OCAyNTcuNjczIDI4OCAyMzkuOTk5UzI3My42NzIgMjA3Ljk5OSAyNTYgMjA3Ljk5OVpNMjU2IDI1NS45OTlDMjQ3LjE3NiAyNTUuOTk5IDI0MCAyNDguODIxIDI0MCAyMzkuOTk5UzI0Ny4xNzYgMjIzLjk5OSAyNTYgMjIzLjk5OVMyNzIgMjMxLjE3NyAyNzIgMjM5Ljk5OVMyNjQuODI0IDI1NS45OTkgMjU2IDI1NS45OTlaTTM4NCAyMDcuOTk5QzM2Ni4zMjggMjA3Ljk5OSAzNTIgMjIyLjMyNSAzNTIgMjM5Ljk5OVMzNjYuMzI4IDI3MS45OTkgMzg0IDI3MS45OTlTNDE2IDI1Ny42NzMgNDE2IDIzOS45OTlTNDAxLjY3MiAyMDcuOTk5IDM4NCAyMDcuOTk5Wk0zODQgMjU1Ljk5OUMzNzUuMTc2IDI1NS45OTkgMzY4IDI0OC44MjEgMzY4IDIzOS45OTlTMzc1LjE3NiAyMjMuOTk5IDM4NCAyMjMuOTk5UzQwMCAyMzEuMTc3IDQwMCAyMzkuOTk5UzM5Mi44MjQgMjU1Ljk5OSAzODQgMjU1Ljk5OVpNMTI4IDIwNy45OTlDMTEwLjMyOCAyMDcuOTk5IDk2IDIyMi4zMjUgOTYgMjM5Ljk5OVMxMTAuMzI4IDI3MS45OTkgMTI4IDI3MS45OTlTMTYwIDI1Ny42NzMgMTYwIDIzOS45OTlTMTQ1LjY3MiAyMDcuOTk5IDEyOCAyMDcuOTk5Wk0xMjggMjU1Ljk5OUMxMTkuMTc2IDI1NS45OTkgMTEyIDI0OC44MjEgMTEyIDIzOS45OTlTMTE5LjE3NiAyMjMuOTk5IDEyOCAyMjMuOTk5UzE0NCAyMzEuMTc3IDE0NCAyMzkuOTk5UzEzNi44MjQgMjU1Ljk5OSAxMjggMjU1Ljk5OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CommentDots(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 31.999C114.594 31.999 0 125.093 0 239.999C0 289.593 21.406 334.999 57 370.702C44.5 421.093 2.687 465.999 2.187 466.499C0 468.796 -0.594 472.202 0.687 475.202C1.999 478.202 4.812 479.999 8 479.999C74.313 479.999 124 448.202 148.594 428.593C181.312 440.905 217.594 447.999 256 447.999C397.406 447.999 512 354.905 512 239.999S397.406 31.999 256 31.999ZM256 431.999C220.879 431.999 186.641 425.815 154.23 413.618L145.723 410.417L138.617 416.083C118.418 432.188 78.477 458.118 25.957 463.141C40.395 444.846 63.375 411.46 72.531 374.553L74.703 365.796L68.332 359.405C34.098 325.065 16 283.774 16 239.999C16 134.13 123.664 47.999 256 47.999S496 134.13 496 239.999S388.336 431.999 256 431.999ZM256 207.999C238.328 207.999 224 222.325 224 239.999S238.328 271.999 256 271.999S288 257.673 288 239.999S273.672 207.999 256 207.999ZM256 255.999C247.176 255.999 240 248.821 240 239.999S247.176 223.999 256 223.999S272 231.177 272 239.999S264.824 255.999 256 255.999ZM384 207.999C366.328 207.999 352 222.325 352 239.999S366.328 271.999 384 271.999S416 257.673 416 239.999S401.672 207.999 384 207.999ZM384 255.999C375.176 255.999 368 248.821 368 239.999S375.176 223.999 384 223.999S400 231.177 400 239.999S392.824 255.999 384 255.999ZM128 207.999C110.328 207.999 96 222.325 96 239.999S110.328 271.999 128 271.999S160 257.673 160 239.999S145.672 207.999 128 207.999ZM128 255.999C119.176 255.999 112 248.821 112 239.999S119.176 223.999 128 223.999S144 231.177 144 239.999S136.824 255.999 128 255.999Z" />
        </Icon>
    </>
}