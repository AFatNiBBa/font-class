
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `keynote` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/keynote?s=light keynote}
 * @preview ![keynote](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDUuMjUgMjc0LjVMNDU2Ljg3NSAxNzcuNzVDNDUxLjM3NSAxNjYuODc1IDQ0MC4zNzUgMTYwIDQyOC4yNSAxNjBIMTI4VjE0NEMxMjggMTA0LjI1IDE1Ny4yNSA3MS4zNzUgMTk1LjM3NSA2NS4yNUMyMDIuMjUgODMuMjUgMjE5LjYyNSA5NiAyNDAgOTZIMzA0QzMzMC41IDk2IDM1MiA3NC41IDM1MiA0OFMzMzAuNSAwIDMwNCAwSDI0MEMyMTguNjI1IDAgMjAwLjc1IDE0IDE5NC41IDMzLjM3NUMxMzkuMTI1IDQwLjEyNSA5NiA4Ni44NzUgOTYgMTQ0VjE2MEg4My43NUM3MS42MjUgMTYwIDYwLjYyNSAxNjYuODc1IDU1LjEyNSAxNzcuNzVMNi43NSAyNzQuNUMyLjI1IDI4My4zNzUgMCAyOTMuMTI1IDAgMzAzLjEyNVYzNTJDMCAzNjkuNjI1IDE0LjM3NSAzODQgMzIgMzg0SDI0MFY0ODBIMTQ0QzEzNS4xOTkgNDgwIDEyOCA0ODcuMTk5IDEyOCA0OTZDMTI4IDUwNC43OTcgMTM1LjE5OSA1MTIgMTQ0IDUxMkgzNjhDMzc2LjgwMSA1MTIgMzg0IDUwNC43OTcgMzg0IDQ5NkMzODQgNDg3LjE5OSAzNzYuODAxIDQ4MCAzNjggNDgwSDI3MlYzODRINDgwQzQ5Ny42MjUgMzg0IDUxMiAzNjkuNjI1IDUxMiAzNTJWMzAzLjEyNUM1MTIgMjkzLjEyNSA1MDkuNzUgMjgzLjM3NSA1MDUuMjUgMjc0LjVaTTI0MCAzMkgzMDRDMzEyLjg3NSAzMiAzMjAgMzkuMTI1IDMyMCA0OFMzMTIuODc1IDY0IDMwNCA2NEgyNDBDMjMxLjEyNSA2NCAyMjQgNTYuODc1IDIyNCA0OFMyMzEuMTI1IDMyIDI0MCAzMlpNODMuNzUgMTkySDQyOC4yNUw0NzYuMjUgMjg4SDM1Ljc1TDgzLjc1IDE5MlpNNDgwIDM1MkgzMlYzMjBINDgwVjM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Keynote(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M505.25 274.5L456.875 177.75C451.375 166.875 440.375 160 428.25 160H128V144C128 104.25 157.25 71.375 195.375 65.25C202.25 83.25 219.625 96 240 96H304C330.5 96 352 74.5 352 48S330.5 0 304 0H240C218.625 0 200.75 14 194.5 33.375C139.125 40.125 96 86.875 96 144V160H83.75C71.625 160 60.625 166.875 55.125 177.75L6.75 274.5C2.25 283.375 0 293.125 0 303.125V352C0 369.625 14.375 384 32 384H240V480H144C135.199 480 128 487.199 128 496C128 504.797 135.199 512 144 512H368C376.801 512 384 504.797 384 496C384 487.199 376.801 480 368 480H272V384H480C497.625 384 512 369.625 512 352V303.125C512 293.125 509.75 283.375 505.25 274.5ZM240 32H304C312.875 32 320 39.125 320 48S312.875 64 304 64H240C231.125 64 224 56.875 224 48S231.125 32 240 32ZM83.75 192H428.25L476.25 288H35.75L83.75 192ZM480 352H32V320H480V352Z" />
        </Icon>
    </>
}