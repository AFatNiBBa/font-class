
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `deer` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/deer?s=regular deer}
 * @preview ![deer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMTU5Ljk2MUMzNzUuMjUgMTU5Ljk2MSAzNjggMTY3LjIwOSAzNjggMTc1Ljk1N0MzNjggMTg0LjcwNSAzNzUuMjUgMTkxLjk1MyAzODQgMTkxLjk1M1M0MDAgMTg0LjcwNSA0MDAgMTc1Ljk1N0M0MDAgMTY3LjIwOSAzOTIuNzUgMTU5Ljk2MSAzODQgMTU5Ljk2MVpNNDY1LjM3NSAxMDguNDczTDM5Ni43NSA4OS4xMDNDMzk5Ljc1IDg1LjcyOSA0MDIuODc1IDgyLjczIDQwNS4zNzUgNzkuMTA2TDQyMy41IDUxLjk4N0M0MjguMzc1IDQ0LjczOSA0MjYuMzc1IDM0Ljc0MSA0MTkuMTI1IDI5Ljc0M0w0MDUuNzUgMjAuODdDMzk4LjM3NSAxNS45OTYgMzg4LjUgMTcuOTk2IDM4My42MjUgMjUuMjQ0TDM2NS41IDUyLjQ4N0MzNjEuNjI1IDU4LjIzNiAzNTYuMjUgNjIuOTg1IDM1MC4xMjUgNjYuMTA5TDMwMS4yNSA5MC40NzhMMjkxLjc1IDg3LjcyOUMyOTkuNzUgNzcuNzMxIDMwNC4xMjUgNjUuMzU5IDMwNC4xMjUgNTIuNzM3VjE1Ljk5NkMzMDQuMTI1IDcuMjQ4IDI5Ni44NzUgMCAyODguMTI1IDBIMjcyLjEyNUMyNjMuMjUgMCAyNTYuMTI1IDcuMjQ4IDI1Ni4xMjUgMTUuOTk2VjUyLjczN0MyNTYuMTI1IDU0LjYxMiAyNTUuNSA1Ni4zNjEgMjU0LjM3NSA1Ny43MzZMMjQxIDc0LjYwN0wyMjkuOTk5IDcxLjQ4MkMyMjYuNjI1IDcwLjQ4MyAyMjQuMjUgNjcuMzU4IDIyNC4yNSA2My43MzRWMTUuOTk2QzIyNC4yNSA3LjI0OCAyMTcgMCAyMDguMjUgMEgxOTIuMjVDMTgzLjM3NSAwIDE3Ni4yNSA3LjI0OCAxNzYuMjUgMTUuOTk2VjYzLjczNEMxNzYuMjUgODguNzI4IDE5MyAxMTAuOTczIDIxNy4xMjUgMTE3LjcyMUwyODAuODc1IDEzNS41OTJMMjY2LjI1IDE1OS45NjFIODhDMzkuNSAxNTkuOTYxIDAgMTk5LjQ1MSAwIDI0Ny45MzlWMzExLjkyNEg0OFYzMTkuMTcyTDM3LjYyNSAzNDYuOTE1QzMxLjM3NSAzNjMuNjYxIDMwLjI1IDM4MS43ODIgMzUgNDAwLjE1Mkw1OS41IDQ4MS42MzNDNjQgNDk5LjUwMyA3OS44NzUgNTEyIDk4LjI1IDUxMkgxNjIuMTI1QzE3NC41IDUxMiAxODUuOTk5IDUwNi4zNzYgMTkzLjYyNSA0OTYuNjI5QzIwMS4yNSA0ODYuODgxIDIwMy44NzUgNDc0LjM4NCAyMDAuNjI1IDQ2MS4yNjJMMTc2LjYyNSAzODAuNjU3TDE4Ny4yNSAzNTIuMDM5SDI0MFY0NzIuMDFDMjQwIDQ5NC4xMjkgMjU3Ljg3NSA1MTIgMjgwIDUxMkgzNDRDMzY2LjEyNSA1MTIgMzg0IDQ5NC4xMjkgMzg0IDQ3Mi4wMVYyOTUuMTc4TDQwNC43NSAyNjMuOTM2SDQ0OEM0ODMuMjUgMjYzLjkzNiA1MTIgMjM1LjE5MyA1MTIgMTk5Ljk1MVYxNzAuMDgzQzUxMiAxNDEuNTkgNDkyLjc1IDExNi4yMjIgNDY1LjM3NSAxMDguNDczWk00NjQgMTk5Ljk1MUM0NjQgMjA4LjY5OSA0NTYuNzUgMjE1Ljk0NyA0NDggMjE1Ljk0N0gzNzkuMjVMMzM2IDI4MC42ODJWNDYzLjg4N0gyODhWMzAzLjkyNkgxNTMuOTk5TDEyNS44NzUgMzc4LjY1OEwxNTEuMjUgNDYzLjg4N0gxMDQuMjVMODEuMTI1IDM4Ny40MDVDNzkuMTI1IDM3OS41MzIgNzkuNjI1IDM3MS4yODQgODIuMzc1IDM2My42NjFMOTYuNSAzMzEuOTE5TDk2IDI2My45MzZINDhWMjQ3LjkzOUM0OCAyMjUuODIgNjUuODc1IDIwNy45NDkgODggMjA3Ljk0OUgyOTMuNzVMMzI4LjI1IDE0OS4yMTRDMzM1Ljc1IDEzNC4yMTcgMzUyLjc1IDEyNi43MTkgMzY5IDEzMS4yMThMNDUyLjI1IDE1NC43MTJDNDU5LjI1IDE1Ni41ODcgNDY0IDE2Mi45NiA0NjQgMTcwLjA4M1YxOTkuOTUxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Deer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M384 159.961C375.25 159.961 368 167.209 368 175.957C368 184.705 375.25 191.953 384 191.953S400 184.705 400 175.957C400 167.209 392.75 159.961 384 159.961ZM465.375 108.473L396.75 89.103C399.75 85.729 402.875 82.73 405.375 79.106L423.5 51.987C428.375 44.739 426.375 34.741 419.125 29.743L405.75 20.87C398.375 15.996 388.5 17.996 383.625 25.244L365.5 52.487C361.625 58.236 356.25 62.985 350.125 66.109L301.25 90.478L291.75 87.729C299.75 77.731 304.125 65.359 304.125 52.737V15.996C304.125 7.248 296.875 0 288.125 0H272.125C263.25 0 256.125 7.248 256.125 15.996V52.737C256.125 54.612 255.5 56.361 254.375 57.736L241 74.607L229.999 71.482C226.625 70.483 224.25 67.358 224.25 63.734V15.996C224.25 7.248 217 0 208.25 0H192.25C183.375 0 176.25 7.248 176.25 15.996V63.734C176.25 88.728 193 110.973 217.125 117.721L280.875 135.592L266.25 159.961H88C39.5 159.961 0 199.451 0 247.939V311.924H48V319.172L37.625 346.915C31.375 363.661 30.25 381.782 35 400.152L59.5 481.633C64 499.503 79.875 512 98.25 512H162.125C174.5 512 185.999 506.376 193.625 496.629C201.25 486.881 203.875 474.384 200.625 461.262L176.625 380.657L187.25 352.039H240V472.01C240 494.129 257.875 512 280 512H344C366.125 512 384 494.129 384 472.01V295.178L404.75 263.936H448C483.25 263.936 512 235.193 512 199.951V170.083C512 141.59 492.75 116.222 465.375 108.473ZM464 199.951C464 208.699 456.75 215.947 448 215.947H379.25L336 280.682V463.887H288V303.926H153.999L125.875 378.658L151.25 463.887H104.25L81.125 387.405C79.125 379.532 79.625 371.284 82.375 363.661L96.5 331.919L96 263.936H48V247.939C48 225.82 65.875 207.949 88 207.949H293.75L328.25 149.214C335.75 134.217 352.75 126.719 369 131.218L452.25 154.712C459.25 156.587 464 162.96 464 170.083V199.951Z" />
        </Icon>
    </>
}