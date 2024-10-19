
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-showers` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-showers?s=light cloud-showers}
 * @preview ![cloud-showers](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTIgMzY4QzEwMy4yNSAzNjggOTYgMzc1LjI1IDk2IDM4NFY0NjRDOTYgNDcyLjc1IDEwMy4yNSA0ODAgMTEyIDQ4MFMxMjggNDcyLjc1IDEyOCA0NjRWMzg0QzEyOCAzNzUuMjUgMTIwLjc1IDM2OCAxMTIgMzY4Wk0zMDQgMzY4QzI5NS4yNSAzNjggMjg4IDM3NS4yNSAyODggMzg0VjQ2NEMyODggNDcyLjc1IDI5NS4yNSA0ODAgMzA0IDQ4MFMzMjAgNDcyLjc1IDMyMCA0NjRWMzg0QzMyMCAzNzUuMjUgMzEyLjc1IDM2OCAzMDQgMzY4Wk0yMDggNDAwQzE5OS4yNSA0MDAgMTkyIDQwNy4yNSAxOTIgNDE2VjQ5NkMxOTIgNTA0Ljc1IDE5OS4yNSA1MTIgMjA4IDUxMlMyMjQgNTA0Ljc1IDIyNCA0OTZWNDE2QzIyNCA0MDcuMjUgMjE2Ljc1IDQwMCAyMDggNDAwWk00MDAgNDAwQzM5MS4yNSA0MDAgMzg0IDQwNy4yNSAzODQgNDE2VjQ5NkMzODQgNTA0Ljc1IDM5MS4yNSA1MTIgNDAwIDUxMlM0MTYgNTA0Ljc1IDQxNiA0OTZWNDE2QzQxNiA0MDcuMjUgNDA4Ljc1IDQwMCA0MDAgNDAwWk00MTQuNjg4IDExMi4yMTlDNDA3LjE1NiA2Ni43NSAzNjcuNTYyIDMyIDMyMCAzMkMzMDEuMDMxIDMyIDI4Mi45MDYgMzcuNDY5IDI2Ny40MDYgNDcuNjg4QzI0Ni42ODggMTguMjE5IDIxMi41OTQgMCAxNzYgMEMxMTQuMjUgMCA2NCA1MC4yNSA2NCAxMTJDNjQgMTE0LjcxOSA2NC4wOTQgMTE3LjQzOCA2NC4zMTIgMTIwLjE4OEMyNS44NDQgMTM2LjA2MiAwIDE3My42NTYgMCAyMTZDMCAyNzMuMzQ0IDQ2LjY1NiAzMjAgMTA0IDMyMEg0MDhDNDY1LjM0NCAzMjAgNTEyIDI3My4zNDQgNTEyIDIxNkM1MTIgMTYwLjkwNiA0NjguOTM4IDExNS42ODggNDE0LjY4OCAxMTIuMjE5Wk00MDggMjg4SDEwNEM2NC4zMTIgMjg4IDMyIDI1NS42ODggMzIgMjE2QzMyIDE4My40MDYgNTQuMTg4IDE1NC44NzUgODUuOTY5IDE0Ni42MjVDOTQuMTg3IDE0NC40NjkgOTkuMzEyIDEzNi4yODEgOTcuNjI1IDEyNy45NjlDOTYuNTYyIDEyMi43ODEgOTYgMTE3LjQ2OSA5NiAxMTJDOTYgNjcuODc1IDEzMS44NzUgMzIgMTc2IDMyQzIwNi45NjkgMzIgMjM1LjQwNiA1MC4zMTIgMjQ4LjQ2OSA3OC42MjVDMjUwLjY1NiA4My40MDYgMjU1LjA2MiA4Ni44MTIgMjYwLjI1IDg3LjY4N0MyNjUuNDM4IDg4Ljc4MSAyNzAuNzE5IDg2LjkzNyAyNzQuNDA2IDgzLjE1NkMyODYuNTYyIDcwLjgxMiAzMDIuNzUgNjQgMzIwIDY0QzM1NS4yODEgNjQgMzg0IDkyLjcxOSAzODQgMTI4QzM4NCAxMzYuODQ0IDM5MS4xNTYgMTQ0IDQwMCAxNDRINDA4QzQ0Ny42ODggMTQ0IDQ4MCAxNzYuMzEyIDQ4MCAyMTZTNDQ3LjY4OCAyODggNDA4IDI4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CloudShowers(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M112 368C103.25 368 96 375.25 96 384V464C96 472.75 103.25 480 112 480S128 472.75 128 464V384C128 375.25 120.75 368 112 368ZM304 368C295.25 368 288 375.25 288 384V464C288 472.75 295.25 480 304 480S320 472.75 320 464V384C320 375.25 312.75 368 304 368ZM208 400C199.25 400 192 407.25 192 416V496C192 504.75 199.25 512 208 512S224 504.75 224 496V416C224 407.25 216.75 400 208 400ZM400 400C391.25 400 384 407.25 384 416V496C384 504.75 391.25 512 400 512S416 504.75 416 496V416C416 407.25 408.75 400 400 400ZM414.688 112.219C407.156 66.75 367.562 32 320 32C301.031 32 282.906 37.469 267.406 47.688C246.688 18.219 212.594 0 176 0C114.25 0 64 50.25 64 112C64 114.719 64.094 117.438 64.312 120.188C25.844 136.062 0 173.656 0 216C0 273.344 46.656 320 104 320H408C465.344 320 512 273.344 512 216C512 160.906 468.938 115.688 414.688 112.219ZM408 288H104C64.312 288 32 255.688 32 216C32 183.406 54.188 154.875 85.969 146.625C94.187 144.469 99.312 136.281 97.625 127.969C96.562 122.781 96 117.469 96 112C96 67.875 131.875 32 176 32C206.969 32 235.406 50.312 248.469 78.625C250.656 83.406 255.062 86.812 260.25 87.687C265.438 88.781 270.719 86.937 274.406 83.156C286.562 70.812 302.75 64 320 64C355.281 64 384 92.719 384 128C384 136.844 391.156 144 400 144H408C447.688 144 480 176.312 480 216S447.688 288 408 288Z" />
        </Icon>
    </>
}