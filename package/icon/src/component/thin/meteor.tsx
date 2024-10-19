
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `meteor` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/meteor?s=thin meteor}
 * @preview ![meteor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDcuMjM0IDQuNzE5QzUwNC4xNTQgMS42MzcgNTAwLjA4NyAwIDQ5NS44OTQgMEM0OTQuMzAyIDAgNDkyLjY5MSAwLjIzOCA0OTEuMTA5IDAuNzE5QzQ1Mi4zNTcgMTIuMjE5IDM3OS4zNTUgMzQuOTY5IDMwMy40NzggNjEuOTczQzMwMS4zNTMgNTQuOTczIDI5OS40NzggNDguNDczIDI5Ny44NTMgNDMuMzQ4QzI5Ni40NzggMzguODQ0IDI5My4xMDMgMzUuMDk0IDI4OC42MDMgMzMuMjE5QzI4Ni42NDYgMzIuMzc5IDI4NC41NjYgMzEuOTY5IDI4Mi40ODQgMzEuOTY5QzI3OS45MDggMzEuOTY5IDI3Ny4zMjggMzIuNjAyIDI3NC45NzggMzMuODQ0QzIzMi40NzYgNTUuOTczIDEyMi4wOTcgMTE2LjQ3NyA2MC41OTUgMTc2LjM1OUM1OS40NyAxNzcuMzU5IDU4LjA5NSAxNzguMzU5IDU3LjA5NSAxNzkuMzU5Qy0xOS4wMzIgMjU1LjQ5MiAtMTkuMDMyIDM3OC44NzkgNTcuMDk1IDQ1NS4wMTJDOTUuMTQ2IDQ5MyAxNDQuOTkyIDUxMiAxOTQuODM1IDUxMkMyNDQuNzE0IDUxMiAyOTQuNTg5IDQ5Mi45NjUgMzMyLjYwMyA0NTQuODg3QzMzMy42MDUgNDUzLjg4NyAzMzQuNjA1IDQ1Mi41MTIgMzM1LjYwNSA0NTEuMzg3QzM5NS40OCAzODkuNzU0IDQ1NS45ODIgMjc5LjI0MiA0NzguMTA5IDIzNi45ODhDNDgwLjM1OSAyMzIuNzM4IDQ4MC42MDkgMjI3LjczOCA0NzguNzM0IDIyMy4yMzhDNDc2Ljk4NCAyMTguODYzIDQ3My4yMzQgMjE1LjQ4OCA0NjguNjA5IDIxNC4xMTNDNDYzLjM1OSAyMTIuNDg4IDQ1Ni45ODIgMjEwLjYxMyA0NDkuOTgyIDIwOC40ODhDNDc2Ljk4NCAxMzIuNDggNDk5LjczNCA1OS40NzMgNTExLjM1OSAyMC43MTlDNTEyLjk4NCAxNS4wOTQgNTExLjQ4NCA4Ljg0NCA1MDcuMjM0IDQuNzE5Wk00MzQuOTA2IDIwMy4xMzNMNDI5LjI5NCAyMTguOTNMNDYzLjkzMyAyMjkuNTY2QzM4NC42MDMgMzgxLjA3NyAzMjkuOTA5IDQzMy4yNzkgMzIxLjI4MSA0NDMuNTgyQzI4Ny41MzUgNDc3LjM4MyAyNDIuNjMgNDk2IDE5NC44MzUgNDk2QzE0Ny4wODkgNDk2IDEwMi4xODcgNDc3LjQyMiA2OC40MSA0NDMuNjk5Qy0xLjM0NCAzNzMuOTM4IC0xLjM0NCAyNjAuNDM0IDY5LjI4NSAxODkuOTUzQzcyLjg0NyAxODYuODg2IDEzMy4xNSAxMjQuODE3IDI4Mi42MDEgNDguMTg0QzI4My41NjggNTEuMjM0IDI5My4wNDIgODIuNjY4IDI5My4wNDIgODIuNjY4TDMwOC44NDMgNzcuMDQ3QzM5NS45MTYgNDYuMDU5IDQ3My44NDkgMjIuNTMxIDQ5NS43NzcgMTYuMDIzQzQ5NS44NDMgMTYuMDA0IDQ5NS44OCAxNiA0OTUuODk0IDE2TDQ5Ni4wMzUgMTYuMTIxQzQ4Ny4zNzYgNDQuOTggNDY0LjA4OSAxMjAuOTc3IDQzNC45MDYgMjAzLjEzM1pNMTkxLjk3NCAxOTEuOTg0QzEyMS4yMjIgMTkxLjk4NCA2My45NyAyNDkuMzY3IDYzLjk3IDMxOS45OTZDNjMuOTcgMzkwLjc1NCAxMjEuMjIyIDQ0OC4wMDggMTkxLjk3NCA0NDguMDA4QzI2Mi42MDEgNDQ4LjAwOCAzMTkuOTc4IDM5MC43NTQgMzE5Ljk3OCAzMTkuOTk2QzMxOS45NzggMjQ5LjM2NyAyNjIuNjAxIDE5MS45ODQgMTkxLjk3NCAxOTEuOTg0Wk0xOTEuOTc0IDQzMi4wMDhDMTMwLjIxNiA0MzIuMDA4IDc5Ljk3IDM4MS43NTggNzkuOTcgMzE5Ljk5NlMxMzAuMjE2IDIwNy45ODQgMTkxLjk3NCAyMDcuOTg0QzI1My43MzQgMjA3Ljk4NCAzMDMuOTc4IDI1OC4yMzQgMzAzLjk3OCAzMTkuOTk2UzI1My43MzQgNDMyLjAwOCAxOTEuOTc0IDQzMi4wMDhaTTE4Mi41OTkgMjY1LjM2N0MxNzYuNTk5IDI1OS4zNjcgMTY4LjQ3NCAyNTUuOTkyIDE1OS45NzQgMjU1Ljk5MkMxNDIuMjIyIDI1NS45OTIgMTI3Ljk3MiAyNzAuMzY3IDEyNy45NzIgMjg3Ljk5NkMxMjcuOTcyIDMwNS42MjEgMTQyLjIyMiAzMTkuOTk2IDE1OS45NzQgMzE5Ljk5NkMxNzcuNTk5IDMxOS45OTYgMTkxLjk3NCAzMDUuNjIxIDE5MS45NzQgMjg3Ljk5NkMxOTEuOTc0IDI3OS40OTIgMTg4LjU5OSAyNzEuMzY3IDE4Mi41OTkgMjY1LjM2N1pNMTU5Ljk3NCAzMDMuOTk2QzE1MS4xNSAzMDMuOTk2IDE0My45NzIgMjk2LjgyIDE0My45NzIgMjg3Ljk5NlMxNTEuMTUgMjcxLjk5MiAxNTkuOTc0IDI3MS45OTJDMTY0LjI0NiAyNzEuOTkyIDE2OC4yNjMgMjczLjY1NiAxNzEuMjg3IDI3Ni42OFMxNzUuOTc0IDI4My43MjMgMTc1Ljk3NCAyODcuOTk2QzE3NS45NzQgMjk2LjgyIDE2OC43OTYgMzAzLjk5NiAxNTkuOTc0IDMwMy45OTZaTTIwNy45NzYgMzUyQzE5OS4wOTkgMzUyIDE5MS45NzQgMzU5LjEyNSAxOTEuOTc0IDM2OFMxOTkuMDk5IDM4NC4wMDQgMjA3Ljk3NiAzODQuMDA0QzIxNi43MjYgMzg0LjAwNCAyMjMuOTc2IDM3Ni44NzUgMjIzLjk3NiAzNjhTMjE2LjcyNiAzNTIgMjA3Ljk3NiAzNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Meteor(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M507.234 4.719C504.154 1.637 500.087 0 495.894 0C494.302 0 492.691 0.238 491.109 0.719C452.357 12.219 379.355 34.969 303.478 61.973C301.353 54.973 299.478 48.473 297.853 43.348C296.478 38.844 293.103 35.094 288.603 33.219C286.646 32.379 284.566 31.969 282.484 31.969C279.908 31.969 277.328 32.602 274.978 33.844C232.476 55.973 122.097 116.477 60.595 176.359C59.47 177.359 58.095 178.359 57.095 179.359C-19.032 255.492 -19.032 378.879 57.095 455.012C95.146 493 144.992 512 194.835 512C244.714 512 294.589 492.965 332.603 454.887C333.605 453.887 334.605 452.512 335.605 451.387C395.48 389.754 455.982 279.242 478.109 236.988C480.359 232.738 480.609 227.738 478.734 223.238C476.984 218.863 473.234 215.488 468.609 214.113C463.359 212.488 456.982 210.613 449.982 208.488C476.984 132.48 499.734 59.473 511.359 20.719C512.984 15.094 511.484 8.844 507.234 4.719ZM434.906 203.133L429.294 218.93L463.933 229.566C384.603 381.077 329.909 433.279 321.281 443.582C287.535 477.383 242.63 496 194.835 496C147.089 496 102.187 477.422 68.41 443.699C-1.344 373.938 -1.344 260.434 69.285 189.953C72.847 186.886 133.15 124.817 282.601 48.184C283.568 51.234 293.042 82.668 293.042 82.668L308.843 77.047C395.916 46.059 473.849 22.531 495.777 16.023C495.843 16.004 495.88 16 495.894 16L496.035 16.121C487.376 44.98 464.089 120.977 434.906 203.133ZM191.974 191.984C121.222 191.984 63.97 249.367 63.97 319.996C63.97 390.754 121.222 448.008 191.974 448.008C262.601 448.008 319.978 390.754 319.978 319.996C319.978 249.367 262.601 191.984 191.974 191.984ZM191.974 432.008C130.216 432.008 79.97 381.758 79.97 319.996S130.216 207.984 191.974 207.984C253.734 207.984 303.978 258.234 303.978 319.996S253.734 432.008 191.974 432.008ZM182.599 265.367C176.599 259.367 168.474 255.992 159.974 255.992C142.222 255.992 127.972 270.367 127.972 287.996C127.972 305.621 142.222 319.996 159.974 319.996C177.599 319.996 191.974 305.621 191.974 287.996C191.974 279.492 188.599 271.367 182.599 265.367ZM159.974 303.996C151.15 303.996 143.972 296.82 143.972 287.996S151.15 271.992 159.974 271.992C164.246 271.992 168.263 273.656 171.287 276.68S175.974 283.723 175.974 287.996C175.974 296.82 168.796 303.996 159.974 303.996ZM207.976 352C199.099 352 191.974 359.125 191.974 368S199.099 384.004 207.976 384.004C216.726 384.004 223.976 376.875 223.976 368S216.726 352 207.976 352Z" />
        </Icon>
    </>
}