
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bracket-round` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bracket-round?s=light bracket-round}
 * @preview ![bracket-round](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjEuNDE4IDQ1MS4wNjJDMTI4LjU0NCA0NTYuMjUgMTMwLjEzOCA0NjYuMjUgMTI0Ljk1IDQ3My4zNzVDMTIxLjc5MyA0NzcuNjg4IDExNi45MTggNDgwIDExMS45OCA0ODBDMTA4LjcyOSA0ODAgMTA1LjQ3OSA0NzkgMTAyLjYzNSA0NzYuOTY5Qzk4LjQ0NyA0NzMuOTM4IDAgNDAxLjE1NiAwIDI1NS45OThTOTguNDQ3IDM4LjA1OSAxMDIuNjM1IDM1LjAyOEMxMDkuNzYxIDI5LjkwMyAxMTkuNzMgMzEuNDAzIDEyNC45NSAzOC42MjJDMTMwLjEzOCA0NS43NDcgMTI4LjU0NCA1NS43NDcgMTIxLjQxOCA2MC45MzVDMTE3Ljc2MSA2My42MjIgMzIuMDAzIDEyNy43MTYgMzIuMDAzIDI1NS45OThTMTE3Ljc2MSA0NDguMzc1IDEyMS40MTggNDUxLjA2MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BracketRound(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path d="M121.418 451.062C128.544 456.25 130.138 466.25 124.95 473.375C121.793 477.688 116.918 480 111.98 480C108.729 480 105.479 479 102.635 476.969C98.447 473.938 0 401.156 0 255.998S98.447 38.059 102.635 35.028C109.761 29.903 119.73 31.403 124.95 38.622C130.138 45.747 128.544 55.747 121.418 60.935C117.761 63.622 32.003 127.716 32.003 255.998S117.761 448.375 121.418 451.062Z" />
        </Icon>
    </>
}