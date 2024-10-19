
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `skull-crossbones` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/skull-crossbones?s=solid skull-crossbones}
 * @preview ![skull-crossbones](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzkuMTU5IDQ1My4wMzFMMjk3LjEzNiAzODQuMDI2TDQzOS4xNTkgMzE1LjAyMkM0NDcuMDM1IDMxMS4wMjEgNDUwLjI4NSAzMDEuMzk2IDQ0Ni4yODUgMjkzLjUyTDQzMi4wMzMgMjY0Ljg5M0M0MjguMDMyIDI1Ny4wMTggNDE4LjUzMSAyNTMuNzY3IDQxMC41MjkgMjU3Ljc2OEwyMjQgMzQ4LjM5OUwzNy40NzEgMjU3Ljc2OEMyOS41OTUgMjUzLjc2NyAxOS45NjggMjU3LjAxOCAxNS45NjcgMjY0Ljg5M0wxLjcxNSAyOTMuNTJDLTIuMjg1IDMwMS4zOTYgMC45NjUgMzExLjAyMSA4Ljg0MSAzMTUuMDIyTDE1MC44NjQgMzg0LjAyNkw4Ljg0MSA0NTMuMDMxQzAuOTY1IDQ1Ny4wMzEgLTIuMjg1IDQ2Ni42NTcgMS43MTUgNDc0LjUzM0wxNS45NjcgNTAzLjE2QzE5Ljk2OCA1MTEuMDM1IDI5LjU5NSA1MTQuMjg1IDM3LjQ3MSA1MTAuMjg1TDIyNCA0MTkuNjU0TDQxMC41MjkgNTEwLjI4NUM0MTguNDA2IDUxNC4yODUgNDI4LjAzMiA1MTEuMDM1IDQzMi4wMzMgNTAzLjE2TDQ0Ni4yODUgNDc0LjUzM0M0NTAuMjg1IDQ2Ni42NTcgNDQ3LjAzNSA0NTcuMDMxIDQzOS4xNTkgNDUzLjAzMVpNMTQ5Ljk4OCAyMzcuMjVMMTQ0LjQ4OCAyNjMuMTI1QzE0MS44NjIgMjc1Ljc1IDE0OS45ODggMjg4IDE2MC45OSAyODhIMjg3LjAxQzI5OC4xMzcgMjg4IDMwNi4xMzggMjc1Ljc1IDMwMy41MTIgMjYzLjEyNUwyOTguMDEyIDIzNy4yNUMzMzkuNzY4IDIxNC44NzUgMzY4LjAyMyAxNzQuNSAzNjguMDIzIDEyOEMzNjguMDIzIDU3LjI1IDMwMy41MTIgMCAyMjQgMFM3OS45NzcgNTcuMjUgNzkuOTc3IDEyOEM3OS45NzcgMTc0LjUgMTA4LjIzMiAyMTQuODc1IDE0OS45ODggMjM3LjI1Wk0yODAuMDA5IDExMi4wMDhDMjk3LjYzNyAxMTIuMDA4IDMxMi4wMTQgMTI2LjM4NCAzMTIuMDE0IDE0NC4wMVMyOTcuNjM3IDE3Ni4wMTIgMjgwLjAwOSAxNzYuMDEyQzI2Mi4zODEgMTc2LjAxMiAyNDguMDA0IDE2MS42MzYgMjQ4LjAwNCAxNDQuMDFTMjYyLjM4MSAxMTIuMDA4IDI4MC4wMDkgMTEyLjAwOFpNMTY3Ljk5MSAxMTIuMDA4QzE4NS42MTkgMTEyLjAwOCAxOTkuOTk2IDEyNi4zODQgMTk5Ljk5NiAxNDQuMDFTMTg1LjYxOSAxNzYuMDEyIDE2Ny45OTEgMTc2LjAxMlMxMzUuOTg2IDE2MS42MzYgMTM1Ljk4NiAxNDQuMDFTMTUwLjM2MyAxMTIuMDA4IDE2Ny45OTEgMTEyLjAwOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SkullCrossbones(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M439.159 453.031L297.136 384.026L439.159 315.022C447.035 311.021 450.285 301.396 446.285 293.52L432.033 264.893C428.032 257.018 418.531 253.767 410.529 257.768L224 348.399L37.471 257.768C29.595 253.767 19.968 257.018 15.967 264.893L1.715 293.52C-2.285 301.396 0.965 311.021 8.841 315.022L150.864 384.026L8.841 453.031C0.965 457.031 -2.285 466.657 1.715 474.533L15.967 503.16C19.968 511.035 29.595 514.285 37.471 510.285L224 419.654L410.529 510.285C418.406 514.285 428.032 511.035 432.033 503.16L446.285 474.533C450.285 466.657 447.035 457.031 439.159 453.031ZM149.988 237.25L144.488 263.125C141.862 275.75 149.988 288 160.99 288H287.01C298.137 288 306.138 275.75 303.512 263.125L298.012 237.25C339.768 214.875 368.023 174.5 368.023 128C368.023 57.25 303.512 0 224 0S79.977 57.25 79.977 128C79.977 174.5 108.232 214.875 149.988 237.25ZM280.009 112.008C297.637 112.008 312.014 126.384 312.014 144.01S297.637 176.012 280.009 176.012C262.381 176.012 248.004 161.636 248.004 144.01S262.381 112.008 280.009 112.008ZM167.991 112.008C185.619 112.008 199.996 126.384 199.996 144.01S185.619 176.012 167.991 176.012S135.986 161.636 135.986 144.01S150.363 112.008 167.991 112.008Z" />
        </Icon>
    </>
}