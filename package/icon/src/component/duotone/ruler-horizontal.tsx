
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ruler-horizontal` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-horizontal?s=duotone ruler-horizontal}
 * @preview ![ruler-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0MCAxNjBWMzUyQzY0MCAzNjkuNiA2MjUuNiAzODQgNjA4IDM4NEgzMkMxNC40IDM4NCAwIDM2OS42IDAgMzUyVjE2MEMwIDE0Mi40IDE0LjQgMTI4IDMyIDEyOEgxMTJWMjA4QzExMiAyMTYuNzk5IDExOS4xOTkgMjI0IDEyOCAyMjRTMTQ0IDIxNi43OTkgMTQ0IDIwOFYxMjhIMjA4VjIwOEMyMDggMjE2Ljc5OSAyMTUuMTk5IDIyNCAyMjQgMjI0UzI0MCAyMTYuNzk5IDI0MCAyMDhWMTI4SDMwNFYyMDhDMzA0IDIxNi43OTkgMzExLjE5OSAyMjQgMzIwIDIyNFMzMzYgMjE2Ljc5OSAzMzYgMjA4VjEyOEg0MDBWMjA4QzQwMCAyMTYuNzk5IDQwNy4xOTkgMjI0IDQxNiAyMjRTNDMyIDIxNi43OTkgNDMyIDIwOFYxMjhINDk2VjIwOEM0OTYgMjE2LjgzNiA1MDMuMTY0IDIyNCA1MTIgMjI0QzUyMC44MzggMjI0IDUyOCAyMTYuODM2IDUyOCAyMDhWMTI4SDYwOEM2MjUuNiAxMjggNjQwIDE0Mi40IDY0MCAxNjBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTExMiAyMDhDMTEyIDIxNi43OTkgMTE5LjE5OSAyMjQgMTI4IDIyNFMxNDQgMjE2Ljc5OSAxNDQgMjA4VjEyOEgxMTJWMjA4Wk0zMDQgMjA4QzMwNCAyMTYuNzk5IDMxMS4xOTkgMjI0IDMyMCAyMjRTMzM2IDIxNi43OTkgMzM2IDIwOFYxMjhIMzA0VjIwOFpNMjA4IDIwOEMyMDggMjE2Ljc5OSAyMTUuMTk5IDIyNCAyMjQgMjI0UzI0MCAyMTYuNzk5IDI0MCAyMDhWMTI4SDIwOFYyMDhaTTQ5NiAxMjhWMjA4QzQ5NiAyMTYuODM2IDUwMy4xNjQgMjI0IDUxMiAyMjRDNTIwLjgzOCAyMjQgNTI4IDIxNi44MzYgNTI4IDIwOFYxMjhINDk2Wk00MDAgMjA4QzQwMCAyMTYuNzk5IDQwNy4xOTkgMjI0IDQxNiAyMjRTNDMyIDIxNi43OTkgNDMyIDIwOFYxMjhINDAwVjIwOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function RulerHorizontal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M640 160V352C640 369.6 625.6 384 608 384H32C14.4 384 0 369.6 0 352V160C0 142.4 14.4 128 32 128H112V208C112 216.799 119.199 224 128 224S144 216.799 144 208V128H208V208C208 216.799 215.199 224 224 224S240 216.799 240 208V128H304V208C304 216.799 311.199 224 320 224S336 216.799 336 208V128H400V208C400 216.799 407.199 224 416 224S432 216.799 432 208V128H496V208C496 216.836 503.164 224 512 224C520.838 224 528 216.836 528 208V128H608C625.6 128 640 142.4 640 160Z" />
            <path d="M112 208C112 216.799 119.199 224 128 224S144 216.799 144 208V128H112V208ZM304 208C304 216.799 311.199 224 320 224S336 216.799 336 208V128H304V208ZM208 208C208 216.799 215.199 224 224 224S240 216.799 240 208V128H208V208ZM496 128V208C496 216.836 503.164 224 512 224C520.838 224 528 216.836 528 208V128H496ZM400 208C400 216.799 407.199 224 416 224S432 216.799 432 208V128H400V208Z" />
        </Icon>
    </>
}