
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `thermometer` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/thermometer?s=solid thermometer}
 * @preview ![thermometer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODMuOTg3IDE2Mi42MzRMMjI5Ljc2IDQxNS45NDZIMTI5Ljg5NEw0MC45MDMgNTA0Ljk2N0MzMS42NTMgNTE0LjM0NCAxNi40MDUgNTE0LjM0NCA3LjAzMSA1MDQuOTY3Qy0yLjM0NCA0OTUuNzE1IC0yLjM0NCA0ODAuNDYxIDcuMDMxIDQ3MS4wODRMOTYuMDIyIDM4Mi4wNjJWMjgxLjE2M0wxNDUuMDc3IDIzMS43NzJMMTk2LjY2OSAyODMuMzgyQzE5OS43OTQgMjg2LjUwOCAyMDMuODg4IDI4OC4wNzEgMjA3Ljk4MSAyODguMDcxUzIxNi4xNjggMjg2LjUwOCAyMTkuMjkyIDI4My4zODJDMjI1LjU0MiAyNzcuMTMxIDIyNS41NDIgMjY3LjAwMyAyMTkuMjkyIDI2MC43NTJMMTY3LjYyNSAyMDkuMDY3TDIwOC44NjIgMTY3LjU0OEwyNjAuNjY0IDIxOS4zNjdDMjYzLjc4OCAyMjIuNDkzIDI2Ny44ODIgMjI0LjA1NSAyNzEuOTc1IDIyNC4wNTVDMjc2LjA2OCAyMjQuMDU1IDI4MC4xNjIgMjIyLjQ5MyAyODMuMjg3IDIxOS4zNjdDMjg5LjUzNiAyMTMuMTE1IDI4OS41MzYgMjAyLjk4OCAyODMuMjg3IDE5Ni43MzZMMjMxLjQxMiAxNDQuODQ1TDI3Mi42NDkgMTAzLjMyNUwzMjQuNjU4IDE1NS4zNTFDMzI3Ljc4MiAxNTguNDc3IDMzMS44NzYgMTYwLjA0IDMzNS45NjkgMTYwLjA0QzM0MC4wNjMgMTYwLjA0IDM0NC4xNTYgMTU4LjQ3NyAzNDcuMjgxIDE1NS4zNTFDMzUzLjUzIDE0OS4xIDM1My41MyAxMzguOTcyIDM0Ny4yODEgMTMyLjcyMUwyOTUuMTk4IDgwLjYyTDM0NC44NzUgMzAuNjAzQzM4MS4yNDYgLTUuOTA2IDQzOS4yNDEgLTEwLjI4MiA0NzYuNzM4IDIwLjM1QzUyNi4yMzMgNjEuMTEgNTE4Ljg1OSAxMjcuNzUxIDQ4My45ODcgMTYyLjYzNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Thermometer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M483.987 162.634L229.76 415.946H129.894L40.903 504.967C31.653 514.344 16.405 514.344 7.031 504.967C-2.344 495.715 -2.344 480.461 7.031 471.084L96.022 382.062V281.163L145.077 231.772L196.669 283.382C199.794 286.508 203.888 288.071 207.981 288.071S216.168 286.508 219.292 283.382C225.542 277.131 225.542 267.003 219.292 260.752L167.625 209.067L208.862 167.548L260.664 219.367C263.788 222.493 267.882 224.055 271.975 224.055C276.068 224.055 280.162 222.493 283.287 219.367C289.536 213.115 289.536 202.988 283.287 196.736L231.412 144.845L272.649 103.325L324.658 155.351C327.782 158.477 331.876 160.04 335.969 160.04C340.063 160.04 344.156 158.477 347.281 155.351C353.53 149.1 353.53 138.972 347.281 132.721L295.198 80.62L344.875 30.603C381.246 -5.906 439.241 -10.282 476.738 20.35C526.233 61.11 518.859 127.751 483.987 162.634Z" />
        </Icon>
    </>
}