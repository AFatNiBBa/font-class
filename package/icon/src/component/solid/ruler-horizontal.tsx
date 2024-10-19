
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `ruler-horizontal` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-horizontal?s=solid ruler-horizontal}
 * @preview ![ruler-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMTYwVjM1MkM2NDAgMzY5LjYgNjI1LjYgMzg0IDYwOCAzODRIMzJDMTQuNCAzODQgMCAzNjkuNiAwIDM1MlYxNjBDMCAxNDIuNCAxNC40IDEyOCAzMiAxMjhIMTEyVjIwOEMxMTIgMjE2Ljc5OSAxMTkuMTk5IDIyNCAxMjggMjI0UzE0NCAyMTYuNzk5IDE0NCAyMDhWMTI4SDIwOFYyMDhDMjA4IDIxNi43OTkgMjE1LjE5OSAyMjQgMjI0IDIyNFMyNDAgMjE2Ljc5OSAyNDAgMjA4VjEyOEgzMDRWMjA4QzMwNCAyMTYuNzk5IDMxMS4xOTkgMjI0IDMyMCAyMjRTMzM2IDIxNi43OTkgMzM2IDIwOFYxMjhINDAwVjIwOEM0MDAgMjE2Ljc5OSA0MDcuMTk5IDIyNCA0MTYgMjI0UzQzMiAyMTYuNzk5IDQzMiAyMDhWMTI4SDQ5NlYyMDhDNDk2IDIxNi44MzYgNTAzLjE2NCAyMjQgNTEyIDIyNEM1MjAuODM4IDIyNCA1MjggMjE2LjgzNiA1MjggMjA4VjEyOEg2MDhDNjI1LjYgMTI4IDY0MCAxNDIuNCA2NDAgMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RulerHorizontal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M640 160V352C640 369.6 625.6 384 608 384H32C14.4 384 0 369.6 0 352V160C0 142.4 14.4 128 32 128H112V208C112 216.799 119.199 224 128 224S144 216.799 144 208V128H208V208C208 216.799 215.199 224 224 224S240 216.799 240 208V128H304V208C304 216.799 311.199 224 320 224S336 216.799 336 208V128H400V208C400 216.799 407.199 224 416 224S432 216.799 432 208V128H496V208C496 216.836 503.164 224 512 224C520.838 224 528 216.836 528 208V128H608C625.6 128 640 142.4 640 160Z" />
        </Icon>
    </>
}