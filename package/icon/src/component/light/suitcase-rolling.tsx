
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `suitcase-rolling` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase-rolling?s=light suitcase-rolling}
 * @preview ![suitcase-rolling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMTI4SDI4OFY0OEMyODggMjEuNTMxIDI2Ni40NjkgMCAyNDAgMEgxNDRDMTE3LjUzMSAwIDk2IDIxLjUzMSA5NiA0OFYxMjhINjRDMjguNjU0IDEyOCAwIDE1Ni42NTQgMCAxOTJWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MFY0OTZDNjQgNTA0LjgzNiA3MS4xNjQgNTEyIDgwIDUxMlM5NiA1MDQuODM2IDk2IDQ5NlY0ODBIMjg4VjQ5NkMyODggNTA0LjgzNiAyOTUuMTY0IDUxMiAzMDQgNTEyUzMyMCA1MDQuODM2IDMyMCA0OTZWNDgwQzM1NS4zNDggNDgwIDM4NCA0NTEuMzQ2IDM4NCA0MTZWMTkyQzM4NCAxNTYuNjU0IDM1NS4zNDggMTI4IDMyMCAxMjhaTTEyOCA0OEMxMjggMzkuMTcyIDEzNS4xNzIgMzIgMTQ0IDMySDI0MEMyNDguODI4IDMyIDI1NiAzOS4xNzIgMjU2IDQ4VjEyOEgxMjhWNDhaTTM1MiA0MTZDMzUyIDQzMy42NDUgMzM3LjY0NSA0NDggMzIwIDQ0OEg2NEM0Ni4zNTUgNDQ4IDMyIDQzMy42NDUgMzIgNDE2VjE5MkMzMiAxNzQuMzU1IDQ2LjM1NSAxNjAgNjQgMTYwSDMyMEMzMzcuNjQ1IDE2MCAzNTIgMTc0LjM1NSAzNTIgMTkyVjQxNlpNMjcyIDMzNkgxMTJDMTAzLjE2NCAzMzYgOTYgMzQzLjE2MiA5NiAzNTJDOTYgMzYwLjgzNiAxMDMuMTY0IDM2OCAxMTIgMzY4SDI3MkMyODAuODM2IDM2OCAyODggMzYwLjgzNiAyODggMzUyQzI4OCAzNDMuMTYyIDI4MC44MzYgMzM2IDI3MiAzMzZaTTI3MiAyNDBIMTEyQzEwMy4xNjQgMjQwIDk2IDI0Ny4xNjIgOTYgMjU2Qzk2IDI2NC44MzYgMTAzLjE2NCAyNzIgMTEyIDI3MkgyNzJDMjgwLjgzNiAyNzIgMjg4IDI2NC44MzYgMjg4IDI1NkMyODggMjQ3LjE2MiAyODAuODM2IDI0MCAyNzIgMjQwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SuitcaseRolling(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M320 128H288V48C288 21.531 266.469 0 240 0H144C117.531 0 96 21.531 96 48V128H64C28.654 128 0 156.654 0 192V416C0 451.346 28.654 480 64 480V496C64 504.836 71.164 512 80 512S96 504.836 96 496V480H288V496C288 504.836 295.164 512 304 512S320 504.836 320 496V480C355.348 480 384 451.346 384 416V192C384 156.654 355.348 128 320 128ZM128 48C128 39.172 135.172 32 144 32H240C248.828 32 256 39.172 256 48V128H128V48ZM352 416C352 433.645 337.645 448 320 448H64C46.355 448 32 433.645 32 416V192C32 174.355 46.355 160 64 160H320C337.645 160 352 174.355 352 192V416ZM272 336H112C103.164 336 96 343.162 96 352C96 360.836 103.164 368 112 368H272C280.836 368 288 360.836 288 352C288 343.162 280.836 336 272 336ZM272 240H112C103.164 240 96 247.162 96 256C96 264.836 103.164 272 112 272H272C280.836 272 288 264.836 288 256C288 247.162 280.836 240 272 240Z" />
        </Icon>
    </>
}