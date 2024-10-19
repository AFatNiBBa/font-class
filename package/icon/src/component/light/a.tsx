
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `a` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/a?s=light a}
 * @preview ![a](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODIuNzMzIDQ1Ny43MzhMMjA2LjczNCA0MC45MjRDMjAxLjczNCAyOS4wMjUgMTgyLjI2NiAyOS4wMjUgMTc3LjI2NiA0MC45MjRMMS4yNjcgNDU3LjczOEMtMi4xNzEgNDY1Ljg3OSAxLjYyNiA0NzUuMjcyIDkuNzY3IDQ3OC43NDhDMTcuODQ1IDQ4Mi4wNjcgMjcuMjgyIDQ3OC4zNzIgMzAuNzM1IDQ3MC4yTDY3LjIxNCAzODMuODEySDMxNi43ODZMMzUzLjI2NSA0NzAuMkMzNTUuODQzIDQ3Ni4zMzcgMzYxLjc2NSA0ODAgMzY3Ljk5OSA0ODBDMzcwLjA3NyA0ODAgMzcyLjIwMiA0NzkuNTkzIDM3NC4yMzMgNDc4Ljc0OEMzODIuMzc0IDQ3NS4yNzIgMzg2LjE3MSA0NjUuODc5IDM4Mi43MzMgNDU3LjczOFpNODAuNzUzIDM1MS43NUwxOTIgODguMjk3TDMwMy4yNDcgMzUxLjc1SDgwLjc1M1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function A(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M382.733 457.738L206.734 40.924C201.734 29.025 182.266 29.025 177.266 40.924L1.267 457.738C-2.171 465.879 1.626 475.272 9.767 478.748C17.845 482.067 27.282 478.372 30.735 470.2L67.214 383.812H316.786L353.265 470.2C355.843 476.337 361.765 480 367.999 480C370.077 480 372.202 479.593 374.233 478.748C382.374 475.272 386.171 465.879 382.733 457.738ZM80.753 351.75L192 88.297L303.247 351.75H80.753Z" />
        </Icon>
    </>
}