
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wand-magic` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wand-magic?s=thin wand-magic}
 * @preview ![wand-magic](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDAuNTggMzlMNDczLjAxNiAxMS40MjRDNDY1LjQwMiAzLjgwOSA0NTUuNDE4IDAgNDQ1LjQzOCAwQzQzNS40NTUgMCA0MjUuNDc3IDMuODA3IDQxNy44NjEgMTEuNDIyTDExLjQyNCA0MTcuODM4Qy0zLjgwNyA0MzMuMDY4IC0zLjgwOSA0NTcuNzYgMTEuNDIyIDQ3Mi45OTJMMzguOTkyIDUwMC41NzRDNDYuNjA1IDUwOC4xODkgNTYuNTkgNTEyIDY2LjU3IDUxMkM3Ni41NTMgNTEyIDg2LjUzMSA1MDguMTkzIDk0LjE0NiA1MDAuNTc2TDUwMC41NzggOTQuMTVDNTE1LjgwNyA3OC45MjIgNTE1LjgwNyA1NC4yMyA1MDAuNTggMzlaTTgyLjgzMiA0ODkuMjY0Qzc4LjQ4OCA0OTMuNjA3IDcyLjcxMyA0OTYgNjYuNTcgNDk2UzU0LjY1MiA0OTMuNjA3IDUwLjMwOSA0ODkuMjYyTDIyLjczNiA0NjEuNjhDMTMuNzcgNDUyLjcxMSAxMy43NyA0MzguMTE5IDIyLjczOCA0MjkuMTUyTDI4NC4yOTUgMTY3LjYwN0wzNDQuMzkzIDIyNy43MDVMODIuODMyIDQ4OS4yNjRaTTQ4OS4yNjYgODIuODM2TDM1NS43MDcgMjE2LjM5NUwyOTUuNjA3IDE1Ni4yOTVMNDI5LjE3NiAyMi43MzRDNDMzLjUyIDE4LjM5MyA0MzkuMjk1IDE2IDQ0NS40MzggMTZDNDUxLjU4MiAxNiA0NTcuMzU3IDE4LjM5MyA0NjEuNjk5IDIyLjczNEw0ODkuMjY2IDUwLjMxMkM0OTguMjMgNTkuMjc5IDQ5OC4yMyA3My44NzEgNDg5LjI2NiA4Mi44MzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function WandMagic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M500.58 39L473.016 11.424C465.402 3.809 455.418 0 445.438 0C435.455 0 425.477 3.807 417.861 11.422L11.424 417.838C-3.807 433.068 -3.809 457.76 11.422 472.992L38.992 500.574C46.605 508.189 56.59 512 66.57 512C76.553 512 86.531 508.193 94.146 500.576L500.578 94.15C515.807 78.922 515.807 54.23 500.58 39ZM82.832 489.264C78.488 493.607 72.713 496 66.57 496S54.652 493.607 50.309 489.262L22.736 461.68C13.77 452.711 13.77 438.119 22.738 429.152L284.295 167.607L344.393 227.705L82.832 489.264ZM489.266 82.836L355.707 216.395L295.607 156.295L429.176 22.734C433.52 18.393 439.295 16 445.438 16C451.582 16 457.357 18.393 461.699 22.734L489.266 50.312C498.23 59.279 498.23 73.871 489.266 82.836Z" />
        </Icon>
    </>
}