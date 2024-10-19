
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mug` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mug?s=duotone mug}
 * @preview ![mug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNiAxMjhWNjRINDQ4QzUxOC43NSA2NCA1NzYgMTIxLjI1IDU3NiAxOTJTNTE4Ljc1IDMyMCA0NDggMzIwSDQxNlYyNTZINDQ4QzQ4My4zNzUgMjU2IDUxMiAyMjcuMzc1IDUxMiAxOTJTNDgzLjM3NSAxMjggNDQ4IDEyOEg0MTZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQxNiAzNTJDNDE2IDQwNSAzNzMgNDQ4IDMyMCA0NDhIMTI4Qzc1IDQ0OCAzMiA0MDUgMzIgMzUyVjg4QzMyIDcyLjk3NiA0NC40MTkgNjQgNTYgNjRINDE2VjM1MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Mug(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M416 128V64H448C518.75 64 576 121.25 576 192S518.75 320 448 320H416V256H448C483.375 256 512 227.375 512 192S483.375 128 448 128H416Z" />
            <path d="M416 352C416 405 373 448 320 448H128C75 448 32 405 32 352V88C32 72.976 44.419 64 56 64H416V352Z" />
        </Icon>
    </>
}