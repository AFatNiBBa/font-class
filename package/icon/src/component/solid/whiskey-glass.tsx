
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `whiskey-glass` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/whiskey-glass?s=solid whiskey-glass}
 * @preview ![whiskey-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzkuOTU1IDMySDMyLjA0NUMxMi41NDkgMzIgLTIuMzI0IDQ5LjI1NCAwLjMwMSA2OC41MDhMNTYuMjg5IDQyNS4xMDlDNjAuNzg5IDQ1Ni42MTcgODcuNzgzIDQ4MCAxMTkuNzc4IDQ4MEgzOTIuNzIzQzQyNC40NjcgNDgwIDQ1MS41ODYgNDU2LjYxNyA0NTYuMDg2IDQyNS4xMDlMNTExLjY5OSA2OC41MDhDNTE0LjMyNCA0OS4yNTQgNDk5LjQ1MSAzMiA0NzkuOTU1IDMyWk00MTYgMjg4SDk2TDY0IDk2SDQ0OEw0MTYgMjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function WhiskeyGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M479.955 32H32.045C12.549 32 -2.324 49.254 0.301 68.508L56.289 425.109C60.789 456.617 87.783 480 119.778 480H392.723C424.467 480 451.586 456.617 456.086 425.109L511.699 68.508C514.324 49.254 499.451 32 479.955 32ZM416 288H96L64 96H448L416 288Z" />
        </Icon>
    </>
}