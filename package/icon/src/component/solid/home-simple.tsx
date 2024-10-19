
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `home-simple` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/home-simple?s=solid home-simple}
 * @preview ![home-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzUuOTk3IDI1NkM1NzUuOTk2IDI3My42MDIgNTYxLjczMyAyODggNTQzLjk5NyAyODhINTExLjk5MVY0NDhDNTExLjk5MSA0ODMuMzQ2IDQ4My4zMzggNTEyIDQ0Ny45OTIgNTEySDEyOC4wMjNDOTIuNjc3IDUxMiA2NC4wMjMgNDgzLjM0NiA2NC4wMjMgNDQ4VjI4OEgzMkMxNC4yMjIgMjg4IDAuMDAxIDI3My41NTcgMCAyNTZDMCAyNDYuOTQ4IDMuODQyIDIzOC4xMDQgMTAuOTIyIDIzMS45MDZMMjY2LjkyIDcuOTIyQzI3My44ODQgMS44MjQgMjgxLjg1NSAwIDI4Ny45OTggMEMyOTUuNTIyIDAgMzAzLjA0NSAyLjY0MSAzMDkuMDc2IDcuOTIyTDU2NS4wNzUgMjMxLjkwNkM1NzIuMTU1IDIzOC4xMDQgNTc1Ljk5NyAyNDYuOTQ4IDU3NS45OTcgMjU2WiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function HomeSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M575.997 256C575.996 273.602 561.733 288 543.997 288H511.991V448C511.991 483.346 483.338 512 447.992 512H128.023C92.677 512 64.023 483.346 64.023 448V288H32C14.222 288 0.001 273.557 0 256C0 246.948 3.842 238.104 10.922 231.906L266.92 7.922C273.884 1.824 281.855 0 287.998 0C295.522 0 303.045 2.641 309.076 7.922L565.075 231.906C572.155 238.104 575.997 246.948 575.997 256Z " />
        </Icon>
    </>
}