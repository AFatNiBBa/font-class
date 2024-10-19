
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `satellite-dish` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/satellite-dish?s=thin satellite-dish}
 * @preview ![satellite-dish](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODQuMTg3IDMzOS40NzlMMjA4LjMwMiAzMTUuMzM4QzIxMy4wNDcgMzE4LjEyNSAyMTguMjY1IDMyMC4xNTYgMjI0LjE2NiAzMjAuMTU2QzI0MS44MjggMzIwLjE1NiAyNTYuMTQ2IDMwNS44MiAyNTYuMTQ2IDI4OC4xNDFDMjU2LjE0NiAyNzAuNDU5IDI0MS44MjggMjU2LjEyNSAyMjQuMTY2IDI1Ni4xMjVDMjA2LjUwMiAyNTYuMTI1IDE5Mi4xODMgMjcwLjQ1OSAxOTIuMTgzIDI4OC4xNDFDMTkyLjE4MyAyOTQuMDQ3IDE5NC4yMTMgMjk5LjI3MSAxOTYuOTk4IDMwNC4wMkwxNzIuODgzIDMyOC4xNkw1OS43MjggMjE0Ljg4N0M1NC42MzggMjA5Ljc1OCA0Ny4yMDUgMjA3LjM4MyA0MC4wMjEgMjA4LjQxNEMzMy4wMjUgMjA5LjQ0NSAyNy4xNTQgMjEzLjQ3OSAyMy44NDMgMjE5LjU0NUMtMTcuODUyIDI5Ny40MjYgLTMuOTUzIDM5MS42NiA1OC40MTYgNDU0LjA2NkM5Ni4zNjMgNDkyLjA1MyAxNDcuNjE1IDUxMiAxOTkuMzM2IDUxMkMyMzEuMzE4IDUxMiAyNjMuNDg2IDUwNC4zNzEgMjkyLjc1MiA0ODguNjQ1QzI5OC44NzMgNDg1LjI5OSAzMDIuOTMzIDQ3OS4zMjggMzAzLjkgNDcyLjI5M0MzMDQuOSA0NjUuMDcgMzAyLjQzMyA0NTcuNzU0IDI5Ny4zNDIgNDUyLjc1MkwxODQuMTg3IDMzOS40NzlaTTIyNC4xNjYgMjcyLjEzM0MyMzIuOTgyIDI3Mi4xMzMgMjQwLjE1NiAyNzkuMzE0IDI0MC4xNTYgMjg4LjE0MVMyMzIuOTgyIDMwNC4xNDggMjI0LjE2NiAzMDQuMTQ4QzIxNS4zNDcgMzA0LjE0OCAyMDguMTc0IDI5Ni45NjcgMjA4LjE3NCAyODguMTQxUzIxNS4zNDcgMjcyLjEzMyAyMjQuMTY2IDI3Mi4xMzNaTTI4NS4xMzEgNDc0LjU0NUMyMTQuNzMyIDUxMi40MzggMTI2LjE5MSA0OTkuMjc1IDY5LjcyMiA0NDIuNzQ4QzEyLjM4MSAzODUuMzc1IC0wLjM5MyAyOTguNzA5IDM3LjkyNyAyMjcuMTQzQzM5LjA4NCAyMjUuMDQ3IDQxLjE3NyAyMjQuNDIyIDQyLjMzMiAyMjQuMjY2QzQyLjY3NiAyMjQuMjAzIDQzLjA1MSAyMjQuMjAzIDQzLjQyNiAyMjQuMjAzQzQ1LjI5OSAyMjQuMjAzIDQ3LjE0MiAyMjQuOTIyIDQ4LjQyMiAyMjYuMjA1TDI4Ni4wOTcgNDY0LjEzM0MyODcuNjI5IDQ2NS42MzMgMjg4LjM3OSA0NjcuODg1IDI4OC4wNjYgNDcwLjA3NEMyODcuOTEgNDcxLjIzIDI4Ny4zMTYgNDczLjM1NSAyODUuMTMxIDQ3NC41NDVaTTE5Mi4xODMgMEMxODcuNzc5IDAgMTg0LjE4NyAzLjU5NiAxODQuMTg3IDguMDA0UzE4Ny43NzkgMTYuMDA4IDE5Mi4xODMgMTYuMDA4QzM1OS43MTMgMTYuMDA4IDQ5Ni4wMDkgMTUyLjQ0OSA0OTYuMDA5IDMyMC4xNTZDNDk2LjAwOSAzMjQuNTY0IDQ5OS42MDEgMzI4LjE2IDUwNC4wMDQgMzI4LjE2QzUwOC40MDggMzI4LjE2IDUxMiAzMjQuNTY0IDUxMiAzMjAuMTU2QzUxMiAxNDMuNjMzIDM2OC41MTkgMCAxOTIuMTgzIDBaTTE5Mi4xODMgOTYuMDQ3QzE4Ny43NzkgOTYuMDQ3IDE4NC4xODcgOTkuNjQzIDE4NC4xODcgMTA0LjA1MVMxODcuNzc5IDExMi4wNTUgMTkyLjE4MyAxMTIuMDU1QzMwNi44MDQgMTEyLjA1NSA0MDAuMDY0IDIwNS40MTIgNDAwLjA2NCAzMjAuMTU2QzQwMC4wNjQgMzI0LjU2NCA0MDMuNjU2IDMyOC4xNiA0MDguMDYgMzI4LjE2QzQxMi40NjMgMzI4LjE2IDQxNi4wNTQgMzI0LjU2NCA0MTYuMDU0IDMyMC4xNTZDNDE2LjA1NCAxOTYuNTk2IDMxNS42MTMgOTYuMDQ3IDE5Mi4xODMgOTYuMDQ3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SatelliteDish(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M184.187 339.479L208.302 315.338C213.047 318.125 218.265 320.156 224.166 320.156C241.828 320.156 256.146 305.82 256.146 288.141C256.146 270.459 241.828 256.125 224.166 256.125C206.502 256.125 192.183 270.459 192.183 288.141C192.183 294.047 194.213 299.271 196.998 304.02L172.883 328.16L59.728 214.887C54.638 209.758 47.205 207.383 40.021 208.414C33.025 209.445 27.154 213.479 23.843 219.545C-17.852 297.426 -3.953 391.66 58.416 454.066C96.363 492.053 147.615 512 199.336 512C231.318 512 263.486 504.371 292.752 488.645C298.873 485.299 302.933 479.328 303.9 472.293C304.9 465.07 302.433 457.754 297.342 452.752L184.187 339.479ZM224.166 272.133C232.982 272.133 240.156 279.314 240.156 288.141S232.982 304.148 224.166 304.148C215.347 304.148 208.174 296.967 208.174 288.141S215.347 272.133 224.166 272.133ZM285.131 474.545C214.732 512.438 126.191 499.275 69.722 442.748C12.381 385.375 -0.393 298.709 37.927 227.143C39.084 225.047 41.177 224.422 42.332 224.266C42.676 224.203 43.051 224.203 43.426 224.203C45.299 224.203 47.142 224.922 48.422 226.205L286.097 464.133C287.629 465.633 288.379 467.885 288.066 470.074C287.91 471.23 287.316 473.355 285.131 474.545ZM192.183 0C187.779 0 184.187 3.596 184.187 8.004S187.779 16.008 192.183 16.008C359.713 16.008 496.009 152.449 496.009 320.156C496.009 324.564 499.601 328.16 504.004 328.16C508.408 328.16 512 324.564 512 320.156C512 143.633 368.519 0 192.183 0ZM192.183 96.047C187.779 96.047 184.187 99.643 184.187 104.051S187.779 112.055 192.183 112.055C306.804 112.055 400.064 205.412 400.064 320.156C400.064 324.564 403.656 328.16 408.06 328.16C412.463 328.16 416.054 324.564 416.054 320.156C416.054 196.596 315.613 96.047 192.183 96.047Z" />
        </Icon>
    </>
}