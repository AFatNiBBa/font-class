
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mask-face` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mask-face?s=duotone mask-face}
 * @preview ![mask-face](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIzLjYgMTM1LjQ4N0MtNy41ODMgMTY2LjY1NyAtNy44OTYgMjE3LjY4MiAyMi44NSAyNDkuMjI3TDkxLjI3OSAzMTkuNDM0Qzk3Ljg4IDMyNi4yMDggMTA0Ljg3NyAzMzIuNTMzIDExMi4wMjYgMzM4LjY1OFYyOTQuOTAxTDQ1Ljc4NSAyMjYuOTIyQzI3LjE2MiAyMDcuODMzIDI3LjM1IDE3Ni45NDMgNDYuMjIyIDE1OC4wODhDNjQuMzY3IDEzOS45OTIgOTMuNjM4IDEzOS40NzkgMTEyLjg0OSAxNTYuMDkyQzExNC4zOTcgMTQ0LjQ3NCAxMjEuNjk5IDEzNC43NjMgMTMyLjI1OCAxMzAuNTdDMTAwLjQ3NSAxMDQuNDU1IDUzLjA4MyAxMDYuMDMyIDIzLjYgMTM1LjQ4N1pNNjE2LjQgMTM1LjQ4N0M1ODYuOTQ4IDEwNi4wMTggNTM5LjUyOSAxMDQuNDY3IDUwNy43NDQgMTMwLjU3QzUxOC4zMDEgMTM0Ljc2MyA1MjUuNjAzIDE0NC40NzQgNTI3LjE1MSAxNTYuMDkyQzU0Ni4zNiAxMzkuNDc5IDU3NS42MDQgMTM5Ljk2MSA1OTMuNzc4IDE1OC4wODhDNjEyLjY1IDE3Ni45NDMgNjEyLjgzOCAyMDcuODMzIDU5NC4yMTUgMjI2LjkzOEw1MjcuOTc0IDI5NC45MDFWMzM4LjY1OEM1MzUuMTIzIDMzMi41MzMgNTQyLjEyIDMyNi4yMDggNTQ4LjcyMSAzMTkuNDM0TDYxNy4xNSAyNDkuMjQyQzY0Ny44OTYgMjE3LjY4MiA2NDcuNTgzIDE2Ni42NTcgNjE2LjQgMTM1LjQ4N1oiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNDk2LjE1NiAxMDcuNjY1TDQ3OS45MzQgMTA3LjU2MkM0NjIuMDUxIDEwNy40NDYgNDQ0LjU5MiAxMDIuMDk5IDQyOS43MTcgOTIuMTc5TDM4Ny40NTcgNjRDMzQ2LjYwMSAzNi43NTUgMjkzLjM0NiAzNi43NTUgMjUyLjQ5IDY0TDIwOS43NTEgOTIuNDk5QzE5NS4xODkgMTAyLjIxIDE3OC4wOTcgMTA3LjQ0NCAxNjAuNTg4IDEwNy41NThMMTQzLjc5MSAxMDcuNjY1QzEyNi4xOTkgMTA3Ljc3OCAxMTIgMTIyLjA1NiAxMTIgMTM5LjYzMVYzMTguMjI0QzE2OS41NDkgMzY3LjU4NiAyNDMuODE5IDM5NS41NjYgMzE5Ljk3NCAzOTUuNTY2UzQ3MC4zOTggMzY3LjU4NiA1MjcuOTQ3IDMxOC4yMjRWMTM5LjYzMUM1MjcuOTQ3IDEyMi4wNTYgNTEzLjc0OCAxMDcuNzc4IDQ5Ni4xNTYgMTA3LjY2NVpNMzk5Ljk2MyAzMTUuNjUxSDIzOS45ODRDMjMxLjE0MSAzMTUuNjUxIDIyMy45ODYgMzA4LjUwMiAyMjMuOTg2IDI5OS42NjhTMjMxLjE0MSAyODMuNjg0IDIzOS45ODQgMjgzLjY4NEgzOTkuOTYzQzQwOC44MDYgMjgzLjY4NCA0MTUuOTYxIDI5MC44MzMgNDE1Ljk2MSAyOTkuNjY4UzQwOC44MDYgMzE1LjY1MSAzOTkuOTYzIDMxNS42NTFaTTQzMS45NTkgMjUxLjcxOEgyMDcuOTg4QzE5OS4xNDUgMjUxLjcxOCAxOTEuOTkgMjQ0LjU2OSAxOTEuOTkgMjM1LjczNUMxOTEuOTkgMjI2LjkwMSAxOTkuMTQ1IDIxOS43NTIgMjA3Ljk4OCAyMTkuNzUySDQzMS45NTlDNDQwLjgwMiAyMTkuNzUyIDQ0Ny45NTcgMjI2LjkwMSA0NDcuOTU3IDIzNS43MzVDNDQ3Ljk1NyAyNDQuNTY5IDQ0MC44MDIgMjUxLjcxOCA0MzEuOTU5IDI1MS43MThaTTQzMS45NTkgMTg3Ljc4NkgyMDcuOTg4QzE5OS4xNDUgMTg3Ljc4NiAxOTEuOTkgMTgwLjYzNyAxOTEuOTkgMTcxLjgwMlMxOTkuMTQ1IDE1NS44MTkgMjA3Ljk4OCAxNTUuODE5SDQzMS45NTlDNDQwLjgwMiAxNTUuODE5IDQ0Ny45NTcgMTYyLjk2OCA0NDcuOTU3IDE3MS44MDJTNDQwLjgwMiAxODcuNzg2IDQzMS45NTkgMTg3Ljc4NloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const MaskFace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M23.6 135.487C-7.583 166.657 -7.896 217.682 22.85 249.227L91.279 319.434C97.88 326.208 104.877 332.533 112.026 338.658V294.901L45.785 226.922C27.162 207.833 27.35 176.943 46.222 158.088C64.367 139.992 93.638 139.479 112.849 156.092C114.397 144.474 121.699 134.763 132.258 130.57C100.475 104.455 53.083 106.032 23.6 135.487ZM616.4 135.487C586.948 106.018 539.529 104.467 507.744 130.57C518.301 134.763 525.603 144.474 527.151 156.092C546.36 139.479 575.604 139.961 593.778 158.088C612.65 176.943 612.838 207.833 594.215 226.938L527.974 294.901V338.658C535.123 332.533 542.12 326.208 548.721 319.434L617.15 249.242C647.896 217.682 647.583 166.657 616.4 135.487Z" />
            <path d="M496.156 107.665L479.934 107.562C462.051 107.446 444.592 102.099 429.717 92.179L387.457 64C346.601 36.755 293.346 36.755 252.49 64L209.751 92.499C195.189 102.21 178.097 107.444 160.588 107.558L143.791 107.665C126.199 107.778 112 122.056 112 139.631V318.224C169.549 367.586 243.819 395.566 319.974 395.566S470.398 367.586 527.947 318.224V139.631C527.947 122.056 513.748 107.778 496.156 107.665ZM399.963 315.651H239.984C231.141 315.651 223.986 308.502 223.986 299.668S231.141 283.684 239.984 283.684H399.963C408.806 283.684 415.961 290.833 415.961 299.668S408.806 315.651 399.963 315.651ZM431.959 251.718H207.988C199.145 251.718 191.99 244.569 191.99 235.735C191.99 226.901 199.145 219.752 207.988 219.752H431.959C440.802 219.752 447.957 226.901 447.957 235.735C447.957 244.569 440.802 251.718 431.959 251.718ZM431.959 187.786H207.988C199.145 187.786 191.99 180.637 191.99 171.802S199.145 155.819 207.988 155.819H431.959C440.802 155.819 447.957 162.968 447.957 171.802S440.802 187.786 431.959 187.786Z" />
    </Icon>
);

export default MaskFace;