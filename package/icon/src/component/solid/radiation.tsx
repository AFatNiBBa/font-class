
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `radiation` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/radiation?s=solid radiation}
 * @preview ![radiation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYuMjUgMzA0QzI4Mi43NSAzMDQgMzA0LjI1IDI4Mi41IDMwNC4yNSAyNTZTMjgyLjc1IDIwOCAyNTYuMjUgMjA4UzIwOC4yNSAyMjkuNSAyMDguMjUgMjU2UzIyOS43NSAzMDQgMjU2LjI1IDMwNFpNMjEzLjg0OSAxODhMMTQyLjkxNCA3NC43MTVDMTMyLjcwNSA1OC40MTIgMTEwLjE3IDU0LjMxMSA5NS41IDY2Ljc1QzUwLjU2MiAxMDQuODQ4IDE5LjMxIDE1OC41NjggMTAuMzM0IDIxOS41MzlDNy41MTUgMjM4LjY3MiAyMi45MiAyNTUuODAxIDQyLjI2IDI1NS44MDFIMTc2LjA1MUMxNzYuMDUxIDIyNy4xOTkgMTkxLjI1IDIwMi4zMDEgMjEzLjg0OSAxODhaTTQxNyA2Ni43NUM0MDIuMzMgNTQuMzExIDM3OS43OTUgNTguNDEyIDM2OS41ODYgNzQuNzE1TDI5OC42NSAxODhDMzIxLjI1IDIwMi4zMDEgMzM2LjQ0OSAyMjcuMTk5IDMzNi40NDkgMjU1LjgwMUg0NzAuMjRDNDg5LjU4IDI1NS44MDEgNTA0Ljk4NCAyMzguNjcyIDUwMi4xNjYgMjE5LjUzOUM0OTMuMTg5IDE1OC41NjggNDYxLjkzNyAxMDQuODQ4IDQxNyA2Ni43NVpNMjk4LjY1IDMyMy41QzI4Ni4zNDkgMzMxLjE5OSAyNzEuODQ5IDMzNS45IDI1Ni4yNSAzMzUuOVMyMjYuMTUgMzMxLjE5OSAyMTMuODQ5IDMyMy41TDE0Mi45MTQgNDM2Ljg3M0MxMzIuNzcxIDQ1My4wODYgMTM4Ljc1NCA0NzUuMDcyIDE1Ni4yMzYgNDgyLjgyNEMxODYuODI2IDQ5Ni4zODkgMjIwLjY1OCA1MDQgMjU2LjI1IDUwNFMzMjUuNjc0IDQ5Ni4zODkgMzU2LjI2NCA0ODIuODI0QzM3My43NDYgNDc1LjA3MiAzNzkuNzI4IDQ1My4wODYgMzY5LjU4NiA0MzYuODczTDI5OC42NSAzMjMuNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Radiation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256.25 304C282.75 304 304.25 282.5 304.25 256S282.75 208 256.25 208S208.25 229.5 208.25 256S229.75 304 256.25 304ZM213.849 188L142.914 74.715C132.705 58.412 110.17 54.311 95.5 66.75C50.562 104.848 19.31 158.568 10.334 219.539C7.515 238.672 22.92 255.801 42.26 255.801H176.051C176.051 227.199 191.25 202.301 213.849 188ZM417 66.75C402.33 54.311 379.795 58.412 369.586 74.715L298.65 188C321.25 202.301 336.449 227.199 336.449 255.801H470.24C489.58 255.801 504.984 238.672 502.166 219.539C493.189 158.568 461.937 104.848 417 66.75ZM298.65 323.5C286.349 331.199 271.849 335.9 256.25 335.9S226.15 331.199 213.849 323.5L142.914 436.873C132.771 453.086 138.754 475.072 156.236 482.824C186.826 496.389 220.658 504 256.25 504S325.674 496.389 356.264 482.824C373.746 475.072 379.728 453.086 369.586 436.873L298.65 323.5Z" />
        </Icon>
    </>
}