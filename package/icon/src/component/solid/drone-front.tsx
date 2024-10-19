
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `drone-front` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/drone-front?s=solid drone-front}
 * @preview ![drone-front](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMTM2LjEwOUMyODggMTIyLjg2NSAyNzcuMjUgMTEyLjExOSAyNjQgMTEyLjExOUgxNjYuMzc1QzE2My4xMjUgMTAyLjQ5NyAxNTQuMTI1IDk2LjEyNSAxNDQgOTYuMTI1UzEyNC44NzUgMTAyLjQ5NyAxMjEuNjI1IDExMi4xMTlIMjRDMTAuNzUgMTEyLjExOSAwIDEyMi44NjUgMCAxMzYuMTA5UzEwLjc1IDE2MC4xIDI0IDE2MC4xSDI2NEMyNzcuMjUgMTYwLjEgMjg4IDE0OS4zNTQgMjg4IDEzNi4xMDlaTTYxNi4zNzUgMTEyLjI0NEw1MTguNjI1IDExMi40OTRDNTE1LjUgMTAyLjYyMiA1MDYuMzc1IDk2IDQ5NiA5NkM0ODUuNzUgOTYuMTI1IDQ3Ni42MjUgMTAyLjc0NyA0NzMuNjI1IDExMi42MThMMzc1LjYyNSAxMTIuOTkzQzM2Mi43NSAxMTMuMjQzIDM1Mi41IDEyMy43MzkgMzUyLjYyNSAxMzYuNjA5QzM1Mi42MjUgMTQ5LjM1NCAzNjIuODc1IDE1OS44NSAzNzUuNzUgMTU5Ljk3NUw2MTYuNSAxNTkuMjI1QzYyOS41IDE1OS4yMjUgNjQwIDE0OC42MDQgNjQwIDEzNS42MUM2NDAgMTIyLjYxNSA2MjkuMzc1IDExMi4xMTkgNjE2LjM3NSAxMTIuMjQ0Wk00NzIgMjM3LjY5NUwzNzUuMTI1IDIwOC43MDZDMzM5LjEyNSAxOTcuODM1IDMwMC43NSAxOTcuODM1IDI2NC44NzUgMjA4LjcwNkwxNjggMjM3LjY5NVYxOTIuMDg3SDEyMFYyNTYuMDYyQzEyMCAyNzMuODA2IDEzNC4zNzUgMjg4LjA1IDE1MiAyODguMDVIMTk3LjM3NUMxNjcuMjUgMzE3LjQxNCAxNDguMzc1IDM1Ni4zOTggMTQ0LjEyNSAzOTguMjU3QzE0My42MjUgNDAyLjc1NSAxNDUuMTI1IDQwNy4yNTMgMTQ4LjEyNSA0MTAuNjI3QzE1MS4yNSA0MTQuMDAxIDE1NS41IDQxNiAxNjAuMTI1IDQxNkgxNzYuMzc1QzE4NC42MjUgNDE2IDE5MS4xMjUgNDA5LjM3OCAxOTIgNDAxLjEzMUMxOTYuMTI1IDM2NC4zOTUgMjE1LjYyNSAzMzEuMjgzIDI0NS42MjUgMzA5Ljc5MkwyNzguNjI1IDM0Mi42NTRDMjg0LjYyNSAzNDguNjUxIDI5Mi43NSAzNTIuMDI1IDMwMS4yNSAzNTIuMDI1SDMzOC43NUMzNDcuMjUgMzUyLjAyNSAzNTUuMzc1IDM0OC42NTEgMzYxLjM3NSAzNDIuNjU0TDM5NC4yNSAzMDkuNzkyQzQyNC4zNzUgMzMxLjI4MyA0NDMuODc1IDM2NC4zOTUgNDQ4IDQwMS4xMzFDNDQ4Ljg3NSA0MDkuMzc4IDQ1NS4zNzUgNDE2IDQ2My42MjUgNDE2SDQ3OS44NzVDNDg0LjUgNDE2IDQ4OC43NSA0MTQuMDAxIDQ5MS44NzUgNDEwLjYyN0M0OTQuODc1IDQwNy4yNTMgNDk2LjM3NSA0MDIuNzU1IDQ5NS44NzUgMzk4LjI1N0M0OTEuNjI1IDM1Ni4zOTggNDcyLjc1IDMxNy40MTQgNDQyLjYyNSAyODguMDVINDg4QzUwNS42MjUgMjg4LjA1IDUyMCAyNzMuODA2IDUyMCAyNTYuMDYyVjE5Mi4wODdINDcyVjIzNy42OTVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function DroneFront(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M288 136.109C288 122.865 277.25 112.119 264 112.119H166.375C163.125 102.497 154.125 96.125 144 96.125S124.875 102.497 121.625 112.119H24C10.75 112.119 0 122.865 0 136.109S10.75 160.1 24 160.1H264C277.25 160.1 288 149.354 288 136.109ZM616.375 112.244L518.625 112.494C515.5 102.622 506.375 96 496 96C485.75 96.125 476.625 102.747 473.625 112.618L375.625 112.993C362.75 113.243 352.5 123.739 352.625 136.609C352.625 149.354 362.875 159.85 375.75 159.975L616.5 159.225C629.5 159.225 640 148.604 640 135.61C640 122.615 629.375 112.119 616.375 112.244ZM472 237.695L375.125 208.706C339.125 197.835 300.75 197.835 264.875 208.706L168 237.695V192.087H120V256.062C120 273.806 134.375 288.05 152 288.05H197.375C167.25 317.414 148.375 356.398 144.125 398.257C143.625 402.755 145.125 407.253 148.125 410.627C151.25 414.001 155.5 416 160.125 416H176.375C184.625 416 191.125 409.378 192 401.131C196.125 364.395 215.625 331.283 245.625 309.792L278.625 342.654C284.625 348.651 292.75 352.025 301.25 352.025H338.75C347.25 352.025 355.375 348.651 361.375 342.654L394.25 309.792C424.375 331.283 443.875 364.395 448 401.131C448.875 409.378 455.375 416 463.625 416H479.875C484.5 416 488.75 414.001 491.875 410.627C494.875 407.253 496.375 402.755 495.875 398.257C491.625 356.398 472.75 317.414 442.625 288.05H488C505.625 288.05 520 273.806 520 256.062V192.087H472V237.695Z" />
        </Icon>
    </>
}