
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `chart-bar` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-bar?s=regular chart-bar}
 * @preview ![chart-bar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTIgMjU2SDI5NkMzMDkuMjUgMjU2IDMyMCAyNDUuMjUgMzIwIDIzMlMzMDkuMjUgMjA4IDI5NiAyMDhIMTUyQzEzOC43NSAyMDggMTI4IDIxOC43NSAxMjggMjMyUzEzOC43NSAyNTYgMTUyIDI1NlpNMTUyIDE2MEgzNjBDMzczLjI1IDE2MCAzODQgMTQ5LjI1IDM4NCAxMzZTMzczLjI1IDExMiAzNjAgMTEySDE1MkMxMzguNzUgMTEyIDEyOCAxMjIuNzUgMTI4IDEzNlMxMzguNzUgMTYwIDE1MiAxNjBaTTE1MiAzNTJINDI0QzQzNy4yNSAzNTIgNDQ4IDM0MS4yNSA0NDggMzI4UzQzNy4yNSAzMDQgNDI0IDMwNEgxNTJDMTM4Ljc1IDMwNCAxMjggMzE0Ljc1IDEyOCAzMjhTMTM4Ljc1IDM1MiAxNTIgMzUyWk00ODggNDMySDQ4VjU2QzQ4IDQyLjc1IDM3LjI1IDMyIDI0IDMyUzAgNDIuNzUgMCA1NlY0NDhDMCA0NjUuNTk0IDE0LjQwNiA0ODAgMzIgNDgwSDQ4OEM1MDEuMjUgNDgwIDUxMiA0NjkuMjUgNTEyIDQ1NlM1MDEuMjUgNDMyIDQ4OCA0MzJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ChartBar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M152 256H296C309.25 256 320 245.25 320 232S309.25 208 296 208H152C138.75 208 128 218.75 128 232S138.75 256 152 256ZM152 160H360C373.25 160 384 149.25 384 136S373.25 112 360 112H152C138.75 112 128 122.75 128 136S138.75 160 152 160ZM152 352H424C437.25 352 448 341.25 448 328S437.25 304 424 304H152C138.75 304 128 314.75 128 328S138.75 352 152 352ZM488 432H48V56C48 42.75 37.25 32 24 32S0 42.75 0 56V448C0 465.594 14.406 480 32 480H488C501.25 480 512 469.25 512 456S501.25 432 488 432Z" />
        </Icon>
    </>
}