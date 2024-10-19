
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ramp-loading` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ramp-loading?s=duotone ramp-loading}
 * @preview ![ramp-loading](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMlYzNTJDMzg0IDM2OS43NSAzNjkuNzUgMzg0IDM1MiAzODRIMzIwTDI4OCAzMjBIMzIwVjY0SDY0VjMyMEg5Nkw2NCAzODRIMzJDMTQuMjUgMzg0IDAgMzY5Ljc1IDAgMzUyVjMyQzAgMTQuMjUgMTQuMjUgMCAzMiAwSDM1MkMzNjkuNzUgMCAzODQgMTQuMjUgMzg0IDMyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yODguMTM3IDMyMEg5Ni4xMzdMMTEuNzA5IDQ4OC44NTdDNi4zOTIgNDk5LjQ5IDE0LjEyNSA1MTIgMjYuMDEyIDUxMkgzNTguMjYyQzM3MC4xNSA1MTIgMzc3Ljg4MyA0OTkuNDkgMzcyLjU2NiA0ODguODU3TDI4OC4xMzcgMzIwWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function RampLoading(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M384 32V352C384 369.75 369.75 384 352 384H320L288 320H320V64H64V320H96L64 384H32C14.25 384 0 369.75 0 352V32C0 14.25 14.25 0 32 0H352C369.75 0 384 14.25 384 32Z" />
            <path d="M288.137 320H96.137L11.709 488.857C6.392 499.49 14.125 512 26.012 512H358.262C370.15 512 377.883 499.49 372.566 488.857L288.137 320Z" />
        </Icon>
    </>
}