
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ban` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ban?s=duotone ban}
 * @preview ![ban](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE1Ni4yNSAxMTEuMDlMNDAwLjgyIDM1NS42NkMzODguNjEzIDM3My4zNTcgMzczLjI2OCAzODguNzAzIDM1NS41NyA0MDAuOTFMMTExIDE1Ni4zNEMxMjMuMjA3IDEzOC42NDMgMTM4LjU1MyAxMjMuMjk3IDE1Ni4yNSAxMTEuMDlaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjU2IDQzMkMxNTguOTUzIDQzMiA4MCAzNTMuMDQ3IDgwIDI1NlMxNTguOTUzIDgwIDI1NiA4MFM0MzIgMTU4Ljk1MyA0MzIgMjU2UzM1My4wNDcgNDMyIDI1NiA0MzJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Ban(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M156.25 111.09L400.82 355.66C388.613 373.357 373.268 388.703 355.57 400.91L111 156.34C123.207 138.643 138.553 123.297 156.25 111.09Z" />
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 432C158.953 432 80 353.047 80 256S158.953 80 256 80S432 158.953 432 256S353.047 432 256 432Z" />
        </Icon>
    </>
}