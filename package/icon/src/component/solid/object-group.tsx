
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `object-group` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/object-group?s=solid object-group}
 * @preview ![object-group](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgMTI4QzUwNC44MzggMTI4IDUxMiAxMjAuODM2IDUxMiAxMTJWNDhDNTEyIDM5LjE2NCA1MDQuODM4IDMyIDQ5NiAzMkg0MzJDNDIzLjE2NCAzMiA0MTYgMzkuMTY0IDQxNiA0OFY2NEg5NlY0OEM5NiAzOS4xNjQgODguODM4IDMyIDgwIDMySDE2QzcuMTY0IDMyIDAgMzkuMTY0IDAgNDhWMTEyQzAgMTIwLjgzNiA3LjE2NCAxMjggMTYgMTI4SDMyVjM4NEgxNkM3LjE2NCAzODQgMCAzOTEuMTY0IDAgNDAwVjQ2NEMwIDQ3Mi44MzYgNy4xNjQgNDgwIDE2IDQ4MEg4MEM4OC44MzggNDgwIDk2IDQ3Mi44MzYgOTYgNDY0VjQ0OEg0MTZWNDY0QzQxNiA0NzIuODM2IDQyMy4xNjQgNDgwIDQzMiA0ODBINDk2QzUwNC44MzggNDgwIDUxMiA0NzIuODM2IDUxMiA0NjRWNDAwQzUxMiAzOTEuMTY0IDUwNC44MzggMzg0IDQ5NiAzODRINDgwVjEyOEg0OTZaTTk2IDI3MlYxNDRDOTYgMTM1LjE2NCAxMDMuMTY0IDEyOCAxMTIgMTI4SDI3MkMyODAuODM4IDEyOCAyODggMTM1LjE2NCAyODggMTQ0VjI3MkMyODggMjgwLjgzNiAyODAuODM4IDI4OCAyNzIgMjg4SDExMkMxMDMuMTY0IDI4OCA5NiAyODAuODM2IDk2IDI3MlpNNDE2IDM2OEM0MTYgMzc2LjgzNiA0MDguODM4IDM4NCA0MDAgMzg0SDI0MEMyMzEuMTY0IDM4NCAyMjQgMzc2LjgzNiAyMjQgMzY4VjMyMEgyOTZDMzA5LjI1NiAzMjAgMzIwIDMwOS4yNTQgMzIwIDI5NlYyMjRINDAwQzQwOC44MzggMjI0IDQxNiAyMzEuMTY0IDQxNiAyNDBWMzY4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ObjectGroup(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 128C504.838 128 512 120.836 512 112V48C512 39.164 504.838 32 496 32H432C423.164 32 416 39.164 416 48V64H96V48C96 39.164 88.838 32 80 32H16C7.164 32 0 39.164 0 48V112C0 120.836 7.164 128 16 128H32V384H16C7.164 384 0 391.164 0 400V464C0 472.836 7.164 480 16 480H80C88.838 480 96 472.836 96 464V448H416V464C416 472.836 423.164 480 432 480H496C504.838 480 512 472.836 512 464V400C512 391.164 504.838 384 496 384H480V128H496ZM96 272V144C96 135.164 103.164 128 112 128H272C280.838 128 288 135.164 288 144V272C288 280.836 280.838 288 272 288H112C103.164 288 96 280.836 96 272ZM416 368C416 376.836 408.838 384 400 384H240C231.164 384 224 376.836 224 368V320H296C309.256 320 320 309.254 320 296V224H400C408.838 224 416 231.164 416 240V368Z" />
        </Icon>
    </>
}