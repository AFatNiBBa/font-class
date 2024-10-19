
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hand-wave` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-wave?s=duotone hand-wave}
 * @preview ![hand-wave](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ3MS42MDYgOTZDNDQ5LjUwOSA5NiA0MzEuNjEgMTEzLjg5OCA0MzEuNjEgMTM1Ljk5NlYyMTYuODkxTDIzNC4wMTkgMTkuMjk5QzIyNy43NzEgMTMuMDUxIDIxOS41ODEgOS45MjcgMjExLjM5MiA5LjkyN0MxOTMuMDg3IDkuOTI3IDE3OS4zOTMgMjQuODkyIDE3OS4zOTMgNDEuOTI1QzE3OS4zOTMgNTAuMTE1IDE4Mi41MTcgNTguMzA1IDE4OC43NjUgNjQuNTUzTDMxMy4yMTYgMTg5LjAwNEMzMTYuMzM5IDE5Mi4xMjggMzE3LjkgMTk2LjIyMyAzMTcuOSAyMDAuMzE3QzMxNy45IDIwOS40NzMgMzEwLjQxOSAyMTYuMzE3IDMwMS45MDEgMjE2LjMxN0MyOTcuODA2IDIxNi4zMTcgMjkzLjcxMSAyMTQuNzU1IDI5MC41ODcgMjExLjYzMUwxNDMuNTA5IDY0LjU1M0MxMzcuMjYxIDU4LjMwNSAxMjkuMDcxIDU1LjE4MSAxMjAuODgyIDU1LjE4MUMxMDMuNzkyIDU1LjE4MSA4OC44ODMgNjguOTM3IDg4Ljg4MyA4Ny4xODFDODguODgzIDk1LjM3MSA5Mi4wMDcgMTAzLjU2MSA5OC4yNTUgMTA5LjgwOUwyNDUuMzMzIDI1Ni44ODdDMjQ4LjQ1NyAyNjAuMDExIDI1MC4wMTkgMjY0LjEwNSAyNTAuMDE5IDI2OC4yQzI1MC4wMTkgMjc3LjM1MiAyNDIuNTM5IDI4NC4yIDIzNC4wMiAyODQuMkMyMjkuOTI1IDI4NC4yIDIyNS44MyAyODIuNjM4IDIyMi43MDYgMjc5LjUxNEw5OC4yNTUgMTU1LjA2MkM5Mi4wMDcgMTQ4LjgxNCA4My44MTcgMTQ1LjY5IDc1LjYyNyAxNDUuNjlDNTcuMzE2IDE0NS42OSA0My42MjcgMTYwLjY1NiA0My42MjcgMTc3LjY5QzQzLjYyNyAxODUuODggNDYuNzUxIDE5NC4wNjkgNTIuOTk5IDIwMC4zMTZMMTc3LjQ1IDMyNC43NjhDMTgwLjU3NCAzMjcuODkyIDE4Mi4xMzYgMzMxLjk4NyAxODIuMTM2IDMzNi4wODJDMTgyLjEzNiAzNDQuNjI3IDE3NS4yNTkgMzUyLjA4MSAxNjYuMTM3IDM1Mi4wODFDMTYyLjA0MiAzNTIuMDgxIDE1Ny45NDcgMzUwLjUyIDE1NC44MjMgMzQ3LjM5Nkw3NS42MjggMjY4LjE5OUM2OS4zOCAyNjEuOTUxIDYxLjE5IDI1OC44MjcgNTMgMjU4LjgyN0MzNS45MTEgMjU4LjgyNyAyMSAyNzIuNTgzIDIxIDI5MC44MjdDMjEgMjk5LjAxNyAyNC4xMjQgMzA3LjIwNyAzMC4zNzIgMzEzLjQ1NUwxNzcuNDUgNDYwLjUzM0MyMTEuNzYyIDQ5NC44NDQgMjU2LjgzMiA1MTEuOTk5IDMwMS45MDEgNTExLjk5OVMzOTIuMDQxIDQ5NC44NDQgNDI2LjM1MyA0NjAuNTMzTDQ1My4wMjIgNDMzLjg2MUM0OTAuNzg3IDM5Ni4wOTcgNTExLjYwMyAzNDUuODg4IDUxMS42MDMgMjkyLjQ4NUM1MTEuNjAzIDI5Mi40NyA1MTEuNjAzIDI5Mi40NTQgNTExLjYwMyAyOTIuNDM5VjEzNS45OTZDNTExLjYwMyAxMTMuODk4IDQ5My43MDQgOTYgNDcxLjYwNiA5NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzA0IDBDMjk1LjE1NiAwIDI4OCA3LjE1NiAyODggMTZTMjk1LjE1NiAzMiAzMDQgMzJDMzMwLjQ2OSAzMiAzNTIgNTMuNTMxIDM1MiA4MEMzNTIgODguODQ0IDM1OS4xNTYgOTYgMzY4IDk2UzM4NCA4OC44NDQgMzg0IDgwQzM4NCAzNS44OTEgMzQ4LjEyNSAwIDMwNCAwWk04MCA0MTZDNTMuNTMxIDQxNiAzMiAzOTQuNDY5IDMyIDM2OEMzMiAzNTkuMTU2IDI0Ljg0NCAzNTIgMTYgMzUyUzAgMzU5LjE1NiAwIDM2OEMwIDQxMi4xMjUgMzUuODc1IDQ0OCA4MCA0NDhDODguODQ0IDQ0OCA5NiA0NDAuODQ0IDk2IDQzMlM4OC44NDQgNDE2IDgwIDQxNloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function HandWave(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M471.606 96C449.509 96 431.61 113.898 431.61 135.996V216.891L234.019 19.299C227.771 13.051 219.581 9.927 211.392 9.927C193.087 9.927 179.393 24.892 179.393 41.925C179.393 50.115 182.517 58.305 188.765 64.553L313.216 189.004C316.339 192.128 317.9 196.223 317.9 200.317C317.9 209.473 310.419 216.317 301.901 216.317C297.806 216.317 293.711 214.755 290.587 211.631L143.509 64.553C137.261 58.305 129.071 55.181 120.882 55.181C103.792 55.181 88.883 68.937 88.883 87.181C88.883 95.371 92.007 103.561 98.255 109.809L245.333 256.887C248.457 260.011 250.019 264.105 250.019 268.2C250.019 277.352 242.539 284.2 234.02 284.2C229.925 284.2 225.83 282.638 222.706 279.514L98.255 155.062C92.007 148.814 83.817 145.69 75.627 145.69C57.316 145.69 43.627 160.656 43.627 177.69C43.627 185.88 46.751 194.069 52.999 200.316L177.45 324.768C180.574 327.892 182.136 331.987 182.136 336.082C182.136 344.627 175.259 352.081 166.137 352.081C162.042 352.081 157.947 350.52 154.823 347.396L75.628 268.199C69.38 261.951 61.19 258.827 53 258.827C35.911 258.827 21 272.583 21 290.827C21 299.017 24.124 307.207 30.372 313.455L177.45 460.533C211.762 494.844 256.832 511.999 301.901 511.999S392.041 494.844 426.353 460.533L453.022 433.861C490.787 396.097 511.603 345.888 511.603 292.485C511.603 292.47 511.603 292.454 511.603 292.439V135.996C511.603 113.898 493.704 96 471.606 96Z" />
            <path d="M304 0C295.156 0 288 7.156 288 16S295.156 32 304 32C330.469 32 352 53.531 352 80C352 88.844 359.156 96 368 96S384 88.844 384 80C384 35.891 348.125 0 304 0ZM80 416C53.531 416 32 394.469 32 368C32 359.156 24.844 352 16 352S0 359.156 0 368C0 412.125 35.875 448 80 448C88.844 448 96 440.844 96 432S88.844 416 80 416Z" />
        </Icon>
    </>
}