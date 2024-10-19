
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `conveyor-belt-empty` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt-empty?s=solid conveyor-belt-empty}
 * @preview ![conveyor-belt-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDQgMzIwSDk2QzQzIDMyMCAwIDM2MyAwIDQxNlM0MyA1MTIgOTYgNTEySDU0NEM1OTcgNTEyIDY0MCA0NjkgNjQwIDQxNlM1OTcgMzIwIDU0NCAzMjBaTTEyOCA0NDhDMTEwLjI1IDQ0OCA5NiA0MzMuNzUgOTYgNDE2UzExMC4yNSAzODQgMTI4IDM4NFMxNjAgMzk4LjI1IDE2MCA0MTZTMTQ1Ljc1IDQ0OCAxMjggNDQ4Wk0zMjAgNDQ4QzMwMi4yNSA0NDggMjg4IDQzMy43NSAyODggNDE2UzMwMi4yNSAzODQgMzIwIDM4NFMzNTIgMzk4LjI1IDM1MiA0MTZTMzM3Ljc1IDQ0OCAzMjAgNDQ4Wk01MTIgNDQ4QzQ5NC4yNSA0NDggNDgwIDQzMy43NSA0ODAgNDE2UzQ5NC4yNSAzODQgNTEyIDM4NEM1MjkuNzUgMzg0IDU0NCAzOTguMjUgNTQ0IDQxNlM1MjkuNzUgNDQ4IDUxMiA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ConveyorBeltEmpty(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M544 320H96C43 320 0 363 0 416S43 512 96 512H544C597 512 640 469 640 416S597 320 544 320ZM128 448C110.25 448 96 433.75 96 416S110.25 384 128 384S160 398.25 160 416S145.75 448 128 448ZM320 448C302.25 448 288 433.75 288 416S302.25 384 320 384S352 398.25 352 416S337.75 448 320 448ZM512 448C494.25 448 480 433.75 480 416S494.25 384 512 384C529.75 384 544 398.25 544 416S529.75 448 512 448Z" />
        </Icon>
    </>
}