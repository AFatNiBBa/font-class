
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-xmark` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-xmark?s=light user-xmark}
 * @preview ![user-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjU2QzI5NC42OTUgMjU2IDM1MiAxOTguNjkxIDM1MiAxMjhTMjk0LjY5NSAwIDIyNCAwQzE1My4zMTIgMCA5NiA1Ny4zMDkgOTYgMTI4UzE1My4zMTIgMjU2IDIyNCAyNTZaTTIyNCAzMkMyNzYuOTM2IDMyIDMyMCA3NS4wNjQgMzIwIDEyOEMzMjAgMTgwLjkzNCAyNzYuOTM2IDIyNCAyMjQgMjI0UzEyOCAxODAuOTM0IDEyOCAxMjhDMTI4IDc1LjA2NCAxNzEuMDY0IDMyIDIyNCAzMlpNMjc0LjY2NCAzMDRIMTczLjMzNkM3Ny42MDkgMzA0IDAgMzgxLjYwMiAwIDQ3Ny4zMzJDMCA0OTYuNDc3IDE1LjUyMyA1MTIgMzQuNjY0IDUxMkg0MTMuMzM2QzQzMi40NzcgNTEyIDQ0OCA0OTYuNDc3IDQ0OCA0NzcuMzMyQzQ0OCAzODEuNjAyIDM3MC4zOTggMzA0IDI3NC42NjQgMzA0Wk00MTMuMzM2IDQ4MEgzNC42NjRDMzMuMTk1IDQ4MCAzMiA0NzguODAzIDMyIDQ3Ny4zMzJDMzIgMzk5LjQgOTUuNDAyIDMzNiAxNzMuMzM2IDMzNkgyNzQuNjY0QzM1Mi41OTggMzM2IDQxNiAzOTkuNCA0MTYgNDc3LjMzMkM0MTYgNDc4LjgwMyA0MTQuODA1IDQ4MCA0MTMuMzM2IDQ4MFpNNTY2LjYyNSAyMjRMNjE5LjMxMiAxNzEuMzEyQzYyNS41NjIgMTY1LjA2MiA2MjUuNTYyIDE1NC45MzcgNjE5LjMxMiAxNDguNjg4UzYwMi45MzcgMTQyLjQzOCA1OTYuNjg4IDE0OC42ODhMNTQ0IDIwMS4zNzVMNDkxLjMxMiAxNDguNjg4QzQ4NS4wNjIgMTQyLjQzOCA0NzQuOTM3IDE0Mi40MzggNDY4LjY4OCAxNDguNjg4UzQ2Mi40MzggMTY1LjA2MyA0NjguNjg4IDE3MS4zMTJMNTIxLjM3NSAyMjRMNDY4LjY4OCAyNzYuNjg4QzQ2Mi40MzggMjgyLjkzOCA0NjIuNDM4IDI5My4wNjMgNDY4LjY4OCAyOTkuMzEyQzQ3NC45MzQgMzA1LjU1OSA0ODUuMDU5IDMwNS41NjYgNDkxLjMxMiAyOTkuMzEyTDU0NCAyNDYuNjI1TDU5Ni42ODggMjk5LjMxMkM2MDIuOTM0IDMwNS41NTkgNjEzLjA1OSAzMDUuNTY2IDYxOS4zMTIgMjk5LjMxMkM2MjUuNTYyIDI5My4wNjIgNjI1LjU2MiAyODIuOTM3IDYxOS4zMTIgMjc2LjY4OEw1NjYuNjI1IDIyNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UserXmark(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM224 32C276.936 32 320 75.064 320 128C320 180.934 276.936 224 224 224S128 180.934 128 128C128 75.064 171.064 32 224 32ZM274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H413.336C432.477 512 448 496.477 448 477.332C448 381.602 370.398 304 274.664 304ZM413.336 480H34.664C33.195 480 32 478.803 32 477.332C32 399.4 95.402 336 173.336 336H274.664C352.598 336 416 399.4 416 477.332C416 478.803 414.805 480 413.336 480ZM566.625 224L619.312 171.312C625.562 165.062 625.562 154.937 619.312 148.688S602.937 142.438 596.688 148.688L544 201.375L491.312 148.688C485.062 142.438 474.937 142.438 468.688 148.688S462.438 165.063 468.688 171.312L521.375 224L468.688 276.688C462.438 282.938 462.438 293.063 468.688 299.312C474.934 305.559 485.059 305.566 491.312 299.312L544 246.625L596.688 299.312C602.934 305.559 613.059 305.566 619.312 299.312C625.562 293.062 625.562 282.937 619.312 276.688L566.625 224Z" />
        </Icon>
    </>
}