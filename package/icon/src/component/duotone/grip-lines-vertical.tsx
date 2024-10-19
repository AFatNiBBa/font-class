
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `grip-lines-vertical` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/grip-lines-vertical?s=duotone grip-lines-vertical}
 * @preview ![grip-lines-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MCAzMkgxNjBDMTQyLjQgMzIgMTI4IDQ2LjQgMTI4IDY0VjQ0OEMxMjggNDY1LjYgMTQyLjQgNDgwIDE2MCA0ODBIMTYwQzE3Ny42IDQ4MCAxOTIgNDY1LjYgMTkyIDQ0OFY2NEMxOTIgNDYuNCAxNzcuNiAzMiAxNjAgMzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTMyIDMySDMyQzE0LjQgMzIgMCA0Ni40IDAgNjRWNDQ4QzAgNDY1LjYgMTQuNCA0ODAgMzIgNDgwSDMyQzQ5LjYgNDgwIDY0IDQ2NS42IDY0IDQ0OFY2NEM2NCA0Ni40IDQ5LjYgMzIgMzIgMzJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function GripLinesVertical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 192 512" {...props}>
            <path opacity={.4} d="M160 32H160C142.4 32 128 46.4 128 64V448C128 465.6 142.4 480 160 480H160C177.6 480 192 465.6 192 448V64C192 46.4 177.6 32 160 32Z" />
            <path d="M32 32H32C14.4 32 0 46.4 0 64V448C0 465.6 14.4 480 32 480H32C49.6 480 64 465.6 64 448V64C64 46.4 49.6 32 32 32Z" />
        </Icon>
    </>
}