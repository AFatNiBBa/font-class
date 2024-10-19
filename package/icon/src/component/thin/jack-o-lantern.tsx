
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `jack-o-lantern` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/jack-o-lantern?s=thin jack-o-lantern}
 * @preview ![jack-o-lantern](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzkuNDY1IDMxOS45NzNDNDIzLjA2NCAzMTkuOTczIDM4MS44MjMgMzYwLjkwNyAyODggMzYwLjkwN0gyODBWMzgxLjg0NEMyODAgMzg1LjUwMSAyNzcuMTI1IDM4OC4zNzYgMjczLjQ2OSAzODguMzc2SDI1OC45MjJDMjU1LjI2NiAzODguMzc2IDI1Mi4zOTEgMzg1LjUwMSAyNTIuMzkxIDM4MS44NDRWMzU4LjUwMUwyNDUuNTk0IDM1Ny40N0MxNzcuNjU5IDM0Ny4xMTYgMTQ5Ljk4MyAzMTkuOTgzIDEzNi41OTUgMzE5Ljk4M0MxMjUuMDg4IDMxOS45ODMgMTE0LjA1IDMyOS4zMzEgMTE0LjA1IDM0Mi4yMzdDMTE0LjA1IDM0OS45NTIgMTIyLjUzOCAzNjkuOTEgMTMzLjczNCAzODUuNzE5QzE0Mi4xMjUgMzk3LjQzOCAxNTMuMTI1IDQwNy43NTEgMTY3LjM3NSA0MTcuMjVMMTc5LjU3OCA0MjUuMzc1TDE3OS44MTIgNDEwLjcxOUMxNzkuODc1IDQwNy4xNTcgMTgyLjY4OCA0MDQuMzc2IDE4Ni4yMzQgNDA0LjM3NkgyMDAuNzgxQzIwNC40MzcgNDA0LjM3NiAyMDcuMzEyIDQwNy4yNTEgMjA3LjMxMiA0MTAuOTM4VjQzNi40NjlMMjEzLjA2MiA0MzguMTU3QzIzNS40MDYgNDQ0LjY4OCAyNjAuNjI1IDQ0OCAyODggNDQ4UzM0MC41OTQgNDQ0LjY4OCAzNjIuOTM4IDQzOC4xNTdMMzY4LjY4OCA0MzYuNDY5VjQxMC45MzhDMzY4LjY4OCA0MDcuMjUxIDM3MS41NjMgNDA0LjM3NiAzNzUuMjE5IDQwNC4zNzZIMzg5Ljc2NkMzOTMuMjY2IDQwNC4zNzYgMzk2LjA3OCA0MDcuMTU3IDM5Ni4xODggNDEwLjcxOUwzOTYuNjI1IDQyNUw0MDguNTc4IDQxNy4xNTdDNDIyLjUxNiA0MDguMDAxIDQzMy45OTkgMzk3LjI1MSA0NDIuNzE5IDM4NS4xNTdDNDUzLjI1NSAzNzAuMzU4IDQ2MS45NTMgMzUwLjEwMyA0NjEuOTUzIDM0Mi4yMjdDNDYxLjk1MyAzMjkuMjM0IDQ1MC44OTUgMzE5Ljk3MyA0MzkuNDY1IDMxOS45NzNaTTQ0NS41NjIgMzQ0LjM3NkM0MzQuODE3IDM3NS41MTggNDE4LjYyOCAzODkuNzE0IDQwOC4xMDkgMzk3Ljg3NkM0MDQuMDQ3IDM5Mi4wOTQgMzk3LjM1OSAzODguMzc2IDM4OS43NjYgMzg4LjM3NkgzNzUuMjE5QzM2Mi43OTcgMzg4LjM3NiAzNTIuNjg3IDM5OC41MDEgMzUyLjY4NyA0MTAuOTM4VjQyNC4zNzVDMzMzLjIzNCA0MjkuNDM4IDMxMC42MTcgNDMxLjk2OSAyODggNDMxLjk2OVMyNDIuNzY2IDQyOS40MzggMjIzLjMxMiA0MjQuMzc1VjQxMC45MzhDMjIzLjMxMiAzOTguNTAxIDIxMy4yMDMgMzg4LjM3NiAyMDAuNzgxIDM4OC4zNzZIMTg2LjIzNEMxNzguNzAzIDM4OC4zNzYgMTcxLjk4NCAzOTIuMTg4IDE2Ny45MDYgMzk3Ljk2OUMxMzguMDQ0IDM3NC44NTggMTMwLjAzNCAzNDMuMDM1IDEzMC4wMzQgMzQyLjE5OEMxMzAuMDM0IDMzOC43MTkgMTMzLjQxNSAzMzUuOTY0IDEzNi41NjUgMzM1Ljk2NEMxNDIuMDQyIDMzNS45NjQgMTczLjA2NyAzNjEuMDQ1IDIzNi4zOTEgMzcyLjE1N1YzODEuODQ0QzIzNi4zOTEgMzk0LjI4MiAyNDYuNSA0MDQuMzc2IDI1OC45MjIgNDA0LjM3NkgyNzMuNDY5QzI4NS44OTEgNDA0LjM3NiAyOTYgMzk0LjI4MiAyOTYgMzgxLjg0NFYzNzYuODEzQzM4NC45MjMgMzc0LjQxMiA0MzMuMDIgMzM1Ljk4NCA0MzkuNDI4IDMzNS45ODRDNDQxLjkxMyAzMzUuOTg0IDQ0NS45NjggMzM4LjA3NyA0NDUuOTY4IDM0Mi4xNzVDNDQ1Ljk2OCAzNDIuODM1IDQ0NS44NTQgMzQzLjU1OSA0NDUuNTc4IDM0NC4zNDVMNDQ1LjU2MiAzNDQuMzc2Wk0yNDggMTA0LjAwMkMyNTEuMDk0IDEwNC4wMDIgMjU0LjA0NyAxMDIuMTkgMjU1LjM0NCA5OS4xNThMMjg4LjkyMiAyMS4wNjFDMjkwLjA4IDE4LjE5OCAyOTMuMDE4IDE1Ljk4MyAyOTYuMzQ0IDE1Ljk4M0MyOTcuNTE0IDE1Ljk4MyAyOTguNzMyIDE2LjI1NyAyOTkuOTM4IDE2Ljg3NEwzMzkuNTQ3IDM2LjYyNEMzNDIuMjk3IDM3Ljk5OSAzNDQgNDAuNzE3IDM0NCA0My43MTdWOTYuMDAyQzM0NCAxMDAuNDA4IDM0Ny41NzggMTA0LjAwMiAzNTIgMTA0LjAwMlMzNjAgMTAwLjQwOCAzNjAgOTYuMDAyVjQzLjcxN0MzNjAgMzQuNjI0IDM1NC45MDYgMjYuNDA1IDM0Ni42ODggMjIuMzExTDMwNy4xNTYgMi41ODlDMzA1LjE1OCAxLjU2MyAzMDEuNCAwIDI5Ni4zNjIgMEMyODYuMjUxIDAgMjc3LjYwNyA2LjMwNCAyNzQuMTU2IDE0LjkzMkwyNDAuNjU2IDkyLjg0NkMyNDAuMjExIDkzLjg3OSAyNDAuMDAxIDk0Ljk1MiAyNDAuMDAxIDk2LjAwN0MyNDAuMDAxIDk5LjQ4NSAyNDIuNzU2IDEwNC4wMDIgMjQ4IDEwNC4wMDJaTTQzMi4yMDEgMTMwLjI0M0M0MTAuMTU0IDEzMC4yNDMgMzkyLjU1OCAxMzguMjEyIDM4OC4xODYgMTQxLjY0NkMzNTkuNTg2IDEyNy4zMzggMzI2LjEzOSAxMjAuMDAyIDI4OCAxMjAuMDAyUzIxNi40MTQgMTI3LjMzOCAxODcuODE0IDE0MS42NDZDMTgzLjQ3IDEzOC4yMzQgMTY1LjgyMSAxMzAuMjU2IDE0My43NjYgMTMwLjI1NkM1OS4xODYgMTMwLjI1NiAwIDI0Ni4zNTEgMCAzMTkuNzUxQzAgNDA3LjY4NCA2Ny4wNzEgNTExLjk5NSAxNTUuMzE0IDUxMS45OTVDMTc5LjEzNiA1MTEuOTk1IDIwMi45OSA1MDUuMDc0IDIyMi41NzggNDkxLjE1NkMyNDAuODkxIDUwNC45NjkgMjYyLjg1OSA1MTEuOTM4IDI4OCA1MTEuOTM4QzMxMy4wOTQgNTExLjkzOCAzMzUuMTA5IDUwNC45MzggMzUzLjUxNiA0OTEuMTU2QzM3My4wNzggNTA1LjA2MyAzOTYuOTIyIDUxMiA0MjAuNzUgNTEyQzUwOC4zNiA1MTIgNTc2IDQwOC4zNDkgNTc2IDMxOS43NTFDNTc2IDI1MC4zNTQgNTE4LjEyMiAxMzAuMjQzIDQzMi4yMDEgMTMwLjI0M1pNNDIwLjc4MiA0OTUuNzc1QzM3Ni4zMzMgNDk1Ljc3NSAzNjAuOTA0IDQ3My4wMzEgMzUzLjQgNDczLjAzMUMzNDUuMzI0IDQ3My4wMzEgMzMyLjggNDk1LjkzOCAyODggNDk1LjkzOEMyNDMuMjA2IDQ5NS45MzggMjMwLjg0MiA0NzMuMDU0IDIyMi43MTMgNDczLjA1NEMyMTUuMjQyIDQ3My4wNTQgMTk5LjQ1NiA0OTUuNzQxIDE1NS4zMTggNDk1Ljc0MUM3Ny44NjQgNDk1Ljc0MSAxNiA0MDAuODU1IDE2IDMxOS43NTFDMTYgMjM1LjE0NiA4MS41NjEgMTQ2LjkxOSAxNDIuNjc3IDE0Ni45MTlDMTUxLjkwNiAxNDYuOTE5IDE2MS4yMTUgMTQ4LjUxOSAxNzAuMjU2IDE1MS42OTdDMTU2LjI4IDE2MC44MzkgMTM2LjAwNCAxNzcuNTQ5IDEzNi4wMDQgMTgzLjk4OUMxMzYuMDA0IDE4OC45ODMgMTQwLjE0MSAxOTEuOTgyIDE0NC4wMjUgMTkxLjk4MkMxNTMuNjE3IDE5MS45ODIgMTg0LjE2OSAxMzUuOTk4IDI4OCAxMzUuOTk4QzM5MS45MzkgMTM1Ljk5OCA0MjIuMjgyIDE5MS45OSA0MzIgMTkxLjk5QzQzNi40MzYgMTkxLjk5IDQzOS45OTYgMTg4LjM5OSA0MzkuOTk2IDE4My45ODlDNDM5Ljk5NiAxNzcuNzEzIDQyMC4yNzQgMTYxLjIgNDA1Ljc0NCAxNTEuNjk3QzQxNC43ODIgMTQ4LjUxOSA0MjQuMDg5IDE0Ni45MiA0MzMuMzE2IDE0Ni45MkM0OTQuODcyIDE0Ni45MiA1NjAgMjM1Ljg0OCA1NjAgMzE5Ljc1MUM1NjAgMzk5LjcxNCA0OTkuMTI0IDQ5NS43NzUgNDIwLjc4MiA0OTUuNzc1Wk0xNjcuOTY5IDI5Ni4wMDFIMjQxLjk1M0MyNTIuMzA0IDI5Ni4wMDEgMjU1Ljk0IDI4Ny43NjQgMjU1Ljk0IDI4Mi4xNkMyNTUuOTQgMjc5LjcgMjU1LjM2MiAyNzcuMTY1IDI1NC4xNTYgMjc0LjgxNEwyMTYuNzM0IDIxNC4yNTJDMjEzLjY3MiAyMTAuMjI3IDIwOC45NzcgMjA3Ljk5OSAyMDQuMzYzIDIwNy45OTlDMjAxLjMyNCAyMDcuOTk5IDE5NS40NjYgMjA5LjQ5IDE5Mi43NSAyMTQuODc3TDE1NS43NSAyNzQuODE0TDE1NS41MTYgMjc1LjIyQzE1NC40MTkgMjc3LjI1IDE1My44NzQgMjc5LjYxMSAxNTMuODc0IDI4MS45ODFDMTUzLjg3NCAyODkuMjE1IDE1OC45NzIgMjk2LjAwMSAxNjcuOTY5IDI5Ni4wMDFaTTIwNC45NjkgMjI1LjUwMUwyMzkuMzU5IDI4MC4wMDFIMTcxLjM0NEwyMDQuOTY5IDIyNS41MDFaTTMzMS4wMzEgMjk2LjAwMUg0MDUuMDE2QzQxNS4zMDkgMjk2LjAwMSA0MTkuMDA5IDI4Ny43NzUgNDE5LjAwOSAyODIuMTQ5QzQxOS4wMDkgMjc5LjY5OSA0MTguNDM0IDI3Ny4xNjkgNDE3LjIzNCAyNzQuODE0TDM3OS44MTIgMjE0LjI1MkMzNzYuODA4IDIxMC4yNDYgMzcyLjIyNyAyMDcuOTkzIDM2Ny41MzQgMjA3Ljk5M0MzNjQuNDU2IDIwNy45OTMgMzU4LjU4MSAyMDkuNDMxIDM1NS44MTIgMjE0Ljg3N0wzMTguODI4IDI3NC44MTRMMzE4LjYwOSAyNzUuMTg5QzMxNy40OTggMjc3LjIzMyAzMTYuOTQ2IDI3OS42MTEgMzE2Ljk0NiAyODEuOTk5QzMxNi45NDYgMjg5LjI5OCAzMjIuMTEzIDI5Ni4wMDEgMzMxLjAzMSAyOTYuMDAxWk0zNjguMDMxIDIyNS41MDFMNDAyLjQyMiAyODAuMDAxSDMzNC40MjJMMzY4LjAzMSAyMjUuNTAxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function JackOLantern(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M439.465 319.973C423.064 319.973 381.823 360.907 288 360.907H280V381.844C280 385.501 277.125 388.376 273.469 388.376H258.922C255.266 388.376 252.391 385.501 252.391 381.844V358.501L245.594 357.47C177.659 347.116 149.983 319.983 136.595 319.983C125.088 319.983 114.05 329.331 114.05 342.237C114.05 349.952 122.538 369.91 133.734 385.719C142.125 397.438 153.125 407.751 167.375 417.25L179.578 425.375L179.812 410.719C179.875 407.157 182.688 404.376 186.234 404.376H200.781C204.437 404.376 207.312 407.251 207.312 410.938V436.469L213.062 438.157C235.406 444.688 260.625 448 288 448S340.594 444.688 362.938 438.157L368.688 436.469V410.938C368.688 407.251 371.563 404.376 375.219 404.376H389.766C393.266 404.376 396.078 407.157 396.188 410.719L396.625 425L408.578 417.157C422.516 408.001 433.999 397.251 442.719 385.157C453.255 370.358 461.953 350.103 461.953 342.227C461.953 329.234 450.895 319.973 439.465 319.973ZM445.562 344.376C434.817 375.518 418.628 389.714 408.109 397.876C404.047 392.094 397.359 388.376 389.766 388.376H375.219C362.797 388.376 352.687 398.501 352.687 410.938V424.375C333.234 429.438 310.617 431.969 288 431.969S242.766 429.438 223.312 424.375V410.938C223.312 398.501 213.203 388.376 200.781 388.376H186.234C178.703 388.376 171.984 392.188 167.906 397.969C138.044 374.858 130.034 343.035 130.034 342.198C130.034 338.719 133.415 335.964 136.565 335.964C142.042 335.964 173.067 361.045 236.391 372.157V381.844C236.391 394.282 246.5 404.376 258.922 404.376H273.469C285.891 404.376 296 394.282 296 381.844V376.813C384.923 374.412 433.02 335.984 439.428 335.984C441.913 335.984 445.968 338.077 445.968 342.175C445.968 342.835 445.854 343.559 445.578 344.345L445.562 344.376ZM248 104.002C251.094 104.002 254.047 102.19 255.344 99.158L288.922 21.061C290.08 18.198 293.018 15.983 296.344 15.983C297.514 15.983 298.732 16.257 299.938 16.874L339.547 36.624C342.297 37.999 344 40.717 344 43.717V96.002C344 100.408 347.578 104.002 352 104.002S360 100.408 360 96.002V43.717C360 34.624 354.906 26.405 346.688 22.311L307.156 2.589C305.158 1.563 301.4 0 296.362 0C286.251 0 277.607 6.304 274.156 14.932L240.656 92.846C240.211 93.879 240.001 94.952 240.001 96.007C240.001 99.485 242.756 104.002 248 104.002ZM432.201 130.243C410.154 130.243 392.558 138.212 388.186 141.646C359.586 127.338 326.139 120.002 288 120.002S216.414 127.338 187.814 141.646C183.47 138.234 165.821 130.256 143.766 130.256C59.186 130.256 0 246.351 0 319.751C0 407.684 67.071 511.995 155.314 511.995C179.136 511.995 202.99 505.074 222.578 491.156C240.891 504.969 262.859 511.938 288 511.938C313.094 511.938 335.109 504.938 353.516 491.156C373.078 505.063 396.922 512 420.75 512C508.36 512 576 408.349 576 319.751C576 250.354 518.122 130.243 432.201 130.243ZM420.782 495.775C376.333 495.775 360.904 473.031 353.4 473.031C345.324 473.031 332.8 495.938 288 495.938C243.206 495.938 230.842 473.054 222.713 473.054C215.242 473.054 199.456 495.741 155.318 495.741C77.864 495.741 16 400.855 16 319.751C16 235.146 81.561 146.919 142.677 146.919C151.906 146.919 161.215 148.519 170.256 151.697C156.28 160.839 136.004 177.549 136.004 183.989C136.004 188.983 140.141 191.982 144.025 191.982C153.617 191.982 184.169 135.998 288 135.998C391.939 135.998 422.282 191.99 432 191.99C436.436 191.99 439.996 188.399 439.996 183.989C439.996 177.713 420.274 161.2 405.744 151.697C414.782 148.519 424.089 146.92 433.316 146.92C494.872 146.92 560 235.848 560 319.751C560 399.714 499.124 495.775 420.782 495.775ZM167.969 296.001H241.953C252.304 296.001 255.94 287.764 255.94 282.16C255.94 279.7 255.362 277.165 254.156 274.814L216.734 214.252C213.672 210.227 208.977 207.999 204.363 207.999C201.324 207.999 195.466 209.49 192.75 214.877L155.75 274.814L155.516 275.22C154.419 277.25 153.874 279.611 153.874 281.981C153.874 289.215 158.972 296.001 167.969 296.001ZM204.969 225.501L239.359 280.001H171.344L204.969 225.501ZM331.031 296.001H405.016C415.309 296.001 419.009 287.775 419.009 282.149C419.009 279.699 418.434 277.169 417.234 274.814L379.812 214.252C376.808 210.246 372.227 207.993 367.534 207.993C364.456 207.993 358.581 209.431 355.812 214.877L318.828 274.814L318.609 275.189C317.498 277.233 316.946 279.611 316.946 281.999C316.946 289.298 322.113 296.001 331.031 296.001ZM368.031 225.501L402.422 280.001H334.422L368.031 225.501Z" />
        </Icon>
    </>
}