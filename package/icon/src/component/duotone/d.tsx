
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `d` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/d?s=duotone d}
 * @preview ![d](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MCA0ODBINDhDMjEuNDg0IDQ4MCAwIDQ1OC41IDAgNDMyVjgwQzAgNTMuNSAyMS40ODQgMzIgNDggMzJIMTYwQzI4My41MTYgMzIgMzg0IDEzMi41IDM4NCAyNTZTMjgzLjUxNiA0ODAgMTYwIDQ4MFpNOTYgMzg0SDE2MEMyMzAuNTc4IDM4NCAyODggMzI2LjU5NCAyODggMjU2UzIzMC41NzggMTI4IDE2MCAxMjhIOTZWMzg0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function D(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M160 480H48C21.484 480 0 458.5 0 432V80C0 53.5 21.484 32 48 32H160C283.516 32 384 132.5 384 256S283.516 480 160 480ZM96 384H160C230.578 384 288 326.594 288 256S230.578 128 160 128H96V384Z" />
        </Icon>
    </>
}