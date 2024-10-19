
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bars-progress` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bars-progress?s=duotone bars-progress}
 * @preview ![bars-progress](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4OCAzNTJIMjg4VjQ4MEg0ODhDNTAxLjI1IDQ4MCA1MTIgNDY5LjI1IDUxMiA0NTZWMzc2QzUxMiAzNjIuNzUgNTAxLjI1IDM1MiA0ODggMzUyWk00NjQgNDMySDI4OVY0MDBINDY0VjQzMlpNNDg4IDMySDM1MlYxNjBINDg4QzUwMS4yNSAxNjAgNTEyIDE0OS4yNSA1MTIgMTM2VjU2QzUxMiA0Mi43NSA1MDEuMjUgMzIgNDg4IDMyWk00NjQgMTEySDM1M1Y4MEg0NjRWMTEyWk00ODggMTkySDE2MFYzMjBINDg4QzUwMS4yNSAzMjAgNTEyIDMwOS4yNSA1MTIgMjk2VjIxNkM1MTIgMjAyLjc1IDUwMS4yNSAxOTIgNDg4IDE5MlpNNDY0IDI3MkgxNjFWMjQwSDQ2NFYyNzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI0IDMyMEgxNjBWMTkySDI0QzEwLjc1IDE5MiAwIDIwMi43NSAwIDIxNlYyOTZDMCAzMDkuMjUgMTAuNzUgMzIwIDI0IDMyMFpNMCAzNzZWNDU2QzAgNDY5LjI1IDEwLjc1IDQ4MCAyNCA0ODBIMjg4VjM1MkgyNEMxMC43NSAzNTIgMCAzNjIuNzUgMCAzNzZaTTI0IDMyQzEwLjc1IDMyIDAgNDIuNzUgMCA1NlYxMzZDMCAxNDkuMjUgMTAuNzUgMTYwIDI0IDE2MEgzNTJWMzJIMjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BarsProgress(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M488 352H288V480H488C501.25 480 512 469.25 512 456V376C512 362.75 501.25 352 488 352ZM464 432H289V400H464V432ZM488 32H352V160H488C501.25 160 512 149.25 512 136V56C512 42.75 501.25 32 488 32ZM464 112H353V80H464V112ZM488 192H160V320H488C501.25 320 512 309.25 512 296V216C512 202.75 501.25 192 488 192ZM464 272H161V240H464V272Z" />
            <path d="M24 320H160V192H24C10.75 192 0 202.75 0 216V296C0 309.25 10.75 320 24 320ZM0 376V456C0 469.25 10.75 480 24 480H288V352H24C10.75 352 0 362.75 0 376ZM24 32C10.75 32 0 42.75 0 56V136C0 149.25 10.75 160 24 160H352V32H24Z" />
        </Icon>
    </>
}