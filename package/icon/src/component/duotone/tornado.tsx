
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tornado` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tornado?s=duotone tornado}
 * @preview ![tornado](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4Ny42NDIgMTk1LjkwNkMzNjUuNjQgMTcwLjU5OCAzNDguNzEgMTUxLjAzMSAzNDguNjQgMTI4SDEyLjA0NEMyMy41MjggMTY4LjQwNCA0Mi40MTkgMTk5LjM0NCA2NS4yMDYgMjI0SDQxMC45ODRDNDAzLjM5NiAyMTQuMTQ2IDM5NS40MDMgMjA0LjgzNCAzODcuNjQyIDE5NS45MDZaTTQwNy43NjcgNDIuMDk0QzQxNS4yOTggMzUuNTMxIDQxNy45ODUgMjQuOTY5IDQxNC40NTQgMTUuNTk0QzQxMC45NTQgNi4yMTkgNDAxLjk4NSAwIDM5MS45ODUgMEwyNC4xNDYgMC4wMzFDMTEuMTQ2IDAuMDMxIDAuNDg5IDEwLjQwNiAwLjE0NiAyMy40MDZDLTAuNTU5IDUwLjM1IDEuMzM3IDc0LjIyNSA0LjkzOSA5NkgzNTguOEMzNjcuODY2IDgwLjc2NiAzODMuMzU3IDYzLjM2NyA0MDcuNzY3IDQyLjA5NFpNNDMxLjY1MyAyNTZIMTAwLjQ2OEMxMjcuMDYyIDI3Ni4yNCAxNTUuNzU3IDI5MS42MjcgMTgyLjM5NCAzMDUuODQ0QzIxMC41NjggMzIwLjg3MSAyMzYuNDUyIDMzNC43MzggMjU3LjE1MyAzNTJINDQzLjg5NkM0NDYuMzU1IDM0MS4xNDMgNDQ3Ljk4IDMzMC40MzggNDQ3Ljk4NSAzMjBDNDQ3Ljk5OSAyOTUuNDM5IDQ0MS4zNDkgMjc0LjYwMiA0MzEuNjUzIDI1NlpNMzAzLjU4MSA0ODUuMzQ0QzMwMi40NTYgNDk1LjQ2OSAzMDcuODMxIDUwNS4xODggMzE3LjAxNyA1MDkuNjI1QzMyMC4zMjkgNTExLjIxOSAzMjMuODkyIDUxMiAzMjcuNDIzIDUxMkMzMzMuNjQyIDUxMiAzMzkuNzY3IDUwOS41OTQgMzQ0LjM2IDUwNUMzODguMDY2IDQ2MS40MTQgNDE3LjY3MSA0MjEuMzcxIDQzMy42OTggMzg0SDI4NS4xMzZDMzAwLjgxIDQwOC42MjcgMzA4LjYzNCA0NDAuMDQ5IDMwMy41ODEgNDg1LjM0NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzU4Ljg2MSA5Nkg1QzYuODY5IDEwNy4yOTEgOS4yNDggMTE3Ljk0NSAxMi4xMDUgMTI4SDM0OC43MDFDMzQ4LjY3IDExOC4yMTkgMzUxLjg3NSAxMDcuNzQ0IDM1OC44NjEgOTZaTTI1Ny4yMTUgMzUyQzI2OC4zNjUgMzYxLjI5OSAyNzcuNTUxIDM3MS45ODYgMjg1LjE5NyAzODRINDMzLjc2QzQzOC40MzkgMzczLjA5IDQ0MS41ODYgMzYyLjQ3NSA0NDMuOTU3IDM1MkgyNTcuMjE1Wk00MTEuMDQ1IDIyNEg2NS4yNjhDNzYuMzA3IDIzNS45NDUgODguMTQxIDI0Ni41NyAxMDAuNTI5IDI1Nkg0MzEuNzE1QzQyNS43NSAyNDQuNTU3IDQxOC42OTUgMjMzLjkzNiA0MTEuMDQ1IDIyNFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Tornado(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M387.642 195.906C365.64 170.598 348.71 151.031 348.64 128H12.044C23.528 168.404 42.419 199.344 65.206 224H410.984C403.396 214.146 395.403 204.834 387.642 195.906ZM407.767 42.094C415.298 35.531 417.985 24.969 414.454 15.594C410.954 6.219 401.985 0 391.985 0L24.146 0.031C11.146 0.031 0.489 10.406 0.146 23.406C-0.559 50.35 1.337 74.225 4.939 96H358.8C367.866 80.766 383.357 63.367 407.767 42.094ZM431.653 256H100.468C127.062 276.24 155.757 291.627 182.394 305.844C210.568 320.871 236.452 334.738 257.153 352H443.896C446.355 341.143 447.98 330.438 447.985 320C447.999 295.439 441.349 274.602 431.653 256ZM303.581 485.344C302.456 495.469 307.831 505.188 317.017 509.625C320.329 511.219 323.892 512 327.423 512C333.642 512 339.767 509.594 344.36 505C388.066 461.414 417.671 421.371 433.698 384H285.136C300.81 408.627 308.634 440.049 303.581 485.344Z" />
            <path d="M358.861 96H5C6.869 107.291 9.248 117.945 12.105 128H348.701C348.67 118.219 351.875 107.744 358.861 96ZM257.215 352C268.365 361.299 277.551 371.986 285.197 384H433.76C438.439 373.09 441.586 362.475 443.957 352H257.215ZM411.045 224H65.268C76.307 235.945 88.141 246.57 100.529 256H431.715C425.75 244.557 418.695 233.936 411.045 224Z" />
        </Icon>
    </>
}