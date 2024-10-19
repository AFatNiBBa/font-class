
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `down-long` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/down-long?s=solid down-long}
 * @preview ![down-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODEuNTk0IDM5Mi4yNUwxNzcuNTkyIDUwNC4zMkMxNjguMDk0IDUxNC41NTkgMTUxLjkwNSA1MTQuNTU5IDE0Mi40MDUgNTA0LjMyTDM4LjQwNSAzOTIuMjVDMzEuOTIgMzg1LjI1OCAzMC4xODYgMzc1LjA2NiAzNCAzNjYuMzEyQzM3LjgxMSAzNTcuNTU1IDQ2LjQ1MiAzNTEuODk1IDU1Ljk5OCAzNTEuODk1SDEyMFY0MEMxMjAgMTcuOTA2IDEzNy45MDcgMCAxNjAgMFMyMDAgMTcuOTA2IDIwMCA0MFYzNTEuODk1SDI2NEMyNzMuNTQ3IDM1MS44OTUgMjgyLjE4OCAzNTcuNTU1IDI4Ni4wMDIgMzY2LjMxMkMyODkuODEzIDM3NS4wNjYgMjg4LjA3OSAzODUuMjU4IDI4MS41OTQgMzkyLjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function DownLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M281.594 392.25L177.592 504.32C168.094 514.559 151.905 514.559 142.405 504.32L38.405 392.25C31.92 385.258 30.186 375.066 34 366.312C37.811 357.555 46.452 351.895 55.998 351.895H120V40C120 17.906 137.907 0 160 0S200 17.906 200 40V351.895H264C273.547 351.895 282.188 357.555 286.002 366.312C289.813 375.066 288.079 385.258 281.594 392.25Z" />
        </Icon>
    </>
}