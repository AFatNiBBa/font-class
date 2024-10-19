
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `person-dress-simple` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress-simple?s=duotone person-dress-simple}
 * @preview ![person-dress-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEyOCAxMjhDMTYzLjM3NSAxMjggMTkyIDk5LjM3NSAxOTIgNjRTMTYzLjM3NSAwIDEyOCAwUzY0IDI4LjYyNSA2NCA2NFM5Mi42MjUgMTI4IDEyOCAxMjhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTIwNy4xNDkgMTk0LjgxM0wyNTUuMzc1IDM2My42MDRDMjU4LjI5NSAzNzMuODI2IDI1MC42MiAzODQgMjM5Ljk5IDM4NEgxOTJWNDgwQzE5MiA0OTcuNjczIDE3Ny42NzMgNTEyIDE2MCA1MTJIOTZDNzguMzI3IDUxMiA2NCA0OTcuNjczIDY0IDQ4MFYzODRIMTYuMDFDNS4zOCAzODQgLTIuMjk1IDM3My44MjYgMC42MjUgMzYzLjYwNEw0OC44NTEgMTk0LjgxM0M1NC43MzkgMTc0LjIwNyA3My41NzMgMTYwIDk1LjAwNSAxNjBIMTYwLjk5NUMxODIuNDI3IDE2MCAyMDEuMjYxIDE3NC4yMDcgMjA3LjE0OSAxOTQuODEzWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PersonDressSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path opacity={.4} d="M128 128C163.375 128 192 99.375 192 64S163.375 0 128 0S64 28.625 64 64S92.625 128 128 128Z" />
            <path d="M207.149 194.813L255.375 363.604C258.295 373.826 250.62 384 239.99 384H192V480C192 497.673 177.673 512 160 512H96C78.327 512 64 497.673 64 480V384H16.01C5.38 384 -2.295 373.826 0.625 363.604L48.851 194.813C54.739 174.207 73.573 160 95.005 160H160.995C182.427 160 201.261 174.207 207.149 194.813Z" />
        </Icon>
    </>
}