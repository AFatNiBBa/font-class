
import { Icon } from "../../index";

/**
 * A component that renders the `football-ball` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/football-ball?s=light football-ball}
 * @preview ![football-ball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzQuNzgyIDc5LjI5M0M0MzAuNDA3IDYyLjkyMiA0MTcuNjEgNTAuMDQ5IDQwMS4wOTMgNDUuNjQ2QzM5MS40NDIgNDMuMDU1IDM1MS43NTMgMzIgMjk5LjY1MyAzMkMyMzUuOTk1IDMyIDE1My44MTUgNDguNTA2IDg1LjMgMTE3LjExOUMtMjUuNTA1IDIyOC4yMjUgLTIuMjA2IDM3NC4yMTkgMTMuMjE2IDQzMi43MDdDMTcuNTkxIDQ0OS4wNzggMzAuMzkgNDYxLjk1MSA0Ni45MDcgNDY2LjM1NEM1Ni41NTYgNDY4Ljk0NSA5Ni4yNDcgNDgwIDE0OC4zNDcgNDgwQzIxMi4wMDMgNDgwIDI5NC4xODQgNDYzLjQ5NCAzNjIuNjk4IDM5NC44ODFDNDczLjUwNSAyODMuNzc1IDQ1MC4yMDYgMTM3Ljc4MSA0MzQuNzgyIDc5LjI5M1pNNTUuMTQ3IDQzNS40MzRDNDkuNzgyIDQzNC4wMDIgNDUuNTU5IDQyOS43OTMgNDQuMTU5IDQyNC41NDdDMzkuMjI5IDQwNS44NTUgMzMuNDI1IDM3Ni44ODMgMzIuMzM5IDM0Mi45NjVMMTM2LjU4MyA0NDcuMjA5QzEwOS41NTIgNDQ2LjI4OSA4Mi40MTcgNDQyLjc4NSA1NS4xNDcgNDM1LjQzNFpNMzQwLjA1NiAzNzIuMjdDMjk3LjEyOCA0MTUuMjYgMjQzLjYzOCA0MzkuOTYxIDE4MC44NzIgNDQ2LjI0OEwzMy43NjEgMjk5LjEzN0MzOS4xMyAyNDcuMDc0IDU4LjU1OCAxODkuMjUgMTA3Ljk0NCAxMzkuNzNDMTUwLjg3IDk2Ljc0MiAyMDQuMzU0IDcyLjAzOSAyNjcuMTI2IDY1Ljc1Mkw0MTQuMjM5IDIxMi44NjVDNDA4Ljg3IDI2NC45MjggMzg5LjQ0MiAzMjIuNzUgMzQwLjA1NiAzNzIuMjdaTTMxMS40MTUgNjQuNzkxQzMzOC40NDggNjUuNzExIDM2NS41NzkgNjkuMjE1IDM5Mi44NSA3Ni41NjZDMzk4LjIxOCA3Ny45OTggNDAyLjQzOCA4Mi4yMDcgNDAzLjg0MSA4Ny40NTNDNDA4Ljc2OCAxMDYuMTQ1IDQxNC41NzUgMTM1LjExNyA0MTUuNjYxIDE2OS4wMzdMMzExLjQxNSA2NC43OTFaTTIwMy4zMTEgMjEyLjY4OEMxOTcuMDYxIDIwNi40MzggMTg2LjkzNiAyMDYuNDM4IDE4MC42ODYgMjEyLjY4OFMxNzQuNDM2IDIyOS4wNjMgMTgwLjY4NiAyMzUuMzEyTDI0NC42ODYgMjk5LjMxMkMyNDcuODExIDMwMi40MzggMjUxLjkwNSAzMDQgMjU1Ljk5OSAzMDRTMjY0LjE4NiAzMDIuNDM4IDI2Ny4zMTEgMjk5LjMxMkMyNzMuNTYxIDI5My4wNjIgMjczLjU2MSAyODIuOTM3IDI2Ny4zMTEgMjc2LjY4OEwyMDMuMzExIDIxMi42ODhaTTIyOC42ODYgMTY0LjY4OEMyMjIuNDM2IDE3MC45MzggMjIyLjQzNiAxODEuMDYzIDIyOC42ODYgMTg3LjMxMkwyOTIuNjg2IDI1MS4zMTJDMjk1LjgxMSAyNTQuNDM4IDI5OS45MDUgMjU2IDMwMy45OTkgMjU2UzMxMi4xODYgMjU0LjQzOCAzMTUuMzExIDI1MS4zMTJDMzIxLjU2MSAyNDUuMDYyIDMyMS41NjEgMjM0LjkzNyAzMTUuMzExIDIyOC42ODhMMjUxLjMxMSAxNjQuNjg4QzI0NS4wNjEgMTU4LjQzOCAyMzQuOTM2IDE1OC40MzggMjI4LjY4NiAxNjQuNjg4Wk0xNTUuMzExIDI2MC42ODhDMTQ5LjA2MSAyNTQuNDM4IDEzOC45MzYgMjU0LjQzOCAxMzIuNjg2IDI2MC42ODhTMTI2LjQzNiAyNzcuMDYzIDEzMi42ODYgMjgzLjMxMkwxOTYuNjg2IDM0Ny4zMTJDMTk5LjgxMSAzNTAuNDM4IDIwMy45MDUgMzUyIDIwNy45OTkgMzUyUzIxNi4xODYgMzUwLjQzOCAyMTkuMzExIDM0Ny4zMTJDMjI1LjU2MSAzNDEuMDYyIDIyNS41NjEgMzMwLjkzNyAyMTkuMzExIDMyNC42ODhMMTU1LjMxMSAyNjAuNjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FootballBall: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M434.782 79.293C430.407 62.922 417.61 50.049 401.093 45.646C391.442 43.055 351.753 32 299.653 32C235.995 32 153.815 48.506 85.3 117.119C-25.505 228.225 -2.206 374.219 13.216 432.707C17.591 449.078 30.39 461.951 46.907 466.354C56.556 468.945 96.247 480 148.347 480C212.003 480 294.184 463.494 362.698 394.881C473.505 283.775 450.206 137.781 434.782 79.293ZM55.147 435.434C49.782 434.002 45.559 429.793 44.159 424.547C39.229 405.855 33.425 376.883 32.339 342.965L136.583 447.209C109.552 446.289 82.417 442.785 55.147 435.434ZM340.056 372.27C297.128 415.26 243.638 439.961 180.872 446.248L33.761 299.137C39.13 247.074 58.558 189.25 107.944 139.73C150.87 96.742 204.354 72.039 267.126 65.752L414.239 212.865C408.87 264.928 389.442 322.75 340.056 372.27ZM311.415 64.791C338.448 65.711 365.579 69.215 392.85 76.566C398.218 77.998 402.438 82.207 403.841 87.453C408.768 106.145 414.575 135.117 415.661 169.037L311.415 64.791ZM203.311 212.688C197.061 206.438 186.936 206.438 180.686 212.688S174.436 229.063 180.686 235.312L244.686 299.312C247.811 302.438 251.905 304 255.999 304S264.186 302.438 267.311 299.312C273.561 293.062 273.561 282.937 267.311 276.688L203.311 212.688ZM228.686 164.688C222.436 170.938 222.436 181.063 228.686 187.312L292.686 251.312C295.811 254.438 299.905 256 303.999 256S312.186 254.438 315.311 251.312C321.561 245.062 321.561 234.937 315.311 228.688L251.311 164.688C245.061 158.438 234.936 158.438 228.686 164.688ZM155.311 260.688C149.061 254.438 138.936 254.438 132.686 260.688S126.436 277.063 132.686 283.312L196.686 347.312C199.811 350.438 203.905 352 207.999 352S216.186 350.438 219.311 347.312C225.561 341.062 225.561 330.937 219.311 324.688L155.311 260.688Z" />
    </Icon>
);

export default FootballBall;