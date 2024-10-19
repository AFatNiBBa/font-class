
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `down-long` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/down-long?s=regular down-long}
 * @preview ![down-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNCAzNjYuMzEyQzM3LjgxMSAzNTcuNTU1IDQ2LjQ1MiAzNTEuODk1IDU1Ljk5OCAzNTEuODk1SDEzNlYyNEMxMzYgMTAuNzUgMTQ2Ljc1IDAgMTYwIDBTMTg0IDEwLjc1IDE4NCAyNFYzNTEuODk1SDI2NEMyNzMuNTQ3IDM1MS44OTUgMjgyLjE4OCAzNTcuNTU1IDI4Ni4wMDIgMzY2LjMxMkMyODkuODEzIDM3NS4wNjYgMjg4LjA3OCAzODUuMjYyIDI4MS41OTQgMzkyLjI1TDE3Ny41OTQgNTA0LjMyNEMxNjguMDk0IDUxNC41NTkgMTUxLjkwNSA1MTQuNTU5IDE0Mi40MDcgNTA0LjMyNEwzOC40MDUgMzkyLjI1QzMxLjkyIDM4NS4yNjIgMzAuMTg2IDM3NS4wNjYgMzQgMzY2LjMxMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DownLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M34 366.312C37.811 357.555 46.452 351.895 55.998 351.895H136V24C136 10.75 146.75 0 160 0S184 10.75 184 24V351.895H264C273.547 351.895 282.188 357.555 286.002 366.312C289.813 375.066 288.078 385.262 281.594 392.25L177.594 504.324C168.094 514.559 151.905 514.559 142.407 504.324L38.405 392.25C31.92 385.262 30.186 375.066 34 366.312Z" />
        </Icon>
    </>
}