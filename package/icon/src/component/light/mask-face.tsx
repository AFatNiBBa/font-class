
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `mask-face` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mask-face?s=light mask-face}
 * @preview ![mask-face](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MTYuNCAxMTQuOTE0QzU4Ny44NjggODYuMzA1IDU0Mi40NzkgODMuOTQ1IDUxMC43NjMgMTA3LjYwOUg0NzkuOThDNDYyLjIzMiAxMDcuNjA5IDQ0NS4wMTUgMTAyLjQgNDMwLjIzNiA5Mi41M0wzODcuNDkxIDY0QzM0Ny4zNzIgMzcuMjIxIDI5Mi42MjggMzcuMjIxIDI1Mi41MDkgNjRMMjA5Ljc2NCA5Mi41M0MxOTQuOTg1IDEwMi40IDE3Ny43NjggMTA3LjYwOSAxNjAuMDIgMTA3LjYwOUgxMjkuMjMzQzk3LjUyMSA4My45NjEgNTIuMTU5IDg2LjMyMSAyMy42IDExNC45MTRDLTcuNTgzIDE0Ni4xNSAtNy44OTYgMTk3LjI4MyAyMi44NSAyMjguODk0TDkxLjI3OSAyOTkuMjUxQzE1MS4wMjIgMzYwLjY5MSAyMzQuMzg2IDM5NS45MTYgMzIwIDM5NS45MTZTNDg4Ljk3OCAzNjAuNjkxIDU0OC43MjEgMjk5LjI1MUw2MTcuMTUgMjI4LjkxQzY0Ny44OTYgMTk3LjI4MyA2NDcuNTgzIDE0Ni4xNSA2MTYuNCAxMTQuOTE0Wk0xMTIuMDI2IDI3NC42NjZMNDUuNzg1IDIwNi41NDJDMjcuMTYyIDE4Ny40MTMgMjcuMzUgMTU2LjQ1OCA0Ni4yMjIgMTM3LjU2M0M2NC4xMjggMTE5LjY2NyA5Mi44MDIgMTE5LjA5IDExMi4wMjYgMTM1LjA0MVYyNzQuNjY2Wk00OTUuOTc4IDMwMy4wOTFDNDQ1LjkwNiAzNDEuODk0IDM4My43MzYgMzYzLjg4MiAzMjAgMzYzLjg4MlMxOTQuMDk0IDM0MS44OTQgMTQ0LjAyMiAzMDMuMDkxVjEzOS42NDNIMTYwLjAyQzE4NC4xMTEgMTM5LjY0MyAyMDcuNDUyIDEzMi41NzMgMjI3LjUxMiAxMTkuMTg0TDI3MC4yNTYgOTAuNjUzQzI5OS44MTUgNzAuOTE0IDM0MC4xODUgNzAuOTE0IDM2OS43NDQgOTAuNjUzTDQxMi40ODggMTE5LjE4NEM0MzIuNTQ4IDEzMi41NzMgNDU1Ljg4OSAxMzkuNjQzIDQ3OS45OCAxMzkuNjQzSDQ5NS45NzhWMzAzLjA5MVpNNTk0LjIxNSAyMDYuNTU4TDUyNy45NzQgMjc0LjY2NlYxMzUuMDM5QzU0Ny4xOTYgMTE5LjA2MyA1NzUuODQyIDExOS42MzcgNTkzLjc3OCAxMzcuNTYzQzYxMi42NSAxNTYuNDU4IDYxMi44MzggMTg3LjQxMyA1OTQuMjE1IDIwNi41NThaTTQzMS45ODYgMjE5LjcyOEgyMDguMDE0QzE5OS4xNzIgMjE5LjcyOCAxOTIuMDE2IDIyNi44OTIgMTkyLjAxNiAyMzUuNzQ1QzE5Mi4wMTYgMjQ0LjU5OSAxOTkuMTcyIDI1MS43NjMgMjA4LjAxNCAyNTEuNzYzSDQzMS45ODZDNDQwLjgyOCAyNTEuNzYzIDQ0Ny45ODQgMjQ0LjU5OSA0NDcuOTg0IDIzNS43NDVDNDQ3Ljk4NCAyMjYuODkyIDQ0MC44MjggMjE5LjcyOCA0MzEuOTg2IDIxOS43MjhaTTQzMS45ODYgMTU1LjY2SDIwOC4wMTRDMTk5LjE3MiAxNTUuNjYgMTkyLjAxNiAxNjIuODI0IDE5Mi4wMTYgMTcxLjY3N1MxOTkuMTcyIDE4Ny42OTQgMjA4LjAxNCAxODcuNjk0SDQzMS45ODZDNDQwLjgyOCAxODcuNjk0IDQ0Ny45ODQgMTgwLjUzIDQ0Ny45ODQgMTcxLjY3N1M0NDAuODI4IDE1NS42NiA0MzEuOTg2IDE1NS42NlpNMzk5Ljk5IDI4My43OTdIMjQwLjAxQzIzMS4xNjggMjgzLjc5NyAyMjQuMDEyIDI5MC45NjEgMjI0LjAxMiAyOTkuODE0UzIzMS4xNjggMzE1LjgzMSAyNDAuMDEgMzE1LjgzMUgzOTkuOTlDNDA4LjgzMiAzMTUuODMxIDQxNS45ODggMzA4LjY2NyA0MTUuOTg4IDI5OS44MTRTNDA4LjgzMiAyODMuNzk3IDM5OS45OSAyODMuNzk3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MaskFace(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M616.4 114.914C587.868 86.305 542.479 83.945 510.763 107.609H479.98C462.232 107.609 445.015 102.4 430.236 92.53L387.491 64C347.372 37.221 292.628 37.221 252.509 64L209.764 92.53C194.985 102.4 177.768 107.609 160.02 107.609H129.233C97.521 83.961 52.159 86.321 23.6 114.914C-7.583 146.15 -7.896 197.283 22.85 228.894L91.279 299.251C151.022 360.691 234.386 395.916 320 395.916S488.978 360.691 548.721 299.251L617.15 228.91C647.896 197.283 647.583 146.15 616.4 114.914ZM112.026 274.666L45.785 206.542C27.162 187.413 27.35 156.458 46.222 137.563C64.128 119.667 92.802 119.09 112.026 135.041V274.666ZM495.978 303.091C445.906 341.894 383.736 363.882 320 363.882S194.094 341.894 144.022 303.091V139.643H160.02C184.111 139.643 207.452 132.573 227.512 119.184L270.256 90.653C299.815 70.914 340.185 70.914 369.744 90.653L412.488 119.184C432.548 132.573 455.889 139.643 479.98 139.643H495.978V303.091ZM594.215 206.558L527.974 274.666V135.039C547.196 119.063 575.842 119.637 593.778 137.563C612.65 156.458 612.838 187.413 594.215 206.558ZM431.986 219.728H208.014C199.172 219.728 192.016 226.892 192.016 235.745C192.016 244.599 199.172 251.763 208.014 251.763H431.986C440.828 251.763 447.984 244.599 447.984 235.745C447.984 226.892 440.828 219.728 431.986 219.728ZM431.986 155.66H208.014C199.172 155.66 192.016 162.824 192.016 171.677S199.172 187.694 208.014 187.694H431.986C440.828 187.694 447.984 180.53 447.984 171.677S440.828 155.66 431.986 155.66ZM399.99 283.797H240.01C231.168 283.797 224.012 290.961 224.012 299.814S231.168 315.831 240.01 315.831H399.99C408.832 315.831 415.988 308.667 415.988 299.814S408.832 283.797 399.99 283.797Z" />
        </Icon>
    </>
}