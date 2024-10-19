
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-shield` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-shield?s=thin user-shield}
 * @preview ![user-shield](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMjU2QzI5NC42OTUgMjU2IDM1MiAxOTguNjkxIDM1MiAxMjhTMjk0LjY5NSAwIDIyNCAwQzE1My4zMTIgMCA5NiA1Ny4zMDkgOTYgMTI4UzE1My4zMTIgMjU2IDIyNCAyNTZaTTIyNCAxNkMyODUuNzU4IDE2IDMzNiA2Ni4yNDIgMzM2IDEyOFMyODUuNzU4IDI0MCAyMjQgMjQwUzExMiAxODkuNzU4IDExMiAxMjhTMTYyLjI0MiAxNiAyMjQgMTZaTTM4NCA0OTZINDEuNDM4QzI3LjQwNiA0OTYgMTYgNDg1LjIxOSAxNiA0NzJDMTYgMzg4LjE4OCA4Ny40MDYgMzIwIDE3NS4xNTYgMzIwSDI3Mi44NDRDMjg4LjE4OCAzMjAgMzAzLjM0NCAzMjIuMDYyIDMxNy44MTIgMzI2LjE1NkMzMjIuMTU2IDMyNy40MDYgMzI2LjUzMSAzMjQuODc1IDMyNy42ODggMzIwLjY1NkMzMjguOTA2IDMxNi40MDYgMzI2LjQzOCAzMTEuOTY5IDMyMi4xODggMzEwLjc4MUMzMDYuMjgxIDMwNi4yODEgMjg5LjY1NiAzMDQgMjcyLjg0NCAzMDRIMTc1LjE1NkM3OC41NjIgMzA0IDAgMzc5LjM3NSAwIDQ3MkMwIDQ5NC4wNjIgMTguNTk0IDUxMiA0MS40MzggNTEySDM4NEMzODguNDA2IDUxMiAzOTIgNTA4LjQwNiAzOTIgNTA0UzM4OC40MDYgNDk2IDM4NCA0OTZaTTYyMi4yNSAyNzEuMTA0TDUwNy4xMjUgMjI2LjA5MkM1MDQuNjk1IDIyNS4xMzEgNTAwLjc0NCAyMjQgNDk1Ljk0MSAyMjRDNDkyLjU5MiAyMjQgNDg4LjgyOCAyMjQuNTQ5IDQ4NC44NzUgMjI2LjA5MkwzNjkuNzUgMjcxLjEwNEMzNTkgMjc1LjIyOSAzNTIgMjg1LjEwNCAzNTIgMjk1Ljk4NkMzNTIgNDA3LjYzNSA0MjAuNzUgNDg0Ljc4MyA0ODQuODc1IDUwOS45MTJDNDg4LjgyNiA1MTEuNDUxIDQ5Mi41NjggNTEyIDQ5NS45IDUxMkM1MDAuNjg0IDUxMiA1MDQuNjE5IDUxMC44NjkgNTA3LjEyNSA1MDkuOTEyQzU1OC4zNzUgNDg5LjkwOCA2NDAgNDIwLjUxNCA2NDAgMjk1Ljk4NkM2NDAgMjg1LjEwNCA2MzMgMjc1LjIyOSA2MjIuMjUgMjcxLjEwNFpNNDg4IDQ5My42NzhDNDI5LjY3OCA0NjkuNDA0IDM2OCAzOTguMTExIDM2OCAyOTUuOTg2QzM2OCAyOTEuNjg4IDM3MC45MzggMjg3Ljc4NSAzNzUuNTc2IDI4Ni4wMDRMNDg4IDI0Mi4wNDlWNDkzLjY3OFpNNTA0IDQ5My44MzhWMjQyLjA0OUw2MTYuNTE4IDI4Ni4wNDFDNjIxLjA2MiAyODcuNzg1IDYyNCAyOTEuNjg4IDYyNCAyOTUuOTg2QzYyNCA0MTMuMjE3IDU0Ni45MDggNDc1Ljg2OSA1MDQgNDkzLjgzOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UserShield(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM224 16C285.758 16 336 66.242 336 128S285.758 240 224 240S112 189.758 112 128S162.242 16 224 16ZM384 496H41.438C27.406 496 16 485.219 16 472C16 388.188 87.406 320 175.156 320H272.844C288.188 320 303.344 322.062 317.812 326.156C322.156 327.406 326.531 324.875 327.688 320.656C328.906 316.406 326.438 311.969 322.188 310.781C306.281 306.281 289.656 304 272.844 304H175.156C78.562 304 0 379.375 0 472C0 494.062 18.594 512 41.438 512H384C388.406 512 392 508.406 392 504S388.406 496 384 496ZM622.25 271.104L507.125 226.092C504.695 225.131 500.744 224 495.941 224C492.592 224 488.828 224.549 484.875 226.092L369.75 271.104C359 275.229 352 285.104 352 295.986C352 407.635 420.75 484.783 484.875 509.912C488.826 511.451 492.568 512 495.9 512C500.684 512 504.619 510.869 507.125 509.912C558.375 489.908 640 420.514 640 295.986C640 285.104 633 275.229 622.25 271.104ZM488 493.678C429.678 469.404 368 398.111 368 295.986C368 291.688 370.938 287.785 375.576 286.004L488 242.049V493.678ZM504 493.838V242.049L616.518 286.041C621.062 287.785 624 291.688 624 295.986C624 413.217 546.908 475.869 504 493.838Z" />
        </Icon>
    </>
}