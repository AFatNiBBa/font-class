
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `left-right` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/left-right?s=solid left-right}
 * @preview ![left-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDMuOTkyIDI3My41OTJMMzkxLjk5MiAzNzcuNTkyQzM4NS4wMDggMzg0LjA3NiAzNzQuODIgMzg1LjgxMSAzNjYuMDcgMzgxLjk5OFMzNTEuNjY0IDM2OS41NDUgMzUxLjY2NCAzNTkuOTk4VjMwMy45OThIMTU5LjY2NFYzNjBDMTU5LjY2NCAzNjkuNTQ3IDE1NC4wMDggMzc4LjE4OCAxNDUuMjU4IDM4MkMxMzYuNTA4IDM4NS44MTIgMTI2LjMyIDM4NC4wNzggMTE5LjMzNiAzNzcuNTk0TDcuMzM2IDI3My41OTRDLTIuNDQ1IDI2NC41IC0yLjQ0NSAyNDcuNSA3LjMzNiAyMzguNDA2TDExOS4zMzYgMTM0LjQwNkMxMjYuMzIgMTI3LjkyMiAxMzYuNTA4IDEyNi4xODcgMTQ1LjI1OCAxMzBDMTU0LjAwOCAxMzMuODEyIDE1OS42NjQgMTQyLjQ1MyAxNTkuNjY0IDE1MlYyMDcuOTk4SDM1MS42NjRWMTUxLjk5OEMzNTEuNjY0IDE0Mi40NTEgMzU3LjMyIDEzMy44MTEgMzY2LjA3IDEyOS45OThTMzg1LjAwOCAxMjcuOTIgMzkxLjk5MiAxMzQuNDA0TDUwMy45OTIgMjM4LjQwNEM1MTMuNzczIDI0Ny40OTggNTEzLjc3MyAyNjQuNDk4IDUwMy45OTIgMjczLjU5MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LeftRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M503.992 273.592L391.992 377.592C385.008 384.076 374.82 385.811 366.07 381.998S351.664 369.545 351.664 359.998V303.998H159.664V360C159.664 369.547 154.008 378.188 145.258 382C136.508 385.812 126.32 384.078 119.336 377.594L7.336 273.594C-2.445 264.5 -2.445 247.5 7.336 238.406L119.336 134.406C126.32 127.922 136.508 126.187 145.258 130C154.008 133.812 159.664 142.453 159.664 152V207.998H351.664V151.998C351.664 142.451 357.32 133.811 366.07 129.998S385.008 127.92 391.992 134.404L503.992 238.404C513.773 247.498 513.773 264.498 503.992 273.592Z" />
        </Icon>
    </>
}