
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `paperclip` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paperclip?s=solid paperclip}
 * @preview ![paperclip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMTI4VjMzNkMzNTIgNDM4Ljg0OCAyNjMuMzI2IDUyMS4zNzMgMTU4LjQxOCA1MTEuMTQxQzY2Ljk4NiA1MDIuMjIzIDAgNDIwLjAyOSAwIDMyOC4xNjJWMjA4QzAgMTk5LjE2MiA3LjE2NCAxOTIgMTYgMTkySDQ4QzU2LjgzNiAxOTIgNjQgMTk5LjE2MiA2NCAyMDhWMzMyLjc3N0M2NCAzODYuMjIzIDEwMC4xMTcgNDM0Ljg2MSAxNTIuNDc1IDQ0NS41ODhDMjI0LjQ1OSA0NjAuMzM0IDI4OCA0MDUuNDM4IDI4OCAzMzZWMTMxLjU3OEMyODggOTkuNjg4IDI2Ni4yNzcgNzAuMDY2IDIzNC44MTEgNjQuODkxQzE5NC43NTYgNTguMzAzIDE2MCA4OS4xNTggMTYwIDEyOFYzMDRDMTYwIDMxMi44MjggMTY3LjE3MiAzMjAgMTc2IDMyMFMxOTIgMzEyLjgyOCAxOTIgMzA0VjE0NEMxOTIgMTM1LjE2MiAxOTkuMTY0IDEyOCAyMDggMTI4SDI0MEMyNDguODM2IDEyOCAyNTYgMTM1LjE2MiAyNTYgMTQ0VjI5OS4yNjhDMjU2IDM0MS4xMDcgMjI1Ljk4NiAzNzkuMzIyIDE4NC4zNjMgMzgzLjU3MkMxMzYuNTIgMzg4LjQ1NSA5NiAzNTAuODY3IDk2IDMwNFYxMzMuNzAzQzk2IDY2Ljg5MSAxNDQuNzE1IDcuMTEzIDIxMS4yMTEgMC42MjVDMjg3LjUwOCAtNi44MTggMzUyIDUzLjIwMSAzNTIgMTI4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Paperclip(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M352 128V336C352 438.848 263.326 521.373 158.418 511.141C66.986 502.223 0 420.029 0 328.162V208C0 199.162 7.164 192 16 192H48C56.836 192 64 199.162 64 208V332.777C64 386.223 100.117 434.861 152.475 445.588C224.459 460.334 288 405.438 288 336V131.578C288 99.688 266.277 70.066 234.811 64.891C194.756 58.303 160 89.158 160 128V304C160 312.828 167.172 320 176 320S192 312.828 192 304V144C192 135.162 199.164 128 208 128H240C248.836 128 256 135.162 256 144V299.268C256 341.107 225.986 379.322 184.363 383.572C136.52 388.455 96 350.867 96 304V133.703C96 66.891 144.715 7.113 211.211 0.625C287.508 -6.818 352 53.201 352 128Z" />
        </Icon>
    </>
}