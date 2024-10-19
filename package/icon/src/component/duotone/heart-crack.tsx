
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `heart-crack` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/heart-crack?s=duotone heart-crack}
 * @preview ![heart-crack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4MC45OSAyNTUuNzc2TDI2OC43NDkgNDc0LjU2MkMyNjEuNzUgNDgxLjgxMyAyNTAuMjUgNDgxLjgxMyAyNDMuMTI2IDQ3NC41NjJMMzEuMDEgMjU1LjkwMUMtMTIuNDg4IDIwMi43NjcgLTEwLjM2MyAxMjMuNTA0IDM4LjI2IDczLjYyMUw0MC43NiA3MS4yNDVDODMuNzM0IDI3LjIxNSAxNDkuMzggMjAuODA3IDE5OS45MDcgNTAuMzQzTDIzOS45NDggMTQzLjc5MkwxNDQuMDA1IDIwNy43NjhMMTQ0LjEyMiAyMDcuODg1TDE0NC4wMTcgMjA3Ljk1NUwyODcuOTk5IDM1MS43OTFMMjQwLjA1OSAyMjMuOTI3TDMzNi4wMDggMTU5Ljk0N0wzMzUuOTU5IDE1OS43ODNMMzM1Ljk5NiAxNTkuNzZMMzM1LjUyNiAxNTguMzM4TDMwNC40NjEgNTQuNzdDMzU1Ljc1OSAxOS44NzcgNDI2LjAxNiAyNC45MDIgNDcxLjI0IDcxLjEyTDQ3My43NCA3My42MjFDNTIyLjM2MyAxMjMuNTA0IDUyNC40ODggMjAyLjc2NyA0ODAuOTkgMjU1Ljc3NloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTk5LjE4MSA0OC42OTFDMjEyLjY1MSA1NS43MjMgMjI1LjM2NyA2NC41NTcgMjM2LjMxIDc1Ljg1NUwyNTUuOTk3IDk2LjE4N0wyNzUuNjg0IDc1Ljg1NUMyODQuMjI0IDY3LjA0MSAyOTMuOTcgNTkuOTc4IDMwNC4xMzUgNTMuNzM4TDMzNS45OTIgMTU5Ljk0N0wyMzkuOTk2IDIyMy45NThMMjg3Ljk4MiAzNTEuNzkxTDE0NCAyMDcuOTU1TDIzOS45OTYgMTQzLjk0NUwxOTkuMTgxIDQ4LjY5MVoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function HeartCrack(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M480.99 255.776L268.749 474.562C261.75 481.813 250.25 481.813 243.126 474.562L31.01 255.901C-12.488 202.767 -10.363 123.504 38.26 73.621L40.76 71.245C83.734 27.215 149.38 20.807 199.907 50.343L239.948 143.792L144.005 207.768L144.122 207.885L144.017 207.955L287.999 351.791L240.059 223.927L336.008 159.947L335.959 159.783L335.996 159.76L335.526 158.338L304.461 54.77C355.759 19.877 426.016 24.902 471.24 71.12L473.74 73.621C522.363 123.504 524.488 202.767 480.99 255.776Z" />
            <path d="M199.181 48.691C212.651 55.723 225.367 64.557 236.31 75.855L255.997 96.187L275.684 75.855C284.224 67.041 293.97 59.978 304.135 53.738L335.992 159.947L239.996 223.958L287.982 351.791L144 207.955L239.996 143.945L199.181 48.691Z" />
        </Icon>
    </>
}