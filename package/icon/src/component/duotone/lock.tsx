
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `lock` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/lock?s=duotone lock}
 * @preview ![lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNiAxNDRWMjI0SDM1MlYxNDRDMzUyIDk5Ljg3NSAzMTYuMTA5IDY0IDI3MiA2NFMxOTIgOTkuODc1IDE5MiAxNDRWMjI0SDEyOFYxNDRDMTI4IDY0LjU5NCAxOTIuNTk0IDAgMjcyIDBTNDE2IDY0LjU5NCA0MTYgMTQ0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xMTIgMjI0SDQzMkM0NjcuMzQ2IDIyNCA0OTYgMjUyLjY1MiA0OTYgMjg4VjQ0OEM0OTYgNDgzLjM0NCA0NjcuMzQ2IDUxMiA0MzIgNTEySDExMkM3Ni42NTQgNTEyIDQ4IDQ4My4zNDQgNDggNDQ4VjI4OEM0OCAyNTIuNjUyIDc2LjY1NCAyMjQgMTEyIDIyNFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Lock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M416 144V224H352V144C352 99.875 316.109 64 272 64S192 99.875 192 144V224H128V144C128 64.594 192.594 0 272 0S416 64.594 416 144Z" />
            <path d="M112 224H432C467.346 224 496 252.652 496 288V448C496 483.344 467.346 512 432 512H112C76.654 512 48 483.344 48 448V288C48 252.652 76.654 224 112 224Z" />
        </Icon>
    </>
}