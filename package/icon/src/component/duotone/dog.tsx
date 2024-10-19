
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dog` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dog?s=duotone dog}
 * @preview ![dog](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0OC4wMDEgMjQzLjYyN1YyNzcuNTAyTDI5OCAyMjQuMDAyTDMyMC4wMDEgMTk3Ljg3N0w0NDguMDAxIDI0My42MjdaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTI5Ny45OTkgMjI0LjAwMkw0NDggMjc3LjUwMlY0OTZDNDQ4IDUwNC44NzUgNDQwLjg3NSA1MTIgNDMyIDUxMkgzNjhDMzU5LjEyNSA1MTIgMzUyIDUwNC44NzUgMzUyIDQ5NlYzODQuMDAxSDE5MlY0OTZDMTkyIDUwNC44NzUgMTg0Ljg3NSA1MTIgMTc2IDUxMkgxMTJDMTAzLjEyNSA1MTIgOTYgNTA0Ljg3NSA5NiA0OTZWMjgyLjEyN0M1OC44NzUgMjY4Ljg3NyAzMiAyMzMuNjI3IDMyIDE5Mi4wMDJDMzIgMTc0LjM3NyA0Ni4zNzUgMTYwLjAwMiA2NCAxNjAuMDAyUzk2IDE3NC4zNzcgOTYgMTkyLjAwMlMxMTAuMzc1IDIyNC4wMDIgMTI4IDIyNC4wMDJIMjk3Ljk5OVpNNTQ0IDExMi4wMDNWMTQ0LjAwM0M1NDQgMTc5LjM3NyA1MTUuMzc1IDIwOC4wMDIgNDgwIDIwOC4wMDJINDQ4VjI0My42MjdMMzIwIDE5Ny44NzdWNDguMDAzQzMyMCAzMy43NTMgMzM3LjI1IDI2LjYyOCAzNDcuMjUgMzYuNzUzTDM3NC42MjUgNjQuMDAzSDQyOC4yNUM0MzkuMTI1IDY0LjAwMyA0NTIgNzEuODc4IDQ1Ni44NzUgODEuNzUzTDQ2NCA5Ni4wMDNINTI4QzUzNi44NzUgOTYuMDAzIDU0NCAxMDMuMTI4IDU0NCAxMTIuMDAzWk00MzIgMTEyLjAwM0M0MzIgMTAzLjEyOCA0MjQuODc1IDk2LjAwMyA0MTYgOTYuMDAzUzQwMCAxMDMuMTI4IDQwMCAxMTIuMDAzUzQwNy4xMjUgMTI4LjAwMyA0MTYgMTI4LjAwM1M0MzIgMTIwLjg3OCA0MzIgMTEyLjAwM1oiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Dog: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M448.001 243.627V277.502L298 224.002L320.001 197.877L448.001 243.627Z" />
            <path d="M297.999 224.002L448 277.502V496C448 504.875 440.875 512 432 512H368C359.125 512 352 504.875 352 496V384.001H192V496C192 504.875 184.875 512 176 512H112C103.125 512 96 504.875 96 496V282.127C58.875 268.877 32 233.627 32 192.002C32 174.377 46.375 160.002 64 160.002S96 174.377 96 192.002S110.375 224.002 128 224.002H297.999ZM544 112.003V144.003C544 179.377 515.375 208.002 480 208.002H448V243.627L320 197.877V48.003C320 33.753 337.25 26.628 347.25 36.753L374.625 64.003H428.25C439.125 64.003 452 71.878 456.875 81.753L464 96.003H528C536.875 96.003 544 103.128 544 112.003ZM432 112.003C432 103.128 424.875 96.003 416 96.003S400 103.128 400 112.003S407.125 128.003 416 128.003S432 120.878 432 112.003Z" />
    </Icon>
);

export default Dog;