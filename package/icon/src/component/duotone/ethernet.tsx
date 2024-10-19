
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ethernet` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ethernet?s=duotone ethernet}
 * @preview ![ethernet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAyMDhWNDMyQzUxMiA0NDAuNzUgNTA0Ljc1IDQ0OCA0OTYgNDQ4SDQxNlYzMjBIMzg0VjQ0OEgzMjBWMzIwSDI4OFY0NDhIMjI0VjMyMEgxOTJWNDQ4SDEyOFYzMjBIOTZWNDQ4SDE2QzcuMjUgNDQ4IDAgNDQwLjc1IDAgNDMyVjIwOEMwIDE5OS4yNSA3LjI1IDE5MiAxNiAxOTJINjRWMTQ0QzY0IDEzNS4yNSA3MS4yNSAxMjggODAgMTI4SDEyOFY4MEMxMjggNzEuMjUgMTM1LjI1IDY0IDE0NCA2NEgzNjhDMzc2Ljc1IDY0IDM4NCA3MS4yNSAzODQgODBWMTI4SDQzMkM0NDAuNzUgMTI4IDQ0OCAxMzUuMjUgNDQ4IDE0NFYxOTJINDk2QzUwNC43NSAxOTIgNTEyIDE5OS4yNSA1MTIgMjA4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik05NiA0NDhIMTI4VjMyMEg5NlY0NDhaTTE5MiA0NDhIMjI0VjMyMEgxOTJWNDQ4Wk0yODggNDQ4SDMyMFYzMjBIMjg4VjQ0OFpNMzg0IDMyMFY0NDhINDE2VjMyMEgzODRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Ethernet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M512 208V432C512 440.75 504.75 448 496 448H416V320H384V448H320V320H288V448H224V320H192V448H128V320H96V448H16C7.25 448 0 440.75 0 432V208C0 199.25 7.25 192 16 192H64V144C64 135.25 71.25 128 80 128H128V80C128 71.25 135.25 64 144 64H368C376.75 64 384 71.25 384 80V128H432C440.75 128 448 135.25 448 144V192H496C504.75 192 512 199.25 512 208Z" />
            <path d="M96 448H128V320H96V448ZM192 448H224V320H192V448ZM288 448H320V320H288V448ZM384 320V448H416V320H384Z" />
        </Icon>
    </>
}