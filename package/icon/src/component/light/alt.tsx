
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `alt` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/alt?s=light alt}
 * @preview ![alt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgNjRDNTA0Ljg0NCA2NCA1MTIgNTYuODQ0IDUxMiA0OFM1MDQuODQ0IDMyIDQ5NiAzMkg0MDcuODQ0QzQwMi43MTkgMzIgMzk3LjkwNiAzNC40NTMgMzk0LjkwNiAzOC41OTRMOTYgNDQ4SDE2QzcuMTU2IDQ0OCAwIDQ1NS4xNTYgMCA0NjRTNy4xNTYgNDgwIDE2IDQ4MEgxMDQuMTU2QzEwOS4yODEgNDgwIDExNC4wOTQgNDc3LjU0NyAxMTcuMDk0IDQ3My40MDZMNDE2IDY0SDQ5NlpNNDk2IDQ0OEgzMzZDMzI3LjE2NCA0NDggMzIwIDQ1NS4xNjIgMzIwIDQ2NEMzMjAgNDcyLjgzNiAzMjcuMTY0IDQ4MCAzMzYgNDgwSDQ5NkM1MDQuODM2IDQ4MCA1MTIgNDcyLjgzNiA1MTIgNDY0QzUxMiA0NTUuMTYyIDUwNC44MzYgNDQ4IDQ5NiA0NDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Alt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 64C504.844 64 512 56.844 512 48S504.844 32 496 32H407.844C402.719 32 397.906 34.453 394.906 38.594L96 448H16C7.156 448 0 455.156 0 464S7.156 480 16 480H104.156C109.281 480 114.094 477.547 117.094 473.406L416 64H496ZM496 448H336C327.164 448 320 455.162 320 464C320 472.836 327.164 480 336 480H496C504.836 480 512 472.836 512 464C512 455.162 504.836 448 496 448Z" />
        </Icon>
    </>
}