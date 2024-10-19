
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `conveyor-belt-empty` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt-empty?s=duotone conveyor-belt-empty}
 * @preview ![conveyor-belt-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU0NCAzMjBIOTZDNDEuNiAzMjAgMCAzNjEuNiAwIDQxNlM0MS42IDUxMiA5NiA1MTJINTQ0QzU5OC40IDUxMiA2NDAgNDcwLjQgNjQwIDQxNlM1OTguNCAzMjAgNTQ0IDMyMFpNMTI4IDQ0OEMxMDguOCA0NDggOTYgNDM1LjIgOTYgNDE2UzEwOC44IDM4NCAxMjggMzg0UzE2MCAzOTYuOCAxNjAgNDE2UzE0Ny4yIDQ0OCAxMjggNDQ4Wk0zMjAgNDQ4QzMwMC44IDQ0OCAyODggNDM1LjIgMjg4IDQxNlMzMDAuOCAzODQgMzIwIDM4NFMzNTIgMzk2LjggMzUyIDQxNlMzMzkuMiA0NDggMzIwIDQ0OFpNNTEyIDQ0OEM0OTIuOCA0NDggNDgwIDQzNS4yIDQ4MCA0MTZTNDkyLjggMzg0IDUxMiAzODRTNTQ0IDM5Ni44IDU0NCA0MTZTNTMxLjIgNDQ4IDUxMiA0NDhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function ConveyorBeltEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M544 320H96C41.6 320 0 361.6 0 416S41.6 512 96 512H544C598.4 512 640 470.4 640 416S598.4 320 544 320ZM128 448C108.8 448 96 435.2 96 416S108.8 384 128 384S160 396.8 160 416S147.2 448 128 448ZM320 448C300.8 448 288 435.2 288 416S300.8 384 320 384S352 396.8 352 416S339.2 448 320 448ZM512 448C492.8 448 480 435.2 480 416S492.8 384 512 384S544 396.8 544 416S531.2 448 512 448Z" />
        </Icon>
    </>
}