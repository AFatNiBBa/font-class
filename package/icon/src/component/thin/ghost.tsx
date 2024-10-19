
import { Icon } from "../../index";

/**
 * A component that renders the `ghost` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ghost?s=thin ghost}
 * @preview ![ghost](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTUxLjk5NkMyMzMuOTQ1IDE1MS45OTYgMjE2IDE2OS45NDEgMjE2IDE5MlMyMzMuOTQ1IDIzMi4wMDQgMjU2IDIzMi4wMDRDMjc4LjA1NyAyMzIuMDA0IDI5NiAyMTQuMDU5IDI5NiAxOTJTMjc4LjA1NyAxNTEuOTk2IDI1NiAxNTEuOTk2Wk0yNTYgMjE2LjAwNEMyNDIuNzgxIDIxNi4wMDQgMjMyIDIwNS4yMjMgMjMyIDE5MlMyNDIuNzgxIDE2Ny45OTYgMjU2IDE2Ny45OTZTMjgwIDE3OC43NzcgMjgwIDE5MlMyNjkuMjE5IDIxNi4wMDQgMjU2IDIxNi4wMDRaTTE5Mi4wMTggMEMxOTAuMDYxIDAgMTg4LjA5OCAwLjAzMSAxODYuMTI1IDAuMDlDODEgMy4yMTUgMCA5NC44NTUgMCAyMDBWNDY0LjA1NUMwIDQ3My42ODQgNy44NzUgNDgwLjA1OSAxNi4wNjggNDgwLjA1OUMyMC4wMDIgNDgwLjA1OSAyNC4wMDYgNDc4LjU5IDI3LjI1IDQ3NS4zMDVMNTIuMjUgNDU2LjgwMUM1NS4wODYgNDU0LjY2IDU4LjQyOCA0NTMuNjIxIDYxLjc1MiA0NTMuNjIxQzY2LjE5MyA0NTMuNjIxIDcwLjYwNSA0NTUuNDc3IDczLjc1IDQ1OS4wNTFMMTE2Ljc1IDUwNy4zMTJDMTE5Ljg3NSA1MTAuNDM4IDEyMy45NjkgNTEyIDEyOC4wNjIgNTEyUzEzNi4yNSA1MTAuNDM4IDEzOS4zNzUgNTA3LjMxMkwxODAgNDYxLjU1MUMxODMuMTg3IDQ1Ny45MjYgMTg3LjU5NCA0NTYuMTEzIDE5MiA0NTYuMTEzUzIwMC44MTIgNDU3LjkyNiAyMDQgNDYxLjU1MUwyNDQuNjI1IDUwNy4zMTJDMjQ3Ljc1IDUxMC40MzggMjUxLjg0NCA1MTIgMjU1LjkzOCA1MTJTMjY0LjEyNSA1MTAuNDM4IDI2Ny4yNSA1MDcuMzEyTDMxMC4yNSA0NTkuMDUxQzMxMy4zOTYgNDU1LjQ3NyAzMTcuODA5IDQ1My42MjEgMzIyLjI1IDQ1My42MjFDMzI1LjU3NCA0NTMuNjIxIDMyOC45MTQgNDU0LjY2IDMzMS43NSA0NTYuODAxTDM1Ni43NSA0NzUuMzA1QzM1OS45OTQgNDc4LjU5IDM2NCA0ODAuMDU5IDM2Ny45MzQgNDgwLjA1OUMzNzYuMTI3IDQ4MC4wNTkgMzg0IDQ3My42ODQgMzg0IDQ2NC4wNTVWMTkyQzM4NCA4NS45MzggMjk4LjA3NiAwIDE5Mi4wMTggMFpNMzY3LjI2NiA0NjMuMThMMzY2LjI3IDQ2Mi40NDVMMzQxLjM4OSA0NDQuMDMxQzMzNS44MzIgNDM5LjgzNiAzMjkuMjE1IDQzNy42MjEgMzIyLjI1IDQzNy42MjFDMzEzLjA2NCA0MzcuNjIxIDMwNC4zMTIgNDQxLjU3OCAyOTguMzA1IDQ0OC40MDZMMjU2LjU5MiA0OTYuNjkxTDIxNi4wMTYgNDUwLjk4NEMyMDkuOTQxIDQ0NC4wNzQgMjAxLjE4OCA0NDAuMTEzIDE5MiA0NDAuMTEzQzE4Mi44MTQgNDQwLjExMyAxNzQuMDYxIDQ0NC4wNzQgMTY4LjAzNSA0NTAuOTNMMTI4LjY5NyA0OTYuNjY4TDg1Ljc2MiA0NDguNDhDNzkuNjg4IDQ0MS41NzggNzAuOTM2IDQzNy42MjEgNjEuNzUyIDQzNy42MjFDNTQuNzg3IDQzNy42MjEgNDguMTY4IDQzOS44MzYgNDIuNzMyIDQ0My45NDFMMTcuNzMyIDQ2Mi40NDVMMTYuODcxIDQ2My4xNzJMMTYgNDY0LjA1NVYyMDBDMTYgMTAxLjM4MyA5Mi41MzEgMTguODc5IDE4Ni42MDQgMTYuMDgyQzE4OC40MTQgMTYuMDI3IDE5MC4yMTkgMTYgMTkyLjAxOCAxNkMyODkuMDU1IDE2IDM2OCA5NC45NTMgMzY4IDE5MkwzNjguMTM3IDQ2NC4wNjJMMzY3LjI2NiA0NjMuMThaTTEyOCAxNTEuOTk2QzEwNS45NDUgMTUxLjk5NiA4OCAxNjkuOTQxIDg4IDE5MlMxMDUuOTQ1IDIzMi4wMDQgMTI4IDIzMi4wMDRDMTUwLjA1NyAyMzIuMDA0IDE2OCAyMTQuMDU5IDE2OCAxOTJTMTUwLjA1NyAxNTEuOTk2IDEyOCAxNTEuOTk2Wk0xMjggMjE2LjAwNEMxMTQuNzgxIDIxNi4wMDQgMTA0IDIwNS4yMjMgMTA0IDE5MlMxMTQuNzgxIDE2Ny45OTYgMTI4IDE2Ny45OTZTMTUyIDE3OC43NzcgMTUyIDE5MlMxNDEuMjE5IDIxNi4wMDQgMTI4IDIxNi4wMDRaIi8+PC9zdmc+|width=32|height=32)
 */
const Ghost: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M256 151.996C233.945 151.996 216 169.941 216 192S233.945 232.004 256 232.004C278.057 232.004 296 214.059 296 192S278.057 151.996 256 151.996ZM256 216.004C242.781 216.004 232 205.223 232 192S242.781 167.996 256 167.996S280 178.777 280 192S269.219 216.004 256 216.004ZM192.018 0C190.061 0 188.098 0.031 186.125 0.09C81 3.215 0 94.855 0 200V464.055C0 473.684 7.875 480.059 16.068 480.059C20.002 480.059 24.006 478.59 27.25 475.305L52.25 456.801C55.086 454.66 58.428 453.621 61.752 453.621C66.193 453.621 70.605 455.477 73.75 459.051L116.75 507.312C119.875 510.438 123.969 512 128.062 512S136.25 510.438 139.375 507.312L180 461.551C183.187 457.926 187.594 456.113 192 456.113S200.812 457.926 204 461.551L244.625 507.312C247.75 510.438 251.844 512 255.938 512S264.125 510.438 267.25 507.312L310.25 459.051C313.396 455.477 317.809 453.621 322.25 453.621C325.574 453.621 328.914 454.66 331.75 456.801L356.75 475.305C359.994 478.59 364 480.059 367.934 480.059C376.127 480.059 384 473.684 384 464.055V192C384 85.938 298.076 0 192.018 0ZM367.266 463.18L366.27 462.445L341.389 444.031C335.832 439.836 329.215 437.621 322.25 437.621C313.064 437.621 304.312 441.578 298.305 448.406L256.592 496.691L216.016 450.984C209.941 444.074 201.188 440.113 192 440.113C182.814 440.113 174.061 444.074 168.035 450.93L128.697 496.668L85.762 448.48C79.688 441.578 70.936 437.621 61.752 437.621C54.787 437.621 48.168 439.836 42.732 443.941L17.732 462.445L16.871 463.172L16 464.055V200C16 101.383 92.531 18.879 186.604 16.082C188.414 16.027 190.219 16 192.018 16C289.055 16 368 94.953 368 192L368.137 464.062L367.266 463.18ZM128 151.996C105.945 151.996 88 169.941 88 192S105.945 232.004 128 232.004C150.057 232.004 168 214.059 168 192S150.057 151.996 128 151.996ZM128 216.004C114.781 216.004 104 205.223 104 192S114.781 167.996 128 167.996S152 178.777 152 192S141.219 216.004 128 216.004Z" />
    </Icon>
);

export default Ghost;