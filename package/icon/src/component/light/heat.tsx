
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `heat` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/heat?s=light heat}
 * @preview ![heat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMTUzLjYyNVY0OEMxOTIgMzkuMTI1IDE4NC44NzUgMzIgMTc2IDMyUzE2MCAzOS4xMjUgMTYwIDQ4VjE1Mi4yNUMxNjAgMjAxLjUgMTc3Ljg3NSAyNDkgMjEwLjI1IDI4NkMyMzguNSAzMTguMjUgMjU2IDM1OC4zNzUgMjU2IDQwMS4yNVY0NjRDMjU2IDQ3Mi44NzUgMjYzLjEyNSA0ODAgMjcyIDQ4MFMyODggNDcyLjg3NSAyODggNDY0VjQwMi4zNzVDMjg4IDM1My4yNSAyNzAuMTI1IDMwNS43NSAyMzcuNzUgMjY4Ljc1QzIwOS41IDIzNi41IDE5MiAxOTYuMzc1IDE5MiAxNTMuNjI1Wk02NCAxMzIuMzc1VjExMkM2NCAxMDMuMTI1IDU2Ljg3NSA5NiA0OCA5NlMzMiAxMDMuMTI1IDMyIDExMlYxMjhDMzIuMTI1IDE4Mi44NzUgNDkuNzUgMjM2LjI1IDgyLjI1IDI4MC4zNzVDMTEwLjYyNSAzMTguNjI1IDEyOCAzNjQgMTI4IDQxMS42MjVWNDY0QzEyOCA0NzIuODc1IDEzNS4xMjUgNDgwIDE0NCA0ODBTMTYwIDQ3Mi44NzUgMTYwIDQ2NFY0MTZDMTU5Ljg3NSAzNjEuMTI1IDE0Mi4yNSAzMDcuNzUgMTA5Ljc1IDI2My42MjVDODEuMzc1IDIyNS4zNzUgNjQgMTgwIDY0IDEzMi4zNzVaTTM2NS43NSAyNjMuNjI1QzMzNy4zNzUgMjI1LjM3NSAzMjAgMTgwIDMyMCAxMzIuMzc1VjExMkMzMjAgMTAzLjEyNSAzMTIuODc1IDk2IDMwNCA5NlMyODggMTAzLjEyNSAyODggMTEyVjEyOEMyODguMTI1IDE4Mi44NzUgMzA1Ljc1IDIzNi4yNSAzMzguMjUgMjgwLjM3NUMzNjYuNjI1IDMxOC42MjUgMzg0IDM2NCAzODQgNDExLjYyNVY0NjRDMzg0IDQ3Mi44NzUgMzkxLjEyNSA0ODAgNDAwIDQ4MFM0MTYgNDcyLjg3NSA0MTYgNDY0VjQxNkM0MTUuODc1IDM2MS4xMjUgMzk4LjI1IDMwNy43NSAzNjUuNzUgMjYzLjYyNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Heat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M192 153.625V48C192 39.125 184.875 32 176 32S160 39.125 160 48V152.25C160 201.5 177.875 249 210.25 286C238.5 318.25 256 358.375 256 401.25V464C256 472.875 263.125 480 272 480S288 472.875 288 464V402.375C288 353.25 270.125 305.75 237.75 268.75C209.5 236.5 192 196.375 192 153.625ZM64 132.375V112C64 103.125 56.875 96 48 96S32 103.125 32 112V128C32.125 182.875 49.75 236.25 82.25 280.375C110.625 318.625 128 364 128 411.625V464C128 472.875 135.125 480 144 480S160 472.875 160 464V416C159.875 361.125 142.25 307.75 109.75 263.625C81.375 225.375 64 180 64 132.375ZM365.75 263.625C337.375 225.375 320 180 320 132.375V112C320 103.125 312.875 96 304 96S288 103.125 288 112V128C288.125 182.875 305.75 236.25 338.25 280.375C366.625 318.625 384 364 384 411.625V464C384 472.875 391.125 480 400 480S416 472.875 416 464V416C415.875 361.125 398.25 307.75 365.75 263.625Z" />
        </Icon>
    </>
}