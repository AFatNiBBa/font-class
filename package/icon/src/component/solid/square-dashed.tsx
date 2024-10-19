
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-dashed` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed?s=solid square-dashed}
 * @preview ![square-dashed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NCAzOTJWMzUySDBWMzkyQzAgNDQwLjUzMSAzOS40NjkgNDgwIDg4IDQ4MEgxMjhWNDE2SDg4Qzc0Ljc4MSA0MTYgNjQgNDA1LjIzNCA2NCAzOTJaTTY0IDE5MkgwVjMyMEg2NFYxOTJaTTE2MCA0ODBIMjg4VjQxNkgxNjBWNDgwWk0wIDEyMFYxNjBINjRWMTIwQzY0IDEwNi43NjYgNzQuNzgxIDk2IDg4IDk2SDEyOFYzMkg4OEMzOS40NjkgMzIgMCA3MS40NjkgMCAxMjBaTTE2MCA5NkgyODhWMzJIMTYwVjk2Wk0zNjAgMzJIMzIwVjk2SDM2MEMzNzMuMjE5IDk2IDM4NCAxMDYuNzY2IDM4NCAxMjBWMTYwSDQ0OFYxMjBDNDQ4IDcxLjQ2OSA0MDguNTMxIDMyIDM2MCAzMlpNMzg0IDMyMEg0NDhWMTkySDM4NFYzMjBaTTM4NCAzOTJDMzg0IDQwNS4yMzQgMzczLjIxOSA0MTYgMzYwIDQxNkgzMjBWNDgwSDM2MEM0MDguNTMxIDQ4MCA0NDggNDQwLjUzMSA0NDggMzkyVjM1MkgzODRWMzkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareDashed(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M64 392V352H0V392C0 440.531 39.469 480 88 480H128V416H88C74.781 416 64 405.234 64 392ZM64 192H0V320H64V192ZM160 480H288V416H160V480ZM0 120V160H64V120C64 106.766 74.781 96 88 96H128V32H88C39.469 32 0 71.469 0 120ZM160 96H288V32H160V96ZM360 32H320V96H360C373.219 96 384 106.766 384 120V160H448V120C448 71.469 408.531 32 360 32ZM384 320H448V192H384V320ZM384 392C384 405.234 373.219 416 360 416H320V480H360C408.531 480 448 440.531 448 392V352H384V392Z" />
        </Icon>
    </>
}