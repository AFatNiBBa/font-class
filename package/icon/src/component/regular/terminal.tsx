
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `terminal` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/terminal?s=regular terminal}
 * @preview ![terminal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjUuNjUyIDIzOS43NDZMNDEuNjUgMzkuNzQyQzMyLjcxMiAyOS45NjEgMTcuNTI1IDI5LjM5OCA3Ljc0MyAzOC4zMzZDLTIuMDA3IDQ3LjMwNSAtMi42MzIgNjIuNDkzIDYuMzM3IDcyLjI0M0wxNzUuMzcgMjU1Ljk5Nkw2LjMzNyA0MzkuNzQ5Qy0yLjYzMiA0NDkuNDk5IC0yLjAwNyA0NjQuNjg3IDcuNzQzIDQ3My42NTZDMTIuMzY4IDQ3Ny45MDYgMTguMTgxIDQ4MCAyMy45OTQgNDgwQzMwLjQ2MiA0ODAgMzYuOTMxIDQ3Ny40MDYgNDEuNjUgNDcyLjI1TDIyNS42NTIgMjcyLjI0NkMyMzQuMTIxIDI2My4wNTkgMjM0LjEyMSAyNDguOTMzIDIyNS42NTIgMjM5Ljc0NlpNNTUyIDQzMS45OTlIMjQ3Ljk5NkMyMzQuNzQ2IDQzMS45OTkgMjIzLjk5NiA0NDIuNzQ5IDIyMy45OTYgNDU2UzIzNC43NDYgNDgwIDI0Ny45OTYgNDgwSDU1MkM1NjUuMjUgNDgwIDU3NiA0NjkuMjUgNTc2IDQ1NlM1NjUuMjUgNDMxLjk5OSA1NTIgNDMxLjk5OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Terminal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M225.652 239.746L41.65 39.742C32.712 29.961 17.525 29.398 7.743 38.336C-2.007 47.305 -2.632 62.493 6.337 72.243L175.37 255.996L6.337 439.749C-2.632 449.499 -2.007 464.687 7.743 473.656C12.368 477.906 18.181 480 23.994 480C30.462 480 36.931 477.406 41.65 472.25L225.652 272.246C234.121 263.059 234.121 248.933 225.652 239.746ZM552 431.999H247.996C234.746 431.999 223.996 442.749 223.996 456S234.746 480 247.996 480H552C565.25 480 576 469.25 576 456S565.25 431.999 552 431.999Z" />
        </Icon>
    </>
}