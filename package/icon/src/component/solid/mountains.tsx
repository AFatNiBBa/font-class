
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mountains` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mountains?s=solid mountains}
 * @preview ![mountains](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzUuOTA0IDQ2Ny43NTRINTYuMzgxQzEyLjE1MyA0NjcuNzU0IC0xNS4wMDcgNDE4Ljk2IDguODc4IDM4MS41MzdMMjMxLjk3NCAzMkMyNDIuMzkxIDE1LjY3MiAyNjkuNjk4IDE1LjY3MiAyODAuMTE1IDMyTDQwOS42IDIzNC44NzVMNDQ5Ljg0OCAxNzEuODE4QzQ2Mi40MjggMTUyLjEwOSA0OTEuMjA4IDE1Mi4xMDkgNTAzLjc4OSAxNzEuODE4TDYyOS44NDMgMzY5LjMxOEM2NTcuMDM1IDQxMS45MiA2MjYuNDM5IDQ2Ny43NTQgNTc1LjkwNCA0NjcuNzU0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Mountains(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M575.904 467.754H56.381C12.153 467.754 -15.007 418.96 8.878 381.537L231.974 32C242.391 15.672 269.698 15.672 280.115 32L409.6 234.875L449.848 171.818C462.428 152.109 491.208 152.109 503.789 171.818L629.843 369.318C657.035 411.92 626.439 467.754 575.904 467.754Z" />
        </Icon>
    </>
}