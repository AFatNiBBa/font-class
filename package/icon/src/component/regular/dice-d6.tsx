
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dice-d6` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d6?s=regular dice-d6}
 * @preview ![dice-d6](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzEuODc1IDExNi4xMDhMMjM5Ljg3NSA0LjIxOUMyMzUgMS40MDYgMjI5LjUgMCAyMjQgMFMyMTMgMS40MDYgMjA4LjEyNSA0LjIxOUwxNi4xMjUgMTE2LjEwOEM2LjEyNSAxMjEuOTg0IDAgMTMyLjczNSAwIDE0NC40ODZWMzY3LjUxNEMwIDM3OS4yNjUgNi4xMjUgMzkwLjAxNiAxNi4xMjUgMzk1Ljg5MkwyMDguMTI1IDUwNy43ODFDMjEzIDUxMC41OTQgMjE4LjUgNTEyIDIyNCA1MTJTMjM1IDUxMC41OTQgMjM5Ljg3NSA1MDcuNzgxTDQzMS44NzUgMzk1Ljg5MkM0NDEuODc1IDM5MC4wMTYgNDQ4IDM3OS4yNjUgNDQ4IDM2Ny41MTRWMTQ0LjQ4NkM0NDggMTMyLjczNSA0NDEuODc1IDEyMS45ODQgNDMxLjg3NSAxMTYuMTA4Wk0yMjQgNTAuNkwzNzYuMzc1IDEzOS4zNjFMMjI0IDIyOC4yNDdMNzEuNjI1IDEzOS4zNjFMMjI0IDUwLjZaTTQ4IDE4MS4xMTZMMjAwIDI2OS43NTJWNDQ3LjM5OEw0OCAzNTguODg4VjE4MS4xMTZaTTI0OCA0NDcuMzk4VjI2OS43NTJMNDAwIDE4MS4xMTZWMzU4Ljg4OEwyNDggNDQ3LjM5OFogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function DiceD6(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M431.875 116.108L239.875 4.219C235 1.406 229.5 0 224 0S213 1.406 208.125 4.219L16.125 116.108C6.125 121.984 0 132.735 0 144.486V367.514C0 379.265 6.125 390.016 16.125 395.892L208.125 507.781C213 510.594 218.5 512 224 512S235 510.594 239.875 507.781L431.875 395.892C441.875 390.016 448 379.265 448 367.514V144.486C448 132.735 441.875 121.984 431.875 116.108ZM224 50.6L376.375 139.361L224 228.247L71.625 139.361L224 50.6ZM48 181.116L200 269.752V447.398L48 358.888V181.116ZM248 447.398V269.752L400 181.116V358.888L248 447.398Z " />
        </Icon>
    </>
}