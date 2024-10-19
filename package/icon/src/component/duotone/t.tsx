
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `t` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/t?s=duotone t}
 * @preview ![t](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCA4MEMzODQgMTA2LjUgMzYyLjUxNiAxMjggMzM2IDEyOEgyNDBWNDMyQzI0MCA0NTguNSAyMTguNTE2IDQ4MCAxOTIgNDgwUzE0NCA0NTguNSAxNDQgNDMyVjEyOEg0OEMyMS40ODQgMTI4IDAgMTA2LjUgMCA4MFMyMS40ODQgMzIgNDggMzJIMzM2QzM2Mi41MTYgMzIgMzg0IDUzLjUgMzg0IDgwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function T(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M384 80C384 106.5 362.516 128 336 128H240V432C240 458.5 218.516 480 192 480S144 458.5 144 432V128H48C21.484 128 0 106.5 0 80S21.484 32 48 32H336C362.516 32 384 53.5 384 80Z" />
        </Icon>
    </>
}