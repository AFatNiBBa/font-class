
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `message` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message?s=duotone message}
 * @preview ![message](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiA2My45OTVWMzUyQzUxMiAzODcuMjQ3IDQ4My4yNSA0MTUuOTk1IDQ0OCA0MTUuOTk1SDMwNEwxNzkuMTI1IDUwOS43MUMxNzEuMjUgNTE1LjQ1OSAxNjAgNTA5LjcxIDE2MCA0OTkuOTZWNDE1Ljk5NUg2NEMyOC43NSA0MTUuOTk1IDAgMzg3LjI0NyAwIDM1MlY2My45OTVDMCAyOC43NDggMjguNzUgMCA2NCAwSDQ0OEM0ODMuMjUgMCA1MTIgMjguNzQ4IDUxMiA2My45OTVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Message(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M512 63.995V352C512 387.247 483.25 415.995 448 415.995H304L179.125 509.71C171.25 515.459 160 509.71 160 499.96V415.995H64C28.75 415.995 0 387.247 0 352V63.995C0 28.748 28.75 0 64 0H448C483.25 0 512 28.748 512 63.995Z" />
        </Icon>
    </>
}