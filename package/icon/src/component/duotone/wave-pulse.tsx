
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `wave-pulse` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wave-pulse?s=duotone wave-pulse}
 * @preview ![wave-pulse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0MCAyNDAuMDFWMjcyLjAwOUM2NDAgMjgwLjg4MyA2MzIuODc1IDI4OC4wMDggNjI0IDI4OC4wMDhINDk5Ljc1TDQ0NC42MjUgMzk4LjI1NEM0MzguNzUgNDEwLjEyOSA0MjUuOTk5IDQxNy4wMDMgNDEyLjg3NSA0MTUuODc4QzM5OS42MjUgNDE0LjUwMyAzODguNjI1IDQwNS4yNTQgMzg1LjEyNSAzOTIuMzc5TDMyMy43NSAxNjcuMjYyTDI1NS4yNSA0ODYuNzUxQzI1Mi4yNSA1MDEgMjM5Ljc1IDUxMS41IDIyNS4xMjUgNTEyQzIyNC43NSA1MTIgMjI0LjM3NSA1MTIgMjI0IDUxMkMyMDkuNzUgNTEyIDE5Ny4xMjUgNTAyLjUgMTkzLjI1IDQ4OC43NTFMMTM1Ljg3NSAyODguMDA4SDE2QzcuMTI1IDI4OC4wMDggMCAyODAuODgzIDAgMjcyLjAwOVYyNDAuMDFDMCAyMzEuMTM1IDcuMTI1IDIyNC4wMSAxNiAyMjQuMDFIMTYwQzE3NC4yNSAyMjQuMDEgMTg2Ljg3NSAyMzMuNTEgMTkwLjc1IDI0Ny4yNTlMMjE5LjUgMzQ4LjAwNkwyODguNzUgMjUuMjY3QzI5MS43NSAxMC44OTMgMzA0LjM3NSAwLjM5MyAzMTkuMTI1IDAuMDE4QzMzMy44NzUgLTAuNDgyIDM0NyA5LjM5MyAzNTAuODc1IDIzLjY0Mkw0MjQuODc1IDI5NC43NThMNDUxLjM3NSAyNDEuNzZDNDU2Ljc1IDIzMC44ODUgNDY3Ljg3NSAyMjQuMDEgNDgwIDIyNC4wMUg2MjRDNjMyLjg3NSAyMjQuMDEgNjQwIDIzMS4xMzUgNjQwIDI0MC4wMVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WavePulse(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M640 240.01V272.009C640 280.883 632.875 288.008 624 288.008H499.75L444.625 398.254C438.75 410.129 425.999 417.003 412.875 415.878C399.625 414.503 388.625 405.254 385.125 392.379L323.75 167.262L255.25 486.751C252.25 501 239.75 511.5 225.125 512C224.75 512 224.375 512 224 512C209.75 512 197.125 502.5 193.25 488.751L135.875 288.008H16C7.125 288.008 0 280.883 0 272.009V240.01C0 231.135 7.125 224.01 16 224.01H160C174.25 224.01 186.875 233.51 190.75 247.259L219.5 348.006L288.75 25.267C291.75 10.893 304.375 0.393 319.125 0.018C333.875 -0.482 347 9.393 350.875 23.642L424.875 294.758L451.375 241.76C456.75 230.885 467.875 224.01 480 224.01H624C632.875 224.01 640 231.135 640 240.01Z" />
        </Icon>
    </>
}