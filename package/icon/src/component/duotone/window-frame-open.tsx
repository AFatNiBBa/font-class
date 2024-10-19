
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `window-frame-open` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame-open?s=duotone window-frame-open}
 * @preview ![window-frame-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI0MCAyMjQuMDAxSDk2VjY0LjAwMUgyNDBWMjI0LjAwMVpNNDE2IDIyNC4wMDFIMjcyVjY0LjAwMUg0MTZWMjI0LjAwMVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDgwIDMyQzQ4MCAxNC4zNzUgNDY1LjYyNSAwIDQ0OCAwSDY0QzQ2LjM3NSAwIDMyIDE0LjM3NSAzMiAzMlYyODhINDgwVjMyWk0yNDAgMjI0SDk2VjY0SDI0MFYyMjRaTTQxNiAyMjRIMjcyVjY0SDQxNlYyMjRaTTQ5NiA0NDhINDgwVjMyMEg0MTZWNDQ4SDk2VjMyMEgzMlY0NDhIMTZDNy4xMjUgNDQ4IDAgNDU1LjEyNSAwIDQ2NFY0OTZDMCA1MDQuODc1IDcuMTI1IDUxMiAxNiA1MTJINDk2QzUwNC44NzUgNTEyIDUxMiA1MDQuODc1IDUxMiA0OTZWNDY0QzUxMiA0NTUuMTI1IDUwNC44NzUgNDQ4IDQ5NiA0NDhaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WindowFrameOpen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M240 224.001H96V64.001H240V224.001ZM416 224.001H272V64.001H416V224.001Z" />
            <path d="M480 32C480 14.375 465.625 0 448 0H64C46.375 0 32 14.375 32 32V288H480V32ZM240 224H96V64H240V224ZM416 224H272V64H416V224ZM496 448H480V320H416V448H96V320H32V448H16C7.125 448 0 455.125 0 464V496C0 504.875 7.125 512 16 512H496C504.875 512 512 504.875 512 496V464C512 455.125 504.875 448 496 448Z" />
        </Icon>
    </>
}