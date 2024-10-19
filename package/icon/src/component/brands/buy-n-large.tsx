
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `buy-n-large` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/buy-n-large?s=brands buy-n-large}
 * @preview ![buy-n-large](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMzJDMTMzLjI3IDMyIDcuNzkgMTMyLjMyIDcuNzkgMjU2UzEzMy4yNyA0ODAgMjg4IDQ4MHMyODAuMjEtMTAwLjMyIDI4MC4yMS0yMjRTNDQyLjczIDMyIDI4OCAzMnptLTg1LjM5IDM1Ny4xOUw2NC4xIDM5MC41NWw3Ny4yNS0yOTAuNzRoMTMzLjQ0YzYzLjE1IDAgODQuOTMgMjguNjUgNzggNzIuODRhNjAuMjQgNjAuMjQgMCAwIDEtMS41IDYuODUgNzcuMzkgNzcuMzkgMCAwIDAtMTcuMjEtMS45M2MtNDIuMzUgMC03Ni42OSAzMy44OC03Ni42OSA3NS42NSAwIDM3LjE0IDI3LjE0IDY4IDYyLjkzIDc0LjQ1LTE4LjI0IDM3LjE2LTU2LjE2IDYwLjkyLTExNy43MSA2MS41MnpNMzU4IDIwNy4xMWgzMmwtMjIuMTYgOTAuMzFoLTM1LjQxbC0xMS4xOS0zNS42My03LjgzIDM1LjYzaC0zNy44M2wyNi42My05MC4zMWgzMS4zNGwxNSAzNi43NXptMTQ1Ljg2IDE4Mi4wOEgzMDYuNzlMMzIyLjYzIDMyOGE3OC44IDc4LjggMCAwIDAgMTEuNDcuODNjNDIuMzQgMCA3Ni42OS0zMy44NyA3Ni42OS03NS42NSAwLTMyLjY1LTIxLTYwLjQ2LTUwLjM4LTcxLjA2bDIxLjMzLTgyLjM1aDkyLjVsLTUzLjA1IDIwNS4zNmgxMDMuODd6TTIxMS43IDI2OS4zOUgxODdsLTEzLjggNTYuNDdoMjQuN2MxNi4xNCAwIDMyLjExLTMuMTggMzcuOTQtMjYuNjUgNS41Ni0yMi4zMS03Ljk5LTI5LjgyLTI0LjE0LTI5Ljgyek0yMzMgMTcwaC0yMS4zNEwyMDAgMjE3LjcxaDIxLjM3YzE4IDAgMzUuMzgtMTQuNjQgMzkuMjEtMzAuMTRDMjY1LjIzIDE2OC43MSAyNTEuMDcgMTcwIDIzMyAxNzB6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function BuyNLarge(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M288 32C133.27 32 7.79 132.32 7.79 256S133.27 480 288 480s280.21-100.32 280.21-224S442.73 32 288 32zm-85.39 357.19L64.1 390.55l77.25-290.74h133.44c63.15 0 84.93 28.65 78 72.84a60.24 60.24 0 0 1-1.5 6.85 77.39 77.39 0 0 0-17.21-1.93c-42.35 0-76.69 33.88-76.69 75.65 0 37.14 27.14 68 62.93 74.45-18.24 37.16-56.16 60.92-117.71 61.52zM358 207.11h32l-22.16 90.31h-35.41l-11.19-35.63-7.83 35.63h-37.83l26.63-90.31h31.34l15 36.75zm145.86 182.08H306.79L322.63 328a78.8 78.8 0 0 0 11.47.83c42.34 0 76.69-33.87 76.69-75.65 0-32.65-21-60.46-50.38-71.06l21.33-82.35h92.5l-53.05 205.36h103.87zM211.7 269.39H187l-13.8 56.47h24.7c16.14 0 32.11-3.18 37.94-26.65 5.56-22.31-7.99-29.82-24.14-29.82zM233 170h-21.34L200 217.71h21.37c18 0 35.38-14.64 39.21-30.14C265.23 168.71 251.07 170 233 170z" />
        </Icon>
    </>
}