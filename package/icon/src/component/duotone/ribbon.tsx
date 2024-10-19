
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ribbon` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ribbon?s=duotone ribbon}
 * @preview ![ribbon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyNS4wMjEgMzc5LjI5N0wxMTAuNjgzIDUwNC4xMzFDMTAyLjY4MyA1MTIuODgxIDg5LjE4MSA1MTQuNjMxIDc5LjMwNiA1MDcuODgxTDEwLjU1IDQ4MC4wMDZDLTEuNDUyIDQ3MS44ODMgLTMuNTc3IDQ1NS4xMzMgNi4wNSA0NDQuMjU4TDE0NS44MiAyOTEuNDQ5TDIyNS4wMjEgMzc5LjI5N1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDQyLjAyMiA0NDQuMjU4QzQ0Mi4wMjIgNDQ0LjI1OCAxNDkuOTk0IDExOS43NjkgMTQ2LjYxOSAxMTQuMjY5QzE2MS45OTYgMTA1Ljc2OSAxODYuODczIDk2LjI3IDIyNC4xMjYgOTYuMjdTMjg2LjI1NyAxMDUuNzY5IDMwMS42MzQgMTE0LjI2OUMyOTguMzgzIDExOS43NjkgMjQ1LjYyOCAxNzguNzY3IDI0NS42MjggMTc4Ljc2N0wzMjQuNzYxIDI2Ni41MTRMMzU4Ljg4OSAyMjguNTE1QzM4Ny42NDIgMTk2LjY0MSAzOTIuMjY3IDE0OS44OTMgMzcwLjM5IDExMy4wMTlMMzI2LjYzNiAzOS41MjJDMzIyLjM4NSAzMi4yNzIgMzE2Ljc2IDI2LjI3MiAzMDkuODg0IDIxLjUyMkMyNjkuMTMxIC02LjEwMiAxODIuMzcyIC04LjIyNyAxMzguMzY4IDIxLjUyMkMxMzEuNDkzIDI2LjI3MiAxMjUuODY3IDMyLjI3MiAxMjEuNjE3IDM5LjUyMkw3Ny45ODggMTEyLjc2OUM3Ni40ODggMTE1LjI2OSA0MC44NTkgMTc0Ljg5MiA4OS40ODkgMjI4Ljc2NUwzMzcuNjM3IDUwNC4wMDZDMzQ1LjYzOCA1MTIuODggMzU5LjAxNCA1MTQuNTA1IDM2OC44OSA1MDcuNzU2TDQzNy43NzEgNDc5Ljg4MkM0NDkuNjQ3IDQ3MS44ODIgNDUxLjc3MiA0NTUuMTMyIDQ0Mi4wMjIgNDQ0LjI1OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Ribbon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M225.021 379.297L110.683 504.131C102.683 512.881 89.181 514.631 79.306 507.881L10.55 480.006C-1.452 471.883 -3.577 455.133 6.05 444.258L145.82 291.449L225.021 379.297Z" />
            <path d="M442.022 444.258C442.022 444.258 149.994 119.769 146.619 114.269C161.996 105.769 186.873 96.27 224.126 96.27S286.257 105.769 301.634 114.269C298.383 119.769 245.628 178.767 245.628 178.767L324.761 266.514L358.889 228.515C387.642 196.641 392.267 149.893 370.39 113.019L326.636 39.522C322.385 32.272 316.76 26.272 309.884 21.522C269.131 -6.102 182.372 -8.227 138.368 21.522C131.493 26.272 125.867 32.272 121.617 39.522L77.988 112.769C76.488 115.269 40.859 174.892 89.489 228.765L337.637 504.006C345.638 512.88 359.014 514.505 368.89 507.756L437.771 479.882C449.647 471.882 451.772 455.132 442.022 444.258Z" />
        </Icon>
    </>
}