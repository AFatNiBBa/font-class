
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `omega` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/omega?s=duotone omega}
 * @preview ![omega](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OCA0NDBDNDQ4IDQ2Mi4wOTQgNDMwLjA5NCA0ODAgNDA4IDQ4MEgyOTZDMjczLjkwNiA0ODAgMjU2IDQ2Mi4wOTQgMjU2IDQ0MFY0MDcuNTYyQzI1NiAzOTEuODQ0IDI2NS4yMTkgMzc3LjU2MiAyNzkuNTQ3IDM3MS4wOTRDMzI4LjQyMiAzNDkuMDYyIDM2MCAzMDAuNzE5IDM2MCAyNDhDMzYwIDE3MyAyOTguOTg0IDExMiAyMjQgMTEyUzg4IDE3MyA4OCAyNDhDODggMzAwLjcxOSAxMTkuNTc4IDM0OS4wNjIgMTY4LjQ1MyAzNzEuMDk0QzE4Mi43ODEgMzc3LjU2MiAxOTIgMzkxLjg0NCAxOTIgNDA3LjU2MlY0NDBDMTkyIDQ2Mi4wOTQgMTc0LjA5NCA0ODAgMTUyIDQ4MEg0MEMxNy45MDYgNDgwIDAgNDYyLjA5NCAwIDQ0MFMxNy45MDYgNDAwIDQwIDQwMEg3MS42MjVDMzEuNjU2IDM2MC4yNSA4IDMwNS44MTIgOCAyNDhDOCAxMjguOTA2IDEwNC44OTEgMzIgMjI0IDMyUzQ0MCAxMjguOTA2IDQ0MCAyNDhDNDQwIDMwNS44MTIgNDE2LjM0NCAzNjAuMjUgMzc2LjM3NSA0MDBINDA4QzQzMC4wOTQgNDAwIDQ0OCA0MTcuOTA2IDQ0OCA0NDBaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Omega(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M448 440C448 462.094 430.094 480 408 480H296C273.906 480 256 462.094 256 440V407.562C256 391.844 265.219 377.562 279.547 371.094C328.422 349.062 360 300.719 360 248C360 173 298.984 112 224 112S88 173 88 248C88 300.719 119.578 349.062 168.453 371.094C182.781 377.562 192 391.844 192 407.562V440C192 462.094 174.094 480 152 480H40C17.906 480 0 462.094 0 440S17.906 400 40 400H71.625C31.656 360.25 8 305.812 8 248C8 128.906 104.891 32 224 32S440 128.906 440 248C440 305.812 416.344 360.25 376.375 400H408C430.094 400 448 417.906 448 440Z" />
        </Icon>
    </>
}