
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `face-kiss-wink-heart` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-kiss-wink-heart?s=light face-kiss-wink-heart}
 * @preview ![face-kiss-wink-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDguMzU5IDQwNC45NTNDNDk4LjYwOSAzNzkuMjAzIDQ3MS45MzggMzY4LjA2MyA0NDguOTM4IDM3MC42ODhDNDM5LjA2MiAzNDcuMTA5IDQxNC43NjYgMzMyLjc5NyAzODkuNTE2IDMzNi42MjVDMzc0LjI2NiAzMzkgMzYwLjc4MSAzNDcuNjg4IDM1Mi41MzEgMzYwLjQ2OUMzNDQuMjk3IDM3My4yMDMgMzQxLjg5MSAzODguOTM4IDM0NS45MzggNDAzLjY3MkwzNjYuNjQxIDQ3OC4xODhDMzcwLjEyNSA0ODkuMDk0IDM4MC4wNjMgNDk2LjA2MyAzOTAuNjU2IDQ5Ni4wNjNDMzkyLjc4MSA0OTYuMDYzIDM5NC45NTMgNDk1Ljc4MSAzOTcuMDk0IDQ5NS4xODhMNDcxLjY3MiA0NzYuMDQ3TDQ3MS43MTkgNDc2LjAzMUM0ODYuNjU2IDQ3Mi4xNDEgNDk5LjIwMyA0NjIuMTI1IDUwNi4xNTYgNDQ4LjU0N0M1MTMuMDYyIDQzNS4wOTQgNTEzLjg0NCA0MTkuMTU2IDUwOC4zNTkgNDA0Ljk1M1pNNDc3LjY4OCA0MzMuOTY5QzQ3NC44NDQgNDM5LjUgNDY5Ljg1OSA0NDMuNDM3IDQ2My42NTYgNDQ1LjA2MkwzOTUuNSA0NjIuNTYyTDM3Ni43ODEgMzk1LjE0MUMzNzUuMTQxIDM4OS4xNTYgMzc2LjA2MyAzODMgMzc5LjQwNiAzNzcuODQ0QzM4Mi43NjYgMzcyLjY0MSAzODguMTA5IDM2OS4yMzQgMzk0LjQyMiAzNjguMjVDMzk1LjU0NyAzNjguMDc4IDM5Ni42NTYgMzY4IDM5Ny43NSAzNjhDNDA4LjkwNiAzNjggNDE3LjkwNiAzNzYuNzgxIDQyMC41MzEgMzg2LjI4MUw0MjYuODc1IDQwOC44NTlMNDQ5LjcxOSA0MDNDNDU4LjY4OCA0MDAuNjU2IDQ3My41NDcgNDAzLjM0NCA0NzguNDY5IDQxNi4zNzVDNDgwLjc1IDQyMi4yODEgNDgwLjQ2OSA0MjguNTMxIDQ3Ny42ODggNDMzLjk2OVpNMzExLjk0NSAzMDhDMzExLjk0NSAyODguNzUgMjgzLjI0NiAyNjYuNSAyNDAuNSAyNjRDMjM2Ljc0NiAyNjMuNjI1IDIzMy4xMTMgMjY2LjM3NSAyMzIuMjY2IDI3MC4yNUMyMzEuNDE4IDI3NCAyMzMuMzU1IDI3Ny44NzUgMjM2Ljk4OCAyNzkuMzc1TDI1My45NDEgMjg2LjYyNUMyNjYuODk4IDI5Mi4xMjUgMjc0LjY0OCAzMDAuMTI1IDI3NC42NDggMzA4LjEyNVMyNjYuODk4IDMyNC4xMjUgMjUzLjk0MSAzMjkuNjI1TDIzNi45ODggMzM2Ljc1QzIzMS4yOTcgMzM5LjI1IDIzMS4wNTUgMzQ5IDIzNi45ODggMzUxLjYyNUwyNTMuOTQxIDM1OC43NUMyNjYuODk4IDM2NC4yNSAyNzQuNjQ4IDM3Mi4yNSAyNzQuNjQ4IDM4MC4yNVMyNjYuODk4IDM5Ni4yNSAyNTMuOTQxIDQwMS43NUwyMzYuOTg4IDQwOUMyMzMuMzU1IDQxMC41IDIzMS40MTggNDE0LjM3NSAyMzIuMjY2IDQxOC4yNUMyMzMuMTEzIDQyMS43NSAyMzYuMzgzIDQyNC4zNzUgMjQwLjEzNyA0MjQuMzc1SDI0MC42MjFDMjgzLjM2NyA0MjEuODc1IDMxMi4wNjYgMzk5LjYyNSAzMTIuMDY2IDM4MC4zNzVDMzEyLjA2NiAzNjcuMzc1IDI5OC43NDYgMzUzLjEyNSAyNzYuOTQ5IDM0NC4zNzVDMjk4LjYyNSAzMzUuMjUgMzExLjk0NSAzMjEgMzExLjk0NSAzMDhaTTM2Ni4xODggMjI5LjMyMkMzNjguNTMxIDIzNS45IDM3NC42ODggMjM5Ljk5NCAzODEuMjgxIDIzOS45OTRDMzgzLjA2MyAyMzkuOTk0IDM4NC44NDQgMjM5LjY5NyAzODYuNjI1IDIzOS4wNzJDMzk0LjkzOCAyMzYuMTM1IDM5OS4zMTMgMjI2Ljk5NCAzOTYuMzc1IDIxOC42NjZDMzg3LjM0NCAxOTMuMTM1IDM2My4wOTQgMTc1Ljk5MiAzMzYgMTc1Ljk5MlMyODQuNjU2IDE5My4xMzUgMjc1LjYyNSAyMTguNjY2QzI3Mi42ODcgMjI2Ljk5NCAyNzcuMDYyIDIzNi4xMzUgMjg1LjM3NSAyMzkuMDcyQzI5My43ODEgMjQyLjAyNSAzMDIuODQ0IDIzNy42OTcgMzA1LjgxMiAyMjkuMzIyQzMxMC4zMTIgMjE2LjU3MiAzMjIuNDM4IDIwNy45OTQgMzM2IDIwNy45OTRTMzYxLjY4OCAyMTYuNTcyIDM2Ni4xODggMjI5LjMyMlpNMTUyIDIwOEMxNTIgMjIxLjMxMiAxNjIuNzA3IDIzMiAxNzUuOTU1IDIzMkMxODkuMjkzIDIzMiAyMDAgMjIxLjMxMiAyMDAgMjA4UzE4OS4yOTMgMTg0IDE3NS45NTUgMTg0QzE2Mi43MDcgMTg0IDE1MiAxOTQuNjg4IDE1MiAyMDhaTTMxNS40MjIgNDU1LjM5MUMyOTYuMjUgNDYxLjEwOSAyNzYuMjY2IDQ2NCAyNTYgNDY0QzE0MS4zMTIgNDY0IDQ4IDM3MC42ODggNDggMjU2UzE0MS4zMTIgNDggMjU2IDQ4UzQ2NCAxNDEuMzEyIDQ2NCAyNTZDNDY0IDI3Ni4yNjYgNDYxLjEwOSAyOTYuMjUgNDU1LjM5MSAzMTUuNDIyQzQ1Mi44NTkgMzIzLjg5MSA0NTcuNjcyIDMzMi44MTIgNDY2LjE0MSAzMzUuMzI4QzQ3NC43NjYgMzM3Ljg1OSA0ODMuNTQ3IDMzMy4wMzEgNDg2LjA0NyAzMjQuNTc4QzQ5Mi42NTYgMzAyLjQzOCA0OTYgMjc5LjM1OSA0OTYgMjU2QzQ5NiAxMjMuNjU2IDM4OC4zNDQgMTYgMjU2IDE2UzE2IDEyMy42NTYgMTYgMjU2UzEyMy42NTYgNDk2IDI1NiA0OTZDMjc5LjM1OSA0OTYgMzAyLjQzOCA0OTIuNjU2IDMyNC41NzggNDg2LjA0N0MzMzMuMDQ3IDQ4My41MzEgMzM3Ljg1OSA0NzQuNjA5IDMzNS4zMjggNDY2LjE0MUMzMzIuODEyIDQ1Ny43MDMgMzI0LjAzMSA0NTIuODEyIDMxNS40MjIgNDU1LjM5MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FaceKissWinkHeart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M508.359 404.953C498.609 379.203 471.938 368.063 448.938 370.688C439.062 347.109 414.766 332.797 389.516 336.625C374.266 339 360.781 347.688 352.531 360.469C344.297 373.203 341.891 388.938 345.938 403.672L366.641 478.188C370.125 489.094 380.063 496.063 390.656 496.063C392.781 496.063 394.953 495.781 397.094 495.188L471.672 476.047L471.719 476.031C486.656 472.141 499.203 462.125 506.156 448.547C513.062 435.094 513.844 419.156 508.359 404.953ZM477.688 433.969C474.844 439.5 469.859 443.437 463.656 445.062L395.5 462.562L376.781 395.141C375.141 389.156 376.063 383 379.406 377.844C382.766 372.641 388.109 369.234 394.422 368.25C395.547 368.078 396.656 368 397.75 368C408.906 368 417.906 376.781 420.531 386.281L426.875 408.859L449.719 403C458.688 400.656 473.547 403.344 478.469 416.375C480.75 422.281 480.469 428.531 477.688 433.969ZM311.945 308C311.945 288.75 283.246 266.5 240.5 264C236.746 263.625 233.113 266.375 232.266 270.25C231.418 274 233.355 277.875 236.988 279.375L253.941 286.625C266.898 292.125 274.648 300.125 274.648 308.125S266.898 324.125 253.941 329.625L236.988 336.75C231.297 339.25 231.055 349 236.988 351.625L253.941 358.75C266.898 364.25 274.648 372.25 274.648 380.25S266.898 396.25 253.941 401.75L236.988 409C233.355 410.5 231.418 414.375 232.266 418.25C233.113 421.75 236.383 424.375 240.137 424.375H240.621C283.367 421.875 312.066 399.625 312.066 380.375C312.066 367.375 298.746 353.125 276.949 344.375C298.625 335.25 311.945 321 311.945 308ZM366.188 229.322C368.531 235.9 374.688 239.994 381.281 239.994C383.063 239.994 384.844 239.697 386.625 239.072C394.938 236.135 399.313 226.994 396.375 218.666C387.344 193.135 363.094 175.992 336 175.992S284.656 193.135 275.625 218.666C272.687 226.994 277.062 236.135 285.375 239.072C293.781 242.025 302.844 237.697 305.812 229.322C310.312 216.572 322.438 207.994 336 207.994S361.688 216.572 366.188 229.322ZM152 208C152 221.312 162.707 232 175.955 232C189.293 232 200 221.312 200 208S189.293 184 175.955 184C162.707 184 152 194.688 152 208ZM315.422 455.391C296.25 461.109 276.266 464 256 464C141.312 464 48 370.688 48 256S141.312 48 256 48S464 141.312 464 256C464 276.266 461.109 296.25 455.391 315.422C452.859 323.891 457.672 332.812 466.141 335.328C474.766 337.859 483.547 333.031 486.047 324.578C492.656 302.438 496 279.359 496 256C496 123.656 388.344 16 256 16S16 123.656 16 256S123.656 496 256 496C279.359 496 302.438 492.656 324.578 486.047C333.047 483.531 337.859 474.609 335.328 466.141C332.812 457.703 324.031 452.812 315.422 455.391Z" />
        </Icon>
    </>
}