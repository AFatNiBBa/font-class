
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hockey-puck` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-puck?s=duotone hockey-puck}
 * @preview ![hockey-puck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAxNjBDNTEyIDIxMyAzOTcuMzc1IDI1NiAyNTYgMjU2UzAgMjEzIDAgMTYwUzExNC42MjUgNjQgMjU2IDY0UzUxMiAxMDcgNTEyIDE2MFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTEyIDE2MFYzNTJDNTEyIDQwNSAzOTcuMzc1IDQ0OCAyNTYgNDQ4UzAgNDA1IDAgMzUyVjE2MEMwIDIxMyAxMTQuNjI1IDI1NiAyNTYgMjU2UzUxMiAyMTMgNTEyIDE2MFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function HockeyPuck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M512 160C512 213 397.375 256 256 256S0 213 0 160S114.625 64 256 64S512 107 512 160Z" />
            <path d="M512 160V352C512 405 397.375 448 256 448S0 405 0 352V160C0 213 114.625 256 256 256S512 213 512 160Z" />
        </Icon>
    </>
}