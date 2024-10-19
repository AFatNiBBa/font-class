
import { Icon, generic } from "../../index";

/**
 * A component that renders the `phone-volume` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/phone-volume?s=duotone phone-volume}
 * @preview ![phone-volume](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4NC4xODkgMTgxLjkyMkMyNzMuOTA4IDE3My41NzggMjU4Ljc4MyAxNzUuMDQ3IDI1MC40MzkgMTg1LjMyOEMyNDIuMDMzIDE5NS41NzggMjQzLjUzMyAyMTAuNzAzIDI1My44MTQgMjE5LjEwOUMyNjUuMTI3IDIyOC4zNTkgMjcxLjYyNyAyNDEuNzk3IDI3MS42MjcgMjU1Ljk4NEMyNzEuNjI3IDI3MC4xNzIgMjY1LjEyNyAyODMuNjA5IDI1My44MTQgMjkyLjg1OUMyNDMuNTMzIDMwMS4yNjYgMjQyLjAzMyAzMTYuMzkxIDI1MC40MzkgMzI2LjY0MUMyNTUuMTU4IDMzMi40NTMgMjYyLjA2NCAzMzUuNDUzIDI2OS4wMDIgMzM1LjQ1M0MyNzQuMzQ1IDMzNS40NTMgMjc5Ljc1MiAzMzMuNjcyIDI4NC4xODkgMzMwLjA0N0MzMDYuNzIgMzExLjYwOSAzMTkuNjI3IDI4NC42NDEgMzE5LjYyNyAyNTUuOTg0UzMwNi43MiAyMDAuMzU5IDI4NC4xODkgMTgxLjkyMlpNMzQ0Ljc1MiAxMDcuOTg0QzMzNC41MzMgOTkuNjQxIDMxOS40MDggMTAxLjA3OCAzMTAuOTcgMTExLjMyOEMzMDIuNTY0IDEyMS41NzggMzA0LjA2NCAxMzYuNzAzIDMxNC4zMTQgMTQ1LjEwOUMzNDguMTg5IDE3Mi44OTEgMzY3LjYyNyAyMTMuMjk3IDM2Ny42MjcgMjU1Ljk4NFMzNDguMTg5IDMzOS4wNzggMzE0LjMxNCAzNjYuODU5QzMwNC4wNjQgMzc1LjI2NiAzMDIuNTY0IDM5MC4zOTEgMzEwLjk3IDQwMC42NDFDMzE1LjcyIDQwNi40MjIgMzIyLjU5NSA0MDkuNDIyIDMyOS41MzMgNDA5LjQyMkMzMzQuOTA4IDQwOS40MjIgMzQwLjI4MyA0MDcuNjQxIDM0NC43NTIgNDAzLjk4NEMzODkuNzgzIDM2Ny4wNzggNDE1LjYyNyAzMTMuMTA5IDQxNS42MjcgMjU1Ljk4NFMzODkuNzgzIDE0NC44OTEgMzQ0Ljc1MiAxMDcuOTg0Wk00MDYuMDAyIDMzLjE0MUMzOTUuNzgzIDI0Ljc5NyAzODAuNjU4IDI2LjI2NiAzNzIuMjIgMzYuNDg0QzM2My44MTQgNDYuNzM0IDM2NS4zMTQgNjEuODU5IDM3NS41NjQgNzAuMjY2QzQzMS41MzMgMTE2LjEwOSA0NjMuNjI3IDE4My43OTcgNDYzLjYyNyAyNTUuOTg0UzQzMS41MzMgMzk1Ljg1OSAzNzUuNTY0IDQ0MS43MDNDMzY1LjMxNCA0NTAuMTA5IDM2My44MTQgNDY1LjIzNCAzNzIuMjIgNDc1LjQ4NEMzNzYuOTcgNDgxLjI2NiAzODMuODQ1IDQ4NC4yNjYgMzkwLjc4MyA0ODQuMjY2QzM5Ni4xNTggNDg0LjI2NiA0MDEuNTMzIDQ4Mi40ODQgNDA2LjAwMiA0NzguODI4QzQ3My4xMjcgNDIzLjgyOCA1MTEuNjI3IDM0Mi42MDkgNTExLjYyNyAyNTUuOTg0UzQ3My4xMjcgODguMTQxIDQwNi4wMDIgMzMuMTQxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik05OC4wNTYgMTY5LjI2Qzc4Ljg4NiAyMjUuNDEyIDc4Ljg5NCAyODYuNjY0IDk4LjA3NCAzNDIuODQyTDE1MS4zMTggMzM3LjUyN0MxNjEuOTEgMzM2LjM4OSAxNzIuMTAzIDM0Mi41MzUgMTc2LjA0OSAzNTIuNDk4TDIwOS43NzMgNDM2LjgyMkMyMTQuMDc0IDQ0Ny42NTQgMjA5Ljk1MSA0NjAuMDIzIDIwMC4xNzYgNDY2LjEyN0wxMzIuNjkxIDUwOC4zMTJDMTIzLjE2MiA1MTQuMjg5IDExMC45MiA1MTIuODk1IDEwMi45MzcgNTA0LjkxQy0zNC4zMDkgMzY3LjY2NiAtMzQuMzE5IDE0NC4zNDIgMTAyLjk0NSA3LjA4QzExMC45MiAtMC44OTUgMTIzLjE2MiAtMi4yODkgMTMyLjY4MyAzLjY5N0wyMDAuMTUgNDUuODYzQzIwOS45OTQgNTIgMjE0LjA0OSA2NC4zNTMgMjA5Ljc5OSA3NS4yMzRMMTc2LjA0OSAxNTkuNjE5QzE3Mi4wNTIgMTY5LjUzMSAxNjEuOTYxIDE3NS42MjcgMTUxLjMzNCAxNzQuNTU3TDk4LjA1NiAxNjkuMjZaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const PhoneVolume: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M284.189 181.922C273.908 173.578 258.783 175.047 250.439 185.328C242.033 195.578 243.533 210.703 253.814 219.109C265.127 228.359 271.627 241.797 271.627 255.984C271.627 270.172 265.127 283.609 253.814 292.859C243.533 301.266 242.033 316.391 250.439 326.641C255.158 332.453 262.064 335.453 269.002 335.453C274.345 335.453 279.752 333.672 284.189 330.047C306.72 311.609 319.627 284.641 319.627 255.984S306.72 200.359 284.189 181.922ZM344.752 107.984C334.533 99.641 319.408 101.078 310.97 111.328C302.564 121.578 304.064 136.703 314.314 145.109C348.189 172.891 367.627 213.297 367.627 255.984S348.189 339.078 314.314 366.859C304.064 375.266 302.564 390.391 310.97 400.641C315.72 406.422 322.595 409.422 329.533 409.422C334.908 409.422 340.283 407.641 344.752 403.984C389.783 367.078 415.627 313.109 415.627 255.984S389.783 144.891 344.752 107.984ZM406.002 33.141C395.783 24.797 380.658 26.266 372.22 36.484C363.814 46.734 365.314 61.859 375.564 70.266C431.533 116.109 463.627 183.797 463.627 255.984S431.533 395.859 375.564 441.703C365.314 450.109 363.814 465.234 372.22 475.484C376.97 481.266 383.845 484.266 390.783 484.266C396.158 484.266 401.533 482.484 406.002 478.828C473.127 423.828 511.627 342.609 511.627 255.984S473.127 88.141 406.002 33.141Z" />
            <path d="M98.056 169.26C78.886 225.412 78.894 286.664 98.074 342.842L151.318 337.527C161.91 336.389 172.103 342.535 176.049 352.498L209.773 436.822C214.074 447.654 209.951 460.023 200.176 466.127L132.691 508.312C123.162 514.289 110.92 512.895 102.937 504.91C-34.309 367.666 -34.319 144.342 102.945 7.08C110.92 -0.895 123.162 -2.289 132.683 3.697L200.15 45.863C209.994 52 214.049 64.353 209.799 75.234L176.049 159.619C172.052 169.531 161.961 175.627 151.334 174.557L98.056 169.26Z" />
    </Icon>
);

export default PhoneVolume;