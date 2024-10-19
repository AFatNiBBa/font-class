
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `certificate` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/certificate?s=duotone certificate}
 * @preview ![certificate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwNC42MDUgMzAwLjg1NUM1MTguMjI5IDMxMy44NTUgNTExLjg1NSAzMzYuOTggNDkzLjk4MSAzNDEuMjNMNDMxLjIzNiAzNTcuMjNMNDQ4Ljk4NSA0MTkuMjNDNDUzLjk4NCA0MzcuMTA1IDQzNy4xMTEgNDUzLjg1NSA0MTkuMjM3IDQ0OC45OEwzNTcuMjQyIDQzMS4yM0wzNDEuMzY4IDQ5My45OEMzMzYuOTk0IDUxMi4xMDUgMzEzLjQ5NSA1MTguMTA1IDMwMC45OTYgNTA0LjYwNUwyNTYgNDU4LjYwNUwyMTEuMDA0IDUwNC42MDVDMTk4LjM4IDUxNy45OCAxNzUuMTMxIDUxMi40OCAxNzAuNjMyIDQ5My45OEwxNTQuNzU4IDQzMS4yM0w5Mi43NjMgNDQ4Ljk4Qzc0Ljg4OSA0NTMuODU1IDU4LjAxNiA0MzcuMTA1IDYzLjAxNSA0MTkuMjNMODAuNzY0IDM1Ny4yM0wxOC4wMTkgMzQxLjIzQzAuMTQ1IDMzNi45OCAtNi4zNTQgMzEzLjg1NSA3LjM5NSAzMDAuODU1TDUzLjM5MSAyNTUuODU1TDcuMzk1IDIxMC44NTVDLTYuMjI5IDE5Ny45OCAwLjE0NSAxNzQuODU1IDE4LjAxOSAxNzAuNjA1TDgwLjc2NCAxNTQuNjA1TDYzLjAxNSA5Mi42MDVDNTguMDE2IDc0LjczIDc0Ljg4OSA1Ny44NTUgOTIuNzYzIDYyLjg1NUwxNTQuNzU4IDgwLjYwNUwxNzAuNjMyIDE3Ljg1NUMxNzUuMDA2IC0wLjAyIDE5OC4zOCAtNi4xNDUgMjExLjAwNCA3LjIzTDI1NiA1My42MDVMMzAwLjk5NiA3LjIzQzMxMy43NDUgLTYuMjcgMzM3LjExOSAwLjIzIDM0MS4zNjggMTcuODU1TDM1Ny4yNDIgODAuNjA1TDQxOS4yMzcgNjIuODU1QzQzNy4xMTEgNTcuODU1IDQ1My45ODQgNzQuNzMgNDQ4Ljk4NSA5Mi42MDVMNDMxLjIzNiAxNTQuNjA1TDQ5My45ODEgMTcwLjYwNUM1MTEuODU1IDE3NC44NTUgNTE4LjM1NCAxOTcuOTggNTA0LjYwNSAyMTAuODU1TDQ1OC42MDkgMjU1Ljg1NUw1MDQuNjA1IDMwMC44NTVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Certificate(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M504.605 300.855C518.229 313.855 511.855 336.98 493.981 341.23L431.236 357.23L448.985 419.23C453.984 437.105 437.111 453.855 419.237 448.98L357.242 431.23L341.368 493.98C336.994 512.105 313.495 518.105 300.996 504.605L256 458.605L211.004 504.605C198.38 517.98 175.131 512.48 170.632 493.98L154.758 431.23L92.763 448.98C74.889 453.855 58.016 437.105 63.015 419.23L80.764 357.23L18.019 341.23C0.145 336.98 -6.354 313.855 7.395 300.855L53.391 255.855L7.395 210.855C-6.229 197.98 0.145 174.855 18.019 170.605L80.764 154.605L63.015 92.605C58.016 74.73 74.889 57.855 92.763 62.855L154.758 80.605L170.632 17.855C175.006 -0.02 198.38 -6.145 211.004 7.23L256 53.605L300.996 7.23C313.745 -6.27 337.119 0.23 341.368 17.855L357.242 80.605L419.237 62.855C437.111 57.855 453.984 74.73 448.985 92.605L431.236 154.605L493.981 170.605C511.855 174.855 518.354 197.98 504.605 210.855L458.609 255.855L504.605 300.855Z" />
        </Icon>
    </>
}