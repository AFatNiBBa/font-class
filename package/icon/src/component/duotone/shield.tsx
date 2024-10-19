
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `shield` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shield?s=duotone shield}
 * @preview ![shield](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAwQzI2MS4zMTQgMC4wMTIgMjY5LjUxNiAxLjYzOSAyNzQuNDA2IDMuNjY0TDQ2Ni40MDYgODMuNjczQzQ4NC4zMTIgOTEuMDY0IDQ5NiAxMDguNTY4IDQ5NiAxMjcuOTc1QzQ5NiAzODUuMTU2IDMwNi44MzggNTEyIDI1Ni4wNDcgNTEyQzI1Ni4wMzEgNTEyIDI1Ni4wMTYgNTExLjk5NiAyNTYgNTExLjk5NlYwWiAiIGNsYXNzPSJmYS1zZWNvbmRhcnkiPjwvcGF0aD48cGF0aCBkPSJNMjU2IDUxMS45OTZDMjU1Ljk4NCA1MTEuOTk2IDI1NS45NjkgNTEyIDI1NS45NTMgNTEyQzIwNC45MjIgNTEyIDE2IDM4NS4yNTggMTYgMTI3Ljk3NUMxNiAxMDguNTY4IDI3LjY4OCA5MS4wNjQgNDUuNTk0IDgzLjY3M0wyMzcuNTk0IDMuNjY0QzI0Mi40ODQgMS42MzkgMjUwLjY4NiAwLjAxMiAyNTYgMFY1MTEuOTk2WiAiIGNsYXNzPSJmYS1wcmltYXJ5Ij48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function Shield(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 0C261.314 0.012 269.516 1.639 274.406 3.664L466.406 83.673C484.312 91.064 496 108.568 496 127.975C496 385.156 306.838 512 256.047 512C256.031 512 256.016 511.996 256 511.996V0Z " />
            <path d="M256 511.996C255.984 511.996 255.969 512 255.953 512C204.922 512 16 385.258 16 127.975C16 108.568 27.688 91.064 45.594 83.673L237.594 3.664C242.484 1.639 250.686 0.012 256 0V511.996Z " />
        </Icon>
    </>
}