
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `khanda` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/khanda?s=solid khanda}
 * @preview ![khanda](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTUuNzI2IDY2QzQwOS40NzYgNjIuNSA0MDEuNDc1IDYzLjYyNSAzOTYuNDc1IDY5QzM5MS4zNSA3NC4zNzUgMzkwLjYgODIuMzc1IDM5NC40NzUgODguNUM0MTAuOTc2IDExNC43NSA0MTkuNzI2IDE0NC44NzUgNDE5LjcyNiAxNzZDNDE5LjQ3NiAyMjkuMjUgMzkyLjk3NSAyNzguNjI1IDM0OC40NzQgMzA4LjM3NUwyNzEuODQ3IDM2MS43NVYzNDEuNjI1TDMxNS44NDggMzA1LjVDMzE5LjcyMyAzMDEuMzc1IDMyMC44NDggMjk1LjM3NSAzMTguNzIzIDI5MC4yNUwzMTAuODQ4IDI3M0MzNDQuNzI0IDI1My43NSAzNjcuNzI0IDIxNy43NSAzNjcuNzI0IDE3NkMzNjcuNzI0IDEzNS4yNSAzNDUuNzI0IDk5Ljg3NSAzMTMuMjIzIDgwLjI1TDMxOC4zNDggNjguODc1QzMyMC43MjMgNjMuMzc1IDMxOS4zNDggNTcgMzE0Ljg0OCA1Mi44NzVMMjU1Ljg0NiAwTDE5Ni44NDQgNTIuNzVDMTkyLjM0NCA1NyAxOTAuOTY5IDYzLjM3NSAxOTMuMjE5IDY4Ljg3NUwxOTguNDcgODAuMjVDMTY1Ljk2OSA5OS44NzUgMTQzLjg0MyAxMzUuMjUgMTQzLjg0MyAxNzZDMTQzLjg0MyAyMTcuNzUgMTY2Ljk2OSAyNTMuNzUgMjAwLjg0NSAyNzNMMTkyLjk2OSAyOTAuMjVDMTkwLjg0NCAyOTUuMzc1IDE5MS44NDQgMzAxLjI1IDE5NS44NDQgMzA1LjVMMjM5Ljg0NiAzNDEuNjI1VjM2MS41TDE2My4yMTggMzA4LjEyNUMxMTguOTY3IDI3OC42MjUgOTIuNDY2IDIyOS4yNSA5Mi4yMTYgMTc2QzkyLjIxNiAxNDQuODc1IDEwMC45NjcgMTE0Ljc1IDExNy40NjcgODguNUMxMjEuMzQyIDgyLjM3NSAxMTkuODQyIDc0Ljc1IDExNC44NDIgNjkuNUMxMDkuODQyIDY0LjEyNSAxMDEuMjE3IDYzLjI1IDk0Ljg0MiA2Ni43NUMxNi4zMzkgMTA5LjYyNSAtMjIuMjg3IDIwNS4yNSAxMy4zMzkgMjk2QzIwLjMzOSAzMTQgMzEuMjE1IDMzMC4zNzUgNDMuODQgMzQ1TDk5LjcxNyA0MTAuMzc1QzEwNC41OTIgNDE2LjEyNSAxMTIuODQyIDQxNy42MjUgMTE5LjQ2NyA0MTQuMTI1TDE5OC43MiAzNzEuODc1TDIyNy45NyAzOTIuMjVMMTgwLjg0NCA0MjVDMTc5LjIxOSA0MjQuNjI1IDE3Ny43MTkgNDI0IDE3NS44NDQgNDI0QzE2Mi41OTMgNDI0IDE1MS44NDMgNDM0Ljc1IDE1MS44NDMgNDQ4UzE2Mi41OTMgNDcyIDE3NS44NDQgNDcyQzE4Ny45NjkgNDcyIDE5Ny41OTQgNDYyLjg3NSAxOTkuMjIgNDUxLjI1TDIzOS44NDYgNDIzVjQ1Mi44NzVDMjMwLjQ3IDQ1OC41IDIyMy44NDUgNDY4LjI1IDIyMy44NDUgNDgwQzIyMy44NDUgNDk3LjYyNSAyMzguMjIxIDUxMiAyNTUuODQ2IDUxMlMyODcuODQ3IDQ5Ny42MjUgMjg3Ljg0NyA0ODBDMjg3Ljg0NyA0NjguMjUgMjgxLjIyMiA0NTguNSAyNzEuODQ3IDQ1Mi44NzVWNDIyLjc1TDMxMi43MjMgNDUxLjI1QzMxNC4zNDggNDYyLjg3NSAzMjMuOTczIDQ3MiAzMzYuMDk5IDQ3MkMzNDkuMzQ5IDQ3MiAzNjAuMDk5IDQ2MS4yNSAzNjAuMDk5IDQ0OFMzNDkuMzQ5IDQyNCAzMzYuMDk5IDQyNEMzMzQuMjIzIDQyNCAzMzIuNzIzIDQyNC42MjUgMzMxLjA5OCA0MjVMMjgzLjk3MiAzOTIuMjVMMzEzLjIyMyAzNzEuODc1TDM5Mi40NzUgNDE0LjEyNUMzOTkuMSA0MTcuNjI1IDQwNy4zNTEgNDE2LjEyNSA0MTIuMjI2IDQxMC4zNzVMNDY0LjcyNyAzNDkuMTI1QzQ4My42MDMgMzI3LjEyNSA0OTguNzI4IDMwMS42MjUgNTA1Ljk3OCAyNzMuNUM1MjcuNjA0IDE4OS44NzUgNDg5LjQ3OCAxMDYuMjUgNDE1LjcyNiA2NlpNMzE5Ljg0OCAxNzZDMzE5Ljg0OCAxOTguMjUgMzA4LjM0OCAyMTcuODc1IDI5MC45NzIgMjI5LjM3NUwyODUuMzQ3IDIxN0MyNzYuNTk3IDE5Mi41IDI3Ni41OTcgMTY1Ljg3NSAyODUuMzQ3IDE0MS4zNzVMMjkzLjA5NyAxMjQuMjVDMzA5LjIyMyAxMzUuODc1IDMxOS44NDggMTU0LjYyNSAzMTkuODQ4IDE3NlpNMTkxLjg0NCAxNzZDMTkxLjg0NCAxNTQuNjI1IDIwMi40NyAxMzUuODc1IDIxOC40NyAxMjQuMjVMMjI2LjM0NSAxNDEuMzc1QzIzNS4wOTYgMTY2IDIzNS4wOTYgMTkyLjUgMjI2LjM0NSAyMTdMMjIwLjcyIDIyOS4zNzVDMjAzLjM0NSAyMTcuODc1IDE5MS44NDQgMTk4LjI1IDE5MS44NDQgMTc2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Khanda(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M415.726 66C409.476 62.5 401.475 63.625 396.475 69C391.35 74.375 390.6 82.375 394.475 88.5C410.976 114.75 419.726 144.875 419.726 176C419.476 229.25 392.975 278.625 348.474 308.375L271.847 361.75V341.625L315.848 305.5C319.723 301.375 320.848 295.375 318.723 290.25L310.848 273C344.724 253.75 367.724 217.75 367.724 176C367.724 135.25 345.724 99.875 313.223 80.25L318.348 68.875C320.723 63.375 319.348 57 314.848 52.875L255.846 0L196.844 52.75C192.344 57 190.969 63.375 193.219 68.875L198.47 80.25C165.969 99.875 143.843 135.25 143.843 176C143.843 217.75 166.969 253.75 200.845 273L192.969 290.25C190.844 295.375 191.844 301.25 195.844 305.5L239.846 341.625V361.5L163.218 308.125C118.967 278.625 92.466 229.25 92.216 176C92.216 144.875 100.967 114.75 117.467 88.5C121.342 82.375 119.842 74.75 114.842 69.5C109.842 64.125 101.217 63.25 94.842 66.75C16.339 109.625 -22.287 205.25 13.339 296C20.339 314 31.215 330.375 43.84 345L99.717 410.375C104.592 416.125 112.842 417.625 119.467 414.125L198.72 371.875L227.97 392.25L180.844 425C179.219 424.625 177.719 424 175.844 424C162.593 424 151.843 434.75 151.843 448S162.593 472 175.844 472C187.969 472 197.594 462.875 199.22 451.25L239.846 423V452.875C230.47 458.5 223.845 468.25 223.845 480C223.845 497.625 238.221 512 255.846 512S287.847 497.625 287.847 480C287.847 468.25 281.222 458.5 271.847 452.875V422.75L312.723 451.25C314.348 462.875 323.973 472 336.099 472C349.349 472 360.099 461.25 360.099 448S349.349 424 336.099 424C334.223 424 332.723 424.625 331.098 425L283.972 392.25L313.223 371.875L392.475 414.125C399.1 417.625 407.351 416.125 412.226 410.375L464.727 349.125C483.603 327.125 498.728 301.625 505.978 273.5C527.604 189.875 489.478 106.25 415.726 66ZM319.848 176C319.848 198.25 308.348 217.875 290.972 229.375L285.347 217C276.597 192.5 276.597 165.875 285.347 141.375L293.097 124.25C309.223 135.875 319.848 154.625 319.848 176ZM191.844 176C191.844 154.625 202.47 135.875 218.47 124.25L226.345 141.375C235.096 166 235.096 192.5 226.345 217L220.72 229.375C203.345 217.875 191.844 198.25 191.844 176Z" />
        </Icon>
    </>
}